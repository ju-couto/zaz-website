import { ModalContainer, Local, Description } from "./style";

interface ModalProps {
    position?: string;
    left ?: string;
}
export function Modal(ModalProps: ModalProps) {
    return (
        <ModalContainer
            position={ModalProps.position}
        >
            <div>
                <h1>ZAZ - ORGANIQUE TOUR</h1>

                <Local>Paris, France</Local>
                <Description>
                    Organique Tour is the first tour of the French singer Zaz. The tour began on 11 October 2012 in Paris and ended on 15 December 2012 in
                </Description>
            </div>

        </ModalContainer>
    )
}

