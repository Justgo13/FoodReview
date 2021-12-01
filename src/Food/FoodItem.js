import React from 'react';
import FoodDetails from "./FoodDetails.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

const Fooditem = () => {
    return (
        <Router>
            <div className="food-item">
                <div className="card">
                    <img className="card-img-top" src={"images/spaghetti.jpg"} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Sphagetti</h5>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <p className="card-text">An italian delicacy</p>

                        
                        <Link to="/food-details">
                            <button className="btn btn-primary add-food">View Details</button>
                        </Link>
                    </div>
                </div>

                <Routes>
                    <Route path="/food-details" element={<FoodDetails/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default Fooditem;
