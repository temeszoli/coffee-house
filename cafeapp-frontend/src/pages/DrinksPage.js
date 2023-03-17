import { Outlet, NavLink} from 'react-router-dom';
import { getDrinks } from '../data/drinkList.js';
import AccountLogo from "../components/AccountLogo";

export default function DrinksPage(){
    const drinks = getDrinks();
    const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

    return(
        <div className='drinks-container'>
            <AccountLogo />
            <div className="welcome welcome-drinks">
                <div className="square">
                    <h2>Drinks to order</h2>
                    <p>I have no idea what should i write here.</p>
                </div>
            </div>

            <ul>
            {drinks.map(drink => (
                <li key={drink.id}>
                    <NavLink
                        className={getClass}
                        to={drink.id}
                    >{drink.name}
                    </NavLink>
                </li>
            ))}
            </ul>
            <br></br>
            <Outlet />
        </div>
    );
}