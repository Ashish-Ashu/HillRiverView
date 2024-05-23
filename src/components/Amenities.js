import React from 'react';
import './Amenities.css'; // Import the CSS file
import img1 from "./img/IMG-20240427-WA0014.jpg"
import img2 from "./img/IMG-20240427-WA0025.jpg"
const Amenities = () => {
    return (
        <div className="amenities">
            <h1>Our Amenities</h1>
            <div className="amenities-list">
                <div className="amenity">
                    <img src={img2} alt="Swimming Pool" />
                    <h2>Swimming Pool</h2>
                    <p>Take a refreshing dip in our outdoor swimming pool.</p>
                </div>
                <div className="amenity">
                    <img src={img1} alt="Restaurant" />
                    <h2>Restaurant</h2>
                    <p>Enjoy delicious meals prepared by our talented chefs.</p>
                </div>
                {/* Add more amenities as needed */}
            </div>
        </div>
    );
};

export default Amenities;
