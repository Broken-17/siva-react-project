import '../App.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navG = useNavigate();

    const handleNavG = (url) => {
        navG(url);
    }

    return (
        <div className="nav-bar">
            <div>
                <img style={{ margin : '5px 0px 1px 5px'}} src="Teks.png" alt="LOGO" />
            </div>
            <nav>
                <button onClick={ () => handleNavG("/")}> Home </button>
                <button onClick={ () => handleNavG("/services")}> Services </button>
                <button onClick={ () => handleNavG("/about")}> About </button>
                <button onClick={ () => handleNavG("/loc")}> Location </button>
                <button onClick={ () => handleNavG("/conatct")}> Contact </button>
            </nav>
            <div>
                <span style={{ margin : '5px 0px 1px 5px'}}>Logout</span>
            </div>
        </div>
    );

}

export default NavBar;