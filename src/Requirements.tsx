import { useEffect, useRef } from "react";
import { SearchFilled } from '@fluentui/react-icons';
import { search } from './utils/BasicFunctions';
import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import reqslist from './json/requirements.json' with { type: 'json' };
import styles from './styles/Requirements.module.css';

function Requirements() {
    const reqstextRef = useRef<HTMLDivElement>(null);

    function onRequirement(num: number) {
      if (num === 1 && reqstextRef.current) {
        reqstextRef.current.textContent = reqslist.one;
      } else if (num === 2 && reqstextRef.current) {
        reqstextRef.current.textContent = reqslist.two;
      } else if (num === 3 && reqstextRef.current) {
        reqstextRef.current.textContent = reqslist.three;
      } else if (num === 4 && reqstextRef.current) {
        reqstextRef.current.textContent = reqslist.four;
      } else if (num === 5 && reqstextRef.current) {
        reqstextRef.current.textContent = reqslist.five;
      } else if (num === 6 && reqstextRef.current) {
        reqstextRef.current.textContent = reqslist.six;
      } else if (num === 7 && reqstextRef.current) {
        reqstextRef.current.textContent = reqslist.seven;
      } else if (num === 8 && reqstextRef.current) {
        reqstextRef.current.textContent = reqslist.eight;
      } else if (num === 9 && reqstextRef.current) {
        reqstextRef.current.textContent = reqslist.nine;
      }
    }

    useEffect(() => {
        document.title = 'TUIT Bullet - Requirements';
    }, []);

    return (
      <>
        <div className="header">
          <img src="https://picsum.photos/100" alt="Logo" />
          <h1>
            Bulletin of TUIT: Management and <br /> Communication Technologies
          </h1>
          <div className="header-right">
            <a href="/sendpaper">SEND PAPER</a>
            <a href="/sign-in">SIGN IN / SIGN OUT</a>
          </div>
        </div>
        <div className="header-line"></div>

        <div className="links">
          <div className="links-left">
            <a href="/">Main</a>
            <a href="/publications">Publications</a>
            <a href="/papers">Papers</a>
            <a href="/requirements">Requirements</a>
            <a href="/faq">FAQ</a>
            <a href="/contacts">Contacts</a>
          </div>
          <div className="search">
            <form onSubmit={search}>
              <input
                type="text"
                className="searchinput"
                name="q"
                placeholder="search"
              />
              <button type="submit" className="searchbutton">
                <SearchFilled />
              </button>
            </form>
          </div>
        </div>

        <div className="header-line"></div>

        <div className="content">
          <div className={styles["requirements-line"]}></div>
          <h1 className={styles["requirements-title"]}>REQUIREMENTS</h1>
          <div className={styles["requirements-box"]}>
            <div className={styles["requirements-list"]}>
              <p>LIST OF REQUIREMENTS</p>
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
              <p className={styles["title"]}>DESCRIPTION OF REQUIREMENTS</p>
              <p id="requirements-text" ref={reqstextRef}>{reqslist.one}</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-links">
            <div className="footer-links-left">
              <h1>MENU</h1>
              <div>
                <a href="/publications">Publications</a>
              </div>
              <div>
                <a href="/papers">Papers</a>
              </div>
              <div>
                <a href="/requirements">Requirements</a>
              </div>
              <div>
                <a href="/faq">FAQ</a>
              </div>
              <div>
                <a href="/contacts">Contacts</a>
              </div>
            </div>
            <div className="footer-links-right">
              <h1>ADDRESS</h1>
              <p>
                Tashkent, Amir Temur street, <br /> 108 building
              </p>
              <h1>SOCIAL MEDIA</h1>
              <div className="footer-icons">
                <a href="https://t.me/@tuit">
                  <RiTelegram2Fill className="footer-icon" />
                </a>
                <a href="https://facebook.com/tuit">
                  <FaFacebookSquare className="footer-icon" />
                </a>
                <a href="https://instagram.com/tuit">
                  <FaInstagram className="footer-icon" />
                </a>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.3672880048543!2d69.57199217476885!3d41.474636371288945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefcaa62ce469b%3A0x5b967b77a7db66c7!2z0YPQu9C40YbQsCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsCAxMDgsIDExMTYwNiwg0KfQuNGA0YfQuNC6LCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1747588578706!5m2!1sru!2s"
            width="600"
            height="450"
            loading="lazy"
            className="footer-maps"
          ></iframe>
          <div className="footer-footer">
            <p>
              © 2021 Bulletin of TUIT: Management and Communication Technologies
              | All rights reserved!
            </p>
          </div>
        </div>
      </>
    );
}

export default Requirements;