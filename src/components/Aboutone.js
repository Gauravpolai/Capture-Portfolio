import React from "react";
import one from "../img/one.jpg"
const Aboutone=()=>{
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>

                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills
                </p>
                <button>Contact us</button>

            </div>

            <div className="image">
                <img src={one} alt="one" />
            </div>
        </div>
    );
}

export default Aboutone;