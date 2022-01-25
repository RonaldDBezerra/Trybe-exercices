import logo from './logo.svg';
import './App.css';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['estudar', 'cuidar da casa', ' fazer projeto']

function App() {
  return (array.map((element) => Task(element)))
}

export default App;
