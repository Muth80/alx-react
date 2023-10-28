import React from 'react'
import './Notifications.css'
import closeIcon from './close-icon.png';

function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>

            <button 
                aria-label='Close' 
                style={{ float: 'right' }}
                onClick={() => console.log('Close button has been clicked')}
            >
                <img src={closeIcon} alt='Close icon' />
            </button>

            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li 
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                ></li>
            </ul>
        </div>
    )
}

function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}

export default Notifications