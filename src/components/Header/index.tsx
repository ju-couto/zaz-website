import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import logo from '../../assets/logo.svg'
import { ItemsNav, Menu, Navbar, SocialMedia } from './style'


const socialMediaItems = [
    {
        icon: <AiOutlineTwitter size={20} />,
        link: 'https://twitter.com/Zaz_Official'
    },
    {
        icon: <AiFillInstagram size={20} />,
        link: 'https://www.instagram.com/zaz_off/'
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
                            <li key={key} >
                                <a href={item.link}
                                 target="_blank"   
                                >
                                {item.icon}
                                </a>
                            </li>
                        )
                    })}
                </SocialMedia>
                <Menu>
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