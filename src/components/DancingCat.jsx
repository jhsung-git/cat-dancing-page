import catSvg from '../assets/images/cat.svg';
import styles from './DancingCat.module.css';

export default function DancingCat({ isPlaying, durationMultiplier }) {
  const baseDuration = 1.2;
  const duration = baseDuration * durationMultiplier;

  return (
    <div className={styles.stage}>
      <div className={styles.spotlightLeft} />
      <div className={styles.spotlightRight} />

      <div
        className={`${styles.catWrapper} ${isPlaying ? styles.dancing : styles.idle}`}
        style={{ '--duration': `${duration}s` }}
        role="img"
        aria-label="춤추는 고양이"
      >
        <div className={`${styles.catBody} ${isPlaying ? styles.bodyDance : ''}`}>
          <img src={catSvg} alt="dancing cat" className={styles.catImage} />
        </div>

        <div className={`${styles.shadow} ${isPlaying ? styles.shadowDance : ''}`} />
      </div>

      <div className={styles.notes} aria-hidden="true">
        {isPlaying && (
          <>
            <span className={`${styles.note} ${styles.note1}`}>♪</span>
            <span className={`${styles.note} ${styles.note2}`}>♫</span>
            <span className={`${styles.note} ${styles.note3}`}>♩</span>
            <span className={`${styles.note} ${styles.note4}`}>♬</span>
            <span className={`${styles.note} ${styles.note5}`}>♪</span>
          </>
        )}
      </div>
    </div>
  );
}
