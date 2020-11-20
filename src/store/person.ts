import omit from "lodash/omit";
import Action from "../types/action";
import IPerson from "../types/person";

export const ADD_PERSON = "ADD_PERSON";
export const EDIT_PERSON = "EDIT_PERSON";
export const DELETE_PERSON = "DELETE_PERSON";
export const SET_CURRENT_PERSON = "SET_CURRENT_PERSON";

export type PersonReducerState = {
  persons: { [key: string]: IPerson };
  currentPerson: IPerson | null;
};

const initialState: PersonReducerState = { persons: {}, currentPerson: null };

const reducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PERSON:
      return {
        ...state,
        persons: { ...state.persons, [payload.id]: payload },
        currentPerson: null,
      };
    case DELETE_PERSON:
      return {
        ...state,
        persons: omit(state.persons, payload.id),
      };
    case SET_CURRENT_PERSON:
      return {
        ...state,
        currentPerson: state.persons[payload.id],
      };
    default:
      return state;
  }
};

export const addPerson = (person: IPerson) => ({
  type: ADD_PERSON,
  payload: person.id ? person : { ...person, id: Math.random().toString() },
});

export const editPerson = (person: IPerson) => ({
  type: ADD_PERSON,
  payload: person,
});

export const deletePerson = (id: string) => ({
  type: DELETE_PERSON,
  payload: { id },
});

export const setCurrentPerson = (id: string) => ({
  type: SET_CURRENT_PERSON,
  payload: { id },
});

export default reducer;
