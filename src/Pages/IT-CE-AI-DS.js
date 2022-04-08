import React from 'react';
import './Pages.css';
import codewar from '../Images/Sangam Events/CodeWarNew.png';
import webappdev from '../Images/Sangam Events/WebAppDevNew.png';
import gamedev from '../Images/Sangam Events/GameDevNew.png';
import proeditors from '../Images/Sangam Events/ProEditorsNew.png';
import qrCode from '../Images/Sangam Events/qrCode.png';
import { FormLink } from './Forms';
import Rules from '../DownloadFiles/ComputerRules.pdf';

function ItCeAiDs() {

    return (
        <div className='cont-it' >
            <div className='rules'>
                <a href={Rules} download >
                    <button className='download-button'>
                        <i className="fas fa-download" />
                        Rules & Regulations
                    </button>
                </a>
            </div>
            <div className='pair-1'>
                <div className='pro-editors'>
                    <div className='data'>
                        <img src={proeditors} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='web-app-dev'>
                    <div className='data'>
                        <img src={webappdev} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
            <div className='pair-2'>
                <div className='game-dev'>
                    <div className='data'>
                        <img src={gamedev} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
                <div className='codewar'>
                    <div className='data'>
                        <img src={codewar} alt='none' className='event-img' />
                        <img src={qrCode} alt='none' className='qrImage' />
                    </div>
                    <button className='registartion-button'>
                        <a href={FormLink} className='form-link' >
                            Register Here
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItCeAiDs;