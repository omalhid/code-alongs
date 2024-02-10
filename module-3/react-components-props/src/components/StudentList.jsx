/* eslint-disable react/prop-types */
// ./src/components/StudentList.jsx

function StudentList(props) {
  return (
    <div>
      <h2>Student List</h2>
      {props.children}
    </div>
  );
}

export default StudentList;
