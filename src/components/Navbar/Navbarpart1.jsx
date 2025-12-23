import React, { useState, useEffect } from 'react'

const NavPart1 = () => {
  const [isShowingName, setIsShowingName] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShowingName(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToHome = () => {
    const element = document.getElementById('home')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div
      className='group flex cursor-pointer text-base capitalize font-bold pb-5'
      onClick={scrollToHome}
    >
      <div className='transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
        <span>&copy;</span>
      </div>

      <div className={`relative ms-2 flex flex-col h-6 overflow-hidden transition-all duration-500 ease-in-expo ${isShowingName ? 'w-[120px]' : 'w-[75px] group-hover:w-[120px]'}`}>
        <h5 className={`transition-all duration-500 ease-in-expo ${isShowingName ? '-translate-y-full opacity-0' : 'group-hover:-translate-y-full group-hover:opacity-0'}`}>
          Code by
        </h5>
        <h5 className={`absolute top-0 transition-all duration-500 ease-in-expo whitespace-nowrap ${isShowingName ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
          Ravi Prasad
        </h5>
      </div>
    </div>
  )
}

export default NavPart1