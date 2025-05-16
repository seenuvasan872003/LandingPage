/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { Star, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Highlight component for styling text
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
const TestimonialSection = () => {
  const [showReviews, setShowReviews] = useState(true);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const nameInputRef = useRef(null);

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
      profileImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: <>Good and <Highlight>affordable alternative to official WhatsApp Business API</Highlight>. Uptime is good compared to similar services.</>,
      name: "Ranjid E.",
      company: "GlobalConnect",
      rating: 4,
      profileImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: <><Highlight>Great tool to send marketing campaigns over WhatsApp</Highlight>, would recommend for anyone in need of a reliable WhatsApp API.</>,
      name: "Daniel M.",
      company: "CodeCraft",
      rating: 5,
      profileImage: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: <>The <Highlight>integration was seamless</Highlight> and the documentation is top-notch. Our team was able to implement WhatsApp messaging features in record time.</>,
      name: "Sarah K.",
      company: "DevInsight",
      rating: 4,
      profileImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: <><Highlight>Customer support is exceptional</Highlight>. Any issues we encountered were resolved quickly, and the team is always responsive.</>,
      name: "Michael R.",
      company: "AppNexus",
      rating: 5,
      profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: <>The <Highlight>analytics dashboard</Highlight> provides valuable insights into our messaging campaigns. It's been crucial for optimizing our communication strategy.</>,
      name: "Lisa T.",
      company: "MarketEdge",
      rating: 4,
      profileImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const ReviewForm = () => {
    useEffect(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }, []);

    return (
      <motion.div
        className="max-w-2xl mx-auto"
      >
        <button
          onClick={() => {
            setShowReviews(true);
            setRating(0);
            setHoveredRating(0);
          }}
          className="flex items-center text-green-500 hover:text-green-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Reviews
        </button>
        
        <form className="space-y-6">
          <div>
            <label className="block text-white mb-2">Your Name</label>
            <input
              ref={nameInputRef}
              type="text"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label className="block text-white mb-2">Company Name</label>
            <input
              type="text"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
              placeholder="Your company name"
            />
          </div>
          
          <div>
            <label className="block text-white mb-2">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  // onMouseEnter={() => setHoveredRating(star)}
                  // onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                  className="transition-colors"
                >
                  <Star 
                    className={`w-6 h-6 ${
                      star <= (hoveredRating || rating)
                        ? 'text-green-500 fill-green-500'
                        : 'text-zinc-500'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-white mb-2">Your Review</label>
            <textarea
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500 h-32"
              placeholder="Share your experience..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-green-500/20"
          >
            Submit Review
          </button>
        </form>
      </motion.div>
    );
  };

  return (
    <section className="bg-black py-20 px-4 md:py-32 my-2.5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Star className="w-6 h-6 text-green-500 fill-green-500" />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white text-center mb-6 tracking-tight"
        >
          See <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">why</span> our customers are excited
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto"
        >
          Trusted by 5,000+ developers worldwide to elevate their apps with WhatsApp integration
        </motion.p>

        <AnimatePresence mode="wait">
          {showReviews ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    {...testimonial}
                    index={index}
                  />
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center mt-12"
              >
                <button
                  onClick={() => setShowReviews(false)}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-green-500/20"
                >
                  Share Your Experience
                </button>
              </motion.div>
            </>
          ) : (
            <ReviewForm />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialSection;