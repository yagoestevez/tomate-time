/**
 * @author Yago Estévez
 */

import React from 'react';
import            './Tomatin.css';

const Tomatin = ( props ) => {

  const goToSleep    = props.running ? props.sessionsLeft % 2 !== 0 : true;
  const showProgress = props.progress;

/**
  * @var  MAIN_POSE The SVG markup that makes the main character (Tomatín) shown
  *       in the front panel, under the timer.
  */
  const MAIN_POSE = (
    <React.Fragment>
      <g id="Tomatin-Legs">
        <g id="Tomatin-Right-Leg">
          <path id="Tomatin-Right-Foot"
            d="m 140.3,288.2 -0.5,7.2 c 0,0 -13.5,-2.4 -10.3,2.5 0.7,1.6 3.2,2.1 9.9,0.7 4.5,-0.9 2.7,-2.8 0.4,-3.2"
            className="green-fill red-stroke"
          />
          <path id="Tomatin-Right-Foot-Highlight"
            d="m 137.2,296.6 c -2.2,-1.0 -7.0,-0.5 -6.7,0.3 0.4,1.0 2.4,-0.5 6.7,-0.3 z"
            className="light-green-fill"
          />
        </g>
        <g id="Tomatin-Left-Leg">
          <path id="Tomatin-Left-Foot"
            d="m 169.6,288.2 0.5,7.2 c 0,0 13.5,-2.4 10.3,2.5 -0.7,1.6 -3.2,2.1 -9.9,0.7 -4.5,-0.9 -2.7,-2.8 -0.4,-3.2"
            className="green-fill red-stroke"
          />
          <path id="Tomatin-Left-Leg-Highlight"
            d="m 172.7,296.6 c 2.2,-1.0 7.0,-0.5 6.7,0.3 -0.4,1.0 -2.4,-0.5 -6.7,-0.3 z"
            className="light-green-fill"
          />
        </g>
      </g>
      <g id="Tomatin-Body" className={ goToSleep ? '' : 'dance' }>
      
        <path id="progress-indicator"
          className={ showProgress ? 'active' : 'inactive' }
          style={ { strokeDashoffset: props.progress } }
          d="M11.97041999999999,-154.99998a138.02956,138.02956 0 1,0 276.05912,0a138.02956,138.02956 0 1,0 -276.05912,0"
          transform="rotate(90)"
        />
  
        <circle id="Tomatin-Body-Shape"
          className="light-red-fill red-stroke"
          cx="155"
          cy="150"
          r="139.1"
        />
  
        <g id="Tomatin-Lights">
          <path id="Tomatin-Highlight"
            className="lighter-red-fill"
            d="m 69.7,108.0 c -7.5,22.3 -9.5,43.6 -23.1,39.0 C 32.9,142.5 28.0,120.7 35.5,98.3 43.1,76.0 60.2,61.6 73.8,66.1 c 13.5,4.5 3.4,19.5 -4.1,41.8 z"
          />
          <path id="Tomatin-Shadow"
            className="dark-red-fill"
            d="m 288.9,115.6 a 182.9,182.9 0 0 1 -0.5,13.8 182.9,182.9 0 0 1 -126.0,158.9 139.1,139.1 0 0 0 130.5,-127.3 139.1,139.1 0 0 0 -3.9,-45.4 z"
          />
        </g>
  
        <g
          id="Tomatin-Eyes"
          style={ { opacity: goToSleep ? 0 : 1 } }
        >
          <g id="Tomatin-Right-Eye">
            <circle id="Tomatin-Right-Eye-Shape" onClick={()=> alert("click")} style={{pointerEvents: 'none'}}
              className="red-fill"
              r="15.4"
              cx="113.7"
              cy="223.3"
            />
            <circle id="Tomatin-Right-Eye-Highlight"
              className="white-fill"
              r="6.7"
              cy="218.1"
              cx="108.0"
            />
            <circle
              id="Tomatin-Right-Eye-Highlight-Small"
              className="white-fill"
              cx="122.2"
              cy="227.7"
              r="3.7"
            />
          </g>
          <g id="Tomatin-Left-Eye">
            <circle id="Tomatin-Left-Eye-Shape"
              className="red-fill"
              cx="196.2"
              cy="224.3"
              r="15.4"
            />
            <ellipse id="Tomatin-Left-Eye-Highlight-Big"
              className="white-fill"
              cy="218.1"
              cx="191.5"
              rx="6.7"
              ry="6.7"
            />
            <circle id="Tomatin-Left-Eye-Highlight-Small"
              className="white-fill"
              cx="203.8"
              cy="227.7"
              r="3.7"
            />
          </g>
        </g>

        <g
          id="Tomatin-Closed-Eyes"
          transform="scale(4) translate(-1 8)"
          style={ { opacity: goToSleep ? 1 : 0 } }
        >
          <path id="Tomatin-Closed-Right-Eye"
            className="red-fill"
            d="m 25.5,49.4 a 3.9,2.6 0 0 0 -0.0,0.2 3.9,2.6 0 0 0 3.9,2.6 3.9,2.6 0 0 0 3.9,-2.6 3.9,2.6 0 0 0 -0.0,-0.2 3.9,2.6 0 0 1 -3.9,2.4 3.9,2.6 0 0 1 -3.9,-2.4 z"
          />
          <path id="Tomatin-Closed-Left-Eye"
            className="red-fill"
            d="m 46.7,49.4 a 3.9,2.6 0 0 0 -0.0,0.2 3.9,2.6 0 0 0 3.9,2.6 3.9,2.6 0 0 0 3.9,-2.6 3.9,2.6 0 0 0 -0.0,-0.2 3.9,2.6 0 0 1 -3.9,2.4 3.9,2.6 0 0 1 -3.9,-2.4 z"
          />
        </g>
  
        <g id="Tomatin-Mouth" style={ { opacity: goToSleep ? 0 : 1 } }>
          <path id="Tomatin-Happy-Mouth"
            className="red-fill"
            d="m 140.0,239.1 a 14.9,17.2 0 0 0 14.9,17.0 14.9,17.2 0 0 0 14.9,-17.0 z"
          />
          <path id="Tomatin-Tongue"
            d="m 155.0,243.5 a 11.9,11.9 0 0 0 -10.0,5.5 c 2.4,3.2 6.0,5.3 10.0,5.3 3.9,0 7.5,-2.0 10.0,-5.3 A 11.9,11.9 0 0 0 155.0,243.5 Z"
            className="pink-fill"
          />
        </g>

        <ellipse
          id="Tomatin-Open-Mouth"
          transform="translate(10 60)"
          style={ { opacity: goToSleep ? 1 : 0 } }
          className="red-fill"
          rx="13"  ry="10"
          cx="145" cy="183"
        />
  
        <g
          id="Tomatin-Cheeks">
          <circle id="Tomatin-Left-Cheek"
            className="pink-fill"
            cx="214.7"
            cy="245.1"
            r="6.2"
          />
          <circle id="Tomatin-Right-Cheek"
            className="pink-fill"
            cx="95.2"
            cy="245.1"
            r="6.2"
          />
        </g>
        <g id="Tomatin-Arms">
          <g id="Tomatin-Right-Arm">
            <path id="Tomatin-Right-Hand"
              d="m 63.5,272.3 c -8.4,3.5 -7.1,14.0 -2.1,20.3 -0.0,-7.7 6.7,-10.7 6.7,-15.4 -0.0,-3.4 -4.6,-4.8 -4.6,-4.8 z"
              className="green-fill"
            />
            <path id="Tomatin-Right-Arm-Stroke"
              d="m 70.4,260.7 c 0,0 -6.9,2.6 -6.8,11.8 -1.8,0.3 -10.9,6.5 -2.2,19.5 -0.7,-9.0 13.6,-14.0 2.2,-19.5"
              className="red-stroke"
            />
            <path id="Tomatin-Right-Hand-Highlight"
              d="m 63.8,273.8 c 0,0 -5.4,1.3 -4.9,10.1 1.4,-6.5 4.4,-7.4 4.9,-10.1 z"
              className="light-green-fill"
            />
          </g>
          <g id="Tomatin-Left-Arm">
            <path id="Tomatin-Left-Hand"
              d="m 246.4,272.3 c 8.4,3.5 7.1,14.0 2.1,20.3 0.0,-7.7 -6.7,-10.7 -6.7,-15.4 0.0,-3.4 4.6,-4.8 4.6,-4.8 z"
              className="green-fill"
            />
            <path id="Tomatin-Left-Arm-Stroke"
              d="m 239.5,260.7 c 0,0 3.6,1.3 5.6,5.6 0.7,1.6 1.2,3.6 1.1,6.1 1.8,0.3 10.9,6.5 2.2,19.5 0.7,-9.0 -13.6,-14.0 -2.2,-19.5"
              className="red-stroke"
            />
            <path id="Tomatin-Left-Hand-Highlight"
              d="m 246.1,273.8 c 0,0 5.4,1.3 4.9,10.1 -1.4,-6.5 -4.4,-7.4 -4.9,-10.1 z"
              className="light-green-fill"
            />
          </g>
        </g>
    
        <g id="Tomatin-Hat">
          <path id="Tomatin-Hat-Shadow"
            className="red-fill"
            d="m 111.2,72.9 c -3.2,-21.3 -11.2,-25.3 -11.2,-25.3 0,0 -12.4,8.7 -21.3,6.0 6.9,-4.5 12.4,-12.8 14.3,-17.4 -1.9,-4.0 -2.0,-6.6 -0.7,-9.6 1.3,-3.0 4.7,-4.6 7.7,-6.1 2.6,-1.3 5.5,-2.8 8.4,-2.5 2.7,0.2 6.2,1.8 7.3,3.8 -1.0,4.5 26.2,3.5 40.6,3.2 -1.6,4.2 -22.7,15.8 -36.5,16.6 3.0,3.9 -0.3,15.7 -8.7,31.3 z"
          />
          <path id="Tomatin-Hat-Shape"
            className="green-fill red-stroke"
            d="M 124.7,3.5 C 119.4,12.8 102.7,6.6 98.1,17.6 97.4,15.4 95.2,7.3 94.8,5.9 94.4,4.3 86.5,5.7 84.0,7.8 c 3.0,1.0 7.7,7.2 9.8,10.1 -11.2,-0.0 -33.4,6.9 -35.1,11.7 7.8,-2.6 26.2,-2.0 28.2,1.9 -1.9,4.5 -14.3,13.6 -21.3,18.2 8.9,2.7 24.9,-5.2 24.9,-5.2 0,0 11.7,4.9 15.0,26.2 8.3,-15.5 11.2,-29.5 8.1,-33.4 13.7,-0.7 33.4,-10.0 37.0,-12.7 -14.3,0.3 -32.2,-0.9 -31.2,-5.4 -1.1,-1.9 7.0,-10.9 5.2,-15.7 z"
          />
          <path id="Tomatin-Hat-Highlight"
            className="light-green-fill"
            d="m 121.6,10.2 c -9.1,6.4 -17.6,-1.8 -22.4,12.0 -4.3,-0.9 -8.8,-3.9 -32.4,4.1 8.2,-1.1 22.9,-0.2 24.9,3.7 -1.9,4.5 -7.4,10.2 -14.4,14.8 19.7,-2.0 21.5,-15.4 28.2,10.3 8.3,-17.3 4.9,-18.6 4.0,-21.9 13.7,-0.7 20.0,-3.3 24.7,-5.2 -15.6,-0.0 -20.6,-3.3 -19.6,-7.8 -1.1,-1.9 2.6,-5.3 6.8,-10.0 z"
          />
          <path id="Tomatin-Hat-Tip-Highlight"
            className="light-green-fill"
            d="m 87.2,8.0 c 2.5,-1.1 5.6,-1.0 5.6,-1.0 l -2.3,2.8 z"
          />
        </g>
      </g>
      <g id="Speech-Balloon" style={ { opacity: props.running ? 0 : 1 } }>
          <path id="Speech-Balloon-Shadow"
            className="red-fill"
            d="m 264.2,167.9 a 45.7,33.7 13.6 0 0 -52.4,21.9 45.7,33.7 13.6 0 0 13.9,32.6 c -0.1,2.7 -1.7,6.7 -5.4,13.0 12.2,-3.5 21.3,-3.2 26.2,-2.6 a 45.7,33.7 13.6 0 0 1.8,0.5 45.7,33.7 13.6 0 0 52.4,-21.9 45.7,33.7 13.6 0 0 -36.5,-43.5 z"
          />
          <path id="Speech-Balloon-Shape"
            className="white-fill red-stroke"
            d="m 261.3,165.7 a 44.2,32.5 13.6 0 0 -50.6,21.2 44.2,32.5 13.6 0 0 13.5,31.5 c -0.1,2.6 -1.6,6.5 -5.3,12.6 11.8,-3.4 20.6,-3.1 25.3,-2.5 a 44.2,32.5 13.6 0 0 1.7,0.4 44.2,32.5 13.6 0 0 50.6,-21.2 44.2,32.5 13.6 0 0 -35.3,-42.0 z"
          />
          <text
            x="245" y="193" transform="rotate(15 245 193)"
            fontSize="10"
            className="light-red-fill"
            style={{textAlign:"center",textAnchor:"middle"}}
          >
            Whenever
          </text>
          <text
            x="255" y="208" transform="rotate(15 255 208)"
            fontSize="10"
            className="light-red-fill"
            style={{textAlign:"center",textAnchor:"middle"}}
          >
            you're ready!
          </text>
        </g>
    </React.Fragment>
  );

/**
  * @var SETTINGS_POSE The SVG markup for the secondary character, the one shown
  *      in the settings panel.
  */
  const SETTINGS_POSE = (
    <g>
      <g id="Mini-Tomatin-Body" transform="translate(0,150)">

        <circle id="Body-Shape"
          className="light-red-fill red-stroke bolder-stroke"
          r="139.1"
          cx="150"
          cy="147.7"
        />

        <g id="Face">
          <g id="Eyes">
            <path id="right-eye-happy"
              className="red-fill"
              d="m 199.7,183.5 a 10.1,10.4 51.9 0 0 -0.5,-0.8 10.1,10.4 51.9 0 0 -14.4,-1.5 10.1,10.4 51.9 0 0 -1.9,14.4 10.1,10.4 51.9 0 0 0.6,0.7 10.1,10.4 51.9 0 1 2.5,-13.5 10.1,10.4 51.9 0 1 13.8,0.8 z"
            />
            <path id="left-eye-happy"
              className="red-fill"
              d="m 248.1,158.2 a 10.1,10.4 75.4 0 0 -0.2,-1.0 10.1,10.4 75.4 0 0 -12.6,-7.2 10.1,10.4 75.4 0 0 -7.5,12.4 10.1,10.4 75.4 0 0 0.2,0.9 10.1,10.4 75.4 0 1 7.7,-11.4 10.1,10.4 75.4 0 1 12.3,6.3 z"
            />
          </g>
          <g id="Mouth">
            <path id="mouth-shape"
              className="red-fill"
              d="m 212.3,190.5 a 16.4,13.0 72.6 0 0 18.6,6.2 16.4,13.0 72.6 0 0 3.0,-21.7 z"
            />
            <path id="tongue"
              className="pink-fill"
              d="m 225.2,186.4 a 11.5,10.1 89.9 0 0 -4.7,9.6 c 3.2,1.4 6.8,1.2 9.6,-0.8 2.8,-2.0 4.5,-5.5 4.8,-9.5 a 11.5,10.1 89.9 0 0 -9.7,0.6 z"
            />
          </g>
          <g id="Cheeks">
            <circle id="left-cheek"
              className="pink-fill"
              r="4.9"
              cx="257.9"
              cy="164.0"
            />
            <circle id="right-cheek"
              className="pink-fill"
              r="6.0"
              cy="213.0"
              cx="184.4"
            />
          </g>
        </g>
        <path id="Timer"
          d="m 194.2,145.4 c 0.2,-0.8 0.1,-1.7 -0.3,-3.1 -0.7,-2.1 -0.5,-2.0 -3.5,-1.5 -1.1,0.1 -1.1,0.2 -1.4,2.0 -0.1,1.0 -0.2,2.0 -0.1,2.3 0.2,0.6 1.9,2.1 2.7,2.3 1.0,0.2 2.2,-0.6 2.6,-2.0 z m 12.1,-6.9 c 2.6,-2.8 4.2,-6.2 4.3,-8.8 0.0,-2.0 -2.1,-5.4 -5.4,-8.4 -1.2,-1.1 -2.0,-2.2 -2.7,-3.6 -0.8,-1.7 -1.1,-2.0 -2.1,-2.4 -0.6,-0.2 -1.2,-0.5 -1.3,-0.7 -0.0,-0.1 -0.5,-0.2 -1.1,-0.1 -0.8,0.1 -1.0,0.3 -1.2,1.1 -0.1,0.5 -0.3,1.0 -0.4,1.1 -0.4,0.2 -2.4,9.7 -2.6,12.3 -0.3,5.3 1.0,9.7 3.6,11.7 1.4,1.1 3.1,1.6 4.3,1.3 1.3,-0.3 3.6,-1.8 4.9,-3.3 z m -6.8,-4.4 c -0.8,-1.7 -0.1,-8.3 0.9,-9.1 0.6,-0.4 0.8,-0.3 2.3,1.4 1.5,1.7 1.7,2.0 1.5,2.8 -0.4,2.4 -4.2,6.2 -4.9,4.9 z m 23.7,-5.7 c 2.6,-2.8 4.2,-6.2 4.3,-8.8 0.0,-2.0 -2.1,-5.4 -5.4,-8.4 -1.2,-1.1 -2.0,-2.2 -2.7,-3.6 -0.8,-1.7 -1.1,-2.0 -2.1,-2.4 -0.6,-0.2 -1.2,-0.5 -1.3,-0.7 -0.0,-0.1 -0.5,-0.2 -1.1,-0.1 -0.8,0.1 -1.0,0.3 -1.2,1.1 -0.1,0.5 -0.3,1.0 -0.4,1.1 -0.4,0.2 -2.4,9.7 -2.6,12.3 -0.3,5.3 1.0,9.7 3.6,11.7 1.4,1.1 3.1,1.6 4.3,1.3 1.3,-0.3 3.6,-1.8 4.9,-3.3 z m -6.8,-4.4 c -0.8,-1.7 -0.1,-8.3 0.9,-9.1 0.6,-0.4 0.8,-0.3 2.3,1.4 1.5,1.7 1.7,2.0 1.5,2.8 -0.4,2.4 -4.2,6.2 -4.9,4.9 z m -44.4,34.0 c 1.7,-1.6 3.5,-3.6 4.0,-4.3 l 0.8,-1.3 0.9,0.7 c 1.2,0.9 2.6,0.7 5.1,-0.6 2.5,-1.4 3.6,-2.9 4.1,-5.5 0.6,-3.4 -1.1,-6.0 -5.5,-7.8 l -2.1,-0.8 2.4,-1.9 c 1.3,-1.0 2.8,-2.4 3.3,-3.1 0.8,-0.9 0.9,-1.2 0.5,-2.3 -0.2,-0.7 -1.0,-1.7 -1.8,-2.4 l -1.3,-1.2 -2.8,2.0 -2.8,2.0 -1.2,-0.6 c -1.2,-0.6 -1.3,-0.5 -1.9,0.3 -1.2,1.8 -2.7,5.7 -2.8,7.2 -0.0,2.0 1.2,5.0 2.8,6.1 1.0,0.7 2.3,0.8 6.7,0.5 1.6,-0.1 0.8,0.8 -2.0,2.5 -1.3,0.8 -2.5,1.7 -2.5,1.9 -0.0,0.2 -0.1,0.5 -0.3,0.6 -0.1,0.0 -0.2,-0.0 -0.2,-0.3 0.0,-0.4 -2.1,-1.3 -2.5,-1.1 -0.1,0.0 -1.2,1.1 -2.6,2.4 -1.3,1.2 -2.8,2.6 -3.3,3.1 -0.8,0.7 -0.9,0.7 -0.5,-0.0 1.4,-3.7 3.0,-9.7 3.0,-11.2 -0.0,-0.9 -0.2,-1.4 -0.8,-2.1 -1.1,-1.2 -3.8,-2.5 -5.4,-2.5 -1.8,-0.0 -5.4,1.7 -7.5,3.8 -1.9,1.9 -2.1,3.4 -0.8,5.4 0.4,0.7 1.1,1.5 1.3,1.7 0.8,0.5 2.7,-0.2 4.5,-2.0 0.9,-0.9 1.7,-1.6 1.9,-1.5 0.1,0.0 -0.2,1.3 -0.8,3.0 -1.0,3.0 -1.4,4.8 -1.8,8.0 -0.1,1.6 -0.0,2.2 0.7,3.9 2.2,4.9 4.3,4.5 11.7,-2.5 z M 191.7,137.1 c 0.9,-1.5 0.9,-1.6 0.1,-2.9 -1.5,-2.5 -1.6,-2.6 -3.0,-2.3 -1.8,0.3 -2.4,0.7 -2.6,1.9 -0.4,2.1 1.1,4.5 3.2,5.1 0.8,0.2 1.1,0.0 2.2,-1.8 z"
          className="white-fill"
        />
        <g id="Face-Lights">
          <path id="highlight"
            className="lighter-red-fill"
            d="M 89.2,121.1 C 81.6,143.5 79.6,164.8 66.0,160.2 52.4,155.6 47.5,133.8 55.1,111.4 62.6,89.1 79.7,74.7 93.3,79.2 c 13.5,4.5 3.4,19.5 -4.1,41.8 z"
          />
          <path id="shadow"
            className="dark-red-fill"
            d="m 284.1,113.1 a 182.9,182.9 0 0 1 -0.5,13.8 182.9,182.9 0 0 1 -126.0,158.9 139.1,139.1 0 0 0 130.5,-127.3 139.1,139.1 0 0 0 -3.9,-45.4 z"
          />
        </g>
        <g id="Feet">
          <g id="Right-Foot">
            <path id="right-foot-shape"
              className="green-fill red-stroke bolder-stroke"
              d="m 137.0,276.7 c -2.1,5.7 -2.6,13.6 -2.6,13.6 0,0 -13.0,-2.3 -9.9,2.4 0.7,1.6 3.1,2.0 9.6,0.7 4.4,-0.8 2.6,-2.7 0.3,-3.1"
            />
            <path id="right-foot-highlight"
              className="light-green-fill"
              d="m 131.8,291.5 c -2.1,-1.0 -6.8,-0.5 -6.5,0.3 0.4,0.9 2.3,-0.5 6.5,-0.3 z"
            />
          </g>
          <g id="Left-Foot">
            <path id="left-foot-shape"
              className="green-fill red-stroke bolder-stroke"
              d="m 215.2,270.7 2.6,6.4 c 0,0 11.6,-6.3 10.2,-0.8 -0.1,1.7 -2.3,2.9 -8.8,3.7 -4.4,0.5 -3.3,-1.8 -1.3,-2.9"
            />
            <path id="left-foot-highlight"
              className="light-green-fill"
              d="m 220.6,277.5 c 1.7,-1.6 6.3,-2.6 6.3,-1.6 -0.1,1.0 -2.4,0.1 -6.3,1.6 z"
            />
          </g>
        </g>
        <g id="Hands">
          <g id="Right-Hand">
            <path id="right-hand-shape"
              className="green-fill"
              d="m 96.4,243.2 c -8.1,3.4 -6.9,13.6 -2.0,19.6 -0.0,-7.5 6.5,-10.3 6.5,-14.9 -0.0,-3.3 -4.5,-4.7 -4.5,-4.7 z"
            />
            <path id="right-hand-stroke"
              className="red-stroke bolder-stroke"
              d="m 103.1,232.0 c 0,0 -6.7,2.5 -6.6,11.4 -1.7,0.3 -10.6,6.3 -2.1,18.9 -0.7,-8.8 13.2,-13.6 2.1,-18.9"
            />
            <path id="right-hand-highlight"
              className="light-green-fill"
              d="m 96.7,244.7 c 0,0 -5.3,1.3 -4.7,9.7 1.3,-6.3 4.3,-7.1 4.7,-9.7 z"
            />
          </g>
          <g
            id="Left-Hand">
            <path id="left-hand-shape"
              className="green-fill"
              d="m 288.4,87.1 c -2.2,-10.5 2.7,-14.8 10.9,-16.6 -0.8,8.3 -2.3,11.4 -5.8,14.7 -3.1,1.1 -5.0,1.9 -5.0,1.9 z"
            />
            <path id="left-hand-stroke"
              className="red-stroke bolder-stroke"
              d="m 279.2,96.3 c 0,0 8.7,-2.3 9.4,-9.2 -2.7,-9.6 2.1,-14.0 10.7,-16.6 -0.5,10.9 -3.6,15.0 -10.7,16.6"
            />
            <path id="left-hand-highlight"
              className="light-green-fill"
              d="m 289.7,81.3 c 0,0 -0.8,-5.4 7.1,-8.2 -5.2,3.7 -4.9,6.7 -7.1,8.2 z"
            />
          </g>
        </g>
        <g id="Hat">
          <path id="hat-shadow"
            className="red-fill"
            d="M 107.9,75.2 C 95.9,58.0 87.3,57.9 87.3,57.9 c 0,0 -7.0,12.9 -16.0,14.3 4.1,-6.9 5.3,-16.4 5.0,-21.2 -3.4,-2.6 -4.6,-4.9 -4.7,-8.0 -0.1,-3.1 2.1,-6.0 4.0,-8.6 1.6,-2.3 3.5,-4.8 6.2,-5.8 2.5,-0.9 6.1,-1.0 8.0,0.1 0.9,4.3 24.3,-8.0 36.7,-14.5 0.3,4.3 -13.0,23.5 -24.6,30.0 4.3,2.0 6.3,13.8 5.7,30.9 z"
          />
          <path id="hat-shape"
            className="green-fill red-stroke bolder-stroke"
            d="M 90.1,9.1 C 89.4,19.4 72.2,21.2 72.9,32.8 71.4,31.1 66.0,25.1 65.1,24.0 c -1.0,-1.2 -7.2,3.3 -8.5,6.2 3.1,-0.3 9.8,2.9 12.8,4.5 -9.7,4.7 -26.1,20.3 -25.4,25.1 5.7,-5.6 21.9,-13.0 25.3,-10.3 0.2,4.7 -6.6,18.0 -10.7,24.9 8.9,-1.4 19.4,-15.2 19.4,-15.2 0,0 12.3,-0.7 24.2,16.4 C 102.7,58.8 99.2,45.4 94.9,43.4 106.5,36.8 119.7,20.4 121.6,16.5 109.3,22.9 93.2,29.5 92.2,25.1 90.3,23.9 93.7,12.6 90.1,9.1 Z"
          />
          <path id="hat-highlight"
            className="light-green-fill"
            d="m 90.1,16.3 c -5.1,9.4 -16.1,5.9 -14.3,20.0 -4.1,1.0 -9.3,0.3 -26.3,17.4 6.7,-4.5 19.8,-10.0 23.2,-7.3 0.2,4.7 -2.0,12.0 -6.1,19.0 C 82.7,55.2 78.6,42.8 95.4,62.4 95.3,43.7 91.7,44.1 89.6,41.5 101.2,35.0 105.7,30.1 108.9,26.4 95.2,33.0 89.5,32.3 88.5,28.0 86.6,26.7 88.5,22.2 90.1,16.3 Z"
          />
          <path id="hat-top-highlight"
            className="light-green-fill"
            d="m 59.4,29.0 c 1.7,-2.1 4.4,-3.3 4.4,-3.3 l -0.8,3.4 z"
          />
        </g>

      </g>
      <g id="MiniTomatin-Speech-Balloon">
        <path id="MiniTomatin-Speech-Balloon-Shadow"
          className="red-fill"
          d="m 193.7,11.3 c -51.6,9.7 -86.8,56.3 -78.4,104.0 5.2,29.5 26.4,53.9 56.2,64.7 2.1,6.7 2.9,17.8 1.6,36.6 19.7,-20.6 37.1,-28.7 46.9,-32.0 C 271.6,173.4 309.6,130.1 302.4,80.1 295.6,32.1 245.4,1.5 193.7,11.3 Z"
        />
        <path id="MiniTomatin-Speech-Balloon-Shape"
          className="white-fill red-stroke"
          d="M 189.6,9.2 C 137.9,18.7 102.7,63.9 111.1,110.2 c 5.2,28.6 26.4,52.3 56.2,62.8 2.1,6.5 2.9,17.3 1.6,35.6 19.7,-19.9 37.1,-27.9 46.9,-31.0 50.5,-10.9 90.1,-59.8 82.3,-101.5 C 289.7,29.7 241.3,-0.1 189.6,9.2 Z"
        />
      </g>
      <text
        x="205" y="70"
        fontSize="30" 
        className="red-fill"
        style={{textAlign:"center",textAnchor:"middle"}}
      >
        use
      </text>
      <text
        x="205" y="98"
        fontSize="30" 
        className="light-red-fill"
        style={{textAlign:"center",textAnchor:"middle"}}
      >
        tomates
      </text>
      <text
        x="205" y="125"
        fontSize="30" 
        className="red-fill"
        style={{textAlign:"center",textAnchor:"middle"}}
      >
        your way!
      </text>
    </g>
  );

/**
  * @returns {JSX} Returns the SVG markup for one of the characters, depending
  *                on the props passed through the component.
  */
  return (
    <svg
      id={props.pose === 'main' ? 'Tomatin' : 'Mini-Tomatin'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.pose === 'main' ? '0 0 310 300' : '0 0 310 450'} >
        {props.pose === 'main' ? MAIN_POSE : SETTINGS_POSE}
    </svg>
  );

}

export default Tomatin;