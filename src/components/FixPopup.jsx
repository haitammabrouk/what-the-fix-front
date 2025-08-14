import React, { useEffect, useRef } from 'react'
import bulb from '../assets/bulb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function FixPopup({ onClose }) {
  const popupRef = useRef(null);

  // Handle click outside to close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    // Close popup after submission
    onClose();
  };

  return (
    <div 
      ref={popupRef}
      className='fix-popup h-fixPopup w-fixPopup bg-white border-4 border-violet rounded-xl flex justify-center shadow-2xl'
    >
      <div className='popup-content px-4 py-4 w-full'>
        <div className='flex justify-between items-start mt-4'>
            <p className='flex items-center space-x-2 mt-1'>
                <img className='h-8 w-8' src={bulb} alt='bulb' />
                <span className='text-xl font-medium'>Document Your Brilliance</span>
            </p>
            <FontAwesomeIcon 
              className='-mt-1 cursor-pointer hover:text-gray-600 transition-colors' 
              size='lg' 
              icon={faXmark} 
              onClick={onClose}
            />
        </div>
        <div className='pt-2'>
            <p className='text-lg'>Record this moment of clarity before it vanishes into the void of forgotten solutions.</p>
        </div>
        <form onSubmit={handleSubmit} className='text-lg pt-4 space-y-4'>
            <div className='problem space-y-1'>
                <label className='block' htmlFor='problem'>What broke this time ?</label>
                <input 
                  className='outline-none w-popupInput h-10 border border-primary text-lg rounded-xl px-3 focus:border-violet focus:ring-2 focus:ring-violet focus:ring-opacity-20' 
                  placeholder='describe the nightmare you encountered...' 
                  id='problem' 
                  name='problem' 
                  type='text' 
                  required
                />
            </div>
            <div className='fix space-y-1'>
                <label className='block' htmlFor='fix'>The Magic Fix</label>
                <textarea
                    className='outline-none w-popupInput h-40 border border-primary text-lg rounded-xl px-3 py-2 resize-none focus:border-violet focus:ring-2 focus:ring-violet focus:ring-opacity-20' 
                    placeholder='How did you tame the beast ?' 
                    id='fix' 
                    name='fix' 
                    required
                 />
            </div>
            <div className='flex justify-between'>
                <div></div>
                <button 
                  className='text-lg cursor-pointer flex items-center justify-center space-x-4 font-semibold text-secondary bg-violet hover:bg-violet-600 transition-colors rounded-lg h-12 w-24' 
                  type='submit'
                >
                    <span>Save</span>
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default FixPopup