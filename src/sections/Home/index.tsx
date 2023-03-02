
import { HomeSection, Vynil, DiscLayer, Disc } from "./style";
import imgDisc from "../../assets/disc.png";
import { getRandomTrack } from "../../lib/axios";
import { getLastAlbum } from "../../lib/axios";
import { useEffect, useRef, useState } from "react";

interface AlbumData {
    images: { url: string }[];
}
interface TrackData {
    name: string;
    preview_url: string;
}

export function Home() {
    const [albumData, setAlbumData] = useState<AlbumData>({ images: [] }),
        currentAudio = useRef<HTMLAudioElement>(null),
        [trackData, setTrackData] = useState<TrackData>({ name: "", preview_url: "" }),
        [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const albumData = await getLastAlbum(),
                trackData = await getRandomTrack();

            setAlbumData(albumData);
            setTrackData(trackData);
        };

        fetchData();
    }, []);

    function handleMouse() {
        const audio = currentAudio.current
        setIsPlaying(!isPlaying)
        { isPlaying ? audio?.pause() : audio?.play() }

    }

    return (
        <HomeSection>
            <Disc
                onMouseEnter={handleMouse}
                onMouseLeave={handleMouse}
            >
                <Vynil>
                    <img src={imgDisc} alt="" />
                </Vynil>
                <DiscLayer>
                    {albumData.images.length > 0 && <img src={albumData.images[0].url} alt={"Cover"} />}
                </DiscLayer>
                <audio ref={currentAudio} src={trackData.preview_url}></audio>


            </Disc>
        </HomeSection>
    )
}

