import React from 'react';

import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const ConfigForm = ({ config, configDispatch }) => {

  const {
    model,
    shortName,
    configNum,
    ballast,
  } = config

  const output = {
    model,
    shortName,
    configNum,
    ballast,
  }

  const onChange = {

    model(e) {
      e.preventDefault()
      output.model = e.target.value
      configDispatch(output)
    },
    shortName(e) {
      e.preventDefault()
      output.shortName = e.target.value
      configDispatch(output)
    },
    ballast(e, k, p) {
      e.preventDefault()
      output.ballast = p
      configDispatch(output)
    },
    configNum(e, k, p) {
      e.preventDefault()
      output.configNum = p
      configDispatch(output)
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
        <input
          type="text"
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
      </div>
      <div className="muiInput">
        <h4>Ballast</h4>
        <DropDownMenu
          onChange={onChange.ballast}
          value={ballast}
          labelStyle={styles.label}
          style={styles.menu}>
          <MenuItem primaryText={'No'} label={'No'} value={'No'}/>
          <MenuItem primaryText={'Yes'} label={'Yes'} value={'Yes'}/>
        </DropDownMenu>
      </div>
    </div>
  )
}

export default ConfigForm
