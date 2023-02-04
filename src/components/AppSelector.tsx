import { useEffect } from 'react';
import { toTitleCase } from '../utils/helpers.ts';
import Icon from './Icon.tsx';

interface Props {
  apps: string[];
  setSelectedApp: React.Dispatch<React.SetStateAction<string>>;
}

function AppSelector({ apps, setSelectedApp }: Props) {
  /**
   * Run useEffect on initial load to set the selected app to the first app in the list.
   */
  useEffect(() => {
    const firstApp = apps[0].toLowerCase();
    setSelectedApp(firstApp);
  }, []);

  /**
   * When an icon is clicked, update the parent state to show the currently selected app.
   * Then, change the color of the selected icon to white.
   */
  function handleClick(app: string) {
    if (app) {
      setSelectedApp(app.toLowerCase());
    }
  }

  return (
    <div id='app-selector' className='mb-4 flex flex-row gap-4'>
      {apps.map((app, key) => (
        <Icon name={app.toLowerCase()} key={key} keyNum={key} onClick={() => handleClick(app)} />
      ))}
    </div>
  );
}

export default AppSelector;
