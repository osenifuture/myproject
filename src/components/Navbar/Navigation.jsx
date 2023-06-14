
import { Link, Outlet} from "react-router-dom";
import { Fragment } from "react"


const Navigation = () =>{

    return(
        <Fragment>

            <div className="nav-container">

                <div className="logo">
                    <Link to='/' className="logo-2">WestyCode</Link>
                </div>

                <div className="navs">
                   <Link to='/' className="link">HOME</Link>
                   <Link to='/About' className="link">ABOUT</Link>
                   <Link to='/Services' className="link">SERVICES</Link>
                  
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation;