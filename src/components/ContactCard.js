import React from 'react';
import user from "../images/user.png";

const ContactCard = (props) => {
  const { key, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="key">{key}</div>
        <div className="header">{name}</div>
        <div className="email">{email}</div>
      </div>
      <i style={{ color: "red", marginTop: "7px" }} onClick={() => props.deleteHandler(key)} className="trash alternate outline icon"></i>
    </div>
  )
}

export default ContactCard;