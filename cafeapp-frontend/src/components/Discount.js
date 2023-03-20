export default function Discount({total}){

    return(
        <>
            <h2>Discounted price: <span className="money">${(total*0.9).toFixed(2)}</span></h2>
            <h3>Saving: <span className="money">${(total*0.1).toFixed(2)}</span>*</h3>
        </> 
    );
}

