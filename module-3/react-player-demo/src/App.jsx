import './App.css'
// App.jsx
// ... previous imports stay unchanged

// import ReactPlayer from the npm package
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
    {/* ... no changes here ... */}

      <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

      {/* see the new props! */}

      <ReactPlayer
        url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
        playing
        controls
        volume="0.5"
      />
    </div>
  );
}

export default App;

