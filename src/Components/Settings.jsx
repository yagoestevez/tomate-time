/**
 * @author Yago Estévez
 */

import React     from 'react';
import Tomatin   from './Tomatin';
import Option    from './Option';
import                './Settings.css';

/**
  * @function       Settings() (Component)
  * @description    Builds the settings panel which holds the Options component
  *                 and also the Tomatin component.
  * @returns {JSX}  Returns all the markup for the settings layout.
  */
const Settings = props => {

  return (
    <nav id="Settings">
      <aside id="Banner">
        <Tomatin pose="settings" />
        <div className="sidebar-background">
          <h1>
            <strong className="green">Tomate</strong> <br />Timer
          </h1>
        </div>
      </aside>
      <section id="Customize">
        <div className="settings-content">
          <h1>
            Customize your <strong className="red">Tomates</strong>!
          </h1>
          <Option id="session" { ...props }>
            <span>Set up your <em className="red">Tomates</em>!</span>
            <p>
              Set up your Tomates (AKA <em>Pomodoro Sessions</em>). You can choose any number of
              minutes <strong className="red">up to 60</strong>. One hour without a break is not a
              good idea anyways.
            </p>
          </Option>
          <Option id="break" { ...props }>
            <span>Is 5 minutes OK for a <strong className="red">short break</strong>?</span>
            <p>
              Right after the <em>Pomodoro Session</em> is finished, you will have X minutes for a{' '}
              <strong className="red">short break</strong>, being X the number set here.
            </p>
            <p>If 5 minutes is not enough, you know what to do :D</p>
          </Option>
          <Option id="long-break" { ...props }>
            <span>Now it's time for a <strong className="red">long break</strong>.</span>
            <p>
              A <strong className="red">long break</strong> comes after a number of{' '}
              <em>Pomodoro Sessions</em> are completed. Just like the previous option, you can
              customize this here.
            </p>
          </Option>
          <Option id="total-sessions" { ...props }>
            <span>How many <strong className="red">Tomates</strong> before the <em>long break</em>.</span>
            <p>
              After a certain number of <em>Pomodoro Sessions</em>, you take a long break. Here you
              specify that number.
            </p>
          </Option>

          <button id="save-settings" onClick={ ( ) => props.toggleMenu( ) }>
            SAVE SETTINGS
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Settings;
