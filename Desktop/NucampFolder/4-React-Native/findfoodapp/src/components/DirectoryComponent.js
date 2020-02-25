import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function Directory(props) {

        const directory = props.foodtypes.map(foodtype => {
            return (
                <div key={foodtype.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg height={240} width={240} src={foodtype.image} alt={foodtype.name} />
                        <CardTitle>{foodtype.name}</CardTitle>
                        <CardText>{foodtype.description}</CardText>
                        <Link to={foodtype.path}>
                            <Button color="primary">See More Like This!</Button>
                        </Link>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                <div className="col">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active >Directory</BreadcrumbItem>
                            <BreadcrumbItem><Link to='/aboutus'>About Us</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/contactus">Contact Us</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }

export default Directory;
