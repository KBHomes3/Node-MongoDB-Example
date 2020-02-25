import React, { Component } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import YouTube from 'react-youtube';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';


//https://youtu.be/zZBchvH0ZH0

function RenderFeaturedCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

class Home extends Component {


    videoOnReady(event) {
        event.target.playVideo();
        console.log(event.target);
        
    }

    render() {
        
        const opts = {
            height: '390',
            width: '640',
            fluid: 'true',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              end: 30,
                autoplay: 1
            }
        }
    
    const {videoId} = this.props;
    return (
        <React.Fragment>
            <div className="row m-1">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle className="centered">Are you hungry? But you dont want to eat at the same old restaurant?</CardTitle>
                <CardText>If you are like me, you dont't want to eat at the same restaurant over and over again. 
                    You have strict standards and the discriminating taste buds to distingush fresh and delicious food
                    from not so fresh. Your friend tells you about an amazing restaurant and you try it and love it but 
                    that feeling only lasts a few times.  Now its time to find that new place that you will love until the
                    next time. Thats were FindFoodApp can help!  </CardText>
                </Card>
            </div>
            <div className="container centered">
                <YouTube
                className="row"
                videoId={videoId}
                opts={opts}
                onReady={this.videoOnReady}
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md m-1">
                        <RenderFeaturedCard item={this.props.restaurants} />
                    </div>
                    <div className="col-md m-1">
                        <RenderFeaturedCard item={this.props.quickservices} />
                    </div>
                    <div className="col-md m-1">
                        <RenderFeaturedCard item={this.props.recepies} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
}

export default Home;