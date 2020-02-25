import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button } from 'reactstrap';

function RestaurantList(props) {

        const directory = props.restaurants.map(restaurant => {
            return (
                <div key={restaurant.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg height={240} width={240} src={restaurant.image} alt={restaurant.name} />
                        <CardTitle>{restaurant.name}</CardTitle>
                        <CardText>{restaurant.description}</CardText>
                        <Button>Make A Reservation</Button>
                    </Card>
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