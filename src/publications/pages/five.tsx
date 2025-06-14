import { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { ChangePage } from "../../utils/BasicFunctions";
import styles from "../../styles/Publications.module.css";
import { Publications } from "../../utils/api";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function PublicationsPageFive() {
  const textRef1 = useRef<HTMLParagraphElement>(null)
  const textRef2 = useRef<HTMLParagraphElement>(null)
  const textRef3 = useRef<HTMLParagraphElement>(null)

  const imgRef1 = useRef<HTMLImageElement>(null)
  const imgRef2 = useRef<HTMLImageElement>(null)
  const imgRef3 = useRef<HTMLImageElement>(null)
  const { t } = useTranslation();

  const page = "5";

  const [pubIds, setPubIds] = useState<string[]>(["", "", ""]);

  async function GetPublications(publication: number) {
    try {
        const data = await Publications();
        if (textRef1.current && textRef2.current && textRef3.current && imgRef1.current && imgRef2.current && imgRef3.current) {
            if (publication == 1) {
                textRef1.current.textContent = data[page].pub0.description
                imgRef1.current.src = data[page].pub0.thubnail_url
                setPubIds(prev => {
                  const copy = [...prev];
                  copy[0] = data[page].pub0.id;
                  return copy;
                })
            }
            else if (publication == 2) {
                textRef2.current.textContent = data[page].pub1.description
                imgRef2.current.src = data[page].pub1.thubnail_url
                setPubIds(prev => {
                  const copy = [...prev];
                  copy[1] = data[page].pub1.id;
                  return copy;
                })
            }
            else if (publication == 3) {
                textRef3.current.textContent = data[page].pub2.description
                imgRef3.current.src = data[page].pub2.thubnail_url 
                setPubIds(prev => {
                  const copy = [...prev];
                  copy[2] = data[page].pub2.id;
                  return copy;
                })
            }
        }
    } catch (err) {
      console.error('Load error:', err);
    }
  }

  useEffect(() => {
    document.title = "TUIT Bullet - Publications";
    GetPublications(1)
    GetPublications(2)
    GetPublications(3)
  }, []);

  return (
    <>
      <Header />

      <div
        className="content"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className={styles["publications-line"]}></div>
        <h1 className={styles.publications}>{t('publications.title')}</h1>
        <div className={styles.publication} id="publication-1">
          <img src="https://picsum.photos/300/400" alt="Thumbnail" ref={imgRef1}/>
          <p>
            <p ref={textRef1} style={{margin: "0px"}}></p>
            <br />
            <a href="/categories/computer">{t('publications.tags.computer')}</a>{" "}
            <a href="/categories/lines">{t('publications.tags.lines')}</a>
            <br />
            <a href={`/publication?id=${pubIds[0]}`}><button>{t('more')}</button></a>
          </p>
        </div>
        <div className={styles.publication} id="publication-2">
          <img src="https://picsum.photos/300/400" alt="Thumbnail" ref={imgRef2}/>
          <p>
            <p ref={textRef2} style={{margin: "0px"}}></p>
            <br />
            <a href="/categories/computer">{t('publications.tags.computer')}</a>{" "}
            <a href="/categories/lines">{t('publications.tags.lines')}</a>
            <br />
            <a href={`/publication?id=${pubIds[1]}`}><button>{t('more')}</button></a>
          </p>
        </div>
        <div className={styles.publication} id="publication-3">
          <img src="https://picsum.photos/300/400" alt="Thumbnail" ref={imgRef3}/>
          <p>
            <p ref={textRef3} style={{margin: "0px"}}></p>
            <br />
            <a href="/categories/computer">{t('publications.tags.computer')}</a>{" "}
            <a href="/categories/lines">{t('publications.tags.lines')}</a>
            <br />
            <a href={`/publication?id=${pubIds[2]}`}><button>{t('more')}</button></a>
          </p>
        </div>
        <div style={{ display: "flex" }} className={styles["pages"]}>
          <button className={styles["pages-button-nextprevious"]} onClick={() => ChangePage("/publications/1")}>
            {t('publications.previous')}
          </button>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <button
              className={styles["pages-button"]}
              onClick={() => {
                ChangePage("/publications/1");
              }}
            >
              1
            </button>
            <button
              className={styles["pages-button"]}
              onClick={() => {
                ChangePage("/publications/2");
              }}
            >
              2
            </button>
            <button
              className={styles["pages-button"]}
              onClick={() => {
                ChangePage("/publications/3");
              }}
            >
              3
            </button>
            <button
              className={styles["pages-button"]}
              onClick={() => {
                ChangePage("/publications/4");
              }}
            >
              4
            </button>
            <button
              className={styles["pages-button"]}
              onClick={() => {
                ChangePage("/publications/5");
              }}
            >
              5
            </button>
            <button
              className={styles["pages-button"]}
              onClick={() => {
                ChangePage("/publications/6");
              }}
            >
              6
            </button>
            <button
              className={styles["pages-button"]}
              onClick={() => {
                ChangePage("/publications/7");
              }}
            >
              7
            </button>
            <button
              className={styles["pages-button"]}
              onClick={() => {
                ChangePage("/publications/8");
              }}
            >
              8
            </button>
          </div>
          <button
            className={styles["pages-button-nextprevious"]}
            onClick={() => ChangePage("/publications/3")}
          >
            {t('publications.next')}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PublicationsPageFive;