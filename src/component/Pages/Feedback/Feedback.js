/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../UI/Modal/Modal';
import cancel from '../../../assets/x.png';

const Feedback = () => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(true);
  const openOverlay = () => {
    setShowOverlay(false);
  };

  const gotomain = () => {
    navigate(-1);
  };

  return (
    <>
      {showOverlay ? (
        <Modal onClose={openOverlay}>
          <img src={cancel} className='cancel__modal' onClick={openOverlay} />
          <form
            className='form'
            action='https://docs.google.com/forms/d/e/1FAIpQLSdx6F9N3NiwSGYNvqzwLoxdRpEadnYfGDgAod8mWiZ_IR2Yvg/formResponse'>
            <br />
            <h2 style={{ textAlign: 'center' }}>Feedback Form :</h2>
            <p style={{ textAlign: 'center' }}>
              Please help us improve our restaurant services by filling in our
              feedback form. This will help us to serve you better. Thank you!
            </p>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '10px',
                textAlign: 'center',
              }}>
              5-Excellent, 4-Good, 3-Average, 2-Unsatisfied, 1 -Bad Experience
            </p>

            <div className='input__custom'>
              <span>Food Quality :</span>
              <input type='text' placeholder='' name='entry.1824340758' />
            </div>
            <div className='input__custom'>
              <span>Overall Service Quality :</span>
              <input type='text' placeholder='' name='entry.348366332' />
            </div>
            <div className='input__custom'>
              <span>Cleanliness :</span>
              <input type='text' placeholder='' name='entry.1324113753' />
            </div>
            <div className='input__custom'>
              <span>Speed of Service :</span>
              <input type='text' placeholder='' name='entry.163799065' />
            </div>
            <div className='input__custom'>
              <span>Any Comments? :</span>
              <input type='text' placeholder='' name='entry.1953639699' />
            </div>

            <div className='jw-modal-btn-row'>
              <input
                className='btn'
                style={{
                  width: '100%',
                  backgroundColor: '#000',
                  color: '#fff',
                }}
                type='submit'
                value='Send'
              />
            </div>
          </form>
        </Modal>
      ) : (
        <>
          <h3>Thank you for your feedback</h3>
          <input
            className='btn'
            style={{
              width: '40%',
              backgroundColor: '#000',
              color: '#fff',
            }}
            type='submit'
            value='Back to main menu'
            onClick={gotomain}
          />
        </>
      )}
    </>
  );
};

export default Feedback;
