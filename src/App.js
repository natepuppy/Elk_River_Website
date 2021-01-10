import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio_Paint from './Components/Portfolio_Paint';
import Portfolio_Rock from './Components/Portfolio_Rock';
import Full_Paint_Gallery from './Components/Full_Paint_Gallery';
import Full_Rock_Gallery from './Components/Full_Rock_Gallery';



// import { data } from './prac.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData() {
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  // getNewData() {
  //   $.ajax({
  //     url:'./resumeData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({resumeData: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  componentDidMount(){
    this.getResumeData();
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/paintgallery" render={(props) => <Full_Paint_Gallery data={this.state.resumeData.portfolio} {...props} /> } />
          <Route path="/rockgallery" render={(props) => <Full_Rock_Gallery data={this.state.resumeData.portfolio} {...props} /> } />
          <Route path="/" render={(props) => <Home data={this.state.resumeData} {...props} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;





//     return (
//       <div className="App">
        // <Header data={this.state.resumeData.main}/>
        // <About data={this.state.resumeData.main}/>
        // <Portfolio_Paint data={this.state.resumeData.portfolio}/>
        // <Portfolio_Rock data={this.state.resumeData.portfolio}/>
        // <Resume data={this.state.resumeData.resume}/>
        // <Contact data={this.state.resumeData.main}/> 
        // <Footer data={this.state.resumeData.main}/>
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
