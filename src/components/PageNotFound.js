import what from '../assets/what.gif'

export default function PageNotFound(){
    return(
        <div className='page-not-found'>
            <h1>Page Not Found</h1>
            <p>Showing the ' * ' route.</p>
            <p>The Payment page going to be an Api from a bank I suppose.</p>
            <img src={what} alt="" />
          </div>
    );
}