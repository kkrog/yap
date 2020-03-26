import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';


let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90   
};

let businesses=[
  business,
  business,
  business,
  business,
  business,
  business
]

class App extends React.Component{
  searchYelp(term,location,sortBy){
    console.log(`Searching Yelp with ${term}, ${location}, ${best_match}`)
  }
  render(){
    return (
      <div className="App">
        <h1>My Yapp</h1>
        <SearchBar />
        <BusinessList businesses={businesses}/>
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
