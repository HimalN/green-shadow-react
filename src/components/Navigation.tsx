import {Link, useLocation, useNavigate} from "react-router";
import './Navigation.css'

export const Navigation = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();
    let subpage = pathname.split("/")?.[1];

    function activePage(type: string | null = null) {
        if (subpage === 'home') {
            subpage = 'home';
        }
        let activePageCss = '';
        if (type === subpage) {
            activePageCss = ' active-page';
        } else {
            activePageCss = ' hover-nav-bar';
        }
        return activePageCss;
    }

    return (
        <nav className="navbar navbar-expand-lg  nav" id="navbar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav-list" id="navbarNav">
                    <div className="navbar-nav" id="nav-bar">
                        <Link className={`nav-link ${activePage('home')}`} to='/home'>Home</Link>
                        <Link className={`nav-link ${activePage('field')}`} to='/field'>Field</Link>
                        <Link className={`nav-link ${activePage('crop')}`} to='/crop'>Crop</Link>
                        <Link className={`nav-link ${activePage('staff')}`} to='/staff'>Staff</Link>
                        <Link className={`nav-link ${activePage('vehicle')}`} to='/vehicle'>Vehicle</Link>
                        <Link className={`nav-link ${activePage('equipment')}`} to='/equipment'>Equipment</Link>
                        <Link className={`nav-link ${activePage('logs')}`} to='/logs'>Logs</Link>
                    </div>
                    <div id="log-out" onClick={() => navigate('')}>
                        <img width="64" height="64"
                             src="https://img.icons8.com/sf-black-filled/64/02661a/logout-rounded.png"
                             alt="logout-rounded"/>
                    </div>
                </div>
            </div>
        </nav>
    );
};