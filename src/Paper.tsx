import { ChangeTitle, search } from "./utils/BasicFunctions";
import { SearchFilled } from "@fluentui/react-icons";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoCalendarOutline, IoEyeOutline } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiUserSquare } from "react-icons/pi";
import styles from "./styles/Paper.module.css"

function Paper() {
    ChangeTitle("TUIT Bullet - Paper")
    return (
      <>
        <div className="header">
          <img src="https://picsum.photos/100" alt="Logo" />
          <h1>
            Bulletin of TUIT: Management and <br /> Communication Technologies
          </h1>
          <div className="header-right">
            <a href="/sendpaper">SEND PAPER</a>
            <a href="/sign-in">SIGN IN / SIGN OUT</a>
          </div>
        </div>
        <div className="header-line"></div>

        <div className="links">
          <div className="links-left">
            <a href="/">Main</a>
            <a href="/publications">Publications</a>
            <a href="/papers">Papers</a>
            <a href="/requirements">Requirements</a>
            <a href="/faq">FAQ</a>
            <a href="/contacts">Contacts</a>
          </div>
          <div className="search">
            <form onSubmit={search}>
              <input
                type="text"
                className="searchinput"
                name="q"
                placeholder="search"
              />
              <button type="submit" className="searchbutton">
                <SearchFilled />
              </button>
            </form>
          </div>
        </div>

        <div className="header-line"></div>

        <div className="content">
          <div className={styles.paperline}></div>
          <h1 className={styles.papertitle}>Loading...</h1>
          <div className={styles.paperblock1}>
            <div className={styles.annotation}>
              <h4>ANNOTAION</h4>
              <div className={styles.info}>
                <p>
                  <IoCalendarOutline /> 27.01.2018
                </p>
                <p>
                  <PiUserSquare /> SARVABEK AZIMOV
                </p>
                <p>
                  <IoEyeOutline /> 325
                </p>
                <p>
                  <GiSettingsKnobs /> 8
                </p>
              </div>
              <p className={styles.annotationtext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                consequuntur laudantium tempora est in quos voluptas iusto? Unde
                magnam earum eligendi repellendus a neque impedit voluptate ad
                ea adipisci sapiente voluptatibus, molestias explicabo labore
                soluta laudantium nulla consectetur asperiores. Optio nostrum
                libero voluptate accusantium sint sed sequi qui accusamus iure
                excepturi dignissimos quos, voluptates eveniet sit suscipit
                commodi quaerat! Molestiae minus soluta distinctio labore eum
                iusto. Assumenda consectetur impedit veritatis, consequatur iure
                qui magni earum sit quibusdam explicabo est eveniet ex quidem
                itaque! Hic fugiat cupiditate, repellendus laudantium error
                natus adipisci magni quae, repudiandae accusantium reiciendis
                est reprehenderit porro explicabo molestias quaerat sint
                consequuntur expedita doloribus? Mollitia placeat qui eligendi
                at asperiores? Veritatis, dolores ex. Exercitationem, voluptas
                iure?
              </p>
              <p className={styles.keywords}>Keywords</p>
              <p className={styles.keywords2}>
                Infastructure, Socio-technical systems
              </p>
            </div>
            <div className={styles.reviews}>
              <h4 className={styles.reviewstitle}>REVIEWS</h4>
              <h4>SALIMOV SOLIJON</h4>
              <p>Technical doctor, professor</p>
              <h4>SALIMOV SOLIJON</h4>
              <p>Technical doctor, professor</p>
              <h4>SALIMOV SOLIJON</h4>
              <p>Technical doctor, professor</p>
              <h4>SALIMOV SOLIJON</h4>
              <p>Technical doctor, professor</p>
              <h4>SALIMOV SOLIJON</h4>
              <p>Technical doctor, professor</p>
            </div>
            <div className={styles.pdfbuttons}>
              <button>DOWNLOAD ON PDF</button>
              <button>DOWNLOAD ON PDF</button>
              <button>DOWNLOAD ON PDF</button>
              <button>DOWNLOAD ON PDF</button>
              <button>DOWNLOAD ON PDF</button>
            </div>
          </div>
          <div className={styles.paperblock2}>
            <div className={styles.article}>
              <h3>ARTICLE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, iste aut. Nihil ratione at sint nulla consequatur
                voluptates esse fugiat sapiente repellat numquam, nobis
                architecto expedita similique, voluptate sed sit ducimus labore
                velit quasi perferendis odio est minima iusto ullam! Nesciunt
                maxime fugit explicabo dignissimos dolorem possimus incidunt
                error veritatis eveniet totam, expedita officiis modi quod quasi
                facere nobis provident aspernatur praesentium repellat,
                temporibus voluptatem, odio libero nihil. Expedita iure ipsa
                quisquam soluta aut fugit quia perspiciatis eius, accusamus nam
                reiciendis cupiditate inventore, eum distinctio ab suscipit
                exercitationem maiores repellendus velit ut cumque a delectus
                illum. Maiores reiciendis sint distinctio fugit recusandae
                inventore autem aliquid nobis, est, accusantium dolores
                aspernatur cum illum? Accusantium dicta, aperiam aspernatur
                doloremque vitae vel recusandae facere necessitatibus eius!
                Expedita veritatis animi fuga ea excepturi, harum repudiandae
                eum debitis atque dicta incidunt reiciendis corrupti error sunt
                aspernatur hic veniam vitae voluptatibus. Hic tempora debitis
                sit voluptatibus repudiandae consequatur, illum suscipit nobis
                iure accusantium quisquam porro totam vitae. Modi ipsum vel
                suscipit temporibus iure corporis voluptate explicabo. Id
                nostrum itaque vel voluptas. Expedita dolore voluptas dolorum in
                libero laboriosam sint quia neque quaerat accusantium, excepturi
                qui non officiis tempore veniam recusandae ducimus autem facilis
                mollitia vel ipsa!
              </p>
            </div>
            <div className={styles.references}>
              <h3>References</h3>
              <a href="/papers?id=12345678">
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.Obcaecati, ab?
              </a>
              <p className={styles.referencetext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus provident delectus, vel similique eius ut repellat quis
                earum cum obcaecati fugit laudantium qui nihil dolore enim quod
                praesentium consequuntur maiores fugiat consectetur sit. Earum
                unde doloribus qui voluptates deserunt eos mollitia consectetur,
                temporibus assumenda sed praesentium omnis velit, voluptatem
                accusamus!
              </p>

              <a href="/papers?id=12345678">
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.Obcaecati, ab?
              </a>
              <p className={styles.referencetext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus provident delectus, vel similique eius ut repellat quis
                earum cum obcaecati fugit laudantium qui nihil dolore enim quod
                praesentium consequuntur maiores fugiat consectetur sit. Earum
                unde doloribus qui voluptates deserunt eos mollitia consectetur,
                temporibus assumenda sed praesentium omnis velit, voluptatem
                accusamus!
              </p>

              <a href="/papers?id=12345678">
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.Obcaecati, ab?
              </a>
              <p className={styles.referencetext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus provident delectus, vel similique eius ut repellat quis
                earum cum obcaecati fugit laudantium qui nihil dolore enim quod
                praesentium consequuntur maiores fugiat consectetur sit. Earum
                unde doloribus qui voluptates deserunt eos mollitia consectetur,
                temporibus assumenda sed praesentium omnis velit, voluptatem
                accusamus!
              </p>

              <a href="/papers?id=12345678">
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.Obcaecati, ab?
              </a>
              <p className={styles.referencetext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus provident delectus, vel similique eius ut repellat quis
                earum cum obcaecati fugit laudantium qui nihil dolore enim quod
                praesentium consequuntur maiores fugiat consectetur sit. Earum
                unde doloribus qui voluptates deserunt eos mollitia consectetur,
                temporibus assumenda sed praesentium omnis velit, voluptatem
                accusamus!
              </p>

              <a href="/papers?id=12345678">
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.Obcaecati, ab?
              </a>
              <p className={styles.referencetext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus provident delectus, vel similique eius ut repellat quis
                earum cum obcaecati fugit laudantium qui nihil dolore enim quod
                praesentium consequuntur maiores fugiat consectetur sit. Earum
                unde doloribus qui voluptates deserunt eos mollitia consectetur,
                temporibus assumenda sed praesentium omnis velit, voluptatem
                accusamus!
              </p>

              <a href="/papers?id=12345678">
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.Obcaecati, ab?
              </a>
              <p className={styles.referencetext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus provident delectus, vel similique eius ut repellat quis
                earum cum obcaecati fugit laudantium qui nihil dolore enim quod
                praesentium consequuntur maiores fugiat consectetur sit. Earum
                unde doloribus qui voluptates deserunt eos mollitia consectetur,
                temporibus assumenda sed praesentium omnis velit, voluptatem
                accusamus!
              </p>

              <a href="/papers?id=12345678">
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.Obcaecati, ab?
              </a>
              <p className={styles.referencetext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus provident delectus, vel similique eius ut repellat quis
                earum cum obcaecati fugit laudantium qui nihil dolore enim quod
                praesentium consequuntur maiores fugiat consectetur sit. Earum
                unde doloribus qui voluptates deserunt eos mollitia consectetur,
                temporibus assumenda sed praesentium omnis velit, voluptatem
                accusamus!
              </p>

              <a href="/papers?id=12345678">
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.Obcaecati, ab?
              </a>
              <p className={styles.referencetext}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus provident delectus, vel similique eius ut repellat quis
                earum cum obcaecati fugit laudantium qui nihil dolore enim quod
                praesentium consequuntur maiores fugiat consectetur sit. Earum
                unde doloribus qui voluptates deserunt eos mollitia consectetur,
                temporibus assumenda sed praesentium omnis velit, voluptatem
                accusamus!
              </p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-links">
            <div className="footer-links-left">
              <h1>MENU</h1>
              <div>
                <a href="/publications">Publications</a>
              </div>
              <div>
                <a href="/papers">Papers</a>
              </div>
              <div>
                <a href="/requirements">Requirements</a>
              </div>
              <div>
                <a href="/faq">FAQ</a>
              </div>
              <div>
                <a href="/contacts">Contacts</a>
              </div>
            </div>
            <div className="footer-links-right">
              <h1>ADDRESS</h1>
              <p>
                Tashkent, Amir Temur street, <br /> 108 building
              </p>
              <h1>SOCIAL MEDIA</h1>
              <div className="footer-icons">
                <a href="https://t.me/@tuit">
                  <RiTelegram2Fill className="footer-icon" />
                </a>
                <a href="https://facebook.com/tuit">
                  <FaFacebookSquare className="footer-icon" />
                </a>
                <a href="https://instagram.com/tuit">
                  <FaInstagram className="footer-icon" />
                </a>
              </div>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.3672880048543!2d69.57199217476885!3d41.474636371288945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefcaa62ce469b%3A0x5b967b77a7db66c7!2z0YPQu9C40YbQsCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsCAxMDgsIDExMTYwNiwg0KfQuNGA0YfQuNC6LCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1747588578706!5m2!1sru!2s"
            width="600"
            height="450"
            loading="lazy"
            className="footer-maps"
          ></iframe>
          <div className="footer-footer">
            <p>
              © 2021 Bulletin of TUIT: Management and Communication Technologies
              | All rights reserved!
            </p>
          </div>
        </div>
      </>
    );
}

export default Paper;