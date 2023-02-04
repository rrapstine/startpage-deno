import { useDate } from '../utils/hooks/useDate.ts';

function DateAndTimeWidget() {
  const { dateFormatted, time } = useDate();

  return (
    <div data-widget='time-date' className='mb-16'>
      <p id='time' className='text-2xl font-medium text-white'>
        {time}
      </p>
      <div id='date' className='text-lg font-medium text-white'>
        {dateFormatted}
      </div>
    </div>
  );
}

export default DateAndTimeWidget;
