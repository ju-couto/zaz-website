
import { HomeSection, Vynil, DiscLayer, Disc } from "./style";
import imgDisc from "../../assets/disc.png";
import { getRandomTrack } from "../../lib/tracks";
import { getLastAlbum } from "../../lib/album";
import { useEffect, useState } from "react";

interface AlbumData {
    images: { url: string }[];
}
interface TrackData {
    name: string;
    preview_url: string;
}

interface HomeProps {
    isPlaying: string | null;
    playMusic: (preview_url: string) => void;
    pauseMusic: () => void;
}
export function Home({ isPlaying, playMusic, pauseMusic }: HomeProps) {
    const [albumData, setAlbumData] = useState<AlbumData>({ images: [] }),
        [trackData, setTrackData] = useState<TrackData>({ name: "", preview_url: "" })
        
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
      if(isPlaying!= trackData.preview_url){
        pauseMusic()
        playMusic(trackData.preview_url)
      } else {
            playMusic(trackData.preview_url)
      }

    }

    return (
        <HomeSection>
            <Disc
                onMouseEnter={handleMouse}
                onMouseLeave={pauseMusic}
            >
                <Vynil>
                    <img src={imgDisc} alt="" />
                </Vynil>
                <DiscLayer>
                    {albumData.images.length > 0 && <img src={albumData.images[0].url} alt={"Cover"} />}
                </DiscLayer>


            </Disc>
        </HomeSection>
    )
}

