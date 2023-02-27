import { EventDay, EventsGrid, EventsSection, EventInfo,  ButtonEvents} from "./style";
import { Title } from "../../styles/global";
import { useState } from "react";
import { Modal } from "../../components/Modal";


export function Events() {
    const [IsOpen, setIsOpen] = useState(false)
    function handleOpenModal() {
        setIsOpen(!IsOpen)
    }
    const events = [
        {
            id: 1,
            title: 'Event 1',
            date: new Date(2021, 2, 1),
            location: 'Rio de Janeiro, BR',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, vitae ultricies nisl nunc vel mauris. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, vitae ultricies nisl nunc vel mauris.'
        },
        {
            id: 2,
            title: 'Event 2',
            date: new Date(2021, 2, 1),
            location: 'Rio de Janeiro, BR',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, vitae ultricies nisl nunc vel mauris. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, vitae ultricies nisl nunc vel mauris.'
        },
        {
            id: 3,
            title: 'Event 3',
            date: new Date(2021, 0, 3),
            location: 'Rio de Janeiro, BR',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, vitae ultricies nisl nunc vel mauris. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, vitae ultricies nisl nunc vel mauris.'
        },
        {
            id: 4,
            title: 'Event 4',
            date: new Date(2021, 2, 1),
            location: 'Rio de Janeiro, BR',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, vitae ultricies nisl nunc vel mauris. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam mauris, vitae ultricies nisl nunc vel mauris.'
        }

    ]
    return (
        <EventsSection>
            
            <Title>Events</Title>
            <EventsGrid>
    
            {events.map(event => (
                <div key={event.id}>
                    <EventDay>
                        {event.date.getDate()}
                        <p>{
                            event.date.toLocaleString('pt-BR', { month: 'short' })
                            }</p>
                    </EventDay>
                    <EventInfo>
                        <h2>{event.title}</h2>
                        <p>{event.location}</p>
                        <button
                            onClick={handleOpenModal}
                            
                        >
                            Mais informações
                        </button>
                    </EventInfo>
                </div>
            ))}
              
            {IsOpen && <Modal
                position="absolute"
            /> 
               }
            
            </EventsGrid>
            <ButtonEvents>
                Veja mais
            </ButtonEvents>

        </EventsSection>
    )
}