const ADD_PREVIEWS = 'ADD_PREVIEWS';
const SET_PRESENTATION = 'SET_PRESENTATION';

export function addPreviews(previews) {
  return {
    type: ADD_PREVIEWS,
    payload: previews
  };
}

export function setPresentation(id) {
  return {
    type: SET_PRESENTATION,
    payload: id
  }
}
