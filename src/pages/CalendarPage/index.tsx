
import {Calendar} from "../../components/Calendar"; 
import { Modal } from "../../components/Modal";
import { CalendarSection, Containt } from "./style";
import { Title } from "../../styles/global";


export function CalendarPage() {
    return (
        <CalendarSection>
            <Title>Calendar</Title>
            <Containt>
            <Calendar />
            <Modal />
            </Containt>
        </CalendarSection>
    )
}