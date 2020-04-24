import React, { Component } from 'react';

class Hscroll extends Component {
    // state = {  }


    render() { 
        const horScroll = () => {
            document.getElementById("filled").style.width = `${(window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100}%` 
            // if(document.getElementById("filled").style.width === '50%') console.log("width reached 50%") 
        } 
        window.addEventListener("scroll", horScroll);
        return ( 
            <div id="hscroll" className="hscroll">
                <div id="filled" className="filled"></div>
            </div>
         );
    }
}
 
export default Hscroll;