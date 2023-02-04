function Notification() {
  return (
    <li className='flex flex-row items-center justify-between py-6 text-white'>
      <div data-notification='content' className='flex flex-col'>
        <p
          data-notification='content-body'
          data-overdue='true'
          className="relative after:absolute after:top-0 after:translate-x-2 after:rounded-full after:bg-red-700 after:px-2
                after:py-1 after:text-xs after:font-medium after:uppercase
                after:tracking-wider after:text-white after:content-['Overdue']">
          Schedule vet appointment for Blake
        </p>
        <p data-notification='content-note' className='text-gray'>
          Today at 9:00 AM
        </p>
      </div>
      <div data-notification='date'>
        <p>11/04</p>
      </div>
    </li>
  );
}

export default Notification;
