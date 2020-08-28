import React, { useState, useEffect } from 'react';
import './App.css';
import data from './data/data.json';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';


function App() {
  const [course, setCourse] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCourse(data)
  },[])

  const handleClick = (course) => {
    const newCart = [...cart, course]
    setCart(newCart)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to Online Courses</h3>
        <h5>Enroll your course today and enjoy learning from home..</h5>
        <h2>Number of the courses: {course.length}</h2>
        <div className="course-area">
          <div>
          <ul>
            {
              course.map(course => <Courses course={course} key={course.id} handleClick={handleClick}></Courses>)
            }
          </ul>
          </div>
          <div>
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
