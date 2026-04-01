import { useEffect } from 'react';
import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import './styles/global.css';

export default function App() {
  const { isPlaying, speed, toggle, changeSpeed, durationMultiplier } = useAnimation();

  // Spacebar toggles animation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [toggle]);

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} durationMultiplier={durationMultiplier} />
      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        onToggle={toggle}
        onSpeedChange={changeSpeed}
      />
    </Layout>
  );
}
