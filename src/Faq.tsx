import { useRef } from "react";
import styles from "./styles/Faq.module.css";
import { ChangeTitle } from "./utils/BasicFunctions";
import questions from "./json/faq.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

function Faq() {
    ChangeTitle("TUIT Bullet - FAQ");

    const checkbox1Ref = useRef<HTMLInputElement>(null);
    const checkbox2Ref = useRef<HTMLInputElement>(null);
    const checkbox3Ref = useRef<HTMLInputElement>(null);
    const checkbox4Ref = useRef<HTMLInputElement>(null);
    const checkbox5Ref = useRef<HTMLInputElement>(null);
    const checkbox6Ref = useRef<HTMLInputElement>(null);
    const text1Ref = useRef<HTMLParagraphElement>(null);
    const text2Ref = useRef<HTMLParagraphElement>(null);
    const text3Ref = useRef<HTMLParagraphElement>(null);
    const text4Ref = useRef<HTMLParagraphElement>(null);
    const text5Ref = useRef<HTMLParagraphElement>(null);
    const text6Ref = useRef<HTMLParagraphElement>(null);

    const { i18n } = useTranslation()
    const lang = i18n.language

    function revealText(checkboxRef: React.RefObject<HTMLInputElement>, textRef: React.Ref<HTMLParagraphElement>) {
        if (checkboxRef.current && text1Ref.current && checkboxRef.current.checked) {
            textRef.current.classList.remove(styles.questioncontent);
            textRef.current.classList.add(styles.showquestioncontent);
        }
        else {
            textRef.current.classList.add(styles.questioncontent);
            textRef.current.classList.remove(styles.showquestioncontent);
        }
    }
    
    return (
        <>
            <Header />

            <div className="header-line"></div>

            <div className="content">
                <div className={styles.faqline}></div>
                <h1 className={styles.faqtitle}>FREQUENTLY ASKED QUESTIONS</h1>
                <div className={styles.questions}>
                    <div className={styles.question}>
                        <div className={styles.questionheader}>
                            <input type="checkbox" id="checkbox" ref={checkbox1Ref} onChange={() => revealText(checkbox1Ref, text1Ref )}/>
                            <span>{">"}</span>
                            <p>{questions[lang].newpaper.question}</p>
                        </div>
                        <p className={styles.questioncontent} ref={text1Ref}>{questions[lang].newpaper.answer}</p>
                    </div>
                    <div className={styles.question}>
                        <div className={styles.questionheader}>
                            <input type="checkbox" id="checkbox" ref={checkbox2Ref} onChange={() => revealText(checkbox2Ref, text2Ref )}/>
                            <span>{">"}</span>
                            <p>{questions[lang].newpaper.question}</p>
                        </div>
                        <p className={styles.questioncontent} ref={text2Ref}>{questions[lang].newpaper.answer}</p>
                    </div>
                    <div className={styles.question}>
                        <div className={styles.questionheader}>
                            <input type="checkbox" id="checkbox" ref={checkbox3Ref} onChange={() => revealText(checkbox3Ref, text3Ref )}/>
                            <span>{">"}</span>
                            <p>{questions[lang].newpaper.question}</p>
                        </div>
                        <p className={styles.questioncontent} ref={text3Ref}>{questions[lang].newpaper.answer}</p>
                    </div>
                    <div className={styles.question}>
                        <div className={styles.questionheader}>
                            <input type="checkbox" id="checkbox" ref={checkbox4Ref} onChange={() => revealText(checkbox4Ref, text4Ref )}/>
                            <span>{">"}</span>
                            <p>{questions[lang].newpaper.question}</p>
                        </div>
                        <p className={styles.questioncontent} ref={text4Ref}>{questions[lang].newpaper.answer}</p>
                    </div>
                    <div className={styles.question}>
                        <div className={styles.questionheader}>
                            <input type="checkbox" id="checkbox" ref={checkbox5Ref} onChange={() => revealText(checkbox5Ref, text5Ref )}/>
                            <span>{">"}</span>
                            <p>{questions[lang].newpaper.question}</p>
                        </div>
                        <p className={styles.questioncontent} ref={text5Ref}>{questions[lang].newpaper.answer}</p>
                    </div>
                    <div className={styles.question}>
                        <div className={styles.questionheader}>
                            <input type="checkbox" id="checkbox" ref={checkbox6Ref} onChange={() => revealText(checkbox6Ref, text6Ref )}/>
                            <span>{">"}</span>
                            <p>{questions[lang].newpaper.question}</p>
                        </div>
                        <p className={styles.questioncontent} ref={text6Ref}>{questions[lang].newpaper.answer}</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Faq;