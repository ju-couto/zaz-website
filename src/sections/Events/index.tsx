import { EventDay, EventsGrid, EventsSection, EventInfo,  ButtonEvents} from "./style";
import { Title } from "../../styles/global";
import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal";
import { Concerts } from "../../utils/mockTracks";


export function Events() {
    const [IsOpen, setIsOpen] = useState(false)
    function handleOpenModal() {
        setIsOpen(!IsOpen)
    }
    useEffect(() => {
        

    }, [])


    return (
        <EventsSection
        
        id="events">
            
            <Title>Events</Title>
            <EventsGrid>
    
            {Concerts.map(event => {
                    if(event.id <= 4){
                        return(<div key={event.id}>
                            <EventDay>
                                {event.date.getDate()}
                                <p>{
                                    event.date.toLocaleString('pt-BR', { month: 'short' })
                                    }</p>
                            </EventDay>
                            <EventInfo>
                                <h2>{event.name}</h2>
                                <p>{event.location}</p>
                                <button
                                    onClick={handleOpenModal}
                                    
                                >
                                    Mais informações
                                </button>
                            </EventInfo>
                        </div>)
                    }
               })}
              
            {IsOpen && <Modal
                position="absolute"
            /> 
               }
            
            </EventsGrid>
            <ButtonEvents
                onClick={
                    () => {
                        window.location.href = '/calendar'
                    }
                }
            >
                Veja mais
            </ButtonEvents>

        </EventsSection>
    )
}