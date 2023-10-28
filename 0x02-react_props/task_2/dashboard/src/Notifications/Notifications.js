import React from 'react'
import './Notifications.css'
import closeIcon from './close-icon.png'
import NotificationItem from './NotificationItem'

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
                <NotificationItem priority='default'>New course available</NotificationItem>
                <NotificationItem priority='urgent'>New resume available</NotificationItem>
                <NotificationItem 
                    type='html'
                    html={{ __html: getLatestNotification() }}
                />
            </ul>
        </div>
    )
}

function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}

export default Notifications
