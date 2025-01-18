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
                                <div className="notification-dropdown-content__notification--right-button notification-dropdown-content__notification--right-button-group-outer">
                                    <button className="button__blue">Accept</button>
                                    <button className="button__red">Delete</button>
                                </div>
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
                                wish <b>Amanda Reed</b> a happy birthday (Nov 12)
                                </p>
                                <div className="notification-dropdown-content__notification--right-birthday-button-wrap">
                                    <button>Say happy birthday 🎂</button>
                                </div>
                            </div>
                            <div className="notification-dropdown-content__notification--right-left">
                                <p className="notification-dropdown-content__notification--right-message-time">1hr</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="#" className="notification-dropdown-content__notification--inner">
                    <div className="notification-dropdown-content__notification--left">
                        <div className="notification-dropdown-content__notification--avatar notification-dropdown-content__notification--avatar-no-image" style={{backgroundColor:'#0cbc87'}}>WB</div>
                    </div>
                    <div className="notification-dropdown-content__notification--right">
                        <div className="notification-dropdown-content__notification--right-inner">
                            <div className="notification-dropdown-content__notification--right-right">
                                <p className="notification-dropdown-content__notification--right-message">
                                Webestica has 15 like and 1 new activity
                                </p>
                            </div>
                            <div className="notification-dropdown-content__notification--right-left">
                                <p className="notification-dropdown-content__notification--right-message-time">1hr</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="#" className="notification-dropdown-content__notification--inner">
                    <div className="notification-dropdown-content__notification--left">
                        <div className="notification-dropdown-content__notification--avatar" style={{backgroundImage:'url(/profile-image/bootstrap-profile-image.svg)'}}></div>
                    </div>
                    <div className="notification-dropdown-content__notification--right">
                        <div className="notification-dropdown-content__notification--right-inner">
                            <div className="notification-dropdown-content__notification--right-right">
                                <p className="notification-dropdown-content__notification--right-message">
                                <b>Bootstrap in the news:</b> The search giant’s parent company, Alphabet, just joined an exclusive club of tech stocks.
                                </p>
                            </div>
                            <div className="notification-dropdown-content__notification--right-left">
                                <p className="notification-dropdown-content__notification--right-message-time">4hr</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="notification-dropdown-content__footer">
                <button className="button__blue--light">See all incoming activity</button>
            </div>
        </div>
    )
}

export default NotificationDropdownContent;