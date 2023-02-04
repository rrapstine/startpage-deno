// Dotenv
import 'https://deno.land/std@0.176.0/dotenv/load.ts';

// Ultra
import useAsset from 'ultra/hooks/use-asset.js';

// Twind
import { tw } from './twind/twind.ts';

// Components
import Greeting from './components/Greeting.tsx';
import DateAndTimeWidget from './components/DateAndTimeWidget.tsx';
import AppContainerWidget from './components/AppContainerWidget.tsx';
import AppSelector from './components/AppSelector.tsx';

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <title>Ultra Startpage</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href={useAsset('/favicon.ico')} />
        <link rel='stylesheet' href={useAsset('/style.css')} />

        <script type='module' src='https://cdn.skypack.dev/twind/shim'></script>
      </head>
      <body>
        <div id='app-wrapper' className='h-screen bg-home p-16'>
          <Greeting />

          <main className='grid grid-cols-2 gap-16'>
            <div className='left pr-8'>
              <DateAndTimeWidget />
              <AppContainerWidget />
            </div>

            <div className='right pl-8'>
              {/* WeatherWidget */}
              <div data-widget='weather' className='mb-16 flex flex-row gap-4'>
                <div id='weather-symbol'>{/* Weather symbol goes here */}</div>
                <div id='weather-info'>
                  <h2 id='location' className='text-lg font-bold text-white'>
                    Floresville, Texas
                  </h2>
                  <div id='temperatures' className='flex flex-row gap-3'>
                    <p className='text-base font-normal text-white'>
                      Temp{' '}
                      <span id='current-temp' className='text-gray'>
                        60F
                      </span>
                    </p>
                    <p className='text-base font-normal text-white'>
                      High{' '}
                      <span id='high-temp' className='text-gray'>
                        74F
                      </span>
                    </p>
                    <p className='text-base font-normal text-white'>
                      Low{' '}
                      <span id='low-temp' className='text-gray'>
                        55F
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* SearchWidget */}
              <div data-widget='search' className='mb-14'>
                <form
                  action='https://www.google.com/search'
                  method='GET'
                  id='search-form'
                  className='w-full bg-transparent'>
                  <input
                    className='w-full rounded-full border-2 border-white bg-transparent px-6 py-4 text-base font-normal text-white placeholder:text-white'
                    type='text'
                    name='q'
                    placeholder="Press '/' from anywhere to search"
                  />
                  <button type='submit'>
                    <img src='assets/search.svg' alt='' />
                  </button>
                </form>
              </div>
              {/* BookmarksWidget */}
              <div data-widget='bookmarks' className='grid grid-cols-6 gap-6'>
                <div id='filters' className='col-span-2 flex flex-col items-start gap-4'>
                  <button data-filter='all' className='text-base font-bold text-white'>
                    All
                  </button>
                  <button data-filter='development' className='text-base font-bold text-gray'>
                    Development
                  </button>
                  <button data-filter='entertainment' className='text-base font-bold text-gray'>
                    Entertainment
                  </button>
                  <button data-filter='social' className='text-base font-bold text-gray'>
                    Social
                  </button>
                </div>
                <div id='bookmark-links'>
                  <div className='link'>
                    <a href='#'>
                      {/* Link favicon */}
                      <span className='text-base font-medium text-white'>Reddit</span>
                    </a>
                  </div>
                </div>
                <button id='add-bookmark'>{/* Icon goes here */}</button>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
