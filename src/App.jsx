import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header.jsx';
import Homepage from './pages/Homepage.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <>
      


      <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Include the Header component for navigation */}
        <Header />
        {/* Main content area */}
        <main className="container mx-auto ">
          <Routes>
            {/* Define the default route for GoWhats component */}
            <Route path="/" element={<Homepage />} />
              
            
            {/* <Route path="/contact" element={<Contact />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/price" element={<Price/>}/>
            <Route path="/blog" element={<Blog/>}/> */}
          </Routes>
        </main>
        {/* Footer or additional components can be added here */}
        <Footer />
        {/* Include the Chatbot component for user interaction */}
        {/* <Chatbot /> */}
      </div>
    </Router>
    </>
  )
}

export default App
