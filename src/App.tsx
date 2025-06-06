import { SearchFilled } from '@fluentui/react-icons';
import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import './styles/App.css'
import { search, ChangeTitle } from './utils/BasicFunctions';
import { getLatestPublication, getMostReadPapers, getLastPaper } from './utils/api';
import { useEffect, useRef } from 'react';

function App() {
  const lastEditionRef = useRef<HTMLParagraphElement>(null);

  const mostReadOneHeadingRef = useRef<HTMLParagraphElement>(null);
  const mostReadTwoHeadingRef = useRef<HTMLParagraphElement>(null);
  const mostReadThreeHeadingRef = useRef<HTMLParagraphElement>(null);
  const mostReadFourHeadingRef = useRef<HTMLParagraphElement>(null);
  const mostReadFiveHeadingRef = useRef<HTMLParagraphElement>(null);

  const mostReadOneDescRef = useRef<HTMLParagraphElement>(null);
  const mostReadTwoDescRef = useRef<HTMLParagraphElement>(null);
  const mostReadThreeDescRef = useRef<HTMLParagraphElement>(null);
  const mostReadFourDescRef = useRef<HTMLParagraphElement>(null);
  const mostReadFiveDescRef = useRef<HTMLParagraphElement>(null);

  const lastPaperOneHeadingRef = useRef<HTMLHeadingElement>(null);
  const lastPaperTwoHeadingRef = useRef<HTMLHeadingElement>(null);
  const lastPaperThreeHeadingRef = useRef<HTMLHeadingElement>(null);
  const lastPaperFourHeadingRef = useRef<HTMLHeadingElement>(null);

  const lastPaperOneCategoryRef = useRef<HTMLAnchorElement>(null);
  const lastPaperTwoCategoryRef = useRef<HTMLAnchorElement>(null);
  const lastPaperThreeCategoryRef = useRef<HTMLAnchorElement>(null);
  const lastPaperFourCategoryRef = useRef<HTMLAnchorElement>(null);

  const lastPaperOneDescRef = useRef<HTMLParagraphElement>(null);
  const lastPaperTwoDescRef = useRef<HTMLParagraphElement>(null);
  const lastPaperThreeDescRef = useRef<HTMLParagraphElement>(null);
  const lastPaperFourDescRef = useRef<HTMLParagraphElement>(null);

  ChangeTitle("TUIT Bullet");

  async function loadLatestPublication() {
    try {
      const data = await getLatestPublication();
      if (lastEditionRef.current) {
        lastEditionRef.current.textContent = data.text;
      }
    } catch (err) {
      console.error('Load error:', err);
    }
  }

  async function loadMostReadPapers(num: number) {
    try {
      const data = await getMostReadPapers();
      if (num) {
        if (num == 1) {
          if (mostReadOneHeadingRef.current && mostReadOneDescRef.current) {
            mostReadOneHeadingRef.current.textContent = data["0"].title;
            mostReadOneDescRef.current.textContent = data["0"].description;
          }
        } else if (num == 2) {
          if (mostReadTwoHeadingRef.current && mostReadTwoDescRef.current) {
            mostReadTwoHeadingRef.current.textContent = data["1"].title;
            mostReadTwoDescRef.current.textContent = data["1"].description;
          }
        } else if (num == 3) {
          if (mostReadThreeHeadingRef.current && mostReadThreeDescRef.current) {
            mostReadThreeHeadingRef.current.textContent = data["2"].title;
            mostReadThreeDescRef.current.textContent = data["2"].description;
          }
        } else if (num == 4) {
          if (mostReadFourHeadingRef.current && mostReadFourDescRef.current) {
            mostReadFourHeadingRef.current.textContent = data["3"].title;
            mostReadFourDescRef.current.textContent = data["3"].description;
          }
        } else if (num == 5) {
          if (mostReadFiveHeadingRef.current && mostReadFiveDescRef.current) {
            mostReadFiveHeadingRef.current.textContent = data["4"].title;
            mostReadFiveDescRef.current.textContent = data["4"].description;
          }
        }
      }
    } catch(err) {
      console.error('Load error:', err)
    }
  }

  async function asyncGetLastPaper(num: number) {
    try {
      const data = await getLastPaper();
      if (num) {
        if (num == 1) {
          if (lastPaperOneHeadingRef.current && lastPaperOneCategoryRef.current && lastPaperOneDescRef.current) {
            lastPaperOneCategoryRef.current.textContent = data["0"].category;
            lastPaperOneHeadingRef.current.textContent = data["0"].title;
            lastPaperOneDescRef.current.textContent = data["0"].description;
          }
        } else if (num == 2) {
          if (lastPaperTwoHeadingRef.current && lastPaperTwoCategoryRef.current && lastPaperTwoDescRef.current) {
            lastPaperTwoCategoryRef.current.textContent = data["1"].category;
            lastPaperTwoHeadingRef.current.textContent = data["1"].title;
            lastPaperTwoDescRef.current.textContent = data["1"].description;
          }
        } else if (num == 3) {
          if (lastPaperThreeHeadingRef.current && lastPaperThreeCategoryRef.current && lastPaperThreeDescRef.current) {
            lastPaperThreeCategoryRef.current.textContent = data["2"].category;
            lastPaperThreeHeadingRef.current.textContent = data["2"].title;
            lastPaperThreeDescRef.current.textContent = data["2"].description;
          }
        } else if (num == 4) {
          if (lastPaperFourHeadingRef.current && lastPaperFourCategoryRef.current && lastPaperFourDescRef.current) {
            lastPaperFourCategoryRef.current.textContent = data["3"].category;
            lastPaperFourHeadingRef.current.textContent = data["3"].title;
            lastPaperFourDescRef.current.textContent = data["3"].description;
          }
        }
      }
    } catch(err) {
      console.error('Load error:', err)
    }
  }

  useEffect(() => {
    loadLatestPublication()
    loadMostReadPapers(1)
    loadMostReadPapers(2)
    loadMostReadPapers(3)
    loadMostReadPapers(4)
    loadMostReadPapers(5)
    asyncGetLastPaper(1)
    asyncGetLastPaper(2)
    asyncGetLastPaper(3)
    asyncGetLastPaper(4)
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
                <div className='mainmenu-mostread-post'><p className='mainmenu-mostread-post-heading' ref={mostReadOneHeadingRef}></p> <p className='mainmenu-mostread-post-content' ref={mostReadOneDescRef}></p></div>
                <hr />
                <div className='mainmenu-mostread-post'><p className='mainmenu-mostread-post-heading' ref={mostReadTwoHeadingRef}></p> <p className='mainmenu-mostread-post-content' ref={mostReadTwoDescRef}></p></div>
                <hr />
                <div className='mainmenu-mostread-post'><p className='mainmenu-mostread-post-heading' ref={mostReadThreeHeadingRef}></p> <p className='mainmenu-mostread-post-content' ref={mostReadThreeDescRef}></p></div>
                <hr />
                <div className='mainmenu-mostread-post'><p className='mainmenu-mostread-post-heading' ref={mostReadFourHeadingRef}></p> <p className='mainmenu-mostread-post-content' ref={mostReadFourDescRef}></p></div>
                <hr />
                <div className='mainmenu-mostread-post'><p className='mainmenu-mostread-post-heading' ref={mostReadFiveHeadingRef}></p> <p className='mainmenu-mostread-post-content' ref={mostReadFiveDescRef}></p></div>
              </div>
              <hr />
              <div className='mainmenu-mostread-more'><a href="/mostread" className='mainmenu-mostread-more'>MORE</a></div>
            </div>
          </div>

          <div className='mainmenu-lastpaper-line'></div>
        <p className='mainmenu-lastpaper'>LAST PAPER</p>
        <div className='mainmenu-lastpaper-blocks'>
          <div className='mainmenu-lastpaper-block'>
            <a href="/categories/computers" ref={lastPaperOneCategoryRef}>COMPUTERS</a>
            <h3 ref={lastPaperOneHeadingRef}></h3>
            <p ref={lastPaperOneDescRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
            <button>MORE</button>
          </div>
          <div className='mainmenu-lastpaper-block'>
            <a href="/categories/computers" ref={lastPaperTwoCategoryRef}>COMPUTERS</a>
            <h3 ref={lastPaperTwoHeadingRef}></h3>
            <p ref={lastPaperTwoDescRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
            <button>MORE</button>
          </div>
          <div className='mainmenu-lastpaper-blockright'>
            <a href="/categories/computers" ref={lastPaperThreeCategoryRef}>COMPUTERS</a>
            <h3 ref={lastPaperThreeHeadingRef}></h3>
            <p ref={lastPaperThreeDescRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
            <button>MORE</button>
          </div>
          <div className='mainmenu-lastpaper-blockright'>
            <a href="/categories/computers" ref={lastPaperFourCategoryRef}>COMPUTERS</a>
            <h3 ref={lastPaperFourHeadingRef}></h3>
            <p ref={lastPaperFourDescRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
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