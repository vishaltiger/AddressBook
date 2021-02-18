import * as React from 'react';
import { Stack, IStackStyles,TextField } from 'office-ui-fabric-react';
import TopNavigation from './TopNavigation';
import "./form.css";
import {Link} from "react-router-dom";
import {addvalue,onNameChange,onMobilechange,onWebUrlchange,onEmailChange} from "../TS/addScript";
import {Service} from "../services/service";



export default class Form extends React.Component {
    constructor(props:any) {
        super(props);
        this.state={
          inputError:''
        }
       
      }
  
      add(){
          var name:any =document.getElementById("name");
          var email:any = document.getElementById("email");
          var mobile:any = document.getElementById("mobile");
          var website:any = document.getElementById("website");
          var address:any = document.getElementById("address");
          var landline:any = document.getElementById("landline");
          if(name!=null && email!=null && mobile!=null && website!=null){
          if(addvalue(name,email,mobile,website,landline,address)==true){

            name.value=" ";
            email.value=" ";
            mobile.value=" ";
            website.value=" ";
            address.value=" ";
            landline.value=" ";
            alert("Added Succesfully");
            window.location.replace("http://localhost:3000/#/contacts");
          }
           
            
          }

      }

      close(){
          var Ser = new Service();
          var arr = Ser.gelist();
          if(arr.length==0){
            window.location.replace("http://localhost:3000/#/home");
          }else{
            window.location.replace("http://localhost:3000/#/contacts");
          }
      }

      onMobile(){
          var m:any = document.getElementById("mobile");
          onMobilechange(m);
      }
      onEmail(){
        var e:any = document.getElementById("email");
        onEmailChange(e);
    }
    onName(){
        var n:any = document.getElementById("name");
        onNameChange(n);
    }
    onUrl(){
        var w:any = document.getElementById("website");
        onWebUrlchange(w);
    }



      render() {
       
        return (
            <div>
            <TopNavigation/>
            <form className="form " id="formDisplay">
           
            <p className="heading">
              <span className="titleHeading">Add Contact Details</span>
               <small className="ErrorMessage" style={{display:"none"}}>Error Message</small>
            </p>
            <div className="formsection ">
                <div className="form-controls">
                    <label>
                        Name<i className="fa fa-asterisk" aria-hidden="true"></i>
                    </label>
                
                    <input type="text" id="name" required onChange={this.onName}/>
                    <i className="fa fa-check-circle"></i>
                    <i className="fa fa-exclamation-circle" aria-hidden="true" title="required name "></i>
                    
                  
                </div>
                <div className="form-controls">
                    <label>
                        Email<i className="fa fa-asterisk" aria-hidden="true"></i>
                    </label>
                    <input type="text" required id="email" onChange={this.onEmail}/>
                   
                    <i className="fa fa-check-circle" title="success"></i>
                    <i className="fa fa-exclamation-circle" title="required valid email Address "></i>
                    
                </div >
                <div className="phonenumbers">
                <div className="form-controls" >
                    <label>
                        Mobile<i className="fa fa-asterisk" aria-hidden="true"></i>
                    </label>
                    <input type="text" required id="mobile" onChange={this.onMobile}/>
                   
                    <i className="fa fa-check-circle"></i>
                    <i className="fa fa-exclamation-circle" title="required valid mobile number "></i>
                   
                </div>
                <div>
                    <label>
                        Landline
                    </label>
                    <input type="text" id="landline"/>
                </div>
            </div>
                <div className="form-controls">
                   
           <label>
            Website
          </label>
           <input type="text" id="website" onChange={this.onUrl}/>
          
           <i className="fa fa-check-circle"></i>
                    <i className="fa fa-exclamation-circle" title="required valid mobile number "></i>
                </div>
             <div>
                <label>
                    Address
                </label><br/>
                <textarea  name="address" id="address">
                </textarea>
      
             </div>
      
            </div>
            
      
      <div className="button" id="button" onClick={this.add}>
      ADD
      </div>
      <div className="button2" onClick={this.close}>
      Close
      </div>
        </form>
        </div>
        );
      }

};
