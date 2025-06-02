import { SearchFilled } from '@fluentui/react-icons';
import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import './styles/App.css'
import { search, ChangeTitle } from './utils/BasicFunctions';
import { getLatestPublication } from './utils/api';
import { useEffect, useRef } from 'react';

function App() {
  const lastEditionRef = useRef<HTMLParagraphElement>(null);

  ChangeTitle("TUIT Bullet");

  async function load() {
    try {
      const data = await getLatestPublication();
      if (lastEditionRef.current) {
        lastEditionRef.current.textContent = data.text;
      }
    } catch (err) {
      console.error('Ошибка при загрузке:', err);
    }
  }

  useEffect(() => {
    load()
  }, [])
  

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

      <div className='content'>
        <div className='mainmenu-lastedition-line'></div>
        <p className='mainmenu-lastedition'>LAST EDITION</p>
        <div className='mainmenu-block-1'>
          <img src="https://picsum.photos/210/297" alt="Image" />
          <p ref={lastEditionRef}></p>
          <button onClick={() => window.location.href = "/publications"}>MORE</button>
        </div>

        <div className='mainmenu-mostread-line'></div>
        <p className='mainmenu-mostread'>MOST READ PAPERS</p>
          <div className='mainmenu-mostread-block'>
            <div className='mainmenu-mostread-inblock'>
              <div className='mainmenu-mostread-posts'>
                <div className='mainmenu-mostread-post'><p className='mainmenu-mostread-post-heading'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, rem.</p> <p className='mainmenu-mostread-post-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum earum porro quis perferendis, doloribus velit aut et molestiae aspernatur, dolores accusamus corrupti deleniti!</p></div>
                <hr />
                <div className='mainmenu-mostread-post'><p className='mainmenu-mostread-post-heading'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, rem.</p> <p className='mainmenu-mostread-post-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum earum porro quis perferendis, doloribus velit aut et molestiae aspernatur, dolores accusamus corrupti deleniti!</p></div>
                <hr />
                <div className='mainmenu-mostread-post'><p className='mainmenu-mostread-post-heading'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, rem.</p> <p className='mainmenu-mostread-post-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum earum porro quis perferendis, doloribus velit aut et molestiae aspernatur, dolores accusamus corrupti deleniti!</p></div>
                <hr />
                <div className='mainmenu-mostread-post'><p className='mainmenu-mostread-post-heading'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, rem.</p> <p className='mainmenu-mostread-post-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum earum porro quis perferendis, doloribus velit aut et molestiae aspernatur, dolores accusamus corrupti deleniti!</p></div>
                <hr />
                <div className='mainmenu-mostread-post'><p className='mainmenu-mostread-post-heading'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, rem.</p> <p className='mainmenu-mostread-post-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum earum porro quis perferendis, doloribus velit aut et molestiae aspernatur, dolores accusamus corrupti deleniti!</p></div>
              </div>
              <hr />
              <div className='mainmenu-mostread-more'><a href="/mostread" className='mainmenu-mostread-more'>MORE</a></div>
            </div>
          </div>

          <div className='mainmenu-lastpaper-line'></div>
        <p className='mainmenu-lastpaper'>LAST PAPER</p>
        <div className='mainmenu-lastpaper-blocks'>
          <div className='mainmenu-lastpaper-block'>
            <a href="/categories/computers">COMPUTERS</a>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
            <button>MORE</button>
          </div>
          <div className='mainmenu-lastpaper-block'>
            <a href="/categories/computers">COMPUTERS</a>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
            <button>MORE</button>
          </div>
          <div className='mainmenu-lastpaper-blockright'>
            <a href="/categories/computers">COMPUTERS</a>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
            <button>MORE</button>
          </div>
          <div className='mainmenu-lastpaper-blockright'>
            <a href="/categories/computers">COMPUTERS</a>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
            <button>MORE</button>
          </div>
          <a href="/papers" className='mainmenu-lastpaper-more'>MORE</a>
        </div>

          <div className='footer'>
            <div className='footer-links'>
              <div className="footer-links-left">
                <h1>MENU</h1>
                <div><a href="/publications">Publications</a></div>
                <div><a href="/papers">Papers</a></div>
                <div><a href="/requirements">Requirements</a></div>
                <div><a href="/faq">FAQ</a></div>
                <div><a href="/contacts">Contacts</a></div>
              </div>
              <div className="footer-links-right">
                <h1>ADDRESS</h1>
                <p>Tashkent, Amir Temur street, <br /> 108 building</p>
                <h1>SOCIAL MEDIA</h1> 
                <div className='footer-icons'>
                  <a href="https://t.me/@tuit"><RiTelegram2Fill className='footer-icon'/></a>
                  <a href="https://facebook.com/tuit"><FaFacebookSquare className='footer-icon'/></a>
                  <a href="https://instagram.com/tuit"><FaInstagram className='footer-icon'/></a>
                </div>
              </div>
            </div>

            <div className='footer-footer'>
              <p>© 2021 Bulletin of TUIT: Management and Communication Technologies | All rights reserved!</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default App