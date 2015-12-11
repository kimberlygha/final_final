import { combineReducers } from 'redux'

import addPreviews from './components/reducers.jsx'
import Slides from '../../sub_Slides/client/reducers'
// add reducers here
export default combineReducers({
  addPreviews: addPreviews,
  slides: Slides
})
