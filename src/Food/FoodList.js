import React from 'react';
import FoodItem from "./FoodItem.js";
import "./Food.css";

const Foodlist = () => {
    return (
        <div id="food-list">
            <div className="row">
                <div className="col col-sm-6 col-md-4"><FoodItem></FoodItem></div>
                <div className="col col-sm-6 col-md-4"><FoodItem></FoodItem></div>
                <div className="col col-sm-6 col-md-4"><FoodItem></FoodItem></div>
            </div>
            <div className="add-food">
                <button type="button" class="btn btn-success">Add Food Item</button>
            </div>
        </div>
    );
}

export default Foodlist;
