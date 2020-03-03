import { createStore, combineReducers } from 'redux';
import { foodTypes } from './foodtypes';
import { quickServices } from './quickservices';
import { recepies } from './recepies';
import { restaurants } from './restaurants';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            foodTypes: foodTypes,
            quickServices: quickServices,
            recepies: recepies,
            restaurants: restaurants
        })
    );
    return store;
}