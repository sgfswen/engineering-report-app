import { combineReducers } from 'redux'

export const initVal = 5

const initReportConfig = {
  model: '',
  shortName: '',
  configNum: 1,
  ballast: 'No',
}

export const metricNames = [
  'Awesomeness',
  'Coolness',
  'Sweetness',
  'Desireablity',
  'Cheesiness',
  'Stuff',
  'Worthwhile',
  'Sleepy',
  'Words',
  'Chocolate',
  'Swiftness',
  'Leanness',
  'Blackness',
  'Whiteness',
  'Redness',
  'Brownness',
  'Blueness'
 ]

const getInitMetricState = metricNames => {
  let initMetricState = {}
  metricNames.map( (name, i) => {
    let str = i
    Object.assign( initMetricState, {
      [str]: {
        name,
        val: initVal,
      }
    })
    return true
  })
  return initMetricState
}

export const initMetricState = getInitMetricState(metricNames)

export const getUnchangedState = (state, changedKey) => {
  let unchangedState = {}
  for (let key in state) {
    if (state.hasOwnProperty(key)) {
      if (key !== changedKey ) {
        Object.assign(unchangedState, {[key]: state[key]})
      }
    }
  }
  return unchangedState
}

export const metricValues = (state = initMetricState, { type, id, name, val }) => {

  switch (type) {
    case 'CHANGE_METRIC_VAL':
    let unchangedState = getUnchangedState(state, id)
      return  Object.assign(unchangedState, {
          [id]: {
            name,
            val,
          }
      })
      case 'SAVE_REPORT_AND_RESET':
      return initMetricState
    default:
    return state
  }
}

export const notes = (state = '', { type, string }) => {
  switch (type) {
    case 'SAVE_REPORT_NOTES':
      return string
    case 'SAVE_REPORT_AND_RESET':
      return ''
    default:
    return state
  }
}

export const newReportConfig = (state = initReportConfig, action) => {

  const { type, model, shortName, configNum, ballast } = action
  switch (type) {
    case 'SET_NEW_REPORT_CONFIG':
      return {
        model,
        shortName,
        configNum,
        ballast,
      }
    case 'SAVE_REPORT_AND_RESET':
      return initReportConfig
    default:
    return state
  }
}

export const previousMetricValues = (state = [], { type, output }) => {
  switch (type) {
    case 'SAVE_REPORT_AND_RESET':
      return output
    default:
      return state
  }
}

export const pageDisplayed = (state = 0, { type, output }) => {
  switch (type) {
    case 'CHANGE_PAGE':
      return output

    default:
      return state
  }
}

export const reports = (state = {}, { type, reports, error }) => {
  switch (type) {
    case 'REPORTS_REQUESTED':
    return {
      status: 'requested',
    }
    case 'REPORTS_RECEIVED':
    return {
      status: 'received',
      reports,
    }
    case 'REPORT_ERROR':
    return {
      status: 'errored',
      error,
    }
    default:
    return {}
  }
}

export const combinedReducers = combineReducers({
  newReportConfig,
  metricValues,
  notes,
  previousMetricValues,
  pageDisplayed,
})

// Jesse's way of setting the metricValues state
// return {
//   ...metricValues,
//
//   [action.id]: {
//     ...metricValues[action.id],
//     action.metricValueUpdate,
//   }
// }
