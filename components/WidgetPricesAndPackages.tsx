"use client";

import React, { useEffect, useState } from 'react';

interface Plan {
  id: string;
  name: string;
  price: string;
  description?: string;
  interval?: string;
  features?: string[];
}

interface WidgetPricesAndPackagesProps {
  userId?: string;
  className?: string;
}

export const WidgetPricesAndPackages: React.FC<WidgetPricesAndPackagesProps> = ({
  userId,
  className = ""
}) => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      setError(null);
      let fetchedAccountId = null;

      // Try to get account ID from user session first
      try {
        const userResponse = await fetch('/api/auth/user');
        if (userResponse.ok) {
          const userData = await userResponse.json();
          fetchedAccountId = userData.stripeAccountId;
        }
      } catch {}

      // If no account ID from session, try the get-account API
      if (!fetchedAccountId) {
        try {
          const accountResponse = await fetch('/api/Stripe/get-account', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId })
          });
          if (accountResponse.ok) {
            const accountData = await accountResponse.json();
            fetchedAccountId = accountData.accountId;
          }
        } catch {}
      }

      // Fallback to hardcoded for development
      if (!fetchedAccountId) {
        fetchedAccountId = 'acct_1Rm8mbP7dZXG9eil';
      }

      setAccountId(fetchedAccountId);

      try {
        const response = await fetch('/api/Stripe/list_plans', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ accountId: fetchedAccountId })
        });
        if (!response.ok) throw new Error('Failed to fetch plans');
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setPlans(data.plans || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load plans');
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [userId]);

  // Handler for checkout button
  const handleCheckout = async (planId: string) => {
    setCheckoutLoading(planId);
    try {
      const response = await fetch('/api/Stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId,
          accountId, // <-- make sure you have this from your plans fetch
          successUrl: window.location.origin + '/success',
          cancelUrl: window.location.origin + '/cancel'
        })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Unable to start checkout.');
      }
    } catch {
      alert('Unable to start checkout.');
    } finally {
      setCheckoutLoading(null);
    }
  };

  return (
    <div className={`w-[360px] bg-white rounded-2xl p-8 relative ${className}`} 
         style={{ border: '2px solid #029A80' }}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <img 
          src="/Storefront/Doctor Widget/Pricing And Packages/PricingAndPackages.svg" 
          alt="Pricing" 
          className="w-5 h-5 mr-2"
        />
        <h3 className="text-black font-sans text-xl font-bold">
          Pricing & Packages
        </h3>
      </div>

      {/* Plans Section */}
      <div className="mb-6">
        <h4 className="text-black font-sans text-lg font-semibold mb-4">
          {loading ? "Loading Plans..." : "Available Plans"}
        </h4>
        {loading && (
          <div className="space-y-3">
            {[1,2,3].map(i => (
              <div key={i} className="h-16 bg-gray-100 rounded-lg animate-pulse" />
            ))}
          </div>
        )}
        {error && (
          <div className="text-red-600 text-sm mb-2">{error}</div>
        )}
        {!loading && !error && plans.length === 0 && (
          <div className="text-gray-500 text-sm">No plans available.</div>
        )}
        <div className="space-y-4">
          {plans.map((plan, index) => (
            <div key={plan.id} className="p-4 rounded-lg" style={{ backgroundColor: '#E0F8F2' }}>
              {/* Plan Header */}
              <div className="flex items-center justify-between mb-2">
                <h5 className="text-gray-700 font-sans text-base font-semibold">
                  {plan.name}
                </h5>
                <span className="text-black font-sans text-base font-bold">
                  {plan.price}
                  {plan.interval ? <span className="text-gray-500 text-xs ml-1">/{plan.interval}</span> : null}
                </span>
              </div>
              {plan.description && (
                <div className="text-gray-500 text-xs mb-2">{plan.description}</div>
              )}
              {/* Plan Features */}
              {plan.features && plan.features.length > 0 && (
                <div className="space-y-2 mt-2">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 font-sans text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {/* Checkout Button */}
              <button
                className="mt-4 w-full bg-[#029A80] hover:bg-[#027965] text-white font-semibold py-2 px-4 rounded transition-colors disabled:opacity-60"
                onClick={() => handleCheckout(plan.id)}
                disabled={checkoutLoading === plan.id}
              >
                {checkoutLoading === plan.id ? "Redirecting..." : "Checkout"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};