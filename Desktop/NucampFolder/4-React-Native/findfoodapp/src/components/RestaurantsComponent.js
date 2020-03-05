import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { Loading } from './LoadingComponent';
// import { baseUrl } from '../shared/baseUrl';


function RenderRestaurantItem({restaurant}) {
    return (
        <Card>
            <Link to={`/restaurants/${restaurant.id}`}>
                <CardImg height={240} width={240} src={restaurant.image} alt={restaurant.name} /></Link>
                    <CardTitle>{restaurant.name}</CardTitle>
                    <CardText>{restaurant.description}</CardText>
                    <Button>Make A Reservation</Button>
        </Card>
    )
}

function RestaurantList(props) {

        const directory = props.restaurants.map(restaurant => {
            return (
                <div key={restaurant.id} className="col-md-5 m-1">
                    {/* <Card onClick={() => this.onCampsiteSelect(campsite)}> */}
                   <RenderRestaurantItem restaurant={restaurant} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }

export default RestaurantList;