import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PLAN_TYPES = {
  BASIC: 'basic',
  PREMIUM: 'premium',
  ENTERPRISE: 'enterprise'
};

const PLAN_PRICES = {
  [PLAN_TYPES.BASIC]: 29.99,
  [PLAN_TYPES.PREMIUM]: 49.99,
  [PLAN_TYPES.ENTERPRISE]: 99.99
};

const PricingPlan = ({
  title,
  features,
  planType = PLAN_TYPES.BASIC,
  price = PLAN_PRICES[PLAN_TYPES.BASIC]
}) => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleStartPlan = async () => {
    try {
      setIsProcessing(true);
      setError(null);

      const paymentSession = {
        planType,
        price,
        currency: 'USD',
        metadata: {
          planTitle: title,
          features: features.join(', ')
        }
      };

      navigate('/payment-mode', {
        state: {
          session: paymentSession,
          returnUrl: window.location.href
        }
      });
    } catch (err) {
      setError('Unable to process request. Please try again.');
      console.error('Payment initiation error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col m-3 max-md:w-full max-md:mx-0 max-sm:mt-4">
      <div className="flex flex-col items-start py-8 px-5 rounded-3xl bg-cyan-950 w-full max-md:px-4">
        <div className="flex flex-col w-full">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <div className="text-white mt-2">
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-sm ml-1">/month</span>
          </div>
          <ul className="mt-4 text-white text-sm space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {error && (
          <div className="mt-4 text-xs text-red-500 bg-red-100 rounded-md p-2">
            {error}
          </div>
        )}

        <button
          className={`mt-6 w-full py-3 text-sm font-semibold bg-teal-600 text-white rounded-lg 
                      ${isProcessing ? 'opacity-75 cursor-not-allowed' : 'hover:bg-teal-700'}
                     `}
          onClick={handleStartPlan}
          disabled={isProcessing}
        >
          {isProcessing ? 'PROCESSING...' : 'START PLAN NOW'}
        </button>
      </div>
    </div>
  );
};

export default PricingPlan;
