import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button } from 'reactstrap';

function QuickServiceList(props) {

        const directory = props.quickservices.map(quickservice => {
            return (
                <div key={quickservice.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg height={240} width={240} src={quickservice.image} alt={quickservice.name} />
                        <CardTitle>{quickservice.name}</CardTitle>
                        <CardText>{quickservice.description}</CardText>
                        <Button>Let's See the Menu</Button>
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

export default QuickServiceList;