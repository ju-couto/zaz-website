import { SectionMusic } from "./style";
import { Fragment, useEffect, useState } from "react";
import { Title } from "../../styles/global";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import zaz from "../../assets/zaz-music.png";
import { getTopTracks } from "../../lib/axios";

export function Music() {
    const [musicData, setMusicData] = useState<Music[]>([])

    const [isPlaying, setIsPlaying] = useState(false)
    const musics = [
        {
            id: 1,
            name: "Music 1"
        },
        {
            id: 2,
            name: "Music 2"
        },
        {
            id: 3,
            name: "Music 3"
        },
        {
            id: 4,
            name: "Music 4"
        },
        {
            id: 5,
            name: "Music 5"
        }
    ]
    interface Music {
        id: string,
        name: string,
        preview_url: string
    }
    useEffect(() => {
        const fetchData = async () => {
            const topTracks = await getTopTracks()
            setMusicData(topTracks)
            console.log(topTracks)
        }
        fetchData()
    }, [])
    function handleMusic(name: string) {
        const audio = document.getElementById(name) as HTMLAudioElement;
        { isPlaying ? audio?.pause() : audio?.play() }
        setIsPlaying(!isPlaying)
    }
    return (
        <SectionMusic>
            <Title>Music</Title>
            <div>
                <img src={zaz} alt=""
                />
                <ul>
                    {musicData.map((music, i) => {

                        return (
                            <Fragment
                                key={music.id}
                            > <li>
                                    <p>{music.name}</p>
                                    <div
                                        key={music.id}
                                    >
                                        <BsFillPlayFill
                                            onClick={() => handleMusic(music.name)}
                                        />
                                        <audio id={music.name}
                                            src={music.preview_url} />

                                        <BsPauseFill />
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