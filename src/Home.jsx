import Slider from './Slider';
import {Link} from "react-router-dom";
import Vmc from './Vmc';
import Subscribe from './Subscribe';
const Home =()=>
{
    return(
            <>
                
                <Slider />
                <section className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>

                </section>

                <Vmc />
                <Subscribe />               
            </>
    );

}
export default Home;