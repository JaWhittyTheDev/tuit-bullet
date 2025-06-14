import { ChangeTitle } from "./utils/BasicFunctions";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./styles/Contacts.module.css";
import { SendContactsData } from "./utils/api";
import { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

function Contacts() {
    const firstnameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    async function sendContacts(event: React.FormEvent) {
        event.preventDefault();
        if (firstnameRef.current && emailRef.current && messageRef.current) {
            try {
                const result = await SendContactsData(firstnameRef, emailRef, messageRef);
                alert(result)
            } catch {
                alert("Ошибка! Попробуйте еще раз позже.")
            }
        }
    }

    ChangeTitle("TUIT Bullet - Contacts");

    const { t } = useTranslation()

    return (
        <>
            <Header />

            <div className="content">
                <div className={styles.contactsline}></div>
                <h1 className={styles.contactstitle}>{t('contacts.title')}</h1>
                <div className={styles.contactsbox}>
                    <div className={styles.contactsinbox}>
                        <form onSubmit={sendContacts}>
                            <input ref={firstnameRef} type="text" placeholder={t('contacts.first')} />
                            <input ref={emailRef} type="email" placeholder={t('contacts.email')} />
                            <textarea ref={messageRef} placeholder={t('contacts.message')}></textarea>
                            <button type="submit">{t("contacts.send")}</button>
                        </form>
                        <div className={styles.contactsinfo}>
                            <h3><LuMapPin /> {t('contacts.address')}</h3>
                            <p>Tashkent, Amir Temur street, 108 building, Tashkent information technology university</p>
                            <h3><FiPhone /> {t('contacts.tel')}</h3>
                            <p>+998 (45) 663-84-4431</p>
                            <h3><MdOutlineEmail /> {t('contacts.email')}</h3>
                            <p>tuit-bulletin@tuit.uz</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default Contacts