import React, { Component } from "react";
import "./MailsDefault.css";

class Mail13 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>Hello {this.props.userName},</p>
        <div style={{ fontSize: "13px" }}>
          <p>
            We recorded a payment request from &quot;Skype -www.skype.com-
            Online Number&quot; to enable the charge of $60.00 on your account.
            <br />
            <br />
            Because the order was made from an Indian internet address, we put
            an Exception Payment on
            <br />
            Transaction ID: #4KVB4181P7481062P motivated by our Geographical
            Tracking System.
            <br />
            <br />
            THE PAYMENT IS PENDING FOR THE MOMENT.
            <br />
            <br />
            If you made this transaction or if you just authorize this payment,
            please ignore or remove this email
            <br />
            message. The transaction will be shown on your monthly statement as
            &quot;Skype -Online Number&quot;.
          </p>

          <p>
            If you didn&#39;t make this payment and would like to decline the
            $60.00 billing to your card, please follow the link below to cancel
            the payment :<br />
            <br />
            <a href="https://www.google.com" target="_blank">
              CANCEL THIS PAYMENT
            </a>
            &nbsp; (Transaction
            ID:#4KVB4181P7481062P)&lt;hxxp://localhost.in/ssl218/dispatch-5885d80a13c0db1f22d2300ef60a6759516e590e949da361fd1b680561e9552a&gt;
            <br />
            <br />
            <em>
              NOTE: &nbsp;Because email is not a secure form of communication,
              please do not reply to this email.
            </em>
            <br />
            <br />
            Copyright &copy; 1999-2010 PayPal. All rights reserved.
          </p>

          <p style={{ marginLeft: "13.7pt" }}>&nbsp;</p>

          <p></p>
        </div>
      </React.Fragment>
    );
  }
}

Mail13.defaultProps = {
  senderName: "Skype",
  sender: "info@skype.com",
  date: "Mai 4, 2020, 6:58",
  subject: "Payment Request",
  capital: "I",
  keyID: 13,
};

export default Mail13;
