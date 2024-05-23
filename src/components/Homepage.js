import React from 'react';
import './Homepage.css'; // Import the CSS file

const Homepage = () => {
    return (
        <div className="homepage">
            <header className="header">
                <h1>Welcome to Our Hotel</h1>
                <p>Your perfect destination for a relaxing getaway</p>
            </header>
            <section className="special-offers">
                <h2>Special Offers</h2>
                <p>Check out our latest deals and promotions</p>
                {/* Add special offer cards or carousel here */}
            </section>
            <section className="testimonials">
                <h2>Guest Testimonials</h2>
                <div className="testimonial">
                    <p>"Amazing stay! The staff was very friendly and the room was impeccable."</p>
                    <p>- John Doe</p>
                </div>
                {/* Add more testimonials as needed */}
            </section>
            <footer className="footer">
                <p>&copy; 2024 Our Hotel. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;
