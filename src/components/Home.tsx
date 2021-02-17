import React from 'react';
import TopNavigation from './TopNavigation';
import {SecondNav} from './Secondnav';
import  MessageTitle from './messageTitle';



class Home extends React.Component{
    render(){
        return (
            <div>
            <TopNavigation/>
            <SecondNav/>
             <MessageTitle/>

            </div>
          );
    }

}

export default Home;
