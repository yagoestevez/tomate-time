/**
 * @author Yago Estévez
 */

import React, { Component } from 'react';
import Tomatin              from './Tomatin';
import audioFile            from '../Assets/Beep.wav';
import                           './Timer.css';

/**
  * @class        Timer (Component)
  * @description  Handles most of the UI for the timer and sends computed values
  *               to the parent component to use a centralized state.
  */
class Timer extends Component {

/**
  * @method      constructor()
  * @description Initializes the class with its state and props.
  */
  constructor ( props ) {
    super( props );

    this.intervalID   = null;
    this.interval     = 1000;
    this.timer        = props.timer;
    this.timerSeconds = props.timer / 1000;
    this.sessionsLeft = ( props.settings[ 'total-sessions' ] * 2 ) / 10000;
    this.circleLength = 867.3883056640625;
    this.alarm        = React.createRef();
    // The previous line replaces the following lines because of the
    // requisites on freeCodeCamp testing suite:
    // this.alarm        = new Audio( audioFile );
    // this.alarm.load( );

    this.state = {
      toggleBtn   : false,
      running     : false,
      progress    : 0 - this.circleLength,
      showDisplay : null,
      displayMsgs : {
        pomodoro: [
          `Do something amazing!`, `Go for it!`, `You can make it!`,
          `Let's get some work done!`, `Keep pushing!`
        ],
        break   : [
          `Enjoy your ${this.props.settings.break/60000}min break!`,
          `Now take a ${this.props.settings.break/60000}min! break.`,
          `Just relax for ${this.props.settings.break/60000}min!`,
          `Tired? Take a break and get ready.`
        ]
      }
    };
  }

/**
  * @method       startPauseTimer()
  * @description  Toggles between play and pause. If the timer is counting down
  *               this method makes it pause, otherwise it makes it play.
  */
  startPauseTimer = ( ) => {
    this.timer = this.props.timer;
    this.setState( state => {
      return { toggleBtn: !state.toggleBtn }
    } );

    if ( this.intervalID )
      this.pauseTimer( );
    else
      this.updateTimer( );
  }

/**
  * @method       startTimer()
  * @description  Start the countdown by calling the updateTimer() method.
  */
  startTimer = ( ) => {
    this.updateTimer( );
  }

/**
  * @method       pauseTimer()
  * @description  Only pauses the countdown, leaving the timer's value untouched
  *               to resume the countdown the next time the play button is hit.
  */
  pauseTimer = ( ) => {
    this.intervalID.cancel( );
    this.intervalID = null;
    this.setState( { running: false } );
  }

/**
  * @method       resetTimer()
  * @description  Stops the countdown and sets the timer values to its original
  *               values. It also resets any interval, timeout or alarms.
  */
  resetTimer = ( ) => {
    this.intervalID && this.intervalID.cancel();
    this.intervalID = null;
    this.timeoutID && clearTimeout( this.timeoutID );
    this.timeoutID = null;
    this.alarm.current.currentTime = 0;
    this.alarm.current.pause( );

/* THIS PIECE OF CODE HELPS THE PROJECT PASS THE FREECODECAMP TESTS.
 * I DON'T LIKE THIS BEHAVIOUR AT ALL, SINCE I THINK MANY PEOPLE WOULD
 * BENEFIT FROM *NOT* RESETING TO 25/5 MINUTES THE POMODORO TIMER.
 */
    this.props.resetSettings( );
    this.timer = 1500000;
    // If you're with me and don't like the previous behaviour, just uncomment
    // the following line and remove the two lines above (and resetSettings()
    // in the TomateTimer.jsx file).
    ///// this.timer = this.props.settings.session; 

    this.timerSeconds = ( this.timer / 1000 ) + 1;
    this.setState( state => {
      return {
        running     : false,
        toggleBtn   : false,
        showDisplay : null,
        progress    : 0 - this.circleLength
      }
    } );
    this.resetSessionsLeft( );
    this.props.updateTimer( this.timer );
  }

/**
  * @method       restartCounter()
  * @description  Restart the counter after a Pomodoro, break or long break has
  *               finished. When the Pomodoros have been repeated as many times
  *               as the number of sessions set, resets the counter to its ori-
  *               ginal values.
  */
  restartCounter = ( ) => {
    const fccFix = 1000; // This is here to pass tests #23 and #25 on FCC.

    this.sessionsLeft--;
    if ( this.sessionsLeft > 0 ) {
      this.timeoutID = setTimeout( ( ) => {
        this.intervalID && this.intervalID.cancel();
        this.intervalID = null;

        if ( this.sessionsLeft % 2 !== 0 ) {
          // ->> In a break
          this.timer = this.sessionsLeft === 1
                     ? this.props.settings[ 'long-break' ] + fccFix
                     : this.props.settings.break + fccFix;
        } else {
          // ->> In the Pomodoro session
          this.timer = this.props.settings.session + fccFix;
        }
        this.setState( {
          progress: 0 - this.circleLength
        } );
        this.timerSeconds = this.timer / 1000;
        this.startTimer( );
      }, 500 )
    } else {
      this.timeoutID = setTimeout( ( ) => {
        this.resetSessionsLeft( );
        this.resetTimer( );
      }, 500 )
    }
  }

/**
  * @method       updateTimer()
  * @description  The core logic of the timer. Sets an accurate interval timer
  *               where it subtract a second from the timer until its over and
  *               then it restarts the counter for the next Pomodoro/break.
  *               It also manages the green progress indicator circle surroun-
  *               ding Tomatin shape.
  */
  updateTimer = ( ) => {
    this.intervalID && this.intervalID.cancel();
    this.updateDisplay( );
    this.intervalID = this.setAccurateInterval( ( ) => {
      const strokeStep = this.circleLength / this.timerSeconds;
      if ( this.timer > 0 ) {
        this.setState( state => {
          return {
            progress: state.progress + strokeStep
          }
        } );
        this.timer -= this.interval;
        this.props.updateTimer( this.timer );
      } else {
        this.alarm.current.play( );
        this.props.updateTimer( 0 );
        this.intervalID && this.intervalID.cancel();
        this.restartCounter( );
      }
    }, this.interval );
  }

/**
  * @method       updateDisplay()
  * @description  Takes care of showing the messages to the display.
  */
  updateDisplay = ( ) => {
    const pomodoroMsgs = this.state.displayMsgs.pomodoro;
    const breakMsgs    = this.state.displayMsgs.break;
    this.setState( state => {
      return {
        running: !state.running,
        showDisplay: this.sessionsLeft % 2 !== 0
          ? this.sessionsLeft === 1
            ? `Time for a looooong break!`
            : breakMsgs[ Math.floor( Math.random( ) * breakMsgs.length ) ]
          : pomodoroMsgs[ Math.floor( Math.random( ) * pomodoroMsgs.length ) ]
      }
    } );
  }

/**
  * @method       resetSessionsLeft()
  * @description  Calculates the number of the remaining sessions to be completed.
  */
  resetSessionsLeft = ( ) => {
    this.sessionsLeft = ( this.props.settings[ 'total-sessions' ] * 2 ) / 10000;
  }

/**
  * @method       setAccurateInterval()
  * @description  Make setInterval() function accurate; even when the tab is in-
  *               active, for example.
  * @author       Squeegy <https://gist.github.com/Squeegy/1d99b3cd81d610ac7351>
  * @license      MIT
  */
  setAccurateInterval = ( fn, time ) => {
    var cancel, nextAt, timeout, wrapper;
    nextAt = new Date( ).getTime( ) + time;
    timeout = null;
    wrapper = function( ) {
      nextAt += time;
      timeout = setTimeout( wrapper, nextAt - new Date( ).getTime( ) );
      return fn( );
    };
    cancel = function( ) {
      return clearTimeout( timeout );
    };
    timeout = setTimeout( wrapper, nextAt - new Date( ).getTime( ) );
    return {
      cancel: cancel
    };
  }

/**
  * @method         render()
  * @description    Renders the JSX for this component in the parent component.
  * @returns {JSX}  Returns the layout for the component.
  */
  render() {

  /**
    * @function         printTimer()
    * @description      Formats the timer from milliseconds to minutes and se-
    *                   conds so that it always has two digits for each unit.
    * @returns {string} Returns a string like: '00:00'.
    */
    const printTimer = ( ) => {
      let minutes = parseInt( ( this.props.timer / ( 1000 * 60 ) ) % 60, 10 );
      let seconds = parseInt( ( this.props.timer / 1000 ) % 60         , 10 );
      const hours = minutes === 60 ? '1:' : '';
      minutes = minutes < 10   ? `0${minutes}` : minutes;
      seconds = seconds < 10   ? `0${seconds}` : seconds;
      return `${hours}${minutes}:${seconds}`;
    }

    return (
      <main id="AppLayout">
        <React.Fragment>
          <section id="timer">
            <p className="heading">Tomate Time!</p>
            <div className="countdown" id="time-left">
              {
                printTimer( )
              }
            </div>
            <p className="session" id="timer-label">{ this.state.showDisplay || 'Ready?' }</p>
            <Tomatin
              pose         = { 'main'                  }
              progress     = { this.state.progress     }
              running      = { this.state.running      }
              sessionsLeft = { this.sessionsLeft       }
            />
          </section>
          <section id="timer-buttons">
            <button
              id       = "start_stop"
              name     = "start-stop"
              tabIndex = "1"
              onClick  = { ( ) => this.startPauseTimer( ) }
            >
              <i className={ this.state.toggleBtn ? 'fas fa-pause-circle' : 'fas fa-play-circle ' } />
            </button>
            <button
              id       = "reset"
              name     = "reset"
              tabIndex = "2"
              onClick  = { ( ) => this.resetTimer( ) }
            >
              <i className="fas fa-stop-circle" />
            </button>
          </section>
          <audio id="beep" preload="auto" src={ audioFile } ref={ this.alarm } />
        </React.Fragment>
      </main>
    );
  }

}

export default Timer;
