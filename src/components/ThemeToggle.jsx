import React from 'react';

// A redesigned ThemeToggle component with new UI but same functionality
const ThemeToggle = ({ theme, setTheme }) => {
  // Simple theme switcher function with all event propagation stopped
  const handleThemeSwitch = (e) => {
    // Completely prevent any event bubbling or default behavior
    e.preventDefault();
    e.stopPropagation();
    
    // Switch theme
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Update theme in localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update theme in state
    setTheme(newTheme);
    
    // Update document class for global styling
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    
    // Return false to prevent any other default behavior 
    return false;
  };

  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ isolation: 'isolate' }}
      onClick={e => e.stopPropagation()}
    >
      <label
        className="relative block w-14 h-8 cursor-pointer"
        onClick={handleThemeSwitch}
        onPointerDown={e => e.stopPropagation()}
        onMouseDown={e => e.stopPropagation()}
        onTouchStart={e => e.stopPropagation()}
      >
        <input 
          type="checkbox"
          checked={theme === 'dark'}
          className="opacity-0 w-0 h-0"
          readOnly
        />
        <span 
          className={`
            absolute cursor-pointer inset-0 rounded-full transition-colors duration-400 ease-in-out
            ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}
          `}
        />
        <span 
          className={`
            absolute h-6 w-6 rounded-full top-1 left-1 transition-all duration-400 ease-in-out
            ${theme === 'dark' 
              ? 'transform translate-x-6 bg-gray-800 shadow-[inset_-3px_-2px_5px_-2px_#8983f7,inset_-5px_-4px_0_0_#a3dafb]' 
              : 'bg-gradient-to-br from-pink-500 to-yellow-500'}
          `}
        />
      </label>
    </div>
  );
};

export default ThemeToggle;