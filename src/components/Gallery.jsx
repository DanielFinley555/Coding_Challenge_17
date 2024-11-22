//Task 2: Gallery.jsx (Tour List Component)

import React, {useEffect, useState} from "react";

//use usestate to manage fetched data
function ToursDashboard() {
const [tours, setTours] = useState([]);

//Fetch data from the API using useEffect
useEffect(() => {
    //Had to copy and paste the link from the api website in order for the fetch to work
    //so the link is 'https://www.course-api.com/react-tours-project', instead of 'https://course-api.com/react-tours-project'
    fetch('https://www.course-api.com/react-tours-project')
        .then((response) => response.json())
        .then((data) => setTours(data));
}, []);

//using map to render a list of the tours
  return (
    <div>
        <h2>Tourist Locations</h2>
        <ul>
            {tours.map((tour) => (
                <li key={tour.id}>
                    <img src={tour.image} alt={tour.name} />
                    <h3>{tour.name}</h3>
                    <h4>Price: ${tour.price}</h4>
                    <p>Description: {tour.info}</p>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default ToursDashboard;


//Not sure how to do these remaining steps yet:
//using button to create an option to remove a tour from the list
//using button to create an option to toggle visibility
//using to display loading messages
