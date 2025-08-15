import React, { useEffect, useRef, useState } from 'react'
import bulb from '../assets/bulb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import api from '../api/config';

function FixPopup({ onClose, handleClick, checkIfReqIsSuccess, setIsAdded, isAdded }) {
  const popupRef = useRef(null);
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');

  const handleProblemChange = (e) => {
    setProblem(e.target.value)
  }

  const handleSolutionChange = (e) => {
    setSolution(e.target.value)
  }

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        problem: problem,
        solution: solution,
        user_id: 1
    }
    try {
        const response = await api.post('/fixes', formData);
        console.log('Form submitted: ', response.data);
        onClose(); // close the popup
        checkIfReqIsSuccess(true);
        setIsAdded(!isAdded);
    } catch(error) {
        console.error('Error creating a fix: ', error);
        checkIfReqIsSuccess(false);
    }
    handleClick(); // display the snack
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
                  className='outline-none w-popupInput h-10 border border-primary text-lg rounded-xl px-3 focus:border-violet' 
                  placeholder='describe the nightmare you encountered...' 
                  id='problem' 
                  name='problem' 
                  type='text' 
                  required
                  value={problem}
                  onChange={handleProblemChange}
                />
            </div>
            <div className='solution space-y-1'>
                <label className='block' htmlFor='solution'>The Magic Fix</label>
                <textarea
                    className='outline-none w-popupInput h-40 border border-primary text-lg rounded-xl px-3 py-2 resize-none focus:border-violet' 
                    placeholder='How did you tame the beast ?' 
                    id='solution' 
                    name='solution' 
                    required
                    value={solution}
                    onChange={handleSolutionChange}
                 />
            </div>
            <div className='flex justify-between'>
                <div></div>
                <button 
                  className='text-lg hover:bg-darkViolet cursor-pointer flex items-center justify-center space-x-4 font-semibold text-secondary bg-violet hover:bg-violet-600 transition-colors rounded-lg h-12 w-24' 
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