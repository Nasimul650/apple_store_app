import { create } from "zustand";

const useMacBookStore = create((set) => ({
    color: '#adb5bd',
    setColor: (color) => set({color}),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color:'#adb5bd', scale: 0.08 })
}))

export default useMacBookStore;