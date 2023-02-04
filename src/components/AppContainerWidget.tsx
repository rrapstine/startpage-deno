import { useLayoutEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary.tsx';
import AppSelector from './AppSelector.tsx';
import { getAppList, toTitleCase } from '../utils/helpers.ts';
import NotificationsContainer from './NotificationsContainer.tsx';

function AppContainerWidget() {
  const appList = getAppList();
  const [selectedApp, setSelectedApp] = useState(appList[0].toLowerCase());

  // Apply active class to selected app icon
  useLayoutEffect(() => {
    const appIcons = document.querySelectorAll('[data-app] > svg');
    appIcons.forEach((icon) => {
      // @ts-ignore
      if (icon.parentElement.getAttribute('data-app') === selectedApp) {
        // @ts-ignore
        icon.classList.add('active');
      } else {
        // @ts-ignore
        icon.classList.remove('active');
      }
    });
  }, [selectedApp]);

  return (
    <div id='app-container'>
      <ErrorBoundary>
        <AppSelector apps={appList} setSelectedApp={setSelectedApp} />
        <h2
          id='app-heading'
          className='mb-4 border-b-2 border-white text-base font-medium text-white'>
          {toTitleCase(selectedApp)}
        </h2>
        <NotificationsContainer app={selectedApp} />
      </ErrorBoundary>
    </div>
  );
}

export default AppContainerWidget;
