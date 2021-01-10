import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


class Full_Paint_Gallery extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0)
    }

  render() {
    if (this.props.data) {
      {this.props.data.projects.map((tile) => (console.log(tile)))}

      return (
        <section className="root" id="portfolio" style={{paddingTop: "0px"}}>

        <div>
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
               <ul id="nav" className="nav">
                    <li className="current"><Link to="/">  <FontAwesomeIcon icon={faArrowLeft} />   Return Home  </Link></li>
               </ul>
            </nav>
          </div>

          <Gallery photos={this.props.data.painting_photos} />
        </section>
      );
    }

    return (
      <section id="portfolio"></section>
    );  
  }
}

export default Full_Paint_Gallery;





















