// src/components/CourseDetails.js
import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 1, name: 'ReactJS', duration: '6 weeks' },
    { id: 2, name: 'NodeJS', duration: '4 weeks' }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name} - {course.duration}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
