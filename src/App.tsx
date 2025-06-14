import './styles/App.css'
import { getLatestPublication, getMostReadPapers, getLastPaper } from './utils/api';
import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ChangePage, ChangeTitle } from './utils/BasicFunctions';
import { useTranslation } from 'react-i18next';

function App() {
  const lastEditionRef = useRef<HTMLParagraphElement>(null);
  const lastEditionThubnailRef = useRef<HTMLImageElement>(null);

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

  const { t } = useTranslation();

  ChangeTitle("TUIT Bullet");

  async function loadLatestPublication() {
    try {
      const data = await getLatestPublication();
      if (lastEditionRef.current && lastEditionThubnailRef.current) {
        lastEditionRef.current.textContent = data.text;
        lastEditionThubnailRef.current.src = data.thubnail_url;
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
      <Header />

      <div className='content'>
        <div className='mainmenu-lastedition-line'></div>
        <p className='mainmenu-lastedition'>{t('home.lastedition')}</p>
        <div className='mainmenu-block-1'>
          <img src="https://picsum.photos/210/297" alt="Image" ref={lastEditionThubnailRef}/>
          <p ref={lastEditionRef}></p>
          <button onClick={() => window.location.href = "/publications"}>{t('more')}</button>
        </div>

        <div className='mainmenu-mostread-line'></div>
        <p className='mainmenu-mostread'>{t('home.mostreadpaper')}</p>
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
              <div className='mainmenu-mostread-more'><a href="/papers" className='mainmenu-mostread-more'>{t('more')}</a></div>
            </div>
          </div>

          <div className='mainmenu-lastpaper-line'></div>
        <p className='mainmenu-lastpaper'>{t('home.lastpaper')}</p>
        <div className='mainmenu-lastpaper-blocks'>
          <div className='mainmenu-lastpaper-block'>
            <a href="/categories/computers" ref={lastPaperOneCategoryRef}>COMPUTERS</a>
            <h3 ref={lastPaperOneHeadingRef}></h3>
            <p ref={lastPaperOneDescRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
            <button onClick={() => ChangePage('/papers')}>{t('more')}</button>
          </div>
          <div className='mainmenu-lastpaper-block'>
            <a href="/categories/computers" ref={lastPaperTwoCategoryRef}>COMPUTERS</a>
            <h3 ref={lastPaperTwoHeadingRef}></h3>
            <p ref={lastPaperTwoDescRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
            <button onClick={() => ChangePage('/papers')}>{t('more')}</button>
          </div>
          <div className='mainmenu-lastpaper-blockright'>
            <a href="/categories/computers" ref={lastPaperThreeCategoryRef}>COMPUTERS</a>
            <h3 ref={lastPaperThreeHeadingRef}></h3>
            <p ref={lastPaperThreeDescRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
            <button onClick={() => ChangePage('/papers')}>{t('more')}</button>
          </div>
          <div className='mainmenu-lastpaper-blockright'>
            <a href="/categories/computers" ref={lastPaperFourCategoryRef}>COMPUTERS</a>
            <h3 ref={lastPaperFourHeadingRef}></h3>
            <p ref={lastPaperFourDescRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia minima cupiditate odit fugiat? Laborum laboriosam unde culpa sed a?</p>
            <button onClick={() => ChangePage('/papers')}>{t('more')}</button>
          </div>
          <a href="/papers" className='mainmenu-lastpaper-more'>{t('more')}</a>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default App