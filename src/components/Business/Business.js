import React from 'react';
import './Business.css';
/*Start ConvertRatingToStars

<span class="material-icons">
star
</span>
<span class="material-icons">
star_outline
</span>
<span class="material-icons">
star_half
</span>
const starConversion = () =>{
    let starCount=this.props.business.rating;
    let rateSpot=document.getElementById('rateSpot');
    if(starCount%2=0){rateSpot.innerHTML.push()}
}

*/
class Business extends React.Component{
    render(){
        return(
        <div className="Business">
            <div className="image-container">
                <img src={this.props.business.imageSrc} alt=''/>
            </div>
            <h2>{this.props.business.name}</h2>
            <div className="Business-information">
                <h3 className="Business-type">{this.props.business.category.toUpperCase()}</h3>
                <div className="Business-reviews">
                    <h4 id="rateSpot" className="rating">{this.props.business.rating} STARS</h4>
                    <p>{`${this.props.business.reviewCount} reviews`}</p>
                </div>
                <div className="Business-address">
                    <p>{this.props.business.address}</p>
                    <p>{`${this.props.business.city}, ${this.props.business.state} ${this.props.business.zipCode}`}</p>
                </div>
            </div>
        </div>)
    }
};
export default Business;
//don't forget to change class to className for JSX formatting