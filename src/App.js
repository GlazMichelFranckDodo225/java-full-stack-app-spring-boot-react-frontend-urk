import './App.css';
import Counter from './components/counter/Counter';
// import StarterComponent from './components/starter/StarterComponent';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

// properties = {property1: 'value1', property2: 'value2'}
// function PlayingWithProps(properties) {
//   console.log(properties);
//   console.log(properties.property1);
//   console.log(properties.property2);

//   return (
//     <div>Props</div>
//   )
// }


// function PlayingWithProps({property1, property2}) { // Destruturing
//   console.log(property1);
//   console.log(property2);

//   return (
//     <div>Props</div>
//   )
// }

export default App;
