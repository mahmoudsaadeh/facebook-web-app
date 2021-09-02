

import { createSelector } from "reselect";

const getCards = (state) => state.cards;

export const getCardsSelector = createSelector(
    [getCards],
    (cards) => cards
);