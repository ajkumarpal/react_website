import react from "react";
import {Link} from "react-router-dom";
const Navbar =()=>

{
    return(
            <>
                <nav id="navbar-example2" className="sticky-top navbar navbar-dark bg-dark ">
                    <a className="navbar-brand px-2" href="/"><b  style={{color:"red"}}>M</b>arine <b style={{color:"red"}}>B</b>azaar</a>
                    <ul className="nav nav-pills">
                        
                            <li className="nav-item active">
                            <Link to="/" className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="./About" className="nav-link" >About</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="./Contact" className="nav-link" >Contact</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="./Services" className="nav-link" >Services</Link>
                            </li>
                        
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                        </ul>
                        </li> */}
                    </ul>
                    </nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
  {/* <h4 id="scrollspyHeading1">First heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>...</p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>...</p> */}
</div>
            </>
    );
}
export default Navbar;
