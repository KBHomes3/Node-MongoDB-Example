import { FOODTYPES } from '../shared/foodtypes';
import { QUICKSERVICES } from '../shared/quickservices';
import { RECEPIES} from '../shared/recepies';
import { RESTAURANTS } from '../shared/restaurants';

export const InitialState = {
    foodtypes: FOODTYPES,
    quickservices: QUICKSERVICES,
    recepies: RECEPIES,
    restaurants: RESTAURANTS
};

export const Reducer = (state = InitialState, action) => {
    return state;
};