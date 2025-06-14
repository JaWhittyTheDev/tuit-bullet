import { useEffect, useState } from "react";
import { SearchFilled } from '@fluentui/react-icons';
import { ChangePage } from '../../utils/BasicFunctions';
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { LuSquareUserRound } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa6";
import styles from '../../styles/Papers.module.css';
import { Papers } from "../../utils/api";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useTranslation } from 'react-i18next';

function PapersPageOne() {
  type Paper = {
    id: string;
    category: string;
    title: string;
    date: string;
    author: string;
    views: number;
    text: string;
  };

  const [papers, setPapers] = useState<Paper[]>([]);
  const [filteredPapers, setFilteredPapers] = useState<Paper[]>([]);

  const [searchTitle, setSearchTitle] = useState('');
  const [searchAuthor, setSearchAuthor] = useState('');
  const [searchKeywords, setSearchKeywords] = useState('');
  const [searchReferences, setSearchReferences] = useState('');
  const [searchSphere, setSearchSphere] = useState('sphere');

  const page = '1';
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'TUIT Bullet - Papers';

    const fetchData = async () => {
      try {
        const data = await Papers() as Record<string, Record<string, Paper> | Paper[]> | undefined;
        const pageData = data?.[page] ?? [];
        const papersArray: Paper[] = Array.isArray(pageData)
          ? pageData
          : Object.values(pageData);

        setPapers(papersArray.slice(0, 6));
        setFilteredPapers(papersArray.slice(0, 6));
      } catch (err) {
        console.error("Load error:", err);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = papers.filter(paper =>
      paper.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      paper.author.toLowerCase().includes(searchAuthor.toLowerCase()) &&
      paper.text.toLowerCase().includes(searchKeywords.toLowerCase()) &&
      paper.text.toLowerCase().includes(searchReferences.toLowerCase()) &&
      (searchSphere === 'sphere' || paper.category === searchSphere)
    );
    setFilteredPapers(filtered);
  };

  return (
    <>
      <Header />
      <div className='header-line'></div>
      <div className={styles.content}>
        <div className={styles['papers-line']}></div>
        <h1 className={styles['papers-title']}>{t('papers.title')}</h1>

        <div className={styles['papers-search']}>
          <div className={styles['center-wrapper']}>
            <h2>{t('papers.searchtitle')}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              <input
                type="text"
                placeholder={t('papers.placeholders.title')}
                value={searchTitle}
                onChange={e => setSearchTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder={t('papers.placeholders.author')}
                value={searchAuthor}
                onChange={e => setSearchAuthor(e.target.value)}
              />
              <input
                type="text"
                placeholder={t('papers.placeholders.keywords')}
                value={searchKeywords}
                onChange={e => setSearchKeywords(e.target.value)}
              />
              <input
                type="text"
                placeholder={t('papers.placeholders.references')}
                value={searchReferences}
                onChange={e => setSearchReferences(e.target.value)}
              />
              <select
                id="sphere"
                value={searchSphere}
                onChange={e => setSearchSphere(e.target.value)}
              >
                <option value="sphere">{t('papers.placeholders.sphere')}</option>
                <option value="computers">{t('publications.tags.computer')}</option>
              </select>
              <button type="submit" className={styles["search-button"]} onClick={handleSearch}>
                <SearchFilled />
              </button>
              <button onClick={() => console.log(`${t('papers.advanced')} clicked`)}>
                {t('papers.advanced')}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.papers}>
          {Array.from({ length: Math.ceil(filteredPapers.length / 2) }).map((_, rowIndex) => (
            <div className={styles['papers-row']} key={rowIndex}>
              {filteredPapers.slice(rowIndex * 2, rowIndex * 2 + 2).map((paper, index) => (
                <div className={styles["papers-paper"]} key={index}>
                  <a href={`/papers?category=${paper.category}`}>{paper.category}</a>
                  <h3>{paper.title}</h3>
                  <div style={{ display: 'flex', marginLeft: '-10px' }}>
                    <p style={{ margin: '10px' }}><HiOutlineCalendarDateRange /> {paper.date}</p>
                    <p style={{ margin: '10px' }}><LuSquareUserRound /> {paper.author}</p>
                    <p style={{ margin: '10px' }}><FaRegEye /> {paper.views}</p>
                  </div>
                  <p>{paper.text}</p>
                  <button onClick={() => window.location.href = `/paper?id=${paper.id}`}>{t('more')}</button>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex' }} className={styles['pages']}>
          <button disabled className={styles['pages-button-nextprevious']}>{t('publications.previous')}</button>
          <div>
            {[...Array(8)].map((_, i) => (
              <button
                key={i}
                className={styles['pages-button']}
                onClick={() => ChangePage(`/papers/${i + 1}`)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button className={styles['pages-button-nextprevious']} onClick={() => ChangePage("/papers/2")}>
            {t('publications.next')}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PapersPageOne;
