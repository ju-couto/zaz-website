import { Fragment } from "react";
import { AudioContainer } from "./style";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { Track, MusicProps } from "../../utils/interfaces";

interface AudioProps extends MusicProps {
    music: Track;
}

export const Audio = ({ music, isPlaying, playMusic, pauseMusic }: AudioProps) => {
    return (
        <Fragment key={music.id} >
            <AudioContainer>
                <p>{music.name}</p>
                <div key={music.id} >
                    {isPlaying === music.preview_url ? <BsPauseFill
                        onClick={pauseMusic}
                    /> : <BsFillPlayFill
                        onClick={() => playMusic(music.preview_url)}
                    />}
                </div>
            </AudioContainer>
        </Fragment>)
}