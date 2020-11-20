import mapKeys from "lodash/mapKeys";
import Action from "../types/action";
import IPerson from "../types/person";

export const ADD_PERSON = "ADD_PERSON";

export type PersonReducerState = {
  persons: { [key: string]: IPerson };
  currentPerson: IPerson | {};
};

const initialState: PersonReducerState = { persons: {}, currentPerson: {} };

const reducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PERSON:
      return {
        ...state,
        // persons: mapKeys(payload, "id"),
        persons: { ...state.persons, [payload.id]: payload },
      };
    default:
      return state;
  }
};

export const addPerson = (person: IPerson) => ({
  type: ADD_PERSON,
  payload: { ...person, id: Math.random().toString() },
});

export default reducer;
