import '../styles/App.css'
import { search } from '../utils/BasicFunctions'
import { SearchFilled } from '@fluentui/react-icons'
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();

    return (
        <>
            <div className='header'>
                <img src="https://picsum.photos/100" alt="Logo" />
                <h1>{t("header.title")}</h1>
                <div className='header-right'>
                <a href="/sendpaper">{t("header.sendpaper")}</a>
                <a href="/sign-in">{t("header.signin")}</a>
                </div>
            </div>
            <div className='header-line'></div>
            
            <div className='links'>
            <div className='links-left'>
                <a href="/">{t("header.main")}</a>
                <a href="/publications">{t('header.publications')}</a>
                <a href="/papers">{t('header.papers')}</a>
                <a href="/requirements">{t('header.requirements')}</a>
                <a href="/faq">{t('header.faq')}</a>
                <a href="/contacts">{t('header.contacts')}</a>
            </div>
                <div className='search'>
                <form onSubmit={search}>
                    <input type="text" className='searchinput' name="q" placeholder={t('header.search')}/>
                    <button type="submit" className='searchbutton'>
                        <SearchFilled />
                    </button>
                </form>
                </div>
            </div>

            <div className='header-line'></div>
        </>
    )
}

export default Header;