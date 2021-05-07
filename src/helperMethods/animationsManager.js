import Radium from 'radium';
import {slideInLeft, slideInRight, fadeIn} from 'react-animations';


export default class Animations {
    constructor() {
        this.animations = {
            slideInLeft: {
                animation: "1s",
                animationName: Radium.keyframes(slideInLeft, "slideInLeft")
              },
          
              slideInRight: {
                  animation: "1s",
                  animationName: Radium.keyframes(slideInRight, "slideInRight")
                },
                
              fadeIn: {
                  animation: "1s",
                  animationName: Radium.keyframes(fadeIn, "fadeIn")
                }
        }
    };

      getAnimation = (animationName) => {
        return this.animations[animationName];
      }

}