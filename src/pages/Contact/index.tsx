import { AiOutlineSend } from "react-icons/ai";
import { ContactContainer } from "./style";
import { Title } from "../../styles/global";

export function Contact () {
    return (
        <ContactContainer>
            <div>
            <Title>Contact</Title>
            <p>Would you like to have Zaz at your event? Please fill out the form below and we will get back to you as soon as possible.</p>
            </div>
           <div>
           <form action="">
                <input type="text" 
                placeholder="Full Name"
                />
                <input type="text" 
                placeholder="Email"
                />
                <textarea 
                placeholder="Message"
                cols={30}
                rows={10}
                ></textarea>
            </form>
            <button>
                Send
                <AiOutlineSend />
            </button>
           </div>
          
        </ContactContainer>
    )
}