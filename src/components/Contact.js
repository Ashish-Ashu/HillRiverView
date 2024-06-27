import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useAuth } from './AuthContext';
import { db } from './FirebaseConfig'; // Import Firestore instance
import { collection, addDoc, doc, setDoc, serverTimestamp, FieldValue } from 'firebase/firestore'; // Import Firestore functions
import './Contact.css';

const Contact = () => {
    const { currentUser } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        if (currentUser) {
            if (currentUser.displayName) {
                setName(currentUser.displayName);
            }
            if (currentUser.email) {
                setEmail(currentUser.email);
            }
            if (currentUser.phoneNumber) {
                setPhoneNumber(currentUser.phoneNumber);
            }
        }
    }, [currentUser]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!phoneNumber) {
            alert('Phone number is required.');
            return;
        }

        try {
            const contactId = generateContactId(); // Generate your custom ID here
            await setDoc(doc(db, 'contacts', phoneNumber), {
                id: contactId,
                name,
                email,
                phoneNumber,
                message: event.target.message.value,
                timestamp: serverTimestamp(),
                userId: currentUser ? currentUser.uid : null // Add userId if user is logged in
            });
            const queryResolved = false

            const newId = "";
            await addDoc(collection(db, 'Query'), {
                id: newId,
                name,
                email,
                phoneNumber,
                message: event.target.message.value,
                timestamp: serverTimestamp(),
                userId: currentUser ? currentUser.uid : null,// Add userId if user is logged in
                queryResolved
            });
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('Error submitting form. Please try again.');
        }
    };

    const generateContactId = () => {
        // Implement your custom ID generation logic here
        // Example: return a combination of current timestamp and user ID
        console.log(currentUser.email + " current user " + currentUser.uid)

        return `${Date.now()}_${currentUser ? currentUser.uid : 'guest'}`;
    };

    const [value, setValue] = useState();
    return (
        <div className="contact">
            <h1>Connect with Us</h1>
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
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">
                            <span style={{ color: 'red' }}>*</span> Phone Number:
                        </label>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
