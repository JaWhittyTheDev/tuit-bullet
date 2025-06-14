import { useLocation } from 'react-router-dom';
import { ChangeTitle } from './utils/BasicFunctions';
import styles from "./styles/Publication.module.css";
import { useEffect, useRef, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { GetPublication } from './utils/api';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

function Publication() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const text = useRef<HTMLParagraphElement>(null);
  const computerTag = useRef<HTMLAnchorElement>(null);
  const linesTag = useRef<HTMLAnchorElement>(null);
  const telecommunicationTag = useRef<HTMLAnchorElement>(null);
  const datascienceTag = useRef<HTMLAnchorElement>(null);
  const intellectTag = useRef<HTMLAnchorElement>(null);
  const systemTag = useRef<HTMLAnchorElement>(null);
  const iotTag = useRef<HTMLAnchorElement>(null);
  const archTag = useRef<HTMLAnchorElement>(null);

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [t] = useTranslation();

  async function loadPublication(): Promise<void> {
    setLoading(true);
    setError(null);
    try {
      const data = await GetPublication();
      console.log("Fetched data:", data);
      console.log("Current ID:", id);

      if (
        id &&
        data[id] &&
        text.current &&
        computerTag.current &&
        linesTag.current &&
        telecommunicationTag.current &&
        datascienceTag.current &&
        intellectTag.current &&
        systemTag.current &&
        iotTag.current &&
        archTag.current
      ) {
        text.current.textContent = data[id].text || "No text";

        if (data[id].pdf) {
          setPdfUrl("./assets/publications/" + data[id].pdf);
        } else {
          setPdfUrl(null);
        }
      } else {
        setError("Publication not found!");
        if (text.current) text.current.textContent = "Publication not found!";
        setPdfUrl(null);
      }
    } catch (err) {
      console.error('Load error:', err);
      setError("Publication loading error");
      if (text.current) text.current.textContent = "Publication loading error";
      setPdfUrl(null);
    } finally {
      setLoading(false);
    }
  }

  ChangeTitle("TUIT Bullet - Publication");

  useEffect(() => {
    if (id) {
      loadPublication();
    } else {
      if (text.current) text.current.textContent = "ID публикации не указан.";
      setPdfUrl(null);
    }

    // Очистка PDF URL при смене id
    return () => {
      // Если pdfUrl был создан через URL.createObjectURL, нужно revokeObjectURL,
      // но если это просто строка URL, revokeObjectURL не нужен.
      // Поэтому здесь просто сбрасываем состояние.
      setPdfUrl(null);
    };
  }, [id]);

  return (
    <>
      <Header />

      <div className="content">
        <div className={styles.publicationbox}>
          <p ref={text}>
            {loading ? "Загрузка публикации..." : error ? error : "Загрузка публикации..."}
          </p>

          <div style={{ display: "flex" }} className={styles.categories}>
            <a href="/publications?category=computer" ref={computerTag}>Computer</a>
            <a href="/publications?category=lines" ref={linesTag}>Lines</a>
            <a href="/publications?category=telecommunication" ref={telecommunicationTag}>Telecommunication</a>
            <a href="/publications?category=datascience" ref={datascienceTag}>Data science</a>
            <a href="/publications?category=intellect" ref={intellectTag}>Intellect</a>
            <a href="/publications?category=system" ref={systemTag}>System</a>
            <a href="/publications?category=iot" ref={iotTag}>IOT</a>
            <a href="/publications?category=computerarch" ref={archTag}>Computer architecture</a>
          </div>

          {/* Кнопка скачивания, если есть pdfUrl */}
          {pdfUrl && (
            <a href={pdfUrl} download>
              <button>{t('publications.pdf')}</button>
            </a>
          )}
        </div>

        <div className={styles.pdf}>
          {loading && <p>Загрузка PDF...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!loading && pdfUrl && (
            <Worker workerUrl={`./pdf.worker.min.js`}>
              <Viewer fileUrl={pdfUrl} />
            </Worker>
          )}
          {!loading && !pdfUrl && !error && <p>PDF не доступен</p>}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Publication;
