import React from 'react';
import { useLocation } from 'react-router';
import "react-datepicker/dist/react-datepicker.css";

const DetailsPage = () => {
    const location = useLocation();
    const assignment = location.state;
    console.log(assignment); 

};

export default DetailsPage;