import React from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'TUIT Bullet';
  }, []);

  return (
    <div id='app'>
      <div className='flex items-center gap-4 mt-[20px] ml-[20px] mr-[20px]'>
        <img src="https://picsum.photos/1000" alt="Logo" className='w-[100px] h-[100px] rounded-[50px]'/>
        <p className='text-[#373C74] text-[25px] font-bold font-[Segoe_UI]'>
          Bulletin of TUIT: Management and <br /> Communication Technologies
        </p>

        <div className='ml-auto flex gap-4'>
          <a href="/send-paper" className='text-[#373C74] text-[20px] font-bold font-[Segoe_UI]'>SEND PAPER</a>
          <a href="/sign" className='text-[#373C74] text-[20px] font-bold font-[Segoe_UI]'>SIGN IN / SIGN OUT</a>
        </div>
      </div>

      <div className='w-[100%] h-[3px] bg-[#D2CDCD] mt-[20px]'></div>
    </div>
  );
}

export default App;