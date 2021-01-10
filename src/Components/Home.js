import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js';
import Resume from './Resume.js';
import Contact from './Contact.js';
import Portfolio_Paint from './Portfolio_Paint.js';
import Portfolio_Rock from './Portfolio_Rock.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  
  render() {

    

    // if(this.props.data){
    //     var name = this.props.data.name;
    //     var profilepic= this.props.data.image;
    //     var bio = this.props.data.bio;
    //     var street = this.props.data.address.street;
    //     var city = this.props.data.address.city;
    //     var state = this.props.data.address.state;
    //     var zip = this.props.data.address.zip;
    //     var phone= this.props.data.phone;
    //     var email = this.props.data.email;
    //     var resumeDownload = this.props.data.resumedownload;
    // }

    return (
        <div>
          <Header data={this.props.data.main}/>
          <About data={this.props.data.main}/>
          <Portfolio_Paint data={this.props.data.portfolio}/>
          <Portfolio_Rock data={this.props.data.portfolio}/>
          <Resume data={this.props.data.resume}/>
          <Contact data={this.props.data.main}/> 
          <Footer data={this.props.data.main}/>
        </div>
      );
    }
  }

export default Home;





//     return (
//       <div className="App">
//         <Header data={this.state.resumeData.main}/>
//         <About data={this.state.resumeData.main}/>
//         <Portfolio_Paint data={this.state.resumeData.portfolio}/>
//         <Portfolio_Rock data={this.state.resumeData.portfolio}/>
//         <Resume data={this.state.resumeData.resume}/>
//         <Contact data={this.state.resumeData.main}/> 
//         <Footer data={this.state.resumeData.main}/>
//       </div>
//     );
//   }
// }



















// import { Route } from "react-router";

// let routes = (
//   <div>
//     <Route path="/about">
//       <About />
//     </Route>
//     <Route path="/:user">
//       <User />
//     </Route>
//     <Route>
//       <NoMatch />
//     </Route>
//   </div>
// );

































// import React, { Component } from 'react';
// import ReactGA from 'react-ga';
// import $ from 'jquery';
// import './App.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import About from './Components/About';
// import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Portfolio_Paint from './Components/Portfolio_Paint';
// import Portfolio_Rock from './Components/Portfolio_Rock';
// // import { data } from './prac.js';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';


// class App extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       foo: 'bar',
//       resumeData: {}
//     };

//     ReactGA.initialize('UA-110570651-1');
//     ReactGA.pageview(window.location.pathname);

//   }

//   getResumeData() {
//     $.ajax({
//       url:'./resumeData.json',
//       dataType:'json',
//       cache: false,
//       success: function(data){
//         this.setState({resumeData: data});
//       }.bind(this),
//       error: function(xhr, status, err){
//         console.log(err);
//         alert(err);
//       }
//     });
//   }

//   // getNewData() {
//   //   $.ajax({
//   //     url:'./resumeData.json',
//   //     dataType:'json',
//   //     cache: false,
//   //     success: function(data){
//   //       this.setState({resumeData: data});
//   //     }.bind(this),
//   //     error: function(xhr, status, err){
//   //       console.log(err);
//   //       alert(err);
//   //     }
//   //   });
//   // }

//   componentDidMount(){
//     this.getResumeData();
//   }


//   render() {
//     return (
//       <div className="App">
//         <Switch>
//           <Route path="/" component={Header} exact />
//           <Route path="/" render={(props) => <About data={this.state.resumeData.main} {...props} /> } />
          


//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;





// //     return (
// //       <div className="App">
// //         <Header data={this.state.resumeData.main}/>
// //         <About data={this.state.resumeData.main}/>
// //         <Portfolio_Paint data={this.state.resumeData.portfolio}/>
// //         <Portfolio_Rock data={this.state.resumeData.portfolio}/>
// //         <Resume data={this.state.resumeData.resume}/>
// //         <Contact data={this.state.resumeData.main}/> 
// //         <Footer data={this.state.resumeData.main}/>
// //       </div>
// //     );
// //   }
// // }



















// // import { Route } from "react-router";

// // let routes = (
// //   <div>
// //     <Route path="/about">
// //       <About />
// //     </Route>
// //     <Route path="/:user">
// //       <User />
// //     </Route>
// //     <Route>
// //       <NoMatch />
// //     </Route>
// //   </div>
// // );
