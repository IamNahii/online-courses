import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = (props) => {
    const {course_name, instructor, image, price} = props.course;
    const handleClick = props.handleClick;
    return (
        <div className="course-info">
            <img src={image} alt=""/>
            <h4>Course Name: {course_name}</h4>
            <p><small>{instructor}</small></p>
            <p>${price}</p>
            <Button className="btn btn-warning" onClick={() => handleClick(props.course)}><FontAwesomeIcon icon={faCartPlus} /> Enroll Now</Button>
        </div>
    );
};

export default Courses;