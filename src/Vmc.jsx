import react from "react";
import { Link } from 'react-router-dom';
import think from "./images/think.jpg";
import think2 from "./images/think2.jpg";
import think3 from "./images/think3.jpg";
const Vmc =()=>
{
    return(
        <>
             <section className="container  bg-light-gray border-top mt-5 pb-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Vision</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 p-3 ">
                                <div className="card ">
                                <img src={think} className="w-100 border-bottom" alt="Services" />
                                    <div className="card-body">
                                       <h6>Service 1</h6> 
                                       <div className="underline"></div> 
                                       <p> It has survived not only five centuries, but also the leap into electronic typesetting,  including versions of Lorem Ipsum.</p>
                                       <Link to="/Services" className="btn btn-link">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-3">
                                <div className="card ">
                                <img src={think2} className="w-100 border-bottom" alt="Services" />
                                    <div className="card-body">
                                       <h6>Service 2</h6> 
                                       <div className="underline"></div> 
                                       <p> It has survived not only five centuries, but also the leap into electronic typesetting,  including versions of Lorem Ipsum.</p>
                                       <Link to="/Services" className="btn btn-link">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-3">
                                <div className="card ">
                                <img src={think3} className="w-100 border-bottom" alt="Services" />
                                    <div className="card-body">
                                       <h6>Service 3</h6> 
                                       <div className="underline"></div> 
                                       <p> It has survived not only five centuries, but also the leap into electronic typesetting,  including versions of Lorem Ipsum.</p>
                                       <Link to="/Services" className="btn btn-link">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            
                            
                    </div>

                </section>
        </>
    );

}
export default Vmc;