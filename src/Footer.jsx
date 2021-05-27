import react from "react";
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Footer=()=>
{
    return(
        <>
            <div className="container-fluid mt-5 bg-dark ">
                <div className="row">
                    <div className="col-md-3 px-5">
                        <div className="img-responsive">
                            <img src={logo} className="d-block w-25 h-25" alt="Logo" />
                            <p className="text-white">Lorem Ipsum is simply dummy text of the printing versions of Lorem Ipsum. 
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3 text-center">
                    <ul className="nav nav-pills">
                    <h4 className="links-h4">Quick Links</h4>
                    </ul>
                       <ul className="nav nav-pills">
                       <Link className="nav-link" to="/">  <li className="nav-item"><i class="fa fa-home" aria-hidden="true"></i> Home</li></Link>
                      </ul>
                       <ul className="nav nav-pills">
                       <Link className="nav-link" to="/about">  <li className="nav-item"><i class="fa fa-info-circle" aria-hidden="true"></i> About</li></Link>
                       </ul>
                       <ul className="nav nav-pills">
                       <Link className="nav-link" to="/Services"> <li className="nav-item" ><i class="fa fa-briefcase" aria-hidden="true"></i> Services</li></Link>
                       </ul>
                       <ul className="nav nav-pills">
                         <Link className="nav-link" to="/contact">  <li className="nav-item"><i class="fa fa-envelope" aria-hidden="true"></i> Contact</li></Link>
                       </ul> 
                    </div>
                    <div className="col-md-3 mt-3 text-center">
                    <ul className="nav nav-pills">
                    <h4 className="links-h4">Social Links</h4>
                    </ul>
                       <ul className="nav nav-pills">
                       <a className="nav-link" href="https://www.facebook.com/" target="_blank"> <li className="nav-item"><i class="fa fa-facebook-official" aria-hidden="true"></i> Facebook</li></a>
                      </ul>
                       <ul className="nav nav-pills">
                       <a className="nav-link" href="https://www.linkedin.com/" target="_blank">  <li className="nav-item"><i class="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</li></a>
                       </ul>
                       <ul className="nav nav-pills">
                       <a className="nav-link" href="https://www.instagram.com/" target="_blank"> <li className="nav-item" ><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</li></a>
                       </ul>
                       <ul className="nav nav-pills">
                         <a className="nav-link" href="https://twitter.com/?lang=en" target="_blank">  <li className="nav-item"><i class="fa fa-twitter-square" aria-hidden="true"></i> Twitter</li></a>
                       </ul> 
                    </div>
                    <div className="col-md-3 mt-3 px-5">
                    <p className="text-white-50">Lorem Ipsum Lorem Ipsum is simply dummy text passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>  
                    </div>
                    
                    <div className="col-md-12 text-center">
                        <p className="footer text-white-50">Copyrights are reserved by @ <Link to= "/"> AJIT KUMAR PAL</Link></p>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Footer;