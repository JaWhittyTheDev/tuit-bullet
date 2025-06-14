import { useEffect } from 'react';
import styles from "./styles/NotFound.module.css"

function NotFound() {
    useEffect(() => {
        document.title = '404 - Not found';
    }, []);

    return (
        <>
        <div style={{textAlign: 'center'}}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Not found</h2>
        </div>
        </>
    )
}

export default NotFound;