
import CARD_CONTENT from "../../data/cards.data";

const INITIAL_STATE = CARD_CONTENT;

// the state represents the state of the currentUser

const cardsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default cardsReducer;