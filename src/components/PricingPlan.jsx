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
    <div 
      className="flex flex-col m-3 max-md:ml-0 max-md:w-full" 
      
    >
      <div className="flex flex-col items-start py-8 pr-7 pl-2.5 mx-4 w-full rounded-3xl bg-cyan-950 max-md:pr-5 max-md:mt-5">
        <div className="flex flex-col max-w-full w-[179px]">
          <h2 className="gap-2.5 self-start p-2.5 text-base font-semibold text-white">
            {title}
          </h2>
          
          
          <div className="p-2.5 text-white">
            <span className="text-xl font-bold">${price}</span>
            <span className="text-sm ml-1">/month</span>
          </div>
          
          <ul className="p-2.5 w-full text-xs font-medium text-white">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                <span className="mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {error && (
          <div className="px-4 py-2 mt-2 text-xs text-red-500 bg-red-100 rounded-md">
            {error}
          </div>
        )}

        <button 
          className={`gap-2.5 self-stretch px-11 py-3.5 mt-7 ml-4 text-xs font-semibold 
            bg-teal-600 rounded-xl min-h-[42px] text-zinc-50 max-md:px-5 max-md:ml-2.5
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