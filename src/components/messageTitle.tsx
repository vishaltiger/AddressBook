import React from 'react';
import Gif from './empty.gif';
import "./Message.css";
class MessageTitle extends React.Component{
    render(){
        return (
            <div className="Message">
            <img src={Gif}/>
            </div>
          );
    }

}

export default MessageTitle;
