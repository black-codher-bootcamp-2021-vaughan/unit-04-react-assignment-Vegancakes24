import './App.css';
import Book from './src/Components/Product';

const Book = [
  { trackName: "End" , trackPrice: "1.29" },
  { trackName: "Start" , trackPrice: "1.29" },
  { trackName: "Orange County" , trackPrice: "12.99" },
];
 
function App() {
  return (
    <>
    <h1>Media Store App</h1>
    {Book.map((Book) => (
    <Book 
    trackName={Book.trackName} 
    trackPrice={Book.trackPrice} 
    />
    ))}
    
    </>
  );
  }



export default App;
