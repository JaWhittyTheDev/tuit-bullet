import { useState } from 'react'
import { SearchFilled } from '@fluentui/react-icons';
import { useEffect } from 'react';
import './styles/App.css'

function search(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const q = formData.get('q') as string;

  if (q) {
    window.location.href = `https://example.com/search?q=${encodeURIComponent(q)}`;
  }
}


function App() {

  useEffect(() => {
    document.title = 'TUIT Bullet';
  }, []);

  return (
    <>
        <div className='header'>
          <img src="https://picsum.photos/100" alt="Logo" />
          <h1>Bulletin of TUIT: Management and <br /> Communication Technologies</h1>
          <div className='header-right'>
            <a href="/sendpaper">SEND PAPER</a>
            <a href="/sign-in">SIGN IN / SIGN OUT</a>
          </div>
        </div>
        <div className='header-line'></div>
        
        <div className='links'>
        <div className='links-left'>
            <a href="/">Main</a>
            <a href="/publications">Publications</a>
            <a href="/papers">Papers</a>
            <a href="/requirements">Requirements</a>
            <a href="/faq">FAQ</a>
            <a href="/contacts">Contacts</a>
        </div>
          <div className='search'>
            <form onSubmit={search}>
              <input type="text" className='searchinput' name="q" placeholder='search'/>
              <button type="submit" className='searchbutton'>
                <SearchFilled />
              </button>
            </form>
          </div>
      </div>

      <div className='header-line'></div>

      <div className='content'></div>
    </>
  )
}

export default App
