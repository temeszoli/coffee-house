import aboutPic from '../assets/aboutPic.jpg';

export default function AboutPage(){
    return(
        <>
            <div className="welcome welcome-about">
                <div className="square">
                    <h2>Get to know us better!</h2>
                    <p>A few words about us</p>
                </div>
            </div>
            <div className="about-container">
                <h2>The idea</h2>
                <p>
                    Aliquam sodales arcu ut erat vehicula congue. Integer ac neque tempor, consequat nunc sed, ullamcorper nulla. 
                    Maecenas vulputate maximus justo, et congue orci viverra nec. Duis leo mi, rutrum non ex id, pretium mattis tellus. 
                    Fusce eget finibus orci. Pellentesque eleifend eget augue sed convallis. Proin lacinia imperdiet erat ac iaculis. 
                    Sed eleifend ultricies pharetra. Nullam congue eu lectus nec luctus. Donec suscipit nec nunc vel auctor. 
                    Vestibulum nec dolor imperdiet, scelerisque sapien vel, scelerisque elit. Etiam condimentum justo sed elit aliquet, sed placerat tortor posuere. 
                    Mauris in diam non ex interdum iaculis. Vivamus eget dolor egestas, finibus mauris vel, scelerisque tellus. Praesent aliquam semper mattis. 
                    Ut imperdiet quam non lacinia varius. 
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elementum mauris. Proin eleifend varius condimentum. 
                    In gravida dui massa, ac placerat risus mattis eget. Nunc vitae nulla varius, mollis quam sed, ullamcorper mauris. 
                </p>
                <h2>The implementation</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec elementum mauris. Proin eleifend varius condimentum. 
                    In gravida dui massa, ac placerat risus mattis eget. Nunc vitae nulla varius, mollis quam sed, ullamcorper mauris. 
                    Ut aliquet scelerisque volutpat. Integer viverra tincidunt libero id pharetra. Aliquam erat volutpat. 
                </p>
                <p>
                    Sed leo lorem, sodales ac eleifend euismod, placerat at leo. Proin sem eros, scelerisque vitae condimentum non, eleifend sed velit. 
                    Nulla at tincidunt urna, ut feugiat justo. Suspendisse laoreet, est quis fermentum elementum, leo mauris lobortis velit, ac lacinia 
                    turpis dolor viverra nisl. Phasellus ut velit vitae urna venenatis rhoncus at gravida quam. Nulla aliquam diam viverra malesuada aliquet. 
                    Phasellus vulputate ornare ligula quis aliquam. Nam fringilla mauris quis risus scelerisque, interdum tempor erat ultricies. 
                    Donec mauris nulla, elementum vel varius id, facilisis et elit. Donec volutpat et augue ornare hendrerit. 
                    Pellentesque euismod justo urna, ac rutrum nisl dignissim ac.
                </p>
                <h2>The result</h2>
                <p>Ut suscipit cursus ligula ut venenatis. Pellentesque iaculis suscipit lacus ut fringilla. Duis non euismod nibh, non tincidunt elit. 
                    Aenean vehicula elit felis, sed congue turpis scelerisque eget. Donec luctus vitae tortor nec faucibus. Cras ullamcorper, 
                    quam sagittis hendrerit elementum, augue metus ornare mi, quis imperdiet metus tortor elementum massa. Sed ipsum orci, 
                    euismod ut ante vitae, bibendum varius libero. Nulla ut tincidunt erat.
                </p>
                <img classname='about-pic' src={aboutPic} alt="" />
            </div>
        </>
    );
}