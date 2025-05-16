import React from 'react';
import { Bot, MessageSquare, Brain, Clock, Box } from 'lucide-react';

function AIChatDemo() {
  const messages = [
    { id: 1, text: "Hey! How can I help you today?", isUser: false, timestamp: "9:41 AM" },
    { id: 2, text: "I need help with my recent order", isUser: true, timestamp: "9:42 AM" },
    { id: 3, text: "Of course! Could you please provide your order number?", isUser: false, timestamp: "9:42 AM" },
    { id: 4, text: "#ORD-12345", isUser: true, timestamp: "9:43 AM" },
    { id: 5, text: "Thank you! I can see your order for the wireless headphones. What specific help do you need?", isUser: false, timestamp: "9:43 AM" },
    { id: 6, text: "I want to know the delivery status", isUser: true, timestamp: "9:44 AM" },
    { id: 7, text: "Your order is currently out for delivery and should arrive by 5 PM today. Would you like me to send you the tracking link?", isUser: false, timestamp: "9:44 AM" },
  ];

  const features = [
    {
      icon: Box,
      title: 'Natural Language Understanding',
      description: 'Our AI understands customer queries in natural language and responds contextually.',
    },
    {
      icon: Brain,
      title: 'Self-Improving',
      description: 'The more conversations your AI agent has, the smarter it gets, continuously learning from interactions.',
    },
    {
      icon: MessageSquare,
      title: 'Seamless Handoff',
      description: 'When a query requires human intervention, the AI smoothly transfers the conversation to your team.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry with round-the-clock automated responses.',
    },
  ];

  return (
    <div className="min-h-screen bg-black my-2.5">
      {/* Header Section */}
      <div className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            AI That Talks to Your Customers 24/7
          </h1>
          <p className="text-xl text-gray-300">
            Our intelligent chatbot understands customer needs and provides fast, accurate
            responses automatically.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Features Section */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-black">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Demo Section */}
          <div className="bg-black max-h-[800px] rounded-xl shadow-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gray-700 p-4 flex items-center">
              <div className="p-2 rounded-full bg-black mr-3">
                <Bot className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-medium text-white">AI Support</h3>
            </div>

            {/* Chat Messages */}
            <div className="p-4 h-[600px] overflow-y-auto bg-[#111827]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.isUser
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs text-gray-300 mt-1 text-right">
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-gray-700 border-t border-gray-600">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 rounded-full px-4 py-2 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
                <button className="ml-2 p-2 rounded-full bg-green-600 text-white hover:bg-green-700">
                  <MessageSquare className="h-5 w-5" />
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