import './style.scss';
import Image from 'next/image';
import Link from 'next/link';

const ProfileiconDropdownContent = () => {
    return(
        <div className="profile-icon-dropdown-content">
            <div className="profile-icon-dropdown-content__inner">
                <div className="profile-icon-dropdown-content__header">
                    <div className="profile-icon-dropdown-content__profile-image-wrap">
                        <div className="profile-icon-dropdown-content__profile-image" style={{backgroundImage:'url(/profile-image/main-profile-image.jpg)'}}></div>
                    </div >
                    <div className="profile-icon-dropdown-content__profile-details">
                        <h3 className="profile-icon-dropdown-content__profile-name">Lori Ferguson</h3>
                        <p className="profile-icon-dropdown-content__profile-designation">Web Developer</p>
                    </div>
                </div>
                <div className="profile-icon-dropdown-content__view-profile-button-outer">
                        <Link href="#" className="profile-icon-dropdown-content__view-profile-button button__blue--light">View Profile</Link>
                </div>
                <div className="profile-icon-dropdown-content__menu-outer">
                    <ul className="profile-icon-dropdown-content__menu">
                        <li className="profile-icon-dropdown-content__menu-item">
                            <Link href="$" className="profile-icon-dropdown-content__menu-link">
                                <span>
                                    <i className="bi bi-gear-fill"></i>
                                </span>
                                <span>Settings & Privacy</span>
                            </Link>
                        </li>
                        <li className="profile-icon-dropdown-content__menu-item">
                            <Link href="$" className="profile-icon-dropdown-content__menu-link">
                                <span>
                                    <i className="bi bi-person-lines-fill"></i>
                                </span>
                                <span>Support</span>
                            </Link>
                        </li>
                        <li className="profile-icon-dropdown-content__menu-item">
                            <Link href="$" className="profile-icon-dropdown-content__menu-link">
                                <span>
                                    <i className="bi bi-file-text"></i>
                                </span>
                                <span>Documentation</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="profile-icon-dropdown-content__logout-button-wrap">
                    <button className="button__red profile-icon-dropdown-content__logout-button">Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileiconDropdownContent;