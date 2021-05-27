const About =()=>
{
    return(
            <>
                <div className="container mt-5">
                <br></br>
                <h5 className="main-heading text-center" id="page_head">About Us</h5>
                            <div className="underline mx-auto"></div>
                    <div className="row mt-5">
                        <div className="col-md-6 text-center" >
                            <img className="img-fluid  shadow" src="https://picsum.photos/200" />
                        </div>
                        <div className="col-md-6 shadow bg-light-gray" id="card_about">
                        <h5 className="main-heading text-center">Introduction</h5>
                            <div className="underline mx-auto"></div>
                            <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                             Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer
                              took a galley of type and scrambled it to make a type specimen book it has?</p>
                        </div>
                        
                        <div className="col-md-6 mt-5 shadow" id="card_about">
                        <h5 className="main-heading text-center">Details</h5>
                            <div className="underline mx-auto"></div>
                            <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                             Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer
                              took a galley of type and scrambled it to make a type specimen book it has?</p>
                        </div>
                        <div className="col-md-6 mt-5 text-center">
                            <img className="img-fluid shadow" src="https://picsum.photos/seed/picsum/200" />
                        </div>
                        <div className="col-md-6 mt-5 text-center">
                            <img className="img-fluid shadow" src="https://picsum.photos/200?grayscale" />
                        </div>
                        <div className="col-md-6 mt-5 shadow bg-light-gray" id="card_about">
                        <h5 className="main-heading text-center ">Why we are ?</h5>
                            <div className="underline mx-auto"></div>
                            <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem
                             Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer
                              took a galley of type and scrambled it to make a type specimen book it has?</p>
                        </div>
                        
                    </div>
                </div>
            </>
    );

}
export default About;