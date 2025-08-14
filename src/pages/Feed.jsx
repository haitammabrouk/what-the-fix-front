import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import thunder from '../assets/thunder.png'
import SearchBar from '../components/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Card from '../components/Card'
import FixPopup from '../components/FixPopup'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import api from '../api/config'

function Feed() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [isReqSuccess, setIsReqSuccess] = useState(false);
  const [fixes, setFixes] = useState([]);

  const checkIfReqIsSuccess = (isReqSuccess) => setIsReqSuccess(isReqSuccess);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleClick = () => setOpenToast(true);

  const handleClose = (
    event,
    reason
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenToast(false);
  };

  // fetch all fixes
  useEffect(() => {
    const fetchFixes = async () => {
      try {        
        const response = await api.get('/fixes');
        console.log('Fixes fetched:', response.data);
        setFixes(response.data);
      } catch (error) {
        console.error('Error fetching fixes:', error);
      }
    };

    fetchFixes();
  }, []);

  return (
    <div className='feed w-full h-full bg-secondary'>
      <Navbar />
      <div className='pt-20 pb-10'>
        <div className='content space-y-4'>
            <div className='flex justify-center items-center space-x-3'>
                <img src={thunder} alt='fast' />
                <span className='text-6xl text-center font-extrabold'>What the fix</span>
            </div>
           <div className='flex justify-center'>
                <p className='text-center w-homeTitle text-2xl leading-10'>
                Because let's face it, you <span className='underline font-semibold'>will</span> forget how you solved that "simple" bug at 3 AM.
                Save your solutions before your brain decides to delete them.
                </p>
           </div>
        </div>
        <div className='flex justify-center pt-16'>
            <SearchBar openPopup={openPopup} />
        </div>
        <div className='flex justify-center items-center w-full'>
            <div className='pt-5 bg-secondary w-cardItem flex items-center justify-between'>
                <p className='text-xl font-medium text-grey'>We've found <span className='text-violet'>345</span> items</p>
                <div className='space-x-2 text-xl font-medium inline-flex items-center'><span className='text-grey'>Sort by:</span> 
                <span className='text-violet cursor-pointer'>Date <FontAwesomeIcon icon={faChevronDown} /></span></div>
            </div>
        </div>
        <div className='flex justify-center'>
            <ul className='problems pt-10 space-y-10'>
              {fixes.map(fix => <li key={fix.title}><Card fix={fix}/></li>)}
            </ul>
        </div>
      </div>

      {/* Modal Popup */}
      {isPopupOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='relative'>
            <FixPopup checkIfReqIsSuccess={checkIfReqIsSuccess} handleClick={handleClick} onClose={closePopup} />
          </div>
        </div>
      )}

      <Snackbar className='mt-14' open={openToast} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert
          onClose={handleClose}
          severity={isReqSuccess ? `success` : `error`}
          variant="filled"
          sx={{
            width: '100%',
            '& .MuiAlert-message': {
            fontSize: '18px',
            fontWeight: '500'
            },
            '& .MuiAlert-icon': {
              fontSize: '26px'
            },
            '& .MuiAlert-action': {
              '& .MuiIconButton-root': {
                '& .MuiSvgIcon-root': {
                  fontSize: '26px'
                }
              }
            }
          }}>
          {isReqSuccess ? `Your future self will thank you for this moment.` : `Something went wrong while saving your fix.`}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Feed