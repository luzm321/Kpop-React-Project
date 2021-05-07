import React, {Component} from 'react';
import './footer.css'

export default class Footer extends Component {
    state = {};

    componentDidMount() {};


    render() {
        return(
            <div className='footer footBgd'>
                
                    <div className='runningText'>
                        Please
                        <button className='subscribe'>Subscribe</button>
                        <img className='panda' src='https://media.tenor.com/images/fbe17056b565a2efa21171029f6855a8/tenor.gif' alt='cute Panda'></img> 
                        to follow more blog posts!
                    </div>
                    <div>
                        <iframe className='responsive-vid' width="560" height="315" src="https://www.youtube.com/embed/W0cs6ciCt_k" title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                
            </div>
        );
    };
};