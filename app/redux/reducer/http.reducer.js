export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case "ITEMS_HAS_ERRORED":
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case "ITEMS_IS_LOADING":
            return action.isLoading;
        default:
            return state;
    }
}


export function testing(state = "", action = "") {
  switch (action.type) {
      case "TESTING":
          state = action.Test;
          return state;
          break;

      default:
          return state;

  }
}

export function httpDataUser(state = {}, action = "") {
    switch (action.type) {
        case "LOAD_DATA_USER":
            state = action.DataUser;
            return state;
            break;

        default:
            return state;
            break;
    }
}


export function httpDataArray(state = [], action = "") {
    switch (action.type) {
        case "HTTP_DATA_ARRAY":
            return [...state, action.DataInfo];

        default:
            return state
    }
}



export function httpDataObject(state = {}, action) {
    switch (action.type) {
        case "HTTP_DATA_OBJECT":
            return { ...state, [action.filter]: action.DataInfo };

        default:
            return state
    }
}
