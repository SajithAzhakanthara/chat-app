import './style.scss';
import Link from 'next/link';

const Menu = (props) => {
    return(
        <div className="menu">
            <ul className="menu__outer">
                <li className="menu__items">
                    <Link href="#" className={`menu__link ${props.page == 'home' ? 'active' : ''}`}>Home</Link>
                </li>
                <li className="menu__items dropdown">
                    <Link href="#" className="menu__link" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                    </ul>
                </li>
                <li className="menu__items dropdown">
                    <Link href="#" className="menu__link" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                    </ul>
                </li>
                <li className="menu__items">
                    <Link href="#" className="menu__link">My network</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;