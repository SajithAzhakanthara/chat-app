import './style.scss';
import Link from 'next/link';
import Searchbar from '@/app/components/searchbar/Searchbar';
import Menu from '@/app/components/menu/Menu';
import HeaderIconMenu from '@/app/components/header-icon-menu/HeaderIconMenu';

const Header = () => {
    return(
        <header className="desktop-header">
            <div className="container">
                <div className="desktop-header__inner">
                    <div className="desktop-header__left">
                        <div className="desktop-header__logo-wrap">
                            <h1 className="desktop-header__logo">
                                <Link href="/homepage" className="desktop-header__logo-link">CA</Link>
                            </h1>
                        </div>
                        <div className="desktop-header__search-wrap">
                            <div className="desktop-header__search">
                                <Searchbar/>
                            </div>
                        </div>
                    </div>
                    <div className="desktop-header__right">
                        <div className="desktop-header__menu-outer">
                            <Menu page="home"/>
                        </div>
                        <div className="desktop-header__icon-menu-outer">
                            <HeaderIconMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;