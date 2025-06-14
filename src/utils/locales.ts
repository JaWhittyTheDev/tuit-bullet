import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import data from "../json/requirements.json"

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'uz',
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    resources: {
      uz: {
        translation: {
          more: "KO'PROQ",
          header: {
            title: "TUIT axborotnomasi: Menejment va Aloqa texnologiyalari",
            sendpaper: "QOG'OZ YUBORISH",
            signin: "TIZIMGA KIRISH / TIZIMDAN CHIQISH",
            main: "Asosiy",
            publications: "Nashrlar",
            papers: "Qog'ozlar",
            requirements: "Talablar",
            faq: "FAQ",
            contacts: "Kontaktlar",
            search: "qidiruv"
          },
          home: {
            lastedition: "OXIRGI QOG'OZ",
            mostreadpaper: "ENG ENG O'QILGAN QOG'OZ",
            lastpaper: "OXIRGI QOG'OZ"
          },
          publications: {
            title: "NASHRLAR",
            tags: {
              computer: "Kompyuter",
              lines: "Chiziqlar"
            },
            previous: "Oldingi sahifa",
            next: "Keyingi sahifa",
            pdf: "PDF YUKLASH"
          },
          papers: {
            title: "QOG'OZLAR",
            searchtitle: "TUIT byulletenlarida maqolalar va kitoblar bo'limlarini qidiring",
            placeholders: {
              title: "sarlavha",
              author: "muallif",
              keywords: "kalit so'zlar",
              references: "havolalar",
              sphere: "shar"
            },
            advanced: "Kengaytirilgan qidiruv"
          },
          requirements: {
            title: "TALABLAR",
            list: "TALABLAR RO'YXATI",
            desc: "TALABLAR TAVSIFI",
            1: data.uz.one,
            2: data.uz.two,
            3: data.uz.three,
            4: data.uz.four,
            5: data.uz.five,
            6: data.uz.six,
            7: data.uz.seven,
            8: data.uz.eight,
            9: data.uz.nine
          },
          contacts: {
            title: "KONTAKTLAR",
            first: "Ism",
            email: "Elektron pochta",
            message: "Xabar",
            address: "Manzil",
            tel: "Telefon raqami",
            send: "YUBORISH"
          },
          registration: {
            title: "RO‘YXATDAN KETISH",
            first: "Ism",
            last: "Familiya",
            email: "Elektron pochta",
            organization: "Tashkilot",
            login: "Tizimga kirish",
            password: "Parol",
            confirm: "Parolni tasdiqlash",
            degree: "Ilmiy daraja",
            another: "Boshqa ma'lumot",
            photo: "Surat qo'shish",
            send: "YUBORISH"
          },
          footer: {
            menu: "MENYU",
            address: "MANZIL",
            media: "IJTIMOIY OAV"
          }
        }
      },
      en: {
        translation: {
          more: "MORE",
          header: {
            title: "Bulletin of TUIT: Management and Communication Technologies",
            sendpaper: "SEND PAPER",
            signin: "SIGN IN / SIGN OUT",
            main: "Main",
            publications: "Publications",
            papers: "Papers",
            requirements: "Requirements",
            faq: "FAQ",
            contacts: "Contacts",
            search: "search"
          },
          home: {
            lastedition: "LAST EDITION",
            mostreadpaper: "MOST READ PAPER",
            lastpaper: "LAST PAPER"
          },
          publications: {
            title: "PUBLICATIONS",
            tags: {
              computer: "Computer",
              lines: "Lines"
            },
            previous: "Previous page",
            next: "Next page",
            pdf: "DOWNLOAD PDF"
          },
          papers: {
            title: "PAPERS",
            searchtitle: "Search articles and books chapters of bulletins of TUIT",
            placeholders: {
              title: "title",
              author: "author",
              keywords: "keywords",
              references: "references",
              sphere: "sphere"
            },
            advanced: "Advanced search"
          },
          requirements: {
            title: "REQUIREMENTS",
            list: "LIST OF REQUIREMENTS",
            desc: "DESCRIPTION OF REQUIREMENTS",
            1: data.en.one,
            2: data.en.two,
            3: data.en.three,
            4: data.en.four,
            5: data.en.five,
            6: data.en.six,
            7: data.en.seven,
            8: data.en.eight,
            9: data.en.nine
          },
          contacts: {
            title: "CONTACTS",
            first: "First name",
            email: "E-mail",
            message: "Message",
            address: "Address",
            tel: "Telephone Number",
            send: "SEND"
          },
          registration: {
            title: "REGISTRATION",
            first: "First name",
            last: "Last name",
            email: "E-mail",
            organization: "Organization",
            login: "Login",
            password: "Password",
            confirm: "Password confirmation",
            degree: "Scientific degree",
            another: "Another information",
            photo: "Add photo",
            send: "SEND"
          },
          footer: {
            menu: "MENU",
            address: "ADDRESS",
            media: "SOCIAL MEDIA"
          }
        }
      },
      ru: {
        translation: {
          more: "БОЛЬШЕ",
          header: {
            title: "Вестник ТУИТ: Менеджмент и Коммуникационные Технологии",
            sendpaper: "ОТПРАВИТЬ СТАТЬЮ",
            signin: "ВОЙТИ / ВЫЙТИ",
            main: "Главная",
            publications: "Публикации",
            papers: "Статьи",
            requirements: "Требования",
            faq: "ЧАВО",
            contacts: "Контакты",
            search: "поиск"
          },
          home: {
            lastedition: "ПОСЛЕДНЯЯ РЕДАКЦИЯ",
            mostreadpaper: "САМАЯ ЧИТАЕМАЯ СТАТЬЯ",
            lastpaper: "ПОСЛЕДНЯЯ СТАТЬЯ"
          },
          publications: {
            title: "ПУБЛИКАЦИИ",
            tags: {
              computer: "Компьютер",
              lines: "Линии"
            },
            previous: "Предыдущая страница",
            next: "Следующая страница",
            pdf: "СКАЧАТЬ В PDF"
          },
          papers: {
            title: "СТАТЬИ",
            searchtitle: "Поиск статей и книг, глав бюллетеней ТУИТ",
            placeholders: {
              title: "заголовок",
              author: "автор",
              keywords: "ключевые слова",
              references: "референсы",
              sphere: "сфера"
            },
            advanced: "Расширенный поиск"
          },
          requirements: {
            title: "ТРЕБОВАНИЯ",
            list: "СПИСОК ТРЕБОВАНИЙ",
            desc: "ОПИСАНИЕ ТРЕБОВАНИЙ",
            1: data.ru.one,
            2: data.ru.two,
            3: data.ru.three,
            4: data.ru.four,
            5: data.ru.five,
            6: data.ru.six,
            7: data.ru.seven,
            8: data.ru.eight,
            9: data.ru.nine
          },
          contacts: {
            title: "КОНТАКТЫ",
            first: "Имя",
            email: "Эл. почта",
            message: "Сообщение",
            address: "Адресс",
            tel: "Номер телефона",
            send: "ОТПРАВИТЬ"
          },
          registration: {
            title: "РЕГИСТРАЦИЯ",
            first: "Имя",
            last: "Фамилия",
            email: "Эл. почта",
            organization: "Организация",
            login: "Логин",
            password: "Пароль",
            confirm: "Подтверждение пароля",
            degree: "Научная степень",
            another: "Другая информация",
            photo: "Добавить фото",
            send: "ОТПРАВИТЬ"
          },
          footer: {
            menu: "МЕНЮ",
            address: "АДРЕСС",
            media: "СОЦ. СЕТИ"
          },
        }
      }
    }
  });

export default i18next;