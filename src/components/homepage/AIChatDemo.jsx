import React from 'react';
import { Bot, MessageSquare, Brain, Clock, Box } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function AIChatDemo({ theme = 'dark' }) {
  const { t, i18n } = useTranslation();

  const messages = [
    { id: 1, text: t('Homepage.AIChatDemo.chat.messages.greeting'), isUser: false, timestamp: "9:41 AM" },
    { id: 2, text: t('Homepage.AIChatDemo.chat.messages.orderHelp'), isUser: true, timestamp: "9:42 AM" },
    { id: 3, text: t('Homepage.AIChatDemo.chat.messages.orderNumber'), isUser: false, timestamp: "9:42 AM" },
    { id: 4, text: t('Homepage.AIChatDemo.chat.messages.orderNumberReply'), isUser: true, timestamp: "9:43 AM" },
    { id: 5, text: t('Homepage.AIChatDemo.chat.messages.orderDetails'), isUser: false, timestamp: "9:43 AM" },
    { id: 6, text: t('Homepage.AIChatDemo.chat.messages.deliveryStatus'), isUser: true, timestamp: "9:44 AM" },
    { id: 7, text: t('Homepage.AIChatDemo.chat.messages.deliveryInfo'), isUser: false, timestamp: "9:44 AM" },
  ];

  const features = [
    {
      icon: Box,
      title: t('Homepage.AIChatDemo.features.naturalLanguage.title'),
      description: t('Homepage.AIChatDemo.features.naturalLanguage.description'),
    },
    {
      icon: Brain,
      title: t('Homepage.AIChatDemo.features.selfImproving.title'),
      description: t('Homepage.AIChatDemo.features.selfImproving.description'),
    },
    {
      icon: MessageSquare,
      title: t('Homepage.AIChatDemo.features.seamlessHandoff.title'),
      description: t('Homepage.AIChatDemo.features.seamlessHandoff.description'),
    },
    {
      icon: Clock,
      title: t('Homepage.AIChatDemo.features.availability.title'),
      description: t('Homepage.AIChatDemo.features.availability.description'),
    },
  ];

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-black'} pt-1.5 my-2.5`}>
      {/* Header Section */}
      <div className={`${theme === 'light' ? 'bg-white' : 'bg-black'} ${theme === 'light' ? 'text-black' : 'text-white'} py-6 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={` ${ i18n.language === 'ta'  ? 'text-2xl'  : 'text-3xl'} font-bold mb-3 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            {t('Homepage.AIChatDemo.hero.title')}
          </h1>
          <p className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            {t('Homepage.AIChatDemo.hero.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features Section */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`p-1.5 rounded-lg ${theme === 'light' ? 'bg-gray-100' : 'bg-black'}`}>
                  <feature.icon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-black' : 'text-white'} mb-0.5`}>
                    {feature.title}
                  </h3>
                  <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm`}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Demo Section */}
          <div className={`${theme === 'light' ? 'bg-gray-50' : 'bg-black'} rounded-xl shadow-lg overflow-hidden`}>
            {/* Chat Header */}
            <div className="bg-gray-700 p-3 flex items-center">
              <div className="p-1.5 rounded-full bg-black mr-2">
                <Bot className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-lg font-medium text-white">{t('Homepage.AIChatDemo.chat.title')}</h3>
            </div>

            {/* Chat Messages */}
            <div className={`p-3 ${theme === 'light' ? 'bg-gray-100' : 'bg-[#111827]'}`}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-2`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-2 ${
                      message.isUser
                        ? 'bg-green-600 text-white'
                        : theme === 'light' 
                          ? 'bg-gray-300 text-gray-800' 
                          : 'bg-gray-700 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs ${message.isUser ? 'text-gray-300' : theme === 'light' ? 'text-gray-600' : 'text-gray-300'} mt-0.5 text-right`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-gray-700 border-t border-gray-600">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder={t('Homepage.AIChatDemo.chat.placeholder')}
                  className="flex-1 rounded-full px-3 py-1.5 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
                <button className="ml-2 p-1.5 rounded-full bg-green-600 text-white hover:bg-green-700">
                  <MessageSquare className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIChatDemo;