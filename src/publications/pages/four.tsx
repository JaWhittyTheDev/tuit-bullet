import { SearchFilled } from '@fluentui/react-icons';
import {useEffect} from "react";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { search, ChangePage } from "../../utils/BasicFunctions";
import styles from '../../styles/Publications.module.css';

function PublicationsPageFour() {
    useEffect(() => {
        document.title = 'TUIT Bullet - Publications';
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
                        <input type="text" className='searchinput' name="q" placeholder='search' />
                        <button type="submit" className='searchbutton'>
                            <SearchFilled />
                        </button>
                    </form>
                </div>
            </div>
            <div className='header-line'></div>

            <div className="content">
                <div className={styles["publications-line"]}></div>
                <h1 className={styles.publications}>PUBLICATIONS</h1>
                <div className={styles.publication} id='publication-1'>
                    <img src="https://picsum.photos/300/400" alt="Thumbnail" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam similique laudantium provident aspernatur voluptatem magnam quibusdam. Assumenda totam eligendi eum sapiente sit modi labore corporis recusandae tempora non excepturi mollitia, nesciunt ea quidem reiciendis quaerat laudantium illum. A iure veritatis quas laboriosam reprehenderit quo incidunt modi adipisci provident. Atque ad eaque dolore odit. Quam perspiciatis, pariatur optio et nobis, quidem, rerum voluptates facere adipisci nihil minus veniam earum? Dolore, culpa ipsam placeat ducimus maxime inventore quam accusamus vel neque alias reiciendis in odit corporis cumque repellat odio error voluptatem voluptates eligendi, iste recusandae doloribus omnis modi veniam. Obcaecati laborum praesentium numquam error tenetur. Consectetur quam cupiditate quae sed! Commodi fugit accusantium doloremque earum adipisci, incidunt officia a voluptates temporibus ea error! Aliquid sed, dolores asperiores eius tenetur error dolore quidem odio provident? Debitis vero, facilis modi in sint deleniti incidunt cum voluptates ex optio maxime ab illo, quod consectetur.
                    <br />
                    <a href="/categories/computer">Computer</a> <a href="/categories/lines">Lines</a>
                    <br />
                    <button>MORE</button>
                    </p>
                </div>
                <div className={styles.publication} id='publication-2'>
                    <img src="https://picsum.photos/300/400" alt="Thumbnail" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam similique laudantium provident aspernatur voluptatem magnam quibusdam. Assumenda totam eligendi eum sapiente sit modi labore corporis recusandae tempora non excepturi mollitia, nesciunt ea quidem reiciendis quaerat laudantium illum. A iure veritatis quas laboriosam reprehenderit quo incidunt modi adipisci provident. Atque ad eaque dolore odit. Quam perspiciatis, pariatur optio et nobis, quidem, rerum voluptates facere adipisci nihil minus veniam earum? Dolore, culpa ipsam placeat ducimus maxime inventore quam accusamus vel neque alias reiciendis in odit corporis cumque repellat odio error voluptatem voluptates eligendi, iste recusandae doloribus omnis modi veniam. Obcaecati laborum praesentium numquam error tenetur. Consectetur quam cupiditate quae sed! Commodi fugit accusantium doloremque earum adipisci, incidunt officia a voluptates temporibus ea error! Aliquid sed, dolores asperiores eius tenetur error dolore quidem odio provident? Debitis vero, facilis modi in sint deleniti incidunt cum voluptates ex optio maxime ab illo, quod consectetur.
                    <br />
                    <a href="/categories/computer">Computer</a> <a href="/categories/lines">Lines</a>
                    <br />
                    <button>MORE</button>
                    </p>
                </div>
                <div className={styles.publication} id='publication-3'>
                    <img src="https://picsum.photos/300/400" alt="Thumbnail" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam similique laudantium provident aspernatur voluptatem magnam quibusdam. Assumenda totam eligendi eum sapiente sit modi labore corporis recusandae tempora non excepturi mollitia, nesciunt ea quidem reiciendis quaerat laudantium illum. A iure veritatis quas laboriosam reprehenderit quo incidunt modi adipisci provident. Atque ad eaque dolore odit. Quam perspiciatis, pariatur optio et nobis, quidem, rerum voluptates facere adipisci nihil minus veniam earum? Dolore, culpa ipsam placeat ducimus maxime inventore quam accusamus vel neque alias reiciendis in odit corporis cumque repellat odio error voluptatem voluptates eligendi, iste recusandae doloribus omnis modi veniam. Obcaecati laborum praesentium numquam error tenetur. Consectetur quam cupiditate quae sed! Commodi fugit accusantium doloremque earum adipisci, incidunt officia a voluptates temporibus ea error! Aliquid sed, dolores asperiores eius tenetur error dolore quidem odio provident? Debitis vero, facilis modi in sint deleniti incidunt cum voluptates ex optio maxime ab illo, quod consectetur.
                    <br />
                    <a href="/categories/computer">Computer</a> <a href="/categories/lines">Lines</a>
                    <br />
                    <button>MORE</button>
                    </p>
                </div>
                <div style={{display: 'flex'}} className={styles['pages']}>
                    <button className={styles['pages-button-nextprevious']} onClick={() => ChangePage("/publications/3")}>Previous Page</button>
                    <div>
                        <button className={styles['pages-button']} onClick={() => { ChangePage("/publications/1") }}>1</button>
                        <button className={styles['pages-button']} onClick={() => { ChangePage("/publications/2") }} >2</button>
                        <button className={styles['pages-button']} onClick={() => { ChangePage("/publications/3") }}>3</button>
                        <button className={styles['pages-button']} onClick={() => { ChangePage("/publications/4") }}>4</button>
                        <button className={styles['pages-button']} onClick={() => { ChangePage("/publications/5") }}>5</button>
                        <button className={styles['pages-button']} onClick={() => { ChangePage("/publications/6") }}>6</button>
                        <button className={styles['pages-button']} onClick={() => { ChangePage("/publications/7") }}>7</button>
                        <button className={styles['pages-button']} onClick={() => { ChangePage("/publications/8") }}>8</button>
                    </div>
                    <button className={styles['pages-button-nextprevious']} onClick={() => ChangePage("/publications/5")}>Next Page</button>
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
                            <a href="https://t.me/@tuit"><RiTelegram2Fill className='footer-icon' /></a>
                            <a href="https://facebook.com/tuit"><FaFacebookSquare className='footer-icon' /></a>
                            <a href="https://instagram.com/tuit"><FaInstagram className='footer-icon' /></a>
                        </div>
                    </div>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.3672880048543!2d69.57199217476885!3d41.474636371288945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefcaa62ce469b%3A0x5b967b77a7db66c7!2z0YPQu9C40YbQsCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsCAxMDgsIDExMTYwNiwg0KfQuNGA0YfQuNC6LCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1747588578706!5m2!1sru!2s"
                    width="600"
                    height="450"
                    loading="lazy"
                    className='footer-maps'
                    title="Google Map"
                ></iframe>
                <div className='footer-footer'>
                    <p>© 2021 Bulletin of TUIT: Management and Communication Technologies | All rights reserved!</p>
                </div>
            </div>
        </>
    );
}

export default PublicationsPageFour;