import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <div>
                    <h2>Address</h2>
                    <p>123 Hotel Street, Cityville, Country</p>
                </div>
                <div>
                    <h2>Email</h2>
                    <p>info@example.com</p>
                </div>
                <div>
                    <h2>Phone</h2>
                    <p>+123 456 7890</p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5"></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
