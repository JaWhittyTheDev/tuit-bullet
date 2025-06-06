import { search, ChangeTitle } from "./utils/BasicFunctions";
import { SearchFilled } from "@fluentui/react-icons";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./styles/Contacts.module.css";

function Contacts() {
    ChangeTitle("TUIT Bullet - Contacts");
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

            <div className="content">
                <div className={styles.contactsline}></div>
                <h1 className={styles.contactstitle}>CONTACTS</h1>
                <div className={styles.contactsbox}>
                    <div className={styles.contactsinbox}>
                        <form>
                            <input type="text" placeholder="First name"/>
                            <input type="email" placeholder="E-mail" />
                            <textarea placeholder="Message"></textarea>
                            <button type="submit">SEND</button>
                        </form>
                        <div className={styles.contactsinfo}>
                            <h3><LuMapPin /> Address:</h3>
                            <p>Tashkent, Amir Temur street, 108 building, Tashkent information technology university</p>
                            <h3><FiPhone /> Telephone number:</h3>
                            <p>+998 (45) 663-84-4431</p>
                            <h3><MdOutlineEmail /> E-mail:</h3>
                            <p>tuit-bulletin@tuit.uz</p>
                        </div>
                    </div>
                </div>
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

export default Contacts