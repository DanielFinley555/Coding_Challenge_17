//Task 2: Gallery.jsx (Tour List Component)

import React, {useEffect, useState} from "react";

//use usestate to manage fetched data
function ToursDashboard() {
const [tours, setTours] = useState([]);

//Fetch data from the API using useEffect
useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
        .then((response) => response.json())
        .then((data) => setTours(data));
  }, []);

//using map to render a list of the tours
  return (
    <div>
        <h2>Daily Tours</h2>
        <ul>
            {tours.map(tour => (
                <li key={tour.id}>
                    {tour.name}, ${tour.price}, {tour.description}, {tour.image}
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
//using to display loading and error messages