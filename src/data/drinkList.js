import vanillaImg from '../assets/miamiVanilla.jpg';
import macchiatoImg from '../assets/spanishM.jpg';
import cubanImg from '../assets/cubanEsp.jpg';
import americanoImg from '../assets/americano.png';
import flatWImg from '../assets/flatWhite.jpg';
import packedVanillaImg from '../assets/packedVanilia.jpg'
import packedMacchiatoImg from '../assets/packedMacchiato.jpg'
import packedCubanImg from '../assets/packedCuban.jpg'
import packedAmericanoImg from '../assets/packedAmericano.jpg'
import packedFlatWImg from '../assets/packedFlat.jpg'

const drinks = [
{
    id: 'd01',
    name: 'Miami Vanilla',
    img: vanillaImg,
    packedImg: packedVanillaImg,
    ingredients: ['98% Roasted Arabica coffee beans', '2% aroma (vanilla, cinnamon)', 'nutmeg'],
    price: 14.99
},
{
    id: 'd02',
    name: 'Spanish Macchiato',
    img: macchiatoImg,
    packedImg: packedMacchiatoImg,
    ingredients: ['100% Roasted coffee beans'],
    price: 9.99
},
{
    id: 'd03',
    name: 'Cuban Espresso',
    img: cubanImg,
    packedImg: packedCubanImg,
    ingredients: ['100% Roasted Arabica coffee beans'],
    price: 11.99
},
{
    id: 'd04',
    name: 'Americano',
    img: americanoImg,
    packedImg: packedAmericanoImg,
    ingredients: ['100% Roasted coffee beans'],
    price: 9.99
},
{
    id: 'd05',
    name: 'Flat White',
    img: flatWImg,
    packedImg: packedFlatWImg,
    ingredients: ['100% Roasted Robusta coffee beans'],
    price: 9.99
}
];

export function getDrinks(){
    return drinks.map(({id, name, img, packedImg, ingredients}) => ({id, name, img, packedImg, ingredients}));
}

export function getDrink(drinkId){
    return drinks.find(({ id }) => id === drinkId);
}

export function getWebshopDrinks(){
    return drinks.map(({id, name, packedImg, ingredients, price}) => ({id, name, packedImg, ingredients, price}));
}