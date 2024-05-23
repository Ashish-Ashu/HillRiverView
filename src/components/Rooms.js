import React from 'react';
import room1 from "./img/room1bed.jpg"
import room2 from "./img/room4bed.jpg"

import './Rooms.css'; // Import the CSS file

const Rooms = () => {
    const rooms = [
        {
            id: 1,
            name: 'Standard  non ac Room',
            description: 'A luxurious room with a king-sized bed and stunning views.',
            price: '₹3000 per night',
            imageUrl: room1
        },
        {
            id: 2,
            name: 'Standard AC Room ',
            description: 'A comfortable room with all the essential amenities.',
            price: '₹3500 per night',
            imageUrl: room1
        },
        {
            id: 3,
            name: 'deluxe non AC Room ',
            description: 'A comfortable room with all the essential amenities.',
            price: '₹4000 per night',
            imageUrl: room1
        },
        {
            id: 4,
            name: 'deluxe AC Room ',
            description: 'A comfortable room with all the essential amenities.',
            price: '₹4500 per night',
            imageUrl: room1
        },
        {
            id: 5,
            name: 'Deluxe Familynpm  4 Bed non AC Room',
            description: 'An expansive suite with separate living area and premium features.',
            price: '₹5500 per night',
            imageUrl: room2
        }, {
            id: 6,
            name: 'Deluxe Family 4 Bed AC Room',
            description: 'An expansive suite with separate living area and premium features.',
            price: '₹6200 per night',
            imageUrl: room2
        },
        // Add more rooms as needed
    ];

    return (
        <div className="rooms">
            <h1>Our Rooms</h1>
            <p>Explore our variety of rooms, designed to provide you with a comfortable and memorable stay.</p>
            <div className="room-list">
                {rooms.map(room => (
                    <div key={room.id} className="room-card">
                        <img src={room.imageUrl} alt={room.name} />
                        <div className="room-card-content">
                            <h3>{room.name}</h3>
                            <p>{room.description}</p>
                            <p className="price">{room.price}</p>
                            <a href={`/booking/${room.id}`} className="btn">Book Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rooms;
