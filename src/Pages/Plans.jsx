import React from 'react';
import 'animate.css';
import { useSpring, animated } from '@react-spring/web';
import toast, { Toaster } from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const plans = [
  {
    id: 1,
    name: 'Basic Plan',
    price: '$9/month',
    features: ['Access to core features', 'Email Support', 'Basic Analytics'],
  },
  {
    id: 2,
    name: 'Pro Plan',
    price: '$29/month',
    features: ['Everything in Basic', 'Priority Support', 'Advanced Analytics'],
  },
  {
    id: 3,
    name: 'Enterprise Plan',
    price: '$99/month',
    features: ['All Pro Features', 'Dedicated Manager', '24/7 Support'],
  },
];

const PlanCard = ({ plan }) => {
  const [style, api] = useSpring(() => ({
    transform: 'scale(1)',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
  }));

  const handleSubscribe = () => {
    toast.success(`You selected ${plan.name}!`);
  };

  return (
    <animated.div
      className="bg-white rounded-2xl p-6 text-center shadow-md animate__animated animate__fadeInUp hover:shadow-xl transition"
      onMouseEnter={() =>
        api.start({ transform: 'scale(1.05)', boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' })
      }
      onMouseLeave={() =>
        api.start({ transform: 'scale(1)', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' })
      }
      style={style}
    >
      <h2 className="text-2xl font-bold mb-2 text-blue-700">{plan.name}</h2>
      <p className="text-xl font-semibold mb-4 text-blue-950">{plan.price}</p>
      <ul className="mb-4 space-y-1 text-gray-600">
        {plan.features.map((feature, i) => (
          <li key={i}>✅ {feature}</li>
        ))}
      </ul>
      <button
        onClick={handleSubscribe}
        className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
      >
        Subscribe
      </button>
    </animated.div>
  );
};

const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-5">
      <Toaster />
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700 animate__animated animate__fadeInDown">
        Plans & Pricing
      </h1>

      {/* Responsive grid layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Swiper for mobile view */}
      <div className="block md:hidden">
        <Swiper spaceBetween={20} slidesPerView={1}>
          {plans.map((plan) => (
            <SwiperSlide key={plan.id}>
              <PlanCard plan={plan} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Plans;
