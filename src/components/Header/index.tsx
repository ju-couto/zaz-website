import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom' 
import { ItemsNav, Menu, Navbar, SocialMedia } from './style'


const socialMediaItems = [
    {
        icon: <AiOutlineTwitter size={20} />,
        link: 'https://twitter.com/zazofficial'
    },
    {
        icon: <AiFillInstagram size={20} />,
        link: 'https://www.instagram.com/zazofficial/'
    },
    {
        icon: <AiFillYoutube size={20} />,
        link: 'https://www.youtube.com/user/ZAZOFFICIAL'
    }
]

const menuItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Music',
        link: '/#music'
    },
    {
        name: 'Events',
        link: '/#events'
    },
    {
        name: 'Contact',
        link: '/contact'
    }
]


export function Header() {
    return (

        <Navbar>
            <div
            >
                <img src={logo} alt="Zaz logo" />
            </div>
            <ItemsNav>
                <SocialMedia>
                    {socialMediaItems.map((item, key)  =>{
                        return (
                            <li 
                                    key={key}    
                            >
                                {item.icon}
                            </li>
                        )
                    })}
                </SocialMedia>
                <Menu>
                  
                   {/* <li>
                    <Link to="/">Home</Link>
                   </li>
                    <li><a href="/music">Music</a></li>
                    <li><a href="/#events">Events</a></li>
                    <li>
                    <Link to="/#contact">Contact</Link>
                    </li>
{/*                      */}
                    {menuItems.map((item, key) => {
                        return (
                            <li
                                key={key}
                            >
                                <a href={item.link}>{item.name}
                                    </a>
                            </li>
                        )
                    })} 
                </Menu>
            </ItemsNav>

        </Navbar>

    )
}