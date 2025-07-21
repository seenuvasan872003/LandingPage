import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header.jsx';
import Homepage from './pages/Homepage.jsx';
import Footer from './components/Footer.jsx';
import BookDemo from './components/Bookdemo.jsx';
import Pricingpage from './pages/Pricingpage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsConditions from './pages/TermsConditions.jsx';
import FAQ from './pages/FAQ.jsx';


function App() {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      // Apply dark class if theme is dark
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to dark theme
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <>
      


      <Router>
      <div className={`min-h-screen` + (theme === 'dark' ? ' bg-black' : ' bg-white')}>
        <Header theme={theme} setTheme={setTheme}  />
        <main className="container mx-auto ">
          <Routes>
            {/* Define the default route for GoWhats component */}
            <Route path="/" element={<Homepage theme={theme} setTheme={setTheme}  />} />
            <Route path="/book-demo" element={<BookDemo theme={theme} setTheme={setTheme}  />} />
            <Route path="/price" element={<Pricingpage theme={theme} setTheme={setTheme} />}/>
            <Route path="/privacy" element={<PrivacyPolicy theme={theme} setTheme={setTheme} />} />
            <Route path="/terms" element={<TermsConditions theme={theme} setTheme={setTheme} />} />
            <Route path="/faq" element={<FAQ theme={theme} setTheme={setTheme} />} />
            {/* <Route path="/contact" element={<Contact />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/documentation" element={<Documentation />} />
            
            <Route path="/blog" element={<Blog/>}/> */}
          </Routes>
        </main>
        <Footer theme={theme} setTheme={setTheme}  />
        {/* <Chatbot /> */}
      </div>
    </Router>
    </>
  )
}

export default App
