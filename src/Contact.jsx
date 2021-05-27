import Subscribe from "./Subscribe"

const Contact =()=>
{
    return(
            <>
                <div class="container">
                <br></br><br></br>
                        <div className="row mt-5">
                                 <div className="col-md-6 shadow">
                                 <h3 className="main-heading text-center text-decoration-underline">Contact Us</h3>
                                 
                                 <div class="mb-3">
                                
                                <input type="text" class="form-control" id="name" placeholder="Name" />
                                </div>
                                <div class="mb-3">
                                
                                <input type="text" class="form-control" id="Subject" placeholder="Subject" />
                                </div>
                                 <div class="mb-3">
                                
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message..." rows="2"></textarea>
                                </div>
                            </div>
                            <div className="col-md-6 shadow text-center">
                            <h3 className="main-heading text-center text-decoration-underline">Address</h3>
                                    <h6 className="">Hoshiyarpur sector 51<br />Nearest Metro Station Sector 34<br/>Noida ,Uttar Pradesh<br />Pin: 201513</h6>
                                    <br />
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.600329167291!2d77.35839677116037!3d28.580268462124334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5914972d4f9%3A0x6cd57b6692dee49c!2sSector%2051%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1621709541271!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                        <Subscribe />
                </div>
            </>
    );

}
export default Contact;