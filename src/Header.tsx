export const Header = () => {
  return (
    <header>
      <div className='bg-white flex items-center max-w-full p-4 rounded-lg shadow sm:justify-between'>
        <h1 className='text-3xl font-bold p-3'>BubbleHub🫧</h1>
        <p className='text-xl text-gray-600 p-3 flex-1 sm:hidden'>
          Time to do your laundry, huh?
        </p>
        <button className='text-xl justify-between p-3 hover:text-blue-700'>
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
