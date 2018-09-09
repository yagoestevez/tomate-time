/**
 * @author Yago Estévez
 */

import React, { Component }  from 'react';
import Settings              from './Settings';
import Timer                 from './Timer';
import Footer                from './Footer';
import                            './TomateTimer.css';

/**
  * @class        TomateTimer (Component)
  * @description  The main UI component. It orquestrates all the main components
  *               and and holds the top level state of the app.
  */
class TomateTimer extends Component {

/**
  * @method       constructor()
  * @description  Initializes the class with its state and props.
  */
  constructor ( props ) {
    super( props );
    this.minutesOnStartUp = 1500000; // Milliseconds
    this.state = {
      timer               : this.minutesOnStartUp,
      settings : {
        session           : this.minutesOnStartUp,
        break             : 300000,  // Milliseconds
        'long-break'      : 300000,  // Milliseconds
        'total-sessions'  : 50000    // It'll later be divided by 10000.
      },
      showMenu            : false,
    };
  }

/**
  * @method       toggleMenu()
  * @description  Shows and hides the settings menu. It is triggered from the
  *               button in the top right corner.
  */
  toggleMenu = ( ) => {
    this.setState( ( state ) => {
      return { showMenu: !state.showMenu }
    } )
  };

/**
  * @method       resetSettings()
  * @description  Sets back the session and break lengths to its default values.
  *               Although I prefer the reset button to reset the values to the
  *               ones given by the user, this behaviour is required by FCC.
  */
  resetSettings = ( ) => {
    this.setState( {
      timer               : 1500000,
      settings : {
        session           : 1500000,
        break             : 300000,
        'long-break'      : 300000,
        'total-sessions'  : 50000
      }
    } );
  };

/**
  * @method         saveSettings()
  * @param {string} option The option that has been triggered in the options
  *                 component.
  * @param {string} value The value to be stored in the settings state.
  * @description    Saves the settings object in the component state, adding
  *                 the new value to the object's property with the same na-
  *                 me as the option's value.
  */
  saveSettings = ( option, value ) => {
    this.setState( state => {
      return {
        settings: {
          ...state.settings,
          [ option ]: value
        },
        timer   : option === 'session' ? value : state.timer
      };
    } );
  };

/**
  * @method       updateTimer()
  * @description  It just updates the timer's state. It's mostly used from the
  *               Timer component to set the timer with the updated countdown.
  */
  updateTimer = newTime => {
    this.setState( {
      timer: newTime
    } );
  }

/**
  * @method         render()
  * @description    Renders the JSX for this component in the element holding
  *                 the component.
  * @returns {JSX}  Returns the layout for the component.
  */
  render() {
    return (
      <React.Fragment>
        <section
          id="Timer-Content"
          className={ this.state.showMenu ? `contents-box-flex showMenu` : `contents-box-flex` }
        >
          <header>
            <button id="menu-btn" name="menu" tabIndex="3" onClick={ ( ) => this.toggleMenu( ) }>
              <i className="fas fa-ellipsis-v" />
            </button>
          </header>
          <Timer
            settings        = { this.state.settings       }
            timer           = { this.state.timer          }
            updateTimer     = { this.updateTimer          }
            resetSettings   = { this.resetSettings        }
          />
          <Footer />
        </section>
        <section
          id="Menu-Content"
          className={ this.state.showMenu ? `contents-box-flex showMenu` : `contents-box-flex` }
        >
          <Settings
            toggleMenu   = { this.toggleMenu       }
            settings     = { this.state.settings   }
            saveSettings = { this.saveSettings     }
          />
        </section>
      </React.Fragment>
    );
  }

}

export default TomateTimer;