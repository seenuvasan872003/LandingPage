/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { Star, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TestimonialCard from './TestimonialCard'; 

const TestimonialSection = ({ theme = 'dark' }) => {
  const { t, i18n } = useTranslation();
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

  // Get testimonials from translation with highlights
  const getTestimonials = () => {
    const testimonialData = t('Homepage.TestimonialSection.testimonials', { returnObjects: true });
    
    return testimonialData.map((testimonial, index) => {
      const profileImages = [
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      ];

      const ratings = [5, 4, 5, 4, 5, 5];

      // Create quote with highlight
      const quote = testimonial.quote;
      const highlight = testimonial.highlight;
      
      const createQuoteWithHighlight = () => {
        if (quote.includes(highlight)) {
          const parts = quote.split(highlight);
          return (
            <>
              {parts[0]}<Highlight>{highlight}</Highlight>{parts[1]}
            </>
          );
        }
        return quote;
      };

      return {
        quote: createQuoteWithHighlight(),
        name: testimonial.name,
        company: testimonial.company,
        rating: ratings[index],
        profileImage: profileImages[index]
      };
    });
  };

  const testimonials = getTestimonials();

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
          <h2 className={` ${ i18n.language === 'ta'  ? 'text-2xl md:text-5xl'  : 'text-4xl md:text-6xl'} font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
            {t('Homepage.TestimonialSection.header.title').split(t('Homepage.TestimonialSection.header.highlightWord')).map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && <Highlight>{t('Homepage.TestimonialSection.header.highlightWord')}</Highlight>}
              </React.Fragment>
            ))}
          </h2>
          <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} mt-4`}>
            {t('Homepage.TestimonialSection.header.subtitle')}
          </p>
        </motion.div>

        {!isFormVisible ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} {...testimonial} theme={theme} index={i} />
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
                {t('Homepage.TestimonialSection.button.shareExperience')}
              </button>
            </div>
          </>
        ) : (
          <motion.div className="max-w-2xl mx-auto" >
            <button
              onClick={() => setIsFormVisible(false)}
              className="flex items-center text-green-500 hover:text-green-400 mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" /> {t('Homepage.TestimonialSection.button.backToReviews')}
            </button>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block mb-1 font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                  {t('Homepage.TestimonialSection.form.labels.name')}
                </label>
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
                <label className={`block mb-1 font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                  {t('Homepage.TestimonialSection.form.labels.company')}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-green-500 ${inputStyle}`}
                />
              </div>
              <div>
                <label className={`block mb-1 font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                  {t('Homepage.TestimonialSection.form.labels.rating')}
                </label>
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
                <label className={`block mb-1 font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                  {t('Homepage.TestimonialSection.form.labels.review')}
                </label>
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
                {t('Homepage.TestimonialSection.button.submitReview')}
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;