import React from 'react';
import { Scene } from './components/Scene';
import { Interface } from './components/Interface';
import { useStore } from './store';
import { AppState } from './types';

const App: React.FC = () => {
  const setMode = useStore(state => state.setMode);
  const isCameraActive = useStore(state => state.isCameraActive);

  // Global mouse handlers for "Unleash" when camera is off
  const handleMouseDown = () => !isCameraActive && setMode(AppState.CHAOS);
  const handleMouseUp = () => !isCameraActive && setMode(AppState.FORMED);

  return (
    <div 
      className="w-full h-screen bg-[#050505] relative"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      <Scene />
      <Interface />
      
      {/* Decorative Border */}
      <div className="absolute inset-0 border-[10px] border-[#004225] pointer-events-none opacity-20" />
      <div className="absolute inset-4 border-[1px] border-[#FFD700] pointer-events-none opacity-30" />
    </div>
  );
};

export default App;
