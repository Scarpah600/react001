import React from 'react';
import './App.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default () => {
    return (
      <div className="app-window">
           <div className="sidebar">
             <header>
                  <img className="header--avatar" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt=""/>
                  <div className="header--buttons">
                          <div className="header-btn">
                              <DonutLargeIcon style={{color: '#919191'}}/></div>                        
                          <div className="header--btn">
                              <ChatIcon style={{color: '#919191'}} /></div>
                          
                          <div className="header--btn">
                              <MoreVertIcon style={{color: '#919191'}} /></div>
                  </div>
                          
             </header>
             <div className="search">

             </div>
             <div className="chatlist">

             </div>
           </div> 
            <div className="contentarea">
             ...
            </div>
      </div>
    );
}