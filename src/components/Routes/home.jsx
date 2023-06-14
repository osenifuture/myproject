import "./home.css"
import { Fragment } from "react";

const Home = () => {

    return(
        <Fragment>
       <div>
        <h1 style={{color: 'brown', fontStyle: 'italic'}}>I LOVE PROGRAMMING LANGUAGE</h1>
       </div>

       <div className="pro-container">
        <h3>Learn Programming Language</h3>
        <div className="inner-container">
            <div className="inner-box">
                <h3>PHYTON</h3>
            </div>
            <div className="inner-box">
                <h3>c#, c, c+, c++ </h3>
            </div>
            <div className="inner-box">
                <h3>MySQL</h3>
            </div>
            <div className="inner-box">
                <h3>Javascript MERN Stack</h3>
            </div>
            <div className="inner-box">
                <h3>Artificial Intelligent</h3>
            </div>
            <div className="inner-box">
                <h3>Cloud Computing</h3>
            </div>
        </div>
       </div>




       </Fragment>
    )
}

export default Home;
