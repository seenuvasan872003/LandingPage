/* eslint-disable no-unused-vars */
import React from 'react';
import { MessageSquare, Bot, FileText, Tag, Radio, ShoppingBag } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, theme }) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      <div className="relative flex items-start gap-6 p-6">
        <div className="flex-shrink-0">
          <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-500/20">
            <Icon size={28} strokeWidth={1.5} />
          </div>
        </div>
        <div className="flex-1 text-left">
          <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} mb-2 group-hover:text-emerald-400 transition-colors duration-300`}>
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Header = ({ theme }) => {
  return (
    <div className="relative text-center mb-24 px-4 mt-2">
      <div className="absolute inset-0 -top-20 bg-gradient-to-b from-emerald-500/20 via-emerald-500/5 to-transparent blur-3xl" />
      <div className="relative">
        <h1 className={`text-2xl md:text-4xl font-bold ${theme === 'light' ? 'text-black' : 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500'} mb-6 tracking-tight`}>
          Everything You Need to Automate WhatsApp
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Powerful tools to streamline your customer communications and boost engagement.
        </p>
      </div>
    </div>
  );
};

const Features = ({ theme = 'dark' }) => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Real-time Chat',
      description: 'Engage with customers in real-time through WhatsApp with a unified inbox for your team.'
    },
    {
      icon: Bot,
      title: 'AI Chatbot',
      description: 'Our AI handles customer inquiries 24/7, learning from conversations to improve over time.'
    },
    {
      icon: FileText,
      title: 'Template Messaging',
      description: 'Create and send approved message templates at scale with personalization options.'
    },
    {
      icon: Tag,
      title: 'Customer Flow',
      description: 'Design custom workflows to guide customers through personalized journeys based on their interactions and preferences.'
    },
    {
      icon: Radio,
      title: 'Broadcast Messages',
      description: 'Send targeted announcements, promotions, and updates to specific customer segments.'
    },
    {
      icon: ShoppingBag,
      title: 'Catalog Sync',
      description: 'Seamlessly integrate your product catalog with Shopify or WooCommerce.'
    }
  ];

  return (
    <>
      <div className={`relative bg-${theme === 'light' ? 'white' : 'black'} ${theme === 'light' ? 'text-black' : 'text-white'} mt-2.5 py-2.5 my-2.5`}>
        <Header theme={theme} />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-transparent opacity-20 blur-3xl -z-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;