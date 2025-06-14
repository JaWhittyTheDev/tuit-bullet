import { useEffect, useRef } from "react";
import styles from './styles/Requirements.module.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

function Requirements() {
    const reqstextRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    function onRequirement(num: number) {
      if (num === 1 && reqstextRef.current) {
        reqstextRef.current.textContent = t('requirements.1');
      } else if (num === 2 && reqstextRef.current) {
        reqstextRef.current.textContent = t('requirements.2');
      } else if (num === 3 && reqstextRef.current) {
        reqstextRef.current.textContent = t('requirements.3');
      } else if (num === 4 && reqstextRef.current) {
        reqstextRef.current.textContent = t('requirements.4');
      } else if (num === 5 && reqstextRef.current) {
        reqstextRef.current.textContent = t('requirements.5');
      } else if (num === 6 && reqstextRef.current) {
        reqstextRef.current.textContent = t('requirements.6');
      } else if (num === 7 && reqstextRef.current) {
        reqstextRef.current.textContent = t('requirements.7');
      } else if (num === 8 && reqstextRef.current) {
        reqstextRef.current.textContent = t('requirements.8');
      } else if (num === 9 && reqstextRef.current) {
        reqstextRef.current.textContent = t('requirements.9');
      }
    }

    useEffect(() => {
        document.title = 'TUIT Bullet - Requirements';
    }, []);

    return (
      <>
        <Header />

        <div className="content">
          <div className={styles["requirements-line"]}></div>
          <h1 className={styles["requirements-title"]}>{t('requirements.title')}</h1>
          <div className={styles["requirements-box"]}>
            <div className={styles["requirements-list"]}>
              <p>{t('requirements.list')}</p>
              <input type="radio" id="radio1" name="group" onChange={() => onRequirement(1)} />
              <label htmlFor="radio1">Lorem ipsum part 1</label>

              <input type="radio" id="radio2" name="group" onChange={() => onRequirement(2)} />
              <label htmlFor="radio2">Lorem ipsum part 2</label>

              <input type="radio" id="radio3" name="group" onChange={() => onRequirement(3)} />
              <label htmlFor="radio3">Lorem ipsum part 3</label>

              <input type="radio" id="radio4" name="group" onChange={() => onRequirement(4)} />
              <label htmlFor="radio4">Lorem ipsum part 4</label>

              <input type="radio" id="radio5" name="group" onChange={() => onRequirement(5)} />
              <label htmlFor="radio5">Lorem ipsum part 5</label>

              <input type="radio" id="radio6" name="group" onChange={() => onRequirement(6)} />
              <label htmlFor="radio6">Lorem ipsum part 6</label>

              <input type="radio" id="radio7" name="group" onChange={() => onRequirement(7)} />
              <label htmlFor="radio7">Lorem ipsum part 7</label>

              <input type="radio" id="radio8" name="group" onChange={() => onRequirement(8)} />
              <label htmlFor="radio8">Lorem ipsum part 8</label>

              <input type="radio" id="radio9" name="group" onChange={() => onRequirement(9)} />
              <label htmlFor="radio9">Lorem ipsum part 9</label>
            </div>
            <div className={styles["requirements-content"]}>
              <p className={styles["title"]}>{t('requirements.desc')}</p>
              <p id="requirements-text" ref={reqstextRef}>{t('requirements.1')}</p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
}

export default Requirements;