// Importing the JSON data from notifications.json
import notificationsData from './notifications.json';

// Function to get all notifications by a specific user ID
export function getAllNotificationsByUser(userId) {
    // Filter the notifications based on the given userId
    const notificationsByUser = notificationsData.filter(notification => {
        return notification.author.id === userId;
    });

    // Extract and return only the context objects
    return notificationsByUser.map(notification => notification.context);
}

