import React from 'react';
import './Pages.css';
import bot from '../Images/Sangam Events/BotingNew.png';
import macing from '../Images/Sangam Events/MacingNew.png';
import roboyudh from '../Images/Sangam Events/RoboYudhNew.png';
import qrCode from '../Images/Sangam Events/qrCode.png';

function Mechanical() {

    return (
        <div className='cont-mech' >
            <div className='pair-1'>
                <div className='boting'>
                    <div className='data'>
                        <img src={bot} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href='https://github.com/PATEL96' className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='macing'>
                    <div className='data'>
                        <img src={macing} alt='none' className='event-img' />
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
                <div className='robo-yudh'>
                    <div className='data'>
                        <img src={roboyudh} alt='none' className='event-img' />
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

export default Mechanical;