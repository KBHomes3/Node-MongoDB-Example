import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import Contact from './ContactComponent';
import RestaurantList from './RestaurantsComponent';
import RecepiesList from './RecepiesComponent';
import QuickServiceList from './QuickServiceComponent';
import MexicanFoodList from './MexicanFoodComponent';
import ItalianFoodList from './ItalianFoodComponent';
import AmericanFoodList from './AmericanFoodComponent';
import AsianFoodList from './AsianFoodComponent';
import About from './AboutUsComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FOODTYPES } from '../shared/foodtypes';
import { QUICKSERVICES } from '../shared/quickservices';
import { RECEPIES} from '../shared/recepies';
import { RESTAURANTS } from '../shared/restaurants';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state= {
            foodtypes: FOODTYPES,
            quickservices: QUICKSERVICES,
            recepies: RECEPIES,
            restaurants: RESTAURANTS,
        };
    }
    render() {
        const HomePage = () => {
            return (
                <Home 
                videoId={'zZBchvH0ZH0'} 
                recepies={this.state.recepies.filter(recepie => recepie.featured)[0]}
                restaurants={this.state.restaurants.filter(restaurant => restaurant.featured)[0]}
                quickservices={this.state.quickservices.filter(quickservice => quickservice.featured)[0]} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory foodtypes={this.state.foodtypes} />} />
                    <Route exact path='/restaurants' render={() => <RestaurantList restaurants={this.state.restaurants} /> } />
                    <Route exact path='/quickservice' render={() => <QuickServiceList quickservices={this.state.quickservices} /> } />
                    <Route exact path='/recepies' render={() => <RecepiesList recepies={this.state.recepies} /> } />
                    <Route exact path='/mexicanFood' render={() => <MexicanFoodList allFoodItems={this.state} /> } />
                    <Route exact path='/italianFood' render={() => <ItalianFoodList allFoodItems={this.state} /> } />
                    <Route exact path='/americanFood' render={() => <AmericanFoodList allFoodItems={this.state} /> } />
                    <Route exact path='/asianFood' render={() => <AsianFoodList allFoodItems={this.state} /> } />
                    <Route exact path='/aboutus' component={About} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;