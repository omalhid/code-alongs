/* eslint-disable react/jsx-key */
// src/components/StudentList.jsx

const students = ['Marc', 'Lucy', 'Anna'];

function StudentList() {
  return (
    <div className="list">
      <h2>Student List</h2>
      {students.map((name, index) => (
        <p key={index}> 
          {name} 
        </p>
      ))}
    </div>
  );
}

export default StudentList;

  