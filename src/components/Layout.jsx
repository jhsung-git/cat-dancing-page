import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <main className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.titleCat}>🐱</span> 댄싱 캣
        </h1>
        <p className={styles.subtitle}>춤추는 고양이를 감상하세요!</p>
      </header>

      <section className={styles.content}>{children}</section>

      <footer className={styles.footer}>
        <p>클릭하거나 스페이스바를 눌러 애니메이션을 제어하세요</p>
      </footer>
    </main>
  );
}
