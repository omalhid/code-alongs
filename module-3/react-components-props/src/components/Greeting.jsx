/* eslint-disable react/prop-types */
// ./src/components/Greeting.jsx

function Greeting(props) {
  // const message = 'Hello Ana!';

  console.log(props);

  return (
    <div>
      <u>Hello {props.firstName}!</u>
    </div>
  );
}

export default Greeting;
