import './style.scss';
import Link from 'next/link';
import NotificationDropdownContent from '@/app/components/notification-dropdown-content/NotificationDropdownContent';
import ProfileIconDropdownContent from '@/app/components/profile-icon-dropdown-content/ProfileIconDropdownContent';

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
            <div className="header-icon-menu__profile-dropdown dropdown">
                <button className="header-icon-menu__button gray-boxed-icon-button header-icon-menu__profile-picture" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" style={{backgroundImage:'url(/profile-image/main-profile-image.jpg)'}}>
                </button>
                <div className="dropdown-menu">
                    <ProfileIconDropdownContent/>
                </div>
            </div>
        </div> 
    )
}

export default HeadericonMenu;