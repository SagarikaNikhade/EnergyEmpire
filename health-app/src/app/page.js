import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topLine}>
          <p>GET MY FREE MEAL PLAN 👉 HERE</p>
      </div>

      <div className="navbar">
        <div className="logo">LOGO</div>
        <div className="innerNav">
          <div>HOME</div>
          <div>TESTIMONIALS</div>
          <div>ABOUT RACHEL</div>
          <div>CONTACT</div>
          <div>LOGIN</div>
          <button>SIGN UP</button>
        </div>
      </div>
    </main>
  );
}
