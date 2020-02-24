import React from "react";
import Heading from "../../components/heading";
import VisibilitySensor from "../../components/visibilitySensor";
import styles from "../../styles/contact.module.scss";
import contact from "../../images/contact.svg";

function FormErrors({errors}) {
  return (
    <ul className={styles.formErrors}>
      {Object.keys(errors).map((val, i) => {
        return ( errors[val] )
          ? <li key={i}>{errors[val]}</li>
          : '';
      })}
    </ul>
  )
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      msg: '',
      msgCharCount : 0,
      valid : { name: false, email : false, msg : false },
      error : { name: false, email : false, msg : false }
    };
    this.errorMsgs = { 
      name: 'Your name must contain at least 3 characters.', 
      email: 'Enter a valid e-mail address.', 
      msg : 'Your message must be between 20 - 1000 characters.' 
    };
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = (name === 'email') // Tar bort white-space från email, ersätter flera mellanslag med ett på övriga fält.
      ? e.target.value.trim()                 
      : e.target.value.replace(/ {1,}/g,' '); 
    this.setState(
      {
        [name] : value, 
        msgCharCount : (name === 'msg') ? value.length : this.state.msgCharCount
      },
      () => this.validateField(name, value)
    );
  }
  validateField(name, value) {
    const valid = this.state.valid;
    const error = this.state.error;
    switch(name) {
      case 'name': // Kontrollerar att namnet är minst 3 tecken och max 100
        valid.name = value.length >= 3 && value.length <= 100;
        error.name = !valid.name ? this.errorMsgs.name : '';
        break;
      case 'email': // Kontrollerar att en korrekt e-post-adress är angiven
        valid.email = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        error.email = !valid.email ? this.errorMsgs.email : '';
        break;
      case 'msg': // Kontrollerar att meddelandet är minst 20 tecken och max 1000
        valid.msg = value.length >= 20 && value.length <= 1000;
        error.msg = !valid.msg ? this.errorMsgs.msg : '';
        break;
      default:
        break;
    }
    this.setState({valid});
  }
  render() {
    return (
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/submit" className={styles.form}>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="contactName">Name</label>
        <input 
          className={styles.input} 
          value={this.state.name} 
          onChange={e => this.handleUserInput(e)}
          id="contactName" 
          type="text" 
          name="name" 
          maxLength="100" 
        />
        <label htmlFor="contactEmail">E-mail</label>
        <input 
          className={styles.input} 
          value={this.state.email} 
          onChange={e => this.handleUserInput(e)}
          id="contactEmail" 
          type="text" 
          name="email" 
          maxLength="100" 
        />
        <div className={styles.msg}>
          <label htmlFor="contactMsg">Message</label>
          <span>({this.state.msgCharCount} / 1000)</span>
        </div>
        <textarea 
          className={styles.textarea} 
          value={this.state.msg} 
          onChange={e => this.handleUserInput(e)}
          id="contactMsg" 
          name="msg" 
          maxLength="1000" 
        />
        <button 
          className={styles.btn}
          disabled={!(this.state.valid.name && this.state.valid.email && this.state.valid.msg)}
          children="Send"
        />
        <FormErrors errors={this.state.error}/>
      </form>
    )
  }
}

export default() => (
  <div className={styles.content}>
    <Heading>Contact</Heading>
    <div className={styles.contact}>
      <Form />
      <VisibilitySensor once>
        {({isVisible}) => (
          <div className={`${styles.img} ${isVisible ? styles.imgActive : ''}`}>
            <img src={contact} alt="Contact" />
          </div>
        )}
      </VisibilitySensor>
    </div>
  </div>
);
