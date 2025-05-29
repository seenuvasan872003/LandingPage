/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  
  return (
    <div className="relative text-center mb-24 px-4 mt-2">
      <div className="absolute inset-0 -top-20 bg-gradient-to-b from-emerald-500/20 via-emerald-500/5 to-transparent blur-3xl" />
      <div className="relative">
        <h1 className={`text-2xl md:text-4xl font-bold ${theme === 'light' ? 'text-black' : 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500'} mb-6 tracking-tight`}>
          {t('Homepage.features.header.title')}
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {t('Homepage.features.header.description')}
        </p>
      </div>
    </div>
  );
};

const Features = ({ theme = 'dark' }) => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: MessageSquare,
      title: t('Homepage.features.items.realTimeChat.title'),
      description: t('Homepage.features.items.realTimeChat.description')
    },
    {
      icon: Bot,
      title: t('Homepage.features.items.aiChatbot.title'),
      description: t('Homepage.features.items.aiChatbot.description')
    },
    {
      icon: FileText,
      title: t('Homepage.features.items.templateMessaging.title'),
      description: t('Homepage.features.items.templateMessaging.description')
    },
    {
      icon: Tag,
      title: t('Homepage.features.items.customerFlow.title'),
      description: t('Homepage.features.items.customerFlow.description')
    },
    {
      icon: Radio,
      title: t('Homepage.features.items.broadcastMessages.title'),
      description: t('Homepage.features.items.broadcastMessages.description')
    },
    {
      icon: ShoppingBag,
      title: t('Homepage.features.items.catalogSync.title'),
      description: t('Homepage.features.items.catalogSync.description')
    }
  ];

  return (
    <>
      <div className={`relative bg-${theme === 'light' ? 'white' : 'black'} ${theme === 'light' ? 'text-black' : 'text-white'} mt-2.5 mb-2 py-2.5 my-2.5`}>
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