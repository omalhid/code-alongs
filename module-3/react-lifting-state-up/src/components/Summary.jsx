/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Summary.jsx

import React from "react";

// src/components/Summary.jsx

function Summary(props) {
    return (
      <div>
        <h1>TASKS COMPLETED:</h1>
        <p className="tasks-completed">{props.tasksCompleted}</p>     {/*   UPDATE   */}
      </div>
    );
  }
  
export default Summary;
  
