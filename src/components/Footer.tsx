import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <div className="footer">
            <div className="footer-links">
                <div className="footer-links-left">
                    <h1>{t("footer.menu")}</h1>
                    <div><a href="/publications">{t("header.publications")}</a></div>
                    <div><a href="/papers">{t("header.papers")}</a></div>
                    <div><a href="/requirements">{t("header.requirements")}</a></div>
                    <div><a href="/faq">{t("header.faq")}</a></div>
                    <div><a href="/contacts">{t("header.contacts")}</a></div>
                </div>
                <div className="footer-links-right">
                    <h1>{t('footer.address')}</h1>
                    <p>Tashkent, Amir Temur street, <br /> 108 building</p>
                    <h1>{t('footer.media')}</h1>
                    <div className="footer-icons">
                        <a href="https://t.me/@tuit"><RiTelegram2Fill className="footer-icon" /></a>
                        <a href="https://facebook.com/tuit"><FaFacebookSquare className="footer-icon" /></a>
                        <a href="https://instagram.com/tuit"><FaInstagram className="footer-icon" /></a>
                    </div>
                    <select
                        value={lang}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        style={{
                            width: "200px",
                            height: "30px",
                            borderRadius: "50px",
                            border: "3px solid #24374a",
                            backgroundColor: "#24374a",
                            color: "white"
                        }}
                    >
                        <option value="uz">UZ</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                </div>
            </div>
            <div className="footer-footer">
                <p>© 2021 {t("header.title")} | All rights reserved!</p>
            </div>
        </div>
    );
}

export default Footer;