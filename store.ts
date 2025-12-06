import { create } from 'zustand';
import { AppState } from './types';

interface AppStore {
  mode: AppState;
  setMode: (mode: AppState) => void;
  toggleMode: () => void;
  handPosition: { x: number; y: number };
  setHandPosition: (x: number, y: number) => void;
  isCameraActive: boolean;
  setCameraActive: (active: boolean) => void;
}

export const useStore = create<AppStore>((set) => ({
  mode: AppState.FORMED,
  setMode: (mode) => set({ mode }),
  toggleMode: () => set((state) => ({ 
    mode: state.mode === AppState.FORMED ? AppState.CHAOS : AppState.FORMED 
  })),
  handPosition: { x: 0, y: 0 },
  setHandPosition: (x, y) => set({ handPosition: { x, y } }),
  isCameraActive: false,
  setCameraActive: (active) => set({ isCameraActive: active })
}));
