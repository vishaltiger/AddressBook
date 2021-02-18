import React from 'react';
import {Text,DocumentCard,DocumentCardTitle,DocumentCardDetails } from 'office-ui-fabric-react';
import { IDocumentCardStyles, Stack } from '@fluentui/react';
import TopNavigation from './TopNavigation';
import { SecondNav } from './Secondnav';
import "./PersonDetails.css";
import { Service } from '../services/service';
import {del} from "../TS/persondetails";

const cardStyles: IDocumentCardStyles = {
    root: {width: 1020 },
  };

export default class PersonDetails extends React.Component{
  

    goBack(){
        window.location.replace("http://localhost:3000/#/contacts");
    }
     edit(){
       window.location.replace("http://localhost:3000/#/form/2");
    }
     
    render(){
        var id = sessionStorage.getItem("selectedIndex");
        if(id.length==0){
            window.location.replace("http://localhost:3000/#/contacts");
        }
        var ser = new Service();
        var arr  = ser.gelist();
        arr = arr.filter(ele=>ele.id==parseInt(id));
           
        return(
            <div>
 <TopNavigation/>
 <SecondNav/>

 <button className="goBack" onClick={this.goBack}>Go Back</button>
 <div className="buttonGroup">
     <button className="edit" onClick={this.edit}>Edit</button>
     <button className="delete" onClick={del}>Delete</button>
 </div>
 <div className="Persondetails">
    
     {
         arr.map(item=>{
             return(
<div>
 <Text className="name">{item.name}</Text>   
 <Stack horizontal className="CardDetails">
     <div>
      
     <Text style={{fontSize:20,marginRight:20}}><strong>Email:</strong></Text>
     <Text style={{fontSize:15}}>{item.email}</Text>
     </div>
     </Stack>
     <Stack horizontal className="CardDetails">
     <div>
      
     <Text style={{fontSize:20,marginRight:20}}><strong>Mobile:</strong></Text>
     <Text style={{fontSize:15}}>{item.mobile}</Text>
     </div>
     </Stack>
     <Stack horizontal className="CardDetails">
     <div>
      
     <Text style={{fontSize:20,marginRight:20}}><strong>Landline:</strong></Text>
     <Text style={{fontSize:15}}>{item.landline}</Text>
     </div>
     </Stack>
     <Stack horizontal className="CardDetails">
     <div>
      
     <Text style={{fontSize:20,marginRight:20}}><strong>website:</strong></Text>
     <Text style={{fontSize:15}}>{item.website}</Text>
     </div>
     </Stack>
     <Stack horizontal className="CardDetails">
     <div>
      
     <Text style={{fontSize:20,marginRight:20}}><strong>address:</strong></Text>
     <Text style={{fontSize:15}}>{item.address}</Text>
     </div>
     </Stack>
     </div>
             )
         })
         
     }

 </div>

    </div>
           
        );
    }
}