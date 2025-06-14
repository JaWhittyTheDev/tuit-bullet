import { ChangeTitle } from "./utils/BasicFunctions";
import { IoCalendarOutline, IoEyeOutline } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiUserSquare } from "react-icons/pi";
import styles from "./styles/Paper.module.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect, useRef } from "react";
import { GetPaper } from "./utils/api";

function Paper() {
  const downloadbutton1 = useRef<HTMLAnchorElement>(null);
  const downloadbutton2 = useRef<HTMLAnchorElement>(null);
  const downloadbutton3 = useRef<HTMLAnchorElement>(null);
  const downloadbutton4 = useRef<HTMLAnchorElement>(null);
  const downloadbutton5 = useRef<HTMLAnchorElement>(null);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [views, setViews] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [content, setContent] = useState('');
  const [keywords, setKeywords] = useState('');
  const [review1author, setReview1author] = useState('');
  const [review2author, setReview2author] = useState('');
  const [review3author, setReview3author] = useState('');
  const [review4author, setReview4author] = useState('');
  const [review5author, setReview5author] = useState('');
  const [review1job, setReview1job] = useState('');
  const [review2job, setReview2job] = useState('');
  const [review3job, setReview3job] = useState('');
  const [review4job, setReview4job] = useState('');
  const [review5job, setReview5job] = useState('');
  const [article, setArticle] = useState('');
  const [reference1title, setReference1title] = useState('');
  const [reference1desc, setReference1desc] = useState('');
  const [reference2title, setReference2title] = useState('');
  const [reference2desc, setReference2desc] = useState('');
  const [reference3title, setReference3title] = useState('');
  const [reference3desc, setReference3desc] = useState('');
  const [reference4title, setReference4title] = useState('');
  const [reference4desc, setReference4desc] = useState('');
  const [reference5title, setReference5title] = useState('');
  const [reference5desc, setReference5desc] = useState('');
  const [reference6title, setReference6title] = useState('');
  const [reference6desc, setReference6desc] = useState('');
  const [reference7title, setReference7title] = useState('');
  const [reference7desc, setReference7desc] = useState('');
  const [reference8title, setReference8title] = useState('');
  const [reference8desc, setReference8desc] = useState('');

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');

  async function fetchPaperData() {
    if (!id) {
      alert("Paper ID is missing in the URL.");
      return;
    }
    try {
      const data = await GetPaper();
      const paper = data[id];
      if (paper) {
        setTitle(paper.title || "Untitled");
        setDate(paper.annotation.date || "Unknown Date");
        setAuthor(paper.annotation.author || "Unknown Author");
        setViews(paper.annotation.views || 0);
        setReviews(paper.annotation.reviews || 0);
        setContent(paper.annotation.content || "No content available.");
        setKeywords(paper.annotation.keywords || "No keywords available.");
        setReview1author(paper.reviews["1"].name || "Unknown Author");
        setReview2author(paper.reviews["2"].name || "Unknown Author");
        setReview3author(paper.reviews["3"].name || "Unknown Author");
        setReview4author(paper.reviews["4"].name || "Unknown Author");
        setReview5author(paper.reviews["5"].name || "Unknown Author");
        setReview1job(paper.reviews["1"].job || "Unknown Job");
        setReview2job(paper.reviews["2"].job || "Unknown Job");
        setReview3job(paper.reviews["3"].job || "Unknown Job");
        setReview4job(paper.reviews["4"].job || "Unknown Job");
        setReview5job(paper.reviews["5"].job || "Unknown Job");
        setArticle(paper.article || "No article content available.");
        setReference1title(paper.references["1"].title || "Untitled");
        setReference1desc(paper.references["1"].text || "No description available.");
        setReference2title(paper.references["2"].title || "Untitled");
        setReference2desc(paper.references["2"].text || "No description available.");
        setReference3title(paper.references["3"].title || "Untitled");
        setReference3desc(paper.references["3"].text || "No description available.");
        setReference4title(paper.references["4"].title || "Untitled");
        setReference4desc(paper.references["4"].text || "No description available.");
        setReference5title(paper.references["5"].title || "Untitled");
        setReference5desc(paper.references["5"].text || "No description available.");
        setReference6title(paper.references["6"].title || "Untitled");
        setReference6desc(paper.references["6"].text || "No description available.");
        setReference7title(paper.references["7"].title || "Untitled");
        setReference7desc(paper.references["7"].text || "No description available.");
        setReference8title(paper.references["8"].title || "Untitled");
        setReference8desc(paper.references["8"].text || "No description available.");
        if (downloadbutton1.current && downloadbutton2.current && downloadbutton3.current && downloadbutton4.current && downloadbutton5.current) {
          downloadbutton1.current.href = paper.reviews["1"].pdf || "#";
          downloadbutton2.current.href = paper.reviews["2"].pdf || "#";
          downloadbutton3.current.href = paper.reviews["3"].pdf || "#";
          downloadbutton4.current.href = paper.reviews["4"].pdf || "#";
          downloadbutton5.current.href = paper.reviews["5"].pdf || "#";
        }
      } else {
        setTitle("Paper Not Found");
      }
    } catch (er) {
      console.error("Error fetching paper data:", er);
      setTitle("Paper Not Found");
    }
  }

  useEffect(() => {
    if (!id) {
      setTitle("Paper Not Found");
    } else {
      fetchPaperData();
    }
  }, [id]);

  ChangeTitle("TUIT Bullet - Paper");
    return (
      <>
        <Header />

        <div className="content">
          <div className={styles.paperline}></div>
          <h1 className={styles.papertitle}>{title}</h1>
          <div className={styles.paperblock1}>
            <div className={styles.annotation}>
              <h4>ANNOTAION</h4>
              <div className={styles.info}>
                <p>
                  <IoCalendarOutline /> {date}
                </p>
                <p>
                  <PiUserSquare /> {author}
                </p>
                <p>
                  <IoEyeOutline /> {views}
                </p>
                <p>
                  <GiSettingsKnobs /> {reviews}
                </p>
              </div>
              <p className={styles.annotationtext}>
                {content}
              </p>
              <p className={styles.keywords}>Keywords</p>
              <p className={styles.keywords2}>
                {keywords}
              </p>
            </div>
            <div className={styles.reviews}>
              <h4 className={styles.reviewstitle}>REVIEWS</h4>
              <h4>{review1author}</h4>
              <p>{review1job}</p>
              <h4>{review2author}</h4>
              <p>{review2job}</p>
              <h4>{review3author}</h4>
              <p>{review3job}</p>
              <h4>{review4author}</h4>
              <p>{review4job}</p>
              <h4>{review5author}</h4>
              <p>{review5job}</p>
            </div>
            <div className={styles.pdfbuttons}>
              <a download ref={downloadbutton1}><button>DOWNLOAD ON PDF</button></a>
              <a download ref={downloadbutton2}><button>DOWNLOAD ON PDF</button></a>
              <a download ref={downloadbutton3}><button>DOWNLOAD ON PDF</button></a>
              <a download ref={downloadbutton4}><button>DOWNLOAD ON PDF</button></a>
              <a download ref={downloadbutton5}><button>DOWNLOAD ON PDF</button></a>
            </div>
          </div>
          <div className={styles.paperblock2}>
            <div className={styles.article}>
              <h3>ARTICLE</h3>
              <p>
                {article}
              </p>
            </div>
            <div className={styles.references}>
              <h3>References</h3>
              <a href="/papers?id=12345678">
                {reference1title}
              </a>
              <p className={styles.referencetext}>
                {reference1desc}
              </p>

              <a href="/papers?id=12345678">
                {reference2title}
              </a>
              <p className={styles.referencetext}>
                {reference2desc}
              </p>

              <a href="/papers?id=12345678">
                {reference3title}
              </a>
              <p className={styles.referencetext}>
                {reference3desc}
              </p>

              <a href="/papers?id=12345678">
                {reference4title}
              </a>
              <p className={styles.referencetext}>
                {reference4desc}
              </p>

              <a href="/papers?id=12345678">
                {reference5title}
              </a>
              <p className={styles.referencetext}>
                {reference5desc}
              </p>

              <a href="/papers?id=12345678">
                {reference6title}
              </a>
              <p className={styles.referencetext}>
                {reference6desc}
              </p>

              <a href="/papers?id=12345678">
                {reference7title}
              </a>
              <p className={styles.referencetext}>
                {reference7desc}
              </p>

              <a href="/papers?id=12345678">
                {reference8title}
              </a>
              <p className={styles.referencetext}>
                {reference8desc}
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
}

export default Paper;