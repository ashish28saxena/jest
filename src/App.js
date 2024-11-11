import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>First React app </p>
      <input type='text' placeholder='enter image name' name='user_name' id='user_id'></input>
      <img title='this is title image' src='https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s' width={250} height={250}></img>
    </div>
  );
}

export default App;
