import React from 'react';
//import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

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
