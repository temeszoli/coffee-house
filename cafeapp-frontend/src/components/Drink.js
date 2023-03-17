/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom";
import { getDrink } from "../data/drinkList";

export default function Drink(){
    const { drinkId } = useParams();
    const drink = getDrink(drinkId);

    return(
        <div className="drink-grid-container">
            <div className="left grid-item">
                <img src={drink.img} alt="drink image" />
            </div>
            <div className="right grid-item">
                <h2>{drink.name}</h2>
                <h3>Ingredients:</h3>
                {drink.ingredients.map(item => (
                    <p className="drink-p">{item}</p>
                ))}
            </div>
        </div>
    );
}