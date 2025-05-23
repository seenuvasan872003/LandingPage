/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Star, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard'; 

// const TestimonialCard = ({ quote, name, company, rating, profileImage, theme, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 }}
//       className={`rounded-2xl p-6 shadow-lg border ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-zinc-900 border-zinc-700'}`}
//     >
//       <div className="flex items-center gap-4 mb-4">
//         <img src={profileImage} alt={name} className="w-12 h-12 rounded-full object-cover" />
//         <div>
//           <h4 className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{name}</h4>
//           <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{company}</p>
//         </div>
//       </div>
//       <div className="flex gap-1 mb-3">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <Star key={star} className={`w-5 h-5 ${star <= rating ? 'text-green-500 fill-green-500' : theme === 'light' ? 'text-gray-300' : 'text-zinc-600'}`} />
//         ))}
//       </div>
//       <p className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-300'}`}>{quote}</p>
//     </motion.div>
//   );
// };

const TestimonialSection = ({ theme = 'dark' }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', review: '', rating: 0 });
  const [hoveredRating, setHoveredRating] = useState(0);
  const nameInputRef = useRef(null);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setFormData({ name: '', company: '', review: '', rating: 0 });
    setIsFormVisible(false);
  };

  const Highlight = ({ children }) => (
    <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-semibold">
      {children}
    </span>
  );

  const testimonials = [
    {
      quote: <>Overall <Highlight>we are very happy with the reliability</Highlight> and general service. We use this to communicate with our customers and automate their requests over WhatsApp.</>,
      name: "Dan M.",
      company: "TechSolutions",
      rating: 5,
      profileImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
      quote: <>Good and <Highlight>affordable alternative to official WhatsApp Business API</Highlight>. Uptime is good compared to similar services.</>,
      name: "Ranjid E.",
      company: "GlobalConnect",
      rating: 4,
      profileImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      quote: <><Highlight>Great tool to send marketing campaigns over WhatsApp</Highlight>, would recommend for anyone in need of a reliable WhatsApp API.</>,
      name: "Sarah W.",
      company: "DevSync",
      rating: 5,
      profileImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      quote: <>The <Highlight>integration was seamless</Highlight> and the documentation is top-notch. Our team was able to implement WhatsApp messaging features in record time.</>,
      name: "Leon T.",
      company: "BrightApps",
      rating: 4,
      profileImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      quote: <><Highlight>Customer support is exceptional</Highlight>. Any issues we encountered were resolved quickly, and the team is always responsive.</>,
      name: "Aisha K.",
      company: "SnapTech",
      rating: 5,
      profileImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      quote: <>The <Highlight>analytics dashboard</Highlight> provides valuable insights into our messaging campaigns. It's been crucial for optimizing our communication strategy.</>,
      name: "James L.",
      company: "AppVibe",
      rating: 5,
      profileImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
  ];

  const inputStyle = theme === 'light'
    ? 'bg-gray-100 border-gray-300 text-gray-800'
    : 'bg-zinc-800 border-zinc-700 text-white';

  return (
    <section ref={formRef} className={`${theme === 'light' ? 'bg-gray-100' : 'bg-black'} py-20 px-4 md:py-32`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-green-500 fill-green-500" />
            ))}
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>See <Highlight>why</Highlight> our customers are excited</h2>
          <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mt-4`}>Trusted by 5,000+ developers worldwide to elevate their apps with WhatsApp integration</p>
        </motion.div>

        {!isFormVisible ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} {...t} theme={theme} index={i} />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <button
                onClick={() => {
                  setIsFormVisible(true);
                  setTimeout(() => {
                    formRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                Share Your Experience
              </button>

            </div>
          </>
        ) : (
          <motion.div className="max-w-2xl mx-auto" >
            <button
              onClick={() => setIsFormVisible(false)}
              className="flex items-center text-green-500 hover:text-green-400 mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Reviews
            </button>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block mb-1 font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Your Name</label>
                <input
                  ref={nameInputRef}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-green-500 ${inputStyle}`}
                />
              </div>
              <div>
                <label className={`block mb-1 font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-green-500 ${inputStyle}`}
                />
              </div>
              <div>
                <label className={`block mb-1 font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => handleRatingChange(star)}
                    >
                      <Star className={`w-6 h-6 ${star <= (hoveredRating || formData.rating) ? 'text-green-500 fill-green-500' : theme === 'light' ? 'text-gray-300' : 'text-zinc-500'}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className={`block mb-1 font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Your Review</label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-green-500 ${inputStyle}`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-green-500/20"
              >
                Submit Review
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
