/* eslint-disable no-unused-vars */
// App.jsx

import './App.css';
// App.jsx
// ... previous import stays unchanged

import SimpleList from './components/SimpleList';
import StudentList from './components/StudentList';
import MovieList from './components/MovieList';
 
function App() {
  return (
    <div className="App">
      {/* <List /> */}
      {/* <StudentList /> */}
      {/* <ProjectList /> */}
 
      <MovieList />
    </div>
  );
}
 
export default App;