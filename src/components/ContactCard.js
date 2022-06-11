import React from 'react';
import { Link } from 'react-router-dom';
import user from "../images/user.png";
import './ContactCard.css';

const ContactCard = (props) => {
  const { key, name, email } = props.contact;
  const userInfo = {
    key,
    name,
    email,
    user
  }
  return (
    <div className="item">
      <div className="details">
        <Link state={userInfo} to={`/details/${key}`}>
          <img className="ui avatar image" src={user} alt="user" />
          <div className="content">
            <div className="key">{key}</div>
            <div className="header">{name}</div>
            <div className="email">{email}</div>
          </div>
        </Link>
      </div>
      <i onClick={() => props.deleteHandler(key)} className="trash icon"></i>
    </div>
  )
}

export default ContactCard;