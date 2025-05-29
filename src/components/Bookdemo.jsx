import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const BookDemo = ({ theme = 'dark' }) => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    message: '',
    dateTime: '',
  });

  const [date, setDate] = useState('');
  const [hours, setHours] = useState('12');
  const [minutes, setMinutes] = useState('00');
  const [period, setPeriod] = useState('AM');
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init("1v191cwFPow0zxRlB");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (name) => {
    setFocused(name);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Prepare the date time string
    const dateTime = `${date} ${hours}:${minutes} ${period}`;
    
    // Prepare email template parameters
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      message: formData.message,
      dateTime: dateTime,
      to_email: formData.email, // To send confirmation to user
    };

    try {
      // Send notification to your email
      await emailjs.send(
        'service_wu399ir', // replace with your EmailJS service ID
        'template_mo42pru', // replace with your template ID for admin notification
        templateParams
      );
      
      // Send confirmation to user
      await emailjs.send(
        'service_wu399ir', // replace with your EmailJS service ID
        'template_wet5tpi', // replace with your template ID for user confirmation
        templateParams
      );
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        message: '',
        dateTime: '',
      });
      setDate('');
      setHours('12');
      setMinutes('00');
      setPeriod('AM');
      
      // Show success toast notification
      toast.success(t('bookDemo.toast.success'), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme === 'light' ? 'light' : 'dark',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Show error toast notification
      toast.error(t('bookDemo.toast.error'), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: theme === 'light' ? 'light' : 'dark',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container ${theme === 'light' ? 'bg-gray-100' : 'bg-black'} mx-auto px-4 py-16 relative z-10`}>
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className={`text-6xl font-bold ${theme === 'light' ? 'bg-gradient-to-r from-gray-800 to-gray-600' : 'bg-gradient-to-r from-white to-gray-400'} bg-clip-text text-transparent mb-4`}>
          {t('bookDemo.header.title')}
        </h1>
        <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-xl max-w-2xl mx-auto`}>
          {t('bookDemo.header.subtitle')}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Contact Info Section */}
        <div className={`lg:w-1/2 w-full animate-fade-in p-10 ${theme === 'light' ? 'bg-white/80' : 'bg-black/30'} backdrop-blur-md rounded-2xl border ${theme === 'light' ? 'border-gray-200' : 'border-white/10'} shadow-[0_0_15px_rgba(0,0,0,0.07)]`}>
          <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-8`}>
            {t('bookDemo.contactInfo.title')}
          </h2>
          <div className="space-y-8">
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 transition-all duration-300">
                <Phone className="text-emerald-400" size={20} />
              </div>
              <div>
                <h3 className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} text-lg font-medium`}>
                  {t('bookDemo.contactInfo.phone.number')}
                </h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  {t('bookDemo.contactInfo.phone.label')}
                </p>
              </div>
            </div>
            
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 transition-all duration-300">
                <Mail className="text-emerald-400" size={20} />
              </div>
              <div>
                <h3 className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} text-lg font-medium`}>
                  {t('bookDemo.contactInfo.email.address')}
                </h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  {t('bookDemo.contactInfo.email.label')}
                </p>
              </div>
            </div>
            
            <div className="flex items-center group">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 transition-all duration-300">
                <MapPin className="text-emerald-400" size={20} />
              </div>
              <div>
                <h3 className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} text-lg font-medium`}>
                  {t('bookDemo.contactInfo.location.address')}
                </h3>
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  {t('bookDemo.contactInfo.location.label')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 w-full animate-slide-up">
          <div className={`w-full max-w-xl ${theme === 'light' ? 'bg-white/80' : 'bg-black/30'} backdrop-blur-md p-8 rounded-2xl border ${theme === 'light' ? 'border-gray-200' : 'border-white/10'} shadow-[0_0_15px_rgba(0,0,0,0.07)]`}>
            <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-6`}>
              {t('bookDemo.form.title')}
            </h2>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} mb-8`}>
              {t('bookDemo.form.subtitle')}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('firstName')}
                    onBlur={handleBlur}
                    className={`w-full ${theme === 'light' ? 'bg-gray-50 border-gray-300' : 'bg-white/5 border-gray-700'} border rounded-lg px-4 py-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'} outline-none focus:border-emerald-400 transition-all duration-300`}
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="firstName" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} ${
                      formData.firstName || focused === 'firstName' ? `text-xs -top-2.5 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} px-1` : 'text-base top-3'
                    }`}
                  >
                    {t('bookDemo.form.fields.firstName')}
                  </label>
                </div>
                
                <div className="relative group">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('lastName')}
                    onBlur={handleBlur}
                    className={`w-full ${theme === 'light' ? 'bg-gray-50 border-gray-300' : 'bg-white/5 border-gray-700'} border rounded-lg px-4 py-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'} outline-none focus:border-emerald-400 transition-all duration-300`}
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="lastName" 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} ${
                      formData.lastName || focused === 'lastName' ? `text-xs -top-2.5 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} px-1` : 'text-base top-3'
                    }`}
                  >
                    {t('bookDemo.form.fields.lastName')}
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  onFocus={() => handleFocus('companyName')}
                  onBlur={handleBlur}
                  className={`w-full ${theme === 'light' ? 'bg-gray-50 border-gray-300' : 'bg-white/5 border-gray-700'} border rounded-lg px-4 py-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'} outline-none focus:border-emerald-400 transition-all duration-300`}
                  placeholder=" "
                />
                <label 
                  htmlFor="companyName" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} ${
                    formData.companyName || focused === 'companyName' ? `text-xs -top-2.5 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} px-1` : 'text-base top-3'
                  }`}
                >
                  {t('bookDemo.form.fields.companyName')}
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={`w-full ${theme === 'light' ? 'bg-gray-50 border-gray-300' : 'bg-white/5 border-gray-700'} border rounded-lg px-4 py-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'} outline-none focus:border-emerald-400 transition-all duration-300`}
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="email" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} ${
                    formData.email || focused === 'email' ? `text-xs -top-2.5 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} px-1` : 'text-base top-3'
                  }`}
                >
                  {t('bookDemo.form.fields.email')}
                </label>
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                  className={`w-full ${theme === 'light' ? 'bg-gray-50 border-gray-300' : 'bg-white/5 border-gray-700'} border rounded-lg px-4 py-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'} outline-none focus:border-emerald-400 transition-all duration-300`}
                  placeholder=" "
                />
                <label 
                  htmlFor="phone" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} ${
                    formData.phone || focused === 'phone' ? `text-xs -top-2.5 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} px-1` : 'text-base top-3'
                  }`}
                >
                  {t('bookDemo.form.fields.phone')}
                </label>
              </div>

              {/* Date Time Picker */}
              <div className="space-y-4">
                <div className="relative group">
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    onFocus={() => handleFocus('date')}
                    onBlur={handleBlur}
                    className={`custom-date-input w-full ${theme === 'light' ? 'bg-gray-50 border-gray-300 date-light' : 'bg-white/5 border-gray-700 date-dark'} border rounded-lg px-4 py-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'} outline-none focus:border-emerald-400 transition-all duration-300`}
                    required
                  />
                  <label className={`absolute text-xs -top-2.5 left-4 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} px-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    {t('bookDemo.form.fields.date')}
                  </label>
                </div>

                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-3 relative">
                    <select
                      id="hours"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                      className={`w-full ${theme === 'light' ? 'bg-gray-50 border-gray-300' : 'bg-white/5 border-gray-700'} border rounded-lg px-3 py-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'} outline-none focus:border-emerald-400 transition-all duration-300 appearance-none`}
                    >
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(hour => (
                        <option className={`${theme === 'light' ? 'text-gray-800' : 'text-black'}`} key={hour} value={hour < 10 ? `0${hour}` : hour.toString()}>
                          {hour < 10 ? `0${hour}` : hour}
                        </option>
                      ))}
                    </select>
                    <label className={`absolute text-xs -top-2.5 left-4 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} px-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                      {t('bookDemo.form.fields.hour')}
                    </label>
                  </div>

                  <div className="col-span-1 flex justify-center text-gray-400 text-xl">
                    :
                  </div>

                  <div className="col-span-3 relative">
                    <select
                      id="minutes"
                      value={minutes}
                      onChange={(e) => setMinutes(e.target.value)}
                      className={`w-full ${theme === 'light' ? 'bg-gray-50 border-gray-300' : 'bg-white/5 border-gray-700'} border rounded-lg px-3 py-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'} outline-none focus:border-emerald-400 transition-all duration-300 appearance-none`}
                    >
                      {Array.from({ length: 60 }, (_, i) => i).map(minute => (
                        <option className={`${theme === 'light' ? 'text-gray-800' : 'text-black'}`} key={minute} value={minute < 10 ? `0${minute}` : minute.toString()}>
                          {minute < 10 ? `0${minute}` : minute}
                        </option>
                      ))}
                    </select>
                    <label className={`absolute text-xs -top-2.5 left-4 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} px-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                      {t('bookDemo.form.fields.minute')}
                    </label>
                  </div>

                  <div className="col-span-5 relative flex">
                    <div 
                      className={`flex-1 text-center py-2 rounded-l-lg cursor-pointer border ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'} border-r-0 transition-all ${period === 'AM' ? 'bg-emerald-500/20 text-emerald-400' : `${theme === 'light' ? 'bg-gray-50' : 'bg-white/5'} ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}`}
                      onClick={() => setPeriod('AM')}
                    >
                      {t('bookDemo.form.timePeriod.am')}
                    </div>
                    <div 
                      className={`flex-1 text-center py-2 rounded-r-lg cursor-pointer border ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'} transition-all ${period === 'PM' ? 'bg-emerald-500/20 text-emerald-400' : `${theme === 'light' ? 'bg-gray-50' : 'bg-white/5'} ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}`}
                      onClick={() => setPeriod('PM')}
                    >
                      {t('bookDemo.form.timePeriod.pm')}
                    </div>
                    <Clock size={16} className={`absolute right-3 top-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className={`w-full ${theme === 'light' ? 'bg-gray-50 border-gray-300' : 'bg-white/5 border-gray-700'} border rounded-lg px-4 py-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'} outline-none focus:border-emerald-400 transition-all duration-300 resize-none`}
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="message" 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} ${
                    formData.message || focused === 'message' ? `text-xs -top-2.5 ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} px-1` : 'text-base top-3'
                  }`}
                >
                  {t('bookDemo.form.fields.message')}
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group"
                disabled={loading}
              >
                {loading ? (
                  <span>{t('bookDemo.form.submitButton.loading')}</span>
                ) : (
                  <>
                    <span>{t('bookDemo.form.submitButton.default')}</span>
                    <Send size={18} className="inline-block transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === 'light' ? 'light' : 'dark'}
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        style={{ 
          zIndex: 200,
          top: '80px',
          right: '20px'
         }}
      />
    </div>
  );
};

export default BookDemo;