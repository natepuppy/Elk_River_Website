import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



class Portfolio_Paint extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }



  render() {
    if (this.props.data) {
      {this.props.data.projects.map((tile) => (console.log(tile)))}

      if (this.state.width < 858) {
        return (
          <section className="root" id="portfolio">
            <h2>Elegant Interior Painting</h2>
            <Gallery photos={this.props.data.painting_photos.slice(0, 4)} />
            <Link to="/paintgallery"> 
            <div>
              <button style={{backgroundColor: 'rgba(52, 52, 52, 0.0)', color: '#fe6928', margin: "0px"}}>See More <FontAwesomeIcon icon={faArrowRight} /></button> 
            </div>
          </Link>
          </section>
        );
      }
        
      return (
        <section className="root" id="portfolio">
          <h2>Elegant Interior Painting</h2>
          <Gallery photos={this.props.data.painting_photos.slice(0, 7)} />
          <Link to="/paintgallery"> 
            <div>
              <button style={{backgroundColor: 'rgba(52, 52, 52, 0.0)', color: '#fe6928', margin: "0px"}}>See More <FontAwesomeIcon icon={faArrowRight} /></button> 
            </div>
          </Link>
        </section>
      );
    }

    return (
      <section id="portfolio"></section>
    );  
  }
}

export default Portfolio_Paint;




    // const photos = [
    //   {
    //     src: 'https://cdn.vox-cdn.com/thumbor/heSlsMPUG7Bb7EEuus7_nW1wfI0=/0x0:4000x2657/1200x800/filters:focal(1680x1009:2320x1649)/cdn.vox-cdn.com/uploads/chorus_image/image/66540044/HOUSE_iStock_153139903.14.jpg',
    //     width: 4,
    //     height: 3
    //   },
    //   {
    //     src: 'https://cdn.vox-cdn.com/thumbor/heSlsMPUG7Bb7EEuus7_nW1wfI0=/0x0:4000x2657/1200x800/filters:focal(1680x1009:2320x1649)/cdn.vox-cdn.com/uploads/chorus_image/image/66540044/HOUSE_iStock_153139903.14.jpg',
    //     width: 1,
    //     height: 1
    //   }
    // ];




          {/* <GridList cellHeight={250} spacing={0} classes="gridList2">
            {this.props.data.projects.map((tile) => (
              <GridListTile className="tile" key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>  
                <img src={tile.img} alt={tile.title}  />
              </GridListTile>
            ))}
          </GridList> */}


        // <section>
        //   <Gallery photos={this.props.data.photos} />
        // </section>
        






















// class Portfolio extends Component {
//   render() {
//     if (this.props.data) {
//       {this.props.data.projects.map((tile) => (
//         console.log(tile)
//       ))}
        
//         return (
//           <div className="portfolio">
//             <GridList className="gridList" cols={3}>
//               {this.props.data.projects.map((tile) => (
//                 <GridListTile key={tile.image} cols={tile.cols || 1}>
//                   <img src={tile.url} alt={tile.title} />
//                 </GridListTile>
//               ))}
//             </GridList>
//           </div>
//         );
//     }

//     return (
//       <section id="portfolio">
//         <div className="row">
//           <div className="twelve columns collapsed">
//             <h1>Check Out Some of My Works.</h1>
//             <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Portfolio;





// import React, { Component } from 'react';

// class Portfolio extends Component {
//   render() {

//     if (this.props.data) {
//       var projects = this.props.data.projects.map(function (projects) {
//         var projectImage = 'images/portfolio/' + projects.image;
        
//         return (
//           <div key={projects.title} className="columns portfolio-item">
//             <div className="item-wrap">
//               <a href={projects.url} title={projects.title}>
//                 <img alt={projects.title} src={projectImage} />
//                 <div className="overlay">
//                   <div className="portfolio-item-meta">
//                     <h5>{projects.title}</h5>
//                     <p>{projects.category}</p>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         )
//       })
//     }

//     return (
//       <section id="portfolio">

//         <div className="row">

//           <div className="twelve columns collapsed">

//             <h1>Check Out Some of My Works.</h1>

//             <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
//               {projects}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Portfolio;
// // import React, { Component } from 'react';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton'; 
// import Gallery from "react-photo-gallery";


// import React, { Component, useState, useCallback } from "react";
// import { render } from "react-dom";
// import Carousel, { Modal, ModalGateway } from "react-images";




// class Portfolio extends Component {
//   render() {
//     const [currentImage, setCurrentImage] = useState(0);
//     const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
//     const openLightbox = useCallback((event, { photo, index }) => {
//       setCurrentImage(index);
//       setViewerIsOpen(true);
//     }, []); 
  
//     const closeLightbox = () => {
//       setCurrentImage(0);
//       setViewerIsOpen(false);
//     };
  
//     let photos = [
//       {
//         src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
//         width: 4,
//         height: 3
//       },
//       {
//         src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//         width: 1,
//         height: 1
//       },
//       {
//         src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
//         width: 3,
//         height: 4
//       },
//       {
//         src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
//         width: 3,
//         height: 4
//       },
//       {
//         src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
//         width: 3,
//         height: 4
//       },
//       {
//         src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
//         width: 4,
//         height: 3
//       },
//       {
//         src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
//         width: 3,
//         height: 4
//       },
//       {
//         src: "https://source.unsplash.com/PpOHJezOalU/800x599",
//         width: 4,
//         height: 3
//       },
//       {
//         src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
//         width: 4,
//         height: 3
//       }
//     ];
  
//     return (
//       <div>
//         <Gallery photos={photos} onClick={openLightbox} />
//         <ModalGateway>
//           {viewerIsOpen ? (
//             <Modal onClose={closeLightbox}>
//               <Carousel
//                 currentIndex={currentImage}
//                 views={photos.map(x => ({
//                   ...x,
//                   srcset: x.srcSet,
//                   caption: x.title
//                 }))}
//               />
//             </Modal>
//           ) : null}
//         </ModalGateway>
//       </div>
//     );
//   }
// }

// export default Portfolio;




















