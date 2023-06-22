import React from "react";
import money from "../img/money.svg"
import diaphram from "../img/diaphragm.svg"
import clock from "../img/clock.svg"
import teamwork from "../img/teamwork.svg"
import three from "../img/three.jpg"
const Services=()=>{
    return(
        <div>
            <div className="description">
                <h2>High <span>Quality</span> services</h2>

                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="sdf" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sdfs sdfs!</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="sdfd" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sdfs sdfs!</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphram} alt="dfsd" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sdfs sdfs!</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="sdfs" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sdfs sdfs!</p>
                    </div> 

                </div>
            </div>
            <div className="image">
                <img src={three} alt="three" />
            </div>
        </div>
    )
}

export default Services