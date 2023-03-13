import { Link } from "react-router-dom";
import coffees from '../assets/coffees.jpg';
import piano from '../assets/piano.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import packedcoffee from '../assets/packedcoffee.png';

export default function HomePage(){
    return(
        <>
            <div className="welcome">
                <div className="square">
                    <h2>Welcome to the Premium Coffee House & Bar!</h2>
                    <p>Where the passion for coffee meets with the love of the music.</p>
                </div>
            </div>
            <div className="home-grid-container">
                <div className="leftie-1 home-grid-item">
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
                <div className="rightie-1 home-grid-item">
                    <img src={coffees} alt="coffees promo" />
                </div>
                <div className="leftie-2 home-grid-item">
                    <img src={piano} alt="events promo" />
                </div>
                <div className="rightie-2 home-grid-item">
                    <p>
                        From Thursday to Sunday night, we are waiting our guests with live
                        performances from various bands from the country. Every week is a new opportunity 
                        to join the party! <FontAwesomeIcon icon='fa-solid fa-party-horn' />
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
                <div className="leftie-3 home-grid-item">
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
                <div className="rightie-3 home-grid-item">
                    <img src={packedcoffee} alt="webshop promo" />
                </div>
            </div>
        </>
    );
}