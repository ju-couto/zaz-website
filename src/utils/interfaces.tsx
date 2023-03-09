export interface MusicProps {
    isPlaying: string | null;
    playMusic: (preview_url: string) => void;
    pauseMusic: () => void;
}

export interface Track {
    id: string,
    name: string,
    preview_url: string
}