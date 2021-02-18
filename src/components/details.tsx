import * as React from 'react';
import {IIconProps, Stack, IStackStyles,IStackTokens } from 'office-ui-fabric-react';
import {Link} from "react-router-dom";
import TopNavigation from './TopNavigation';
import  "./details.css";
import { SecondNav } from './Secondnav';
import {Service} from "../services/service";




const stackStyles: Partial<IStackStyles> = { root: { height:"auto" } };
const wrapStackTokens: IStackTokens = { childrenGap: 30 };
export default class Details extends React.Component {
constructor(props){
    super(props);
    this.state={
        id:""
    }
    this.onRowClick = this.onRowClick.bind(this);
}
    onRowClick(event){
       
        sessionStorage.setItem("selectedIndex",event.target.id);
        window.location.replace("http://localhost:3000/#/person")
    }
addIcon: IIconProps = { iconName: 'Add' };
 render(){
     var Ser = new Service();
     var arr = Ser.gelist();
     if(arr.length==0){
         window.location.replace("http://localhost:3000/#/home");
     }
    return (

        <div className="section">
     <TopNavigation/>
     <SecondNav/>
     <p className="title">Contacts</p>
         <Stack styles={stackStyles} wrap>
             
            
          <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Mobile</th>
  </tr>
  {
  arr.map((item,index)=>{
          return(
  <tr onClick={this.onRowClick} id={item.id.toString()}>
    <td id={item.id.toString()}>{item.name}</td>
    <td id={item.id.toString()}>{item.email}</td>
    <td id={item.id.toString()}>{item.mobile}</td>
  </tr>
    )

                 }
                 )
           
             }
             </table>
            </Stack>
        </div>
       
      );
 }

};