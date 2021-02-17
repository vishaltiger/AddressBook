import * as React from 'react';
import {IIconProps, Stack, IStackStyles } from 'office-ui-fabric-react';
import {Link} from "react-router-dom";
import "./secondNav.css";


const stackStyles: Partial<IStackStyles> = { root: { height: 44,background:"#323232" } };

export class SecondNav extends React.Component {
addIcon: IIconProps = { iconName: 'Add' };
 render(){
    return (
        <Stack horizontal styles={stackStyles} className="Secondnav">
          <ul>
            <li  id="SHome">
              <Link to="/home" className="link">HOME</Link>  
            </li>
            <li  id="SAdd">
               <Link to="/form/1" className="link">+ADD</Link> 
            </li>
           
        </ul>
        </Stack>
      );
 }

};