import Header from './components/Header';
import styles from './page.module.css';
export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my Weather App</h1>
        <p className={styles.description}>Select a city from the header to view its weather information.</p>
      </main>
    </div>
  );
}
