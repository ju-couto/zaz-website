import { SectionMusic } from "./style";
import {useEffect, useState } from "react";
import { Title } from "../../styles/global";

import zaz from "../../assets/zaz-music.png";
import { getTopTracks } from "../../lib/tracks";
import { MusicProps, Track } from "../../utils/interfaces";
import { Audio } from "../../components/Audio";


export function Music({ isPlaying, playMusic, pauseMusic }: MusicProps) {
    const [musicData, setMusicData] = useState<Track[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const topTracks = await getTopTracks()
            setMusicData(topTracks)
        }
        fetchData()
    }, [])

    return (
        <SectionMusic 
        id="music"
        >
            <Title>Music</Title>
            <div>
                <img src={zaz} alt=""
                />
                <ul>
                   
                    {musicData.map((music, i) => {

                        return (
                           <Audio
                                key={music.id}
                                music={music}
                                isPlaying={isPlaying}
                                playMusic={playMusic}
                                pauseMusic={pauseMusic}
                           />
                        )
                    })}
                </ul>
            </div>
        </SectionMusic>
    )
}

