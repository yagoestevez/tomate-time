import React                  from 'react';
import ReactDOM               from 'react-dom';
import TomateTimer            from './Components/TomateTimer';
import registerServiceWorker  from './registerServiceWorker';
import                             './index.css';

ReactDOM.render( <TomateTimer />, document.getElementById( 'TomateTimer' ) );
registerServiceWorker( );