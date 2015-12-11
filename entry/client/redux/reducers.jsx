import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import Presenter from 'main_Presenter/client/components/Reducers.jsx'
import Slides from 'sub_Slides/client/reducers'
// add reducers here
export default combineReducers({
  routing: routeReducer,
  previews: Presenter,
  slides: Slides
})
