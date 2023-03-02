import { SectionMusic } from "./style";
import { Fragment, useEffect, useState, useRef } from "react";
import { Title } from "../../styles/global";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import zaz from "../../assets/zaz-music.png";
import { getTopTracks } from "../../lib/axios";

export function Music() {
    const [musicData, setMusicData] = useState<Music[]>([])
    const currentAudio = useRef<HTMLAudioElement>(null)

    const [isPlaying, setIsPlaying] = useState<{ [key: string]: string }>({})
    interface Music {
        id: string,
        name: string,
        preview_url: string
    }
    useEffect(() => {
        const fetchData = async () => {
            const topTracks = await getTopTracks()
            setMusicData(topTracks)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (isPlaying) {
            const audio = currentAudio.current
            const currentTrack = Object.keys(isPlaying)[0]
            const currentTrackUrl = isPlaying[currentTrack]
            if (currentTrackUrl) {
                audio?.pause()
                audio?.setAttribute('src', currentTrackUrl)
                audio?.play()
            }
        }

    }, [isPlaying])

    function playMusic(preview_url: string, name: string) {
        setIsPlaying({ [name]: preview_url })
        console.log(isPlaying)
    }
    function pauseMusic() {
        const audio = currentAudio.current
        audio?.pause()
        setIsPlaying({})
    }
    function musicEnded() {
        setIsPlaying({})
    }
    return (
        <SectionMusic>
            <Title>Music</Title>
            <div>
                <img src={zaz} alt=""
                />
                <ul>
                    <audio ref={currentAudio}
                        src=""
                        onEnded={musicEnded}
                    />
                    {musicData.map((music, i) => {

                        return (
                            <Fragment
                                key={music.id}
                            > <li>
                                    <p>{music.name}</p>
                                    <div
                                        key={music.id}
                                    >
                                        {isPlaying[music.name] ? <BsPauseFill
                                            onClick={pauseMusic}
                                        /> : <BsFillPlayFill
                                            onClick={() => playMusic(music.preview_url, music.name)}
                                        />}
                                        {/* {
                                            isPlaying ?
                                                
                                                :
                                               
                                        } */}




                                    </div>
                                </li>
                                {i < 5 && <hr />}

                            </Fragment>
                        )
                    })}


                </ul>
            </div>
        </SectionMusic>
    )
}