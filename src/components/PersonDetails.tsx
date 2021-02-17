import React from 'react';
import {Text,DocumentCard,DocumentCardTitle,DocumentCardDetails } from 'office-ui-fabric-react';
import { IDocumentCardStyles, Stack } from '@fluentui/react';
import TopNavigation from './TopNavigation';
import { SecondNav } from './Secondnav';
import "./css/PersonDetails.css";
const cardStyles: IDocumentCardStyles = {
    root: {width: 1020 },
  };

export default class PersonDetails extends React.Component{
    render(){
        return(
            <div>
 <TopNavigation/>
 <SecondNav/>
 <div className="Persondetails">
 <Text className="name">Vishal Kumar Singh</Text>   
 <Stack horizontal className="CardDetails">
     <div>
      
     <Text style={{fontSize:20,marginRight:20}}><strong>Email:</strong></Text>
     <Text style={{fontSize:15}}>Vis07890456@gmail.com</Text>
     </div>
     </Stack>
     <Stack horizontal className="CardDetails">
     <div>
      
     <Text style={{fontSize:20,marginRight:20}}><strong>Mobile:</strong></Text>
     <Text style={{fontSize:15}}>Vis07890456@gmail.com</Text>
     </div>
     </Stack>
     <Stack horizontal className="CardDetails">
     <div>
      
     <Text style={{fontSize:20,marginRight:20}}><strong>Landline:</strong></Text>
     <Text style={{fontSize:15}}>Vis07890456@gmail.com</Text>
     </div>
     </Stack>
 </div>

    </div>
           
        );
    }
}