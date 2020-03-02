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
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        foodtypes: state.foodtypes,
        recepies: state.recepies,
        restaurants: state.restaurants,
        quickservices: state.quickservices
    }
}

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home 
                videoId={'zZBchvH0ZH0'} 
                recepies={this.props.recepies.filter(recepie => recepie.featured)[0]}
                restaurants={this.props.restaurants.filter(restaurant => restaurant.featured)[0]}
                quickservices={this.props.quickservices.filter(quickservice => quickservice.featured)[0]} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory foodtypes={this.props.foodtypes} />} />
                    <Route exact path='/restaurants' render={() => <RestaurantList restaurants={this.props.restaurants} /> } />
                    <Route exact path='/quickservice' render={() => <QuickServiceList quickservices={this.props.quickservices} /> } />
                    <Route exact path='/recepies' render={() => <RecepiesList recepies={this.props.recepies} /> } />
                    <Route exact path='/mexicanFood' render={() => <MexicanFoodList allFoodItems={this.props} /> } />
                    <Route exact path='/italianFood' render={() => <ItalianFoodList allFoodItems={this.props} /> } />
                    <Route exact path='/americanFood' render={() => <AmericanFoodList allFoodItems={this.props} /> } />
                    <Route exact path='/asianFood' render={() => <AsianFoodList allFoodItems={this.props} /> } />
                    <Route exact path='/aboutus' component={About} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));