import { Link } from "react-router-dom";
import coffees from '../assets/coffees.jpg';
import piano from '../assets/piano.jpg';
import packedcoffee from '../assets/packedcoffee.png';
import AccountLogo from "./AccountLogo";

export default function HomePage(){
    return(
        <>
            <AccountLogo />
            <div className="welcome">
                <div className="square">
                    <h2>Welcome to the Premium Coffee House & Bar!</h2>
                    <p>Where the passion for coffee meets with the love of the music.</p>
                </div>
            </div>
            <div className="flex-container">
                <div className='flex-item item01'>
                    <p>
                        Our collection of various well known coffee breed guarantees that you will find 
                        the taste what you are looking for in your coffee.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elementum mauris. Proin eleifend varius condimentum. 
                        In gravida dui massa, ac placerat risus mattis eget. Nunc vitae nulla varius, mollis quam sed, ullamcorper mauris. 
                        Ut aliquet scelerisque volutpat. Integer viverra tincidunt libero id pharetra. Aliquam erat volutpat. 
                        Sed molestie interdum est sit amet tempus. Suspendisse sed sagittis velit.
                    </p>
                    <br></br>
                    <Link to='/drinks'><button className='btn'>Drink Card</button></Link>
                </div>
                <div className='flex-item item02'>
                    <img src={coffees} alt="coffees promo" />
                </div>
                <div className='flex-item item03'>
                    <img src={piano} alt="events promo" />
                </div>
                <div className='flex-item item04'>
                    <p>
                        From Thursday to Sunday night, we are waiting our guests with live
                        performances from various bands from the country. Every week is a new opportunity 
                        to join the party!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elementum mauris. Proin eleifend varius condimentum. 
                        In gravida dui massa, ac placerat risus mattis eget. Nunc vitae nulla varius, mollis quam sed, ullamcorper mauris. 
                        Ut aliquet scelerisque volutpat. Integer viverra tincidunt libero id pharetra. Aliquam erat volutpat. 
                        Sed molestie interdum est sit amet tempus. Suspendisse sed sagittis velit. 
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elementum mauris. Proin eleifend varius condimentum. 
                        In gravida dui massa, ac placerat risus mattis eget. Nunc vitae nulla varius, mollis quam sed, ullamcorper mauris. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elementum mauris. Proin eleifend varius condimentum. 
                        In gravida dui massa, ac placerat risus mattis eget. Nunc vitae nulla varius, mollis quam sed, ullamcorper mauris. 
                        Ut aliquet scelerisque volutpat. Integer viverra tincidunt libero id pharetra. Aliquam erat volutpat. </p>
                    <br></br>
                </div>
                <div className='flex-item item05'>
                    <p>
                        In our Webshop you can find the packed version 
                        of the coffees what are able to drink in the bar.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elementum mauris. Proin eleifend varius condimentum. 
                        In gravida dui massa, ac placerat risus mattis eget. Nunc vitae nulla varius, mollis quam sed, ullamcorper mauris. 
                        Ut aliquet scelerisque volutpat. Integer viverra tincidunt libero id pharetra. Aliquam erat volutpat. 
                        Sed molestie interdum est sit amet tempus. Suspendisse sed sagittis velit.
                    </p>
                    <br></br>
                    <Link to='/webshop'><button className='btn'>Webshop</button></Link>
                </div>
                <div className='flex-item item06'>
                    <img src={packedcoffee} alt="webshop promo" />
                </div>
            </div>
        </>
    );
}