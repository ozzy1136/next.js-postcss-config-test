/** Add your relevant code here for the issue to reproduce */
import styles from "./test.module.css";

export default function Home() {
  return (
    <div className={styles.testDiv}>
      <div className={styles.child}></div>
      <div className={styles.child}></div>
    </div>
  );
}
