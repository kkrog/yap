import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Yelp from './util/Yelp';
import logo from './bowlIcon.png';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      businesses:[]
    };
    this.searchYelp=this.searchYelp.bind(this);
  }

  searchYelp(term,location,sortBy){
   Yelp.search(term,location,sortBy).then((businesses)=>{
     this.setState({
       businesses:businesses
     })
   })
  }
  render(){
    return (
      <div className="App">
        <div id="titleWrap">
          <img src={logo} alt="bowl/eyeglass Chow Scout logo"/>
          <h1 id="title">Chow Scout</h1>
        </div>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} />
      </div>
    )
  }
};

export default App;
