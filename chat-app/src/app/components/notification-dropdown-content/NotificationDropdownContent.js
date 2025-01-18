import './style.scss';
import Link from 'next/link';

const NotificationDropdownContent = () => {
    return(
        <div className="notification-dropdown-content">
            <div className="notification-dropdown-content__header">
                <div className="notification-dropdown-content__left">
                    <h3 className="notification-dropdown-content__heading">Notifications</h3>
                    <span className="notification-dropdown-content__heading-badge badge badge__red">4 new</span>
                </div>
                <div className="notification-dropdown-content__right">
                    <button className="notification-dropdown-content__clear-all-button">Clear all</button>
                </div>
            </div>
            <div className="notification-dropdown-content__notification">
                <Link href="#" className="notification-dropdown-content__notification--inner notification-dropdown-content__notification--inner--unseen">
                    <div className="notification-dropdown-content__notification--left">
                        <div className="notification-dropdown-content__notification--avatar" style={{backgroundImage:'url(/profile-image/img-1.jpg)'}}></div>
                    </div>
                    <div className="notification-dropdown-content__notification--right">
                        <div className="notification-dropdown-content__notification--right-inner">
                            <div className="notification-dropdown-content__notification--right-right">
                                <p className="notification-dropdown-content__notification--right-message">
                                <b>Judy Nguyen</b> sent you a friend request.
                                </p>
                            </div>
                            <div className="notification-dropdown-content__notification--right-left">
                                <p className="notification-dropdown-content__notification--right-message-time">Just now</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="#" className="notification-dropdown-content__notification--inner notification-dropdown-content__notification--inner--unseen">
                    <div className="notification-dropdown-content__notification--left">
                        <div className="notification-dropdown-content__notification--avatar" style={{backgroundImage:'url(/profile-image/img-2.jpg)'}}></div>
                    </div>
                    <div className="notification-dropdown-content__notification--right">
                        <div className="notification-dropdown-content__notification--right-inner">
                            <div className="notification-dropdown-content__notification--right-right">
                                <p className="notification-dropdown-content__notification--right-message">
                                <b>Judy Nguyen</b> sent you a friend request.
                                </p>
                            </div>
                            <div className="notification-dropdown-content__notification--right-left">
                                <p className="notification-dropdown-content__notification--right-message-time">Just now</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NotificationDropdownContent;