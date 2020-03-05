import * as ActionTypes from './ActionTypes';

export const addComment = (restaurantId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        restaurantId,
        rating,
        author,
        text
    }
});

