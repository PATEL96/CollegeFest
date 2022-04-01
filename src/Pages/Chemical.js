import React from 'react';
import './Pages.css';
import medichem from '../Images/Sangam Events/MediChemNew.png';
import working from '../Images/Sangam Events/WorkingModelNew.png';
import engiochem from '../Images/Sangam Events/EnggioOChemistryNew.png';
import quizee from '../Images/Sangam Events/QuizEeNew.png';
import qrCode from '../Images/Sangam Events/qrCode.png';

function Chemical() {

    return (
        <div className='cont-chem' >
            <div className='pair-1'>
                <div className='medi-chem'>
                    <div className='data'>
                        <img src={medichem} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='working-model'>
                    <div className='data'>
                        <img src={working} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
            <div className='pair-2'>
                <div className='enggio'>
                    <div className='data'>
                        <img src={engiochem} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='quiz-ee'>
                    <div className='data'>
                        <img src={quizee} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chemical;