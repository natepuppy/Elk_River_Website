// import React, { Component } from 'react'
// import * as emailjs from 'emailjs-com'
// import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
// class Contact extends Component {
//   state = {
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   }
// handleSubmit(e) {
//     e.preventDefault()
//     const { name, email, subject, message } = this.state
//     let templateParams = {
//       contactEmail: email,
//       contactName: name,
//       // subject: subject,
//       contactMessage: message,
//      }
//     emailjs.sendForm('service_e9fmwnw', 'template_i5no7ce', e.target, 'user_BRBjncruaT2ojSGs9jueQ')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//      this.resetForm()
//  }
// resetForm() {
//     this.setState({
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     })
//   }
// handleChange = (param, e) => {
//     this.setState({ [param]: e.target.value })
//   }
// render() {
//     return (
//       <section id="contact">
//           <h1 className="p-heading1">Get in Touch</h1>
//           <Form onSubmit={this.handleSubmit.bind(this)}>
//             <FormGroup controlId="formBasicEmail">
//               <Label className="text-muted">Email address</Label>
//               <Input
//                 type="email"
//                 name="email"
//                 value={this.state.email}
//                 className="text-primary"
//                 onChange={this.handleChange.bind(this, 'email')}
//                 placeholder="Enter email"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicName">
//               <Label className="text-muted">Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={this.state.name}
//                 className="text-primary"
//                 onChange={this.handleChange.bind(this, 'name')}
//                 placeholder="Name"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicSubject">
//               <Label className="text-muted">Subject</Label>
//               <Input
//                 type="text"
//                 name="subject"
//                 className="text-primary"
//                 value={this.state.subject}
//                 onChange={this.handleChange.bind(this, 'subject')}
//                 placeholder="Subject"
//               />
//             </FormGroup>
// <FormGroup controlId="formBasicMessage">
//               <Label className="text-muted">Message</Label>
//               <Input
//                 type="textarea"
//                 name="message"
//                 className="text-primary"
//                 value={this.state.message}
//                 onChange={this.handleChange.bind(this, 'message')}
//               />
//             </FormGroup>
// <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//       </section>
//     )
//   }
// }
// export default Contact









// emailjs.send("service_e9fmwnw","template_i5no7ce",{
//    name: "Nathan Clark",
//    email: "nathanmclark23@gmail.com",
//    message: "I would like to inquire about paint",
//    reply_to: "natedog23@cox.net",
//    });






import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'


class Contact extends Component {
   

   state = {
    name: '',
    email: '',
    subject: '',
    message: '',
   //  sent: false,
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      contactEmail: email,
      contactName: name,
      // subject: subject,
      contactMessage: message,
     }
    emailjs.sendForm('service_e9fmwnw', 'template_i5no7ce', e.target, 'user_BRBjncruaT2ojSGs9jueQ')
      .then((result) => {
          console.log(result.text);
         //  this.state.sent = true;
          
      }, (error) => {
          console.log(error.text);
      });
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render() {
     








    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }


// window.open('mailto:test@example.com?subject=subject&body=body');
// onSubmit={sendEmail}


    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               {/* <form onSubmit={sendEmail} action="" method="post" id="contactForm" name="contactForm" >  
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form> */}




          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
            {/* <FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup> */}
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
            <Button variant="primary" type="submit" className="submit">
              Submit
            </Button>
          </Form>













 
                  

               <div id="message-warning"> Error boy</div>
               
               {/* style={{display: "block"}} */}
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
               </div>
				   
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Phone</h4>
					   <p className="address">
						   {name}<br />
						   {/* {street} <br />
						   {city}, {state} {zip}<br /> */}
						   <span>{phone}</span>
					   </p>
				   </div>

               {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
