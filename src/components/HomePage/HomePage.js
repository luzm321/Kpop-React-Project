import React, {Component} from 'react';
import Footer from './../Footer/Footer.js';
import './homePage.css';


export default class HomePage extends Component {


    render() {

        return(
            <div id='homePage' className='main bgd'>
                <h1 className='welcome'>~Welcome to My Blog~</h1>
                <div className='groups'>
                    <p className='bbParagraph'><i>Big Bang are the Kings of Kpop</i></p>
                        <img className='photos' alt='' src='https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2020%2F11%2Fyg-entertainment-k-pop-big-bang-comeback-new-girl-group-0.jpg?w=960&cbr=1&q=90&fit=max'></img>
                    <p className='bbParagraph'><i>Shinee are the Princes of Kpop</i></p>
                        <img className='photos' alt='' src='https://images.squarespace-cdn.com/content/v1/56eb012f27d4bd29de975fae/1527870862161-F5ZHLH2QKHU6SKTSJ8I4/ke17ZwdGBToddI8pDm48kNLmoMgP9-PoGL3pTpvfmf97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZn9JnVc0xDeoNGVJ3wrjE4Nx_EhhKi4CB_8Hn-bafWShA1iIgJHGOspu562nPK3kQ/HIST_SHINEE_HEADER.png?format=1000w'></img>
                    <p className='bbParagraph'><i>BTS are the Trends of Kpop</i></p>
                        <img className='photos' alt='' src='https://cdn.vox-cdn.com/thumbor/I5jL1uK3a_01ZZpAgnHn_w8yAA0=/3x189:1080x901/1200x800/filters:focal(454x454:626x626)/cdn.vox-cdn.com/uploads/chorus_image/image/60052357/hmmmm.0.jpg'></img>
                    <p className='bbParagraph'><i>Exo are the Talents of Kpop</i></p>
                        <img className='photos' alt='' src='https://images-na.ssl-images-amazon.com/images/I/71q8ZQ7OeqL._AC_SL1024_.jpg'></img>
                    <p className='bbParagraph'><i>MonstaX are the Beasts of Kpop</i></p> 
                        <img className='photos' alt='' src='https://f.eu1.jwwb.nl/public/q/u/f/temp-oxovgcmtgyctcnnlhukq/monstax.jpg'></img>     
                </div>          
                <Footer />
            </div>
        );

    };

};