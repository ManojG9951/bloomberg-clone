// src/store.js

import { createStore } from "redux";

const list_api_keys = [
  "c3da55865f6d4416bf76b03eefd1c597",
  "86f6be689af042cab269c852f5500d86",
  "eea7b03c003a4702aabbe284367fc4d4",
];

// Action Types

const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

const SET_SELECTED_LANGUAGE = "SET_SELECTED_LANGUAGE";

const SET_SELECTED_NEWS = "SET_SELECTED_NEWS";

const SET_COLOR_MODE = "SET_COLOR_MODE";

const SET_LOADING = "SET_LOADING";

const SET_MORE_NEWS = "SET_MORE_NEWS";

const SET_SIGN_IN_WORD = "SET_SIGN_IN_WORD";

// Reducer

const initialState = {
  activeTab: "everything", // Default active tab

  selectedLanguage: "de", // Default selected language

  selectedNews: [],

  colorMode: false,

  loading: true,

  apiKey: "c3da55865f6d4416bf76b03eefd1c597",

  moreNews: [],

  signInWord: "",
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,

        activeTab: action.payload,
      };

    case SET_SELECTED_LANGUAGE:
      return {
        ...state,

        selectedLanguage: action.payload,
      };

    case SET_SELECTED_NEWS:
      return {
        ...state,

        selectedNews: action.payload,
      };

    case SET_COLOR_MODE:
      return {
        ...state,

        colorMode: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,

        loading: action.payload,
      };

    case SET_MORE_NEWS:
      return {
        ...state,

        moreNews: action.payload,
      };

    case SET_SIGN_IN_WORD:
      return {
        ...state,

        signInWord: action.payload,
      };

    default:
      return state;
  }
};

// Action Creators

export const setActiveTab = (tab) => {
  return {
    type: SET_ACTIVE_TAB,

    payload: tab,
  };
};

export const setSelectedLanguage = (language) => {
  return {
    type: SET_SELECTED_LANGUAGE,

    payload: language,
  };
};

export const setSelectedNews = (news) => {
  return {
    type: SET_SELECTED_NEWS,

    payload: news,
  };
};

export const setColorMOde = (mode) => {
  return {
    type: SET_COLOR_MODE,

    payload: mode,
  };
};

export const setLoading = (load) => {
  return {
    type: SET_LOADING,

    payload: load,
  };
};

export const setMoreNews = (news) => {
  return {
    type: SET_MORE_NEWS,
    payload: news,
  };
};

export const setSignInWord = (word) => {
  return {
    type: SET_SIGN_IN_WORD,
    payload: word,
  };
};
// Create Redux store

const store = createStore(tabReducer);

export default store;
