import React from 'react';
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { setNewReportConfig } from '../actions'

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

let NewReportConfigMenu = ({ newReportConfig, dispatch }) => {

  const {
    model,
    shortName,
    configNum,
    ballast,
  } = newReportConfig

  const output = {
    model,
    shortName,
    configNum,
    ballast,
  }

  const configDispatch = () => {
    dispatch(setNewReportConfig(output))
  }

  const onChange = {

    model(e) {
      e.preventDefault()
      output.model = e.target.value
      configDispatch()
    },
    shortName(e) {
      e.preventDefault()
      output.shortName = e.target.value
      configDispatch()
    },
    ballast(e, k, p) {
      e.preventDefault()
      output.ballast = p
      configDispatch()
    },
    configNum(e, k, p) {
      e.preventDefault()
      output.configNum = p
      configDispatch()
    },
  }

  const styles = {
    menu: {
      backgroundColor: 'white',
      height: 30,
      width: 75,
    },
    label: {
      fontSize: 15,
      lineHeight: 2,
    },
  }

  return (
    <div className="reportConfig">
      <div className="textInput">
        <input type="text"
          placeholder="Model"
          value={model}
          onChange={onChange.model}
          />
      </div>
      <div className="textInput">
        <input
          type="text"
          placeholder="Short Name"
          value={shortName}
          onChange={onChange.shortName}
          />
      </div>
      <div className="muiInput">
        <h4>Config</h4>
        <MuiThemeProvider>
          <DropDownMenu
            onChange={onChange.configNum}
            value={configNum}
            labelStyle={styles.label}
            style={styles.menu}
            >
            <MenuItem primaryText={1} label={1} value={1}/>
            <MenuItem primaryText={2} label={2} value={2}/>
            <MenuItem primaryText={3} label={3} value={3}/>
            <MenuItem primaryText={4} label={4} value={4}/>
          </DropDownMenu>
        </MuiThemeProvider>
      </div>
      <div className="muiInput">
        <h4>Ballast</h4>
        <MuiThemeProvider>
          <DropDownMenu
            onChange={onChange.ballast}
            value={ballast}
            labelStyle={styles.label}
            style={styles.menu}>
            <MenuItem primaryText={'No'} label={'No'} value={'No'}/>
            <MenuItem primaryText={'Yes'} label={'Yes'} value={'Yes'}/>
          </DropDownMenu>
        </MuiThemeProvider>
      </div>
    </div>
  )
}

NewReportConfigMenu = connect()(NewReportConfigMenu)

export default NewReportConfigMenu
