import { ChangeTitle } from "./utils/BasicFunctions";
import styles from "./styles/Register.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { register } from "./utils/api";

function Register() {
  const photoUploadRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const onUploadClick = () => {
    photoUploadRef.current?.click();
  };

  function onPhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  const doRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      alert("Select Photo!");
      return;
    }

    if (passwordRef.current?.value !== confirmRef.current?.value) {
      alert("Passwords do not match!");
      return;
    
  }

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("file", file);

    try {
      const msg = await register(formData);
      alert(msg);
    } catch (err) {
      alert("Error try again later! " + err);
    }
  };

  ChangeTitle("TUIT Bullet - Registration");

  const { t } = useTranslation();

  return (
    <>
      <Header />

      <div className="content">
        <div className={styles.registrationline}></div>
        <h1 className={styles.registrationtitle}>{t("registration.title")}</h1>
        <form className={styles.registrationform} onSubmit={doRegister}>
          <div className={styles.registrationcolumn1}>
            <input type="text" placeholder={t("registration.first")} name="firstname" required />
            <input type="text" placeholder={t("registration.last")} name="lastname" required />
            <input type="date" name="date" required />
            <input type="email" placeholder={t("registration.email")} name="email" required />
            <input type="text" placeholder={t("registration.organization")} name="organization" required />
            <button type="submit">{t("registration.send")}</button>
          </div>
          <div className={styles.registrationcolumn2}>
            <input type="text" placeholder={t("registration.login")} name="login" required />
            <input type="password" placeholder={t("registration.password")} name="password" ref={passwordRef} required />
            <input type="password" placeholder={t("registration.confirm")} name="confirm" ref={confirmRef} required />
            <input type="text" placeholder={t("registration.degree")} name="degree" required />
            <input type="text" placeholder={t("registration.another")} name="another" required />
          </div>

          <input
            type="file"
            style={{ display: "none" }}
            accept=".jpg, .jpeg, .png, .avif, .bmp, .webp"
            ref={photoUploadRef}
            onChange={onPhotoUpload}
          />

          <div className={styles.registrationuploadphoto} onClick={onUploadClick}>
            <p>{file ? file.name : t("registration.photo")}</p>
            <h3>+</h3>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Register;
