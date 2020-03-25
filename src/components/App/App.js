import React from 'react';
//import './App.css';
import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <h1>My Yapp</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  }
};
/*function App() {
  return (
   
  );
}
*/
export default App;
