
import React from 'react';
import './Booking.css'; // Import the CSS file

const Booking = () => {
    return (
        <div className="booking">
            <h1>Book Now</h1>
            <div className="booking-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="check-in">Check-in Date:</label>
                        <input type="date" id="check-in" name="check-in" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="check-out">Check-out Date:</label>
                        <input type="date" id="check-out" name="check-out" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Number of Guests:</label>
                        <input type="number" id="guests" name="guests" min="1" />
                    </div>
                    <button type="submit">Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;
