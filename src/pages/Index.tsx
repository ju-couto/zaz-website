import { Events } from "../sections/Events";
import { Home } from "../sections/Home";
import { Music } from "../sections/Music";

export function Index() {
    return (
        <div>
            <Home />
            <Music />
            <Events />
        </div>
    )
}