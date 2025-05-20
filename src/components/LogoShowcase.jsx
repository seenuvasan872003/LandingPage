import React from 'react';
import { Star, BarChart2, Activity, Zap, Image, Compass, Map, PieChart, Heart, Cpu, Database, Cloud, Globe, Shield } from 'lucide-react';

const LogoShowcase = ({ theme }) => {
  // Reusable logo component
  const Logo = ({ icon, text, color = "text-gray-400" }) => (
    <div className="mx-8 transition-all duration-300 hover:scale-110 cursor-pointer group">
      <div className="flex items-center gap-2">
        <div className={`${color} group-hover:text-green-400 transition-colors duration-300`}>
          {icon}
        </div>
        <span className={`font-bold text-xl ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} group-hover:text-green-400 transition-colors duration-300`}>
          {text}
        </span>
      </div>
    </div>
  );

  // Meta and Rating section
  const TopSection = () => (
    <div className="flex justify-center items-center gap-8 mb-16">
      <div className="flex items-center gap-2">
        <div className="text-green-400">
          <Activity size={24} className="stroke-[3]" />
        </div>
        <div className={`font-bold ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
          Meta Business<br />
          <span className={`font-normal ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Partners</span>
        </div>
      </div>

      <div className={`flex items-center gap-2 ${theme === 'light' ? 'bg-gray-100 border-gray-200' : 'bg-gray-900 border-gray-800'} px-4 py-2 rounded-lg shadow-lg border`}>
        <div className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>4.7/5</div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map(i => (
            <Star
              key={i}
              size={16}
              className={`text-orange-400 fill-orange-400 ${i === 5 ? 'opacity-70' : ''}`}
            />
          ))}
        </div>
        <div className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} uppercase font-semibold tracking-wider`}>
          Rating on G2
        </div>
      </div>
    </div>
  );

  const firstRowLogos = [
    { icon: <Database size={24} />, text: "DataSync", color: "text-green-400" },
    { icon: <Cloud size={24} />, text: "CloudFlow", color: "text-blue-400" },
    { icon: <Shield size={24} />, text: "SecureX", color: "text-purple-400" },
    { icon: <Globe size={24} />, text: "GlobalTech", color: "text-cyan-400" },
    { icon: <PieChart size={24} />, text: "Analytics", color: "text-orange-400" },
    { icon: <Map size={24} />, text: "MapTech", color: "text-green-400" },
  ];

  const secondRowLogos = [
    { icon: <Heart size={24} />, text: "HealthTech", color: "text-red-400" },
    { icon: <Cpu size={24} />, text: "TechPro", color: "text-indigo-400" },
    { icon: <Zap size={24} />, text: "PowerHub", color: "text-yellow-400" },
    { icon: <Image size={24} />, text: "PixelPro", color: "text-pink-400" },
    { icon: <Compass size={24} />, text: "NaviTech", color: "text-teal-400" },
    { icon: <BarChart2 size={24} />, text: "DataViz", color: "text-violet-400" },
  ];

  return (
    <div className={`py-16 overflow-hidden ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} mb-4 my-2.5`}>
      <div className="container mx-auto mb-12 px-4 text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'} mb-1`}>
          Trusted by 5000+ brands across 40+ countries
        </h2>
      </div>

      <TopSection />

      {/* First row - moving right to left */}
      <div className="relative mb-12">
        <div className="animate-marquee flex items-center">
          {[...firstRowLogos, ...firstRowLogos].map((logo, index) => (
            <Logo key={index} {...logo} />
          ))}
        </div>
      </div>

      {/* Second row - moving left to right */}
      <div className="relative">
        <div className="animate-marquee-reverse flex items-center">
          {[...secondRowLogos, ...secondRowLogos].map((logo, index) => (
            <Logo key={index} {...logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;