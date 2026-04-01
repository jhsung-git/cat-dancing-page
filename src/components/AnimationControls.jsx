import styles from './AnimationControls.module.css';

export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className={styles.controls} role="group" aria-label="애니메이션 제어">
      <button
        className={`${styles.playBtn} ${isPlaying ? styles.playing : styles.paused}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        <span className={styles.btnIcon}>{isPlaying ? '⏸' : '▶'}</span>
        <span className={styles.btnText}>{isPlaying ? '정지' : '재생'}</span>
      </button>

      <div className={styles.speedGroup} role="group" aria-label="재생 속도">
        {['slow', 'normal', 'fast'].map((s) => (
          <button
            key={s}
            className={`${styles.speedBtn} ${speed === s ? styles.active : ''}`}
            onClick={() => onSpeedChange(s)}
            aria-pressed={speed === s}
            aria-label={`속도: ${s === 'slow' ? '느리게' : s === 'normal' ? '보통' : '빠르게'}`}
          >
            {s === 'slow' ? '🐢' : s === 'normal' ? '🐱' : '🚀'}
          </button>
        ))}
      </div>
    </div>
  );
}
