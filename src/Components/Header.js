// import React, { Component } from 'react';
// import ParticlesBg  from "particles-bg";
// import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';







// // class Header extends Component {

// //    function Header(props) {
// //       const classes = useStyles();

// //       if(this.props.data){
// //          var project = this.props.data.project;
// //          var github = this.props.data.github;
// //          var name = this.props.data.name;
// //          var description= this.props.data.description;
// //          var city= this.props.data.address.city;
// //          var networks= this.props.data.social.map(function(network){
// //          return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
// //          })
// //       }

// //       return (
// //          <div>
// //             <header id="home">
// //             {/* <ParticlesBg type="circle" bg={true} /> */}
// //             <nav id="nav-wrap">
// //                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
// //                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

// //                <ul id="nav" className="nav">
// //                   <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
// //                   <li><a className="smoothscroll" href="#about">About</a></li>
// //                   <li><a className="smoothscroll" href="#resume">Resume</a></li>
// //                   <li><a className="smoothscroll" href="#portfolio">Works</a></li>
// //                   <li><a className="smoothscroll" href="#contact">Contact</a></li>
// //                </ul>
// //             </nav>





// //             <div className="row banner">
            
// //                <div className="banner-text">
// //                   <h1 className="responsive-headline">{name}</h1>
// //                   <h3>{description}.</h3>
// //                   <hr />
// //                   <ul className="social">
// //                      <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
// //                      <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
// //                   </ul>
// //                </div>
// //             </div>

// //             <p className="scrolldown">
// //                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
// //             </p>

// //             </header>

// //             {/* <Paper variant="outlined">
// //                <img src="https://www.hfri.net/wp-content/uploads/2015/10/house-interior.jpg" />
// //             </Paper> */}
            

// //          </div>
      
// //       );


// //    }
// // }



// class Header extends Component {


//   render() {

//     if(this.props.data){
//        var project = this.props.data.project;
//        var github = this.props.data.github;
//          var name = this.props.data.name;
//          var description= this.props.data.description;
//          var city= this.props.data.address.city;
//          var networks= this.props.data.social.map(function(network){
//          return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
//          })
//     }

//     return (
//        <div>
//           <header id="home">
//             {/* <ParticlesBg type="circle" bg={true} /> */}
//             <nav id="nav-wrap">
//                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
//                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

//                <ul id="nav" className="nav">
//                   <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
//                   <li><a className="smoothscroll" href="#about">About</a></li>
//                   <li><a className="smoothscroll" href="#resume">Resume</a></li>
//                   <li><a className="smoothscroll" href="#portfolio">Works</a></li>
//                   <li><a className="smoothscroll" href="#contact">Contact</a></li>
//                </ul>
//             </nav>





//             <div className="row banner">
            
//                <div className="banner-text">
//                   <h1 className="responsive-headline">{name}</h1>
//                   <h3>{description}.</h3>
//                   <hr />
//                   <ul className="social">
//                      <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
//                      <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
//                   </ul>
//                </div>
//             </div>

//             <p className="scrolldown">
//                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
//             </p>

//            </header>

//             {/* <Paper variant="outlined">
//                <img src="https://www.hfri.net/wp-content/uploads/2015/10/house-interior.jpg" />
//             </Paper> */}
           

//        </div>
      
//     );
//   }
// }

// export default Header;






import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css'; // Tell webpack that Button.js uses these styles



class Header extends Component {


  render() {
    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
         var name = this.props.data.name;
         var description= this.props.data.description;
         var city= this.props.data.address.city;
         var networks= this.props.data.social.map(function(network){
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
    }

    return (
       <div>
          <header id="home" className="background-image">
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Gallery</a></li>
                  <li><a className="smoothscroll" href="#resume">Why Us?</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>
            </nav>

            <div className="row banner">
  
            <div className="banner-text">
               <h1 className="responsive-headline" style={{color: "#010b4a"}}>{name}</h1>
               {/* <h3>{description}</h3> */}
               <hr />
            </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>



           </header>
       </div>
      
    );
  }
}

export default Header;