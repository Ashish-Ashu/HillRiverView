import React, { useState } from 'react';
import './Booking.css'; // Import the CSS file

const Booking = () => {
    const [roomType, setRoomType] = useState('');
    const [price, setPrice] = useState(0);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numberOfNights, setNumberOfNights] = useState(1);
    const [finalPrice, setFinalPrice] = useState(0);
    const [numberOfRooms, setNumberOfRooms] = useState(1);
    // Function to handle room type change
    const handleRoomTypeChange = (event) => {
        const selectedRoomType = event.target.value;
        const tGuests = parseInt(document.getElementById('guests').value, 10);
        const tRooms = parseInt(document.getElementById('rooms').value, 10);
        const totalGuests = tGuests / tRooms;

        if (checkInDate === '' || checkOutDate === '') {
            alert('select checkin and checkout date before you proceed')
            setNumberOfNights(0);
        }
        else {
            // Set room type based on total guests
            if (selectedRoomType === "standard-nonac-2bed" && totalGuests <= 3) {
                setRoomType("standard-nonac-2bed");
                setNumberOfRooms(tRooms);
                setPrice(getPrice("standard-nonac-2bed"));
                console.log("total guests " + totalGuests + "  " + tGuests / tRooms);
            } else if (selectedRoomType === "standard-ac-2bed" && totalGuests <= 3) {
                setRoomType("standard-ac-2bed");
                setNumberOfRooms(Math.ceil(totalGuests / 3));
                setPrice(getPrice("standard-ac-2bed"));
            } else if (selectedRoomType === "deluxe-nonac-2bed" && totalGuests <= 3) {
                setRoomType("deluxe-nonac-2bed");
                setNumberOfRooms(Math.ceil(totalGuests / 4));
                setPrice(getPrice("deluxe-nonac-2bed"));
            } else if (selectedRoomType === "deluxe-ac-2bed" && totalGuests <= 3) {
                setRoomType("deluxe-ac-2bed");
                setNumberOfRooms(Math.ceil(totalGuests / 4));
                setPrice(getPrice("deluxe-ac-2bed"));
            } else if (selectedRoomType === "deluxe-nonac-4bed" && totalGuests <= 8) {
                setRoomType("deluxe-nonac-4bed");
                setNumberOfRooms(Math.ceil(totalGuests / 5));
                setPrice(getPrice("deluxe-nonac-4bed"));
            } else if (selectedRoomType === "deluxe-ac-4bed" && totalGuests <= 8) {
                setRoomType("deluxe-ac-4bed");
                setNumberOfRooms(Math.ceil(totalGuests / 5));
                setPrice(getPrice("deluxe-ac-4bed"));
            } else {
                // Set room type, number of rooms, and price based on selected room type
                alert('Standard Non-AC 2-Bed room can accommodate a maximum of 3 guests per room');
                // Reset the room type to prevent selecting the invalid option
                setRoomType('');
            }
        }
    };


    // Function to get price based on room type
    const getPrice = (selectedRoomType) => {
        // Add logic to calculate price based on selected room type
        // This is a placeholder function, replace it with actual logic
        switch (selectedRoomType) {
            case 'standard-nonac-2bed':
                return 3000; // Example price for Standard Non-AC 2-Bed room
            case 'standard-ac-2bed':
                return 3500; // Example price for Standard AC 4-Bed room
            case 'deluxe-ac-2bed':
                return 4000; // Example price for Deluxe AC 2-Bed room
            case 'deluxe-ac-4bed':
                return 6200; // Example price for Deluxe AC 4-Bed room
            case 'deluxe-nonac-2bed':
                return 4500; // Example price for Deluxe Non-AC 2-Bed room
            case 'deluxe-nonac-4bed':
                return 5500; // Example price for Deluxe Non-AC 4-Bed room
            default:
                return 0;
        }
    };

    // Function to handle check-in date change
    const handleCheckInDateChange = (event) => {
        const date = event.target.value;
        setCheckInDate(date);
        calculateNumberOfNights(date, checkOutDate);
    };

    // Function to handle check-out date change
    const handleCheckOutDateChange = (event) => {
        const date = event.target.value;
        setCheckOutDate(date);
        calculateNumberOfNights(checkInDate, date);
    };

    // Function to calculate the number of nights
    const calculateNumberOfNights = (checkInDate, checkOutDate) => {
        // Calculate the difference between check-out and check-in dates in days
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        const differenceInTime = checkOut.getTime() - checkIn.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        // Set the number of nights

        if (differenceInDays < 1) {
            alert('Number of Night stays less then 1');
            setNumberOfNights(0);
            setCheckOutDate('')
        }
        else
            setNumberOfNights(Math.ceil(differenceInDays));
    };

    const handleSubmit = (event) => {
        finalPrice = price * numberOfNights * numberOfRooms
        if (finalPrice != 0) {
            //proceed with razor pay
            console.log("final price " + finalPrice);
        }
        else
            alert('something went wrong while booking')
    };

    return (
        <div className="booking">
            <h1>Book Now</h1>
            <div className="booking-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="check-in">Check-in Date:</label>
                        <input type="date" id="check-in" name="check-in" onChange={handleCheckInDateChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="check-out">Check-out Date:</label>
                        <input type="date" id="check-out" name="check-out" onChange={handleCheckOutDateChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Number of Guests:</label>
                        <input type="number" id="guests" name="guests" min="1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Number of Rooms:</label>
                        <input type="number" id="rooms" name="rooms" min="1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="room-type">Room Type:</label>
                        <select id="room-type" name="room-type" onChange={handleRoomTypeChange} value={roomType}>
                            <option value="">Select Room Type</option>
                            <option value="standard-nonac-2bed">Standard Non-AC 2-Bed</option>
                            <option value="standard-ac-2bed">Standard AC 2-Bed</option>
                            <option value="deluxe-nonac-2bed">Deluxe Non-AC 2-Bed</option>
                            <option value="deluxe-ac-2bed">Deluxe AC 2-Bed</option>
                            <option value="deluxe-nonac-4bed">Deluxe Non-AC 4-Bed</option>
                            <option value="deluxe-ac-4bed">Deluxe AC 4-Bed</option>
                        </select>
                        {price > 0 && (
                            <span className="price">Price: ₹{price} per night ({numberOfNights} nights)<br></br>
                                <span >Total price: ₹{price * numberOfNights * numberOfRooms}<span className='tax'>+ tax(as per law)</span> </span>
                            </span>
                        )}
                    </div>
                    <button type="submit" onSubmit={handleSubmit} >Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;
