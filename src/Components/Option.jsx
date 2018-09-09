/**
 * @author Yago Estévez
 */

import React from 'react';

/**
  * @function       Option() (Component)
  * @description    Renders the options into the parent component, in this par-
  *                 ticular case, the settings panel.
  * @returns {JSX}  Returns the markup for building each option in the settings
  *                 panel of the app.
  */
const Option = props => {

  const { id, children, settings } = props;
  const buttonAttName = id !== 'total-sessions'
      ? `${id} minutes`
      : `the number of sessions before the Long Break`;

/**
  * @function     handleClick()
  * @description  Handles each click on the buttons in the settings panel.
  */
  const handleClick = ( id, action ) => {
    saveSettings( id, action )
  };

/**
  * @method saveSettings()
  * @param        {string} option The option that has been triggered in the op-
  *               tions component. Used to check what property in settings sta-
  *               te should change.
  * @param        {string} action Two actions: increment and decrement. Both of
  *               the actions are also set in the Option component.
  * @description  Handles the changes into the session options, by checking the
  *               values of 'option' and 'action'.
  * @returns      Returns a call to props.saveSettings() to change the state.
  */
  const saveSettings = ( option , action ) => {
    let newValue = 60000;
    let maxValue = 3600000;
    let minValue = 60000;

    if ( option === 'total-sessions' ) {
      newValue = 10000;
      maxValue = 300000;
      minValue = 10000;
    }

    return ( action === 'increment' ) && ( props.settings[ option ] < maxValue )
      ? props.saveSettings( option, props.settings[ option ] + newValue )
      : ( action === 'decrement' ) && ( props.settings[ option ] > minValue )
        ? props.saveSettings( option, props.settings[ option ] - newValue )
        : null;
  }

  return (
    <div className="time-customizers">
      <div className="setting-desc">
        <h3 id={ id + '-label' }>{ children[0] }</h3>
        { children.slice( 1 ) }
      </div>
      <div className="buttons">
        <button
          id          = { id + '-decrement' }
          name        = { `Decrement ${ buttonAttName }` }
          tabIndex    = { "-1" }
          onClick     = { ( ) => handleClick( id, 'decrement' ) }
        >
          <i className="fas fa-minus-square" />
        </button>
        <h2 id={ id + '-length' } className="time-values">
          { id === 'total-sessions' ? settings[id] / 10000 : settings[id] / 60000 }
        </h2>
        <button
          id          = {id + '-increment'}
          name        = { `Increment ${ buttonAttName }` }
          tabIndex    = { "-1" }
          onClick     = { ( ) => handleClick( id, 'increment' ) }
        >
          <i className="fas fa-plus-square" />
        </button>
      </div>
    </div>
  );
};

export default Option;
