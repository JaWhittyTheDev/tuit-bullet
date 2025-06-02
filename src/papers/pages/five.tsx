import {useEffect} from "react";
import { SearchFilled } from '@fluentui/react-icons';
import { search, ChangePage } from '../../utils/BasicFunctions';
import { RiTelegram2Fill } from 'react-icons/ri';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { LuSquareUserRound } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa6";
import styles from '../../styles/Papers.module.css';

function advancedSearch() {
  console.log("Advanced search clicked");
}

function PapersPageFive() {
    useEffect(() => {
        document.title = 'TUIT Bullet - Papers';
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

            <div className={styles.content}>
              <div className={styles['papers-line']}></div>
              <h1 className={styles['papers-title']}>PAPERS</h1>

              <div className={styles['papers-search']}>
                <div className={styles['center-wrapper']}>
                  <h2>Search articles and books chapters of bulletins of TUIT</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                    <input type="text" placeholder="title" />
                    <input type="text" placeholder="author" />
                    <input type="text" placeholder="keywords" />
                    <input type="text" placeholder="references" />
                    <select id="sphere">
                      <option value="sphere">sphere</option>
                      <option value="computers">Computers</option>
                    </select>
                    <button type="submit" className={styles["search-button"]}>
                      <SearchFilled />
                    </button>
                    <button onClick={advancedSearch}>Advanced search</button>
                  </div>
                </div>
              </div>
              <div className={styles.papers}>
                <div className={styles["papers-row"]}>
                  <div className={styles["papers-paper"]}>
                    <a href="/papers?category=computers">COMPUTERS</a>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, odit distinctio.</h3>
                    <div style={{display: 'flex', marginLeft: '-10px'}}>
                      <p style={{margin: '10px'}}><HiOutlineCalendarDateRange/> 27.01.2018</p>
                      <p style={{margin: '10px'}}><LuSquareUserRound/> SARVARBEK</p>
                      <p style={{margin: '10px'}}><FaRegEye /> 325</p>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, commodi qui. Enim provident, expedita laboriosam dolorem, laborum atque minus ex mollitia possimus maiores qui inventore nostrum, aut dolor cum sapiente.</p>
                    <button>MORE</button>
                  </div>
                  <div className={styles["papers-paper"]}>
                    <a href="/papers?category=computers">COMPUTERS</a>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, odit distinctio.</h3>
                    <div style={{display: 'flex', marginLeft: '-10px'}}>
                      <p style={{margin: '10px'}}><HiOutlineCalendarDateRange/> 27.01.2018</p>
                      <p style={{margin: '10px'}}><LuSquareUserRound/> SARVARBEK</p>
                      <p style={{margin: '10px'}}><FaRegEye /> 325</p>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, commodi qui. Enim provident, expedita laboriosam dolorem, laborum atque minus ex mollitia possimus maiores qui inventore nostrum, aut dolor cum sapiente.</p>
                    <button>MORE</button>
                  </div>
                </div>

                <div className={styles["papers-row"]}>
                  <div className={styles["papers-paper"]}>
                    <a href="/papers?category=computers">COMPUTERS</a>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, odit distinctio.</h3>
                    <div style={{display: 'flex', marginLeft: '-10px'}}>
                      <p style={{margin: '10px'}}><HiOutlineCalendarDateRange/> 27.01.2018</p>
                      <p style={{margin: '10px'}}><LuSquareUserRound/> SARVARBEK</p>
                      <p style={{margin: '10px'}}><FaRegEye /> 325</p>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, commodi qui. Enim provident, expedita laboriosam dolorem, laborum atque minus ex mollitia possimus maiores qui inventore nostrum, aut dolor cum sapiente.</p>
                    <button>MORE</button>
                  </div>
                  <div className={styles["papers-paper"]}>
                    <a href="/papers?category=computers">COMPUTERS</a>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, odit distinctio.</h3>
                    <div style={{display: 'flex', marginLeft: '-10px'}}>
                      <p style={{margin: '10px'}}><HiOutlineCalendarDateRange/> 27.01.2018</p>
                      <p style={{margin: '10px'}}><LuSquareUserRound/> SARVARBEK</p>
                      <p style={{margin: '10px'}}><FaRegEye /> 325</p>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, commodi qui. Enim provident, expedita laboriosam dolorem, laborum atque minus ex mollitia possimus maiores qui inventore nostrum, aut dolor cum sapiente.</p>
                    <button>MORE</button>
                  </div>
                </div>
                
                <div className={styles["papers-row"]}>
                  <div className={styles["papers-paper"]}>
                    <a href="/papers?category=computers">COMPUTERS</a>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, odit distinctio.</h3>
                    <div style={{display: 'flex', marginLeft: '-10px'}}>
                      <p style={{margin: '10px'}}><HiOutlineCalendarDateRange/> 27.01.2018</p>
                      <p style={{margin: '10px'}}><LuSquareUserRound/> SARVARBEK</p>
                      <p style={{margin: '10px'}}><FaRegEye /> 325</p>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, commodi qui. Enim provident, expedita laboriosam dolorem, laborum atque minus ex mollitia possimus maiores qui inventore nostrum, aut dolor cum sapiente.</p>
                    <button>MORE</button>
                  </div>
                  <div className={styles["papers-paper"]}>
                    <a href="/papers?category=computers">COMPUTERS</a>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, odit distinctio.</h3>
                    <div style={{display: 'flex', marginLeft: '-10px'}}>
                      <p style={{margin: '10px'}}><HiOutlineCalendarDateRange/> 27.01.2018</p>
                      <p style={{margin: '10px'}}><LuSquareUserRound/> SARVARBEK</p>
                      <p style={{margin: '10px'}}><FaRegEye /> 325</p>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, commodi qui. Enim provident, expedita laboriosam dolorem, laborum atque minus ex mollitia possimus maiores qui inventore nostrum, aut dolor cum sapiente.</p>
                    <button>MORE</button>
                  </div>
                </div>
              </div>
            </div>
                <div style={{display: 'flex'}} className={styles['pages']}>
                    <button className={styles['pages-button-nextprevious']} onClick={() => ChangePage("/papers/4")}>Previous Page</button>
                    <div>
                        <button className={styles['pages-button']} onClick={() => ChangePage("/papers/1")}>1</button>
                        <button className={styles['pages-button']} onClick={() => ChangePage("/papers/2")} >2</button>
                        <button className={styles['pages-button']} onClick={() => ChangePage("/papers/3")}>3</button>
                        <button className={styles['pages-button']} onClick={() => ChangePage("/papers/4")}>4</button>
                        <button className={styles['pages-button']} onClick={() => ChangePage("/papers/5")}>5</button>
                        <button className={styles['pages-button']} onClick={() => ChangePage("/papers/6")}>6</button>
                        <button className={styles['pages-button']} onClick={() => ChangePage("/papers/7")}>7</button>
                        <button className={styles['pages-button']} onClick={() => ChangePage("/papers/8")}>8</button>
                    </div>
                    <button className={styles['pages-button-nextprevious']} onClick={() => ChangePage("/papers/6")}>Next Page</button>
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

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.3672880048543!2d69.57199217476885!3d41.474636371288945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefcaa62ce469b%3A0x5b967b77a7db66c7!2z0YPQu9C40YbQsCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsCAxMDgsIDExMTYwNiwg0KfQuNGA0YfQuNC6LCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1747588578706!5m2!1sru!2s" width="600" height="450" loading="lazy" className='footer-maps'></iframe>
            <div className='footer-footer'>
              <p>© 2021 Bulletin of TUIT: Management and Communication Technologies | All rights reserved!</p>
            </div>
          </div>
        </>
    );
}

export default PapersPageFive;