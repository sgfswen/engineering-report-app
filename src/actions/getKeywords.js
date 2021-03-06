import { requestKeywords, receiveKeywords, keywordError } from './index'
import database from '../utilities/firebase'

export const getKeywords = ref => {

  return dispatch => {
    dispatch(requestKeywords())
    return database.ref(`${ref}/keywords`).once('value', snap => {
      const keywords = snap.val()
      dispatch(receiveKeywords(keywords))
      })
    .catch( err => {
      console.log('an error occurred while fetching keywords from the database:', err);
      dispatch(keywordError(err))
    })
  }
}
