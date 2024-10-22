import { NavLink }from "react-router-dom";
import './sidebarstyle.css';

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}> <img src="./src/assets/home.svg"/></NavLink>
                </li>
                <li>
                    <NavLink to="/calendar"  className={({ isActive }) => (isActive ? "active" : "")}> <img src="./src/assets/calendar.svg"/> </NavLink>
                </li>
                <li>
                    <NavLink to="/clock"  className={({ isActive }) => (isActive ? "active" : "")}> <img src="./src/assets/clock.svg"/> </NavLink>
                </li>
                <li>
                    <NavLink to="/dollar"  className={({ isActive }) => (isActive ? "active" : "")}> <img src="./src/assets/dollar.svg"/> </NavLink>
                </li>
            </ul>
        </div>

    );
};

export default Sidebar;