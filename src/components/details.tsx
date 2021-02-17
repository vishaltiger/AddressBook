import * as React from 'react';
import {IIconProps, Stack, IStackStyles,IStackTokens } from 'office-ui-fabric-react';
import {Link} from "react-router-dom";
import TopNavigation from './TopNavigation';
import  "./details.css";
import { SecondNav } from './Secondnav';




const stackStyles: Partial<IStackStyles> = { root: { height:"auto" } };
const wrapStackTokens: IStackTokens = { childrenGap: 30 };
export default class Details extends React.Component {
addIcon: IIconProps = { iconName: 'Add' };
 render(){
    return (
        <div className="section">
     <TopNavigation/>
     <SecondNav/>
     <p className="title">Contacts</p>
         <Stack horizontal styles={stackStyles} wrap>
         <div className="items">
             <p className="name">Vishal Kumar Singh</p>
             <p  className="email" >vis07890456@gmail.com</p>
             <p className="phone" >6200872186</p>
              </div>
              <div className="items">
             <p className="name">Vishal Kumar Singh</p>
             <p  className="email" >vis07890456@gmail.com</p>
             <p className="phone" >6200872186</p>
              </div>
              <div className="items">
             <p className="name">Vishal Kumar Singh</p>
             <p  className="email" >vis07890456@gmail.com</p>
             <p className="phone" >6200872186</p>
              </div>
              <div className="items">
             <p className="name">Vishal Kumar Singh</p>
             <p  className="email" >vis07890456@gmail.com</p>
             <p className="phone" >6200872186</p>
              </div>     
        </Stack>
        </div>
       
      );
 }

};