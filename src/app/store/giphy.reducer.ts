import * as GiphyActions from './giphy.actions';
import { Giphy } from '../models/giphy.model';
import { newState } from '../Utilities/helpers';

export type Action = GiphyActions.All;

// GIPHY REDUCERS

const defaultState: Giphy = {
  appState: 'Home',
  imageList: [],
  searchResults: [],
  searchQueries: [],
};

export const GiphyReducer = (state: Giphy = defaultState, action: Action) => {
  switch (action.type) {
    case GiphyActions.UPDATE_SEARCH:
      const searchQueries = state.searchQueries;
      if (searchQueries.indexOf(action.payload) !== -1) { return state; }
      searchQueries.push(action.payload);
      return newState(state, { searchQueries });

    case GiphyActions.UPDATE_SEARCH_RESULT:
      const { result: { data } } = action.payload;
      return newState(state, { searchResults: data });

    case GiphyActions.UPDATE_IMAGE:
      const list = state.imageList;
      list.push(action.payload);
      return newState(state, { imageList: list });

    case GiphyActions.UPDATE_APP_STATE:
      return newState(state, { appState: action.payload });

    case GiphyActions.RESET_STATE:
      return defaultState;

    default:
      return state;
  }
};
