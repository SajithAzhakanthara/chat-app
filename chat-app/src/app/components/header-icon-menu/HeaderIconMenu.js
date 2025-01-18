import './style.scss';
import Link from 'next/link';
import NotificationDropdownContent from '@/app/components/notification-dropdown-content/NotificationDropdownContent';

const HeadericonMenu = () => {
    return(
        <div className="header-icon-menu">
            <Link href="#" className="header-icon-menu__button gray-boxed-icon-button">
                <i className="bi bi-chat-left-dots-fill"></i>
            </Link>
            <Link href="#" className="header-icon-menu__button gray-boxed-icon-button">
                <i className="bi bi-gear-fill"></i>
            </Link>
            <div className="header-icon-menu__notification-dropdown dropdown">
                <button className="header-icon-menu__button gray-boxed-icon-button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    <i className="bi bi-bell-fill"></i>
                    <span className="header-icon-menu__button--status"></span>
                </button>
                <div className="dropdown-menu">
                    <NotificationDropdownContent/>
                </div>
            </div>
        </div> 
    )
}

export default HeadericonMenu;