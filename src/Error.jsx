import react from "react";
import advt4 from './images/ErrorImage.gif';
import { Link } from 'react-router-dom';
const Error =()=>
{
    return(
            <>
                <div className="container mt-5">
                    <img src={advt4} class="img-fluid mt-5" alt="..." />
                   <div className="row mx-5">
                   <div className="col-md-6 mt-5">
                        <Link to="/" id="back">Back To Home</Link>
                    </div>
                    <div className="col-md-6 mt-5">
                        <Link to="/contact" id="back1">Contact Page</Link>
                    </div>
                   </div>
                </div>
                
            </>
    );

}
export default Error;