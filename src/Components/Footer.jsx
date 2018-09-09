/**
 * @author Yago Estévez
 */

import React from 'react';
import            './Footer.css';

/**
  * @function       Footer() (Component)
  * @description    Renders the footer at the bottom of the app.
  * @returns {JSX}  Returns the markup for building the footer.
  */
const Footer = props => {

/**
  * @var tweet Builds the string to be tweeted when the user clicks the button.
  */
  const tweet    = 'Featuring our little buddy, Tomatín, this Pomodoro timer '
                 + 'is the cutest one you will EVER see. You should definitely try it!\n'
                 + 'https://codepen.io/yagoestevez/full/dqJGVa/\n';
/**
  * @var tweetURL The URL for tweeting, formated with own parameters.
  */
  const tweetURL = 'https://twitter.com/intent/tweet?'
                 + 'hashtags=Pomodoro,Tomate,SVG,WebDesign,FreeCodeCamp,100daysofcode'
                 + 'Coders,Dev,React,Javascript'
                 + '&via=YagoEstevez'
                 + '&related=freecodecamp&text=' +
                 encodeURIComponent( tweet );

  return (
    <footer>
      <p>made by {' '}
        <a
          href="https://twitter.com/yagoestevez/"
          target="_blank"
          rel="noopener noreferrer"
          alt="Yago Estévez on Twitter"
          title="Yago Estévez on Twitter"
          tabIndex="-1"
        >
          Yago Estévez
        </a>
        {' '} - Would you like to {' '}
        <a
          href={tweetURL}
          rel="noopener noreferrer"
          target="_blank"
          alt="Tweet it to your friends"
          title="Tweet it to your friends"
          tabIndex="-1"
        >
          share this on Twitter
        </a>
        ?
      </p>
    </footer>
  );

}

export default Footer;