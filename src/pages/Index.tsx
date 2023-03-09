import { useEffect, useRef, useState } from "react";
import { Events } from "../sections/Events";
import { Home } from "../sections/Home";
import { Music } from "../sections/Music";

export function Index() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] =  useState<string | null>(null)
    function playMusic (preview_url: string) {
        setIsPlaying(preview_url)
    }
    function pauseMusic () {
        
        setIsPlaying(null)
    }

    useEffect(() => {
        if (isPlaying) {
            const audio =  audioRef.current
                audio?.pause()
                audio?.setAttribute('src', isPlaying)
                audio?.play()
            
        } else {
            audioRef.current?.pause()
        }

    }, [isPlaying, audioRef])
    return (
        <div>
            <Home
                pauseMusic={pauseMusic}
            isPlaying={isPlaying} playMusic={playMusic}/>
            <Music
                pauseMusic={pauseMusic}
            isPlaying={isPlaying} playMusic={playMusic}
            />
            <Events />
            <audio ref={audioRef}
            src=""></audio>
        </div>
    )
}