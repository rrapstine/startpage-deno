import { useState } from 'react';
import Notification from './Notification.tsx';

interface Props {
  app: string;
}

function NotificationsContainer({ app }: Props) {
  // NOTE: I do not believe that this will actually work without a backend
  // TODO: Look into golang api for iCloud
  // TODO: Fetch all notifications for the selected app
  // TODO: Render a Notification component for each notification

  return (
    <div id='notifications-container'>
      <ul className='list-none'>
        <Notification />
      </ul>
    </div>
  );
}

export default NotificationsContainer;
