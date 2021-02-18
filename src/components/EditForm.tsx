import * as React from 'react';
import { Stack, IStackStyles,TextField } from 'office-ui-fabric-react';
import TopNavigation from './TopNavigation';
import "./form.css";
import {Link} from "react-router-dom";
import {EditValue,onNameChange,onMobilechange,onWebUrlchange,onEmailChange,setSuccesssMessage} from "../TS/addScript";
import {Service} from "../services/service";



export default class EditForm extends React.Component {
    constructor(props:any) {
        super(props);
        this.state={
          inputError:''
        }
       
      }
  

componentDidMount(){
    var ser = new Service();
    var id = sessionStorage.getItem("selectedIndex");
    var arr = ser.gelist();
    var name:any =document.getElementById("Editname");
    var email:any = document.getElementById("Editemail");
    var mobile:any = document.getElementById("Editmobile");
    var website:any = document.getElementById("Editwebsite");
    var address:any = document.getElementById("Editaddress");
    var landline:any = document.getElementById("Editlandline");
    arr = arr.filter(item=>item.id==parseInt(id));

    name.value=arr[0].name;
    email.value=arr[0].email;
    mobile.value=arr[0].mobile;
    landline.value=arr[0].landline;
    website.value=arr[0].website;
    address.value=arr[0].address;
  setSuccesssMessage(name);
  setSuccesssMessage(email);
  setSuccesssMessage(mobile);
  if(website.value.length!=0){
      setSuccesssMessage(website);
  }
}

      Edit(){
          var name:any =document.getElementById("Editname");
          var email:any = document.getElementById("Editemail");
          var mobile:any = document.getElementById("Editmobile");
          var website:any = document.getElementById("Editwebsite");
          var address:any = document.getElementById("Editaddress");
          var landline:any = document.getElementById("Editlandline");
          if(name!=null && email!=null && mobile!=null && website!=null){
          if(EditValue(name,email,mobile,website,landline,address)==true){

            name.value=" ";
            email.value=" ";
            mobile.value=" ";
            website.value=" ";
            address.value=" ";
            landline.value=" ";
            alert("Updated Succesfully");
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
        var m:any = document.getElementById("Editmobile");
        onMobilechange(m);
    }
    onEmail(){
      var e:any = document.getElementById("Editemail");
      onEmailChange(e);
  }
  onName(){
      var n:any = document.getElementById("Editname");
      onNameChange(n);
  }
  onUrl(){
      var w:any = document.getElementById("Editwebsite");
    onWebUrlchange(w);
  }


      render() {
        return (
            <div>
            <TopNavigation/>
            <form className="form " id="formDisplay">
           
            <p className="heading">
              <span className="titleHeading">Edit Contact Details</span>
               <small className="ErrorMessage" style={{display:"none"}}>Error Message</small>
            </p>
            <div className="formsection ">
                <div className="form-controls">
                    <label>
                        Name<i className="fa fa-asterisk" aria-hidden="true"></i>
                    </label>
                
                    <input type="text" id="Editname" required onChange={this.onName}/>
                    <i className="fa fa-check-circle"></i>
                    <i className="fa fa-exclamation-circle" aria-hidden="true" title="required name "></i>
                    
                  
                </div>
                <div className="form-controls">
                    <label>
                        Email<i className="fa fa-asterisk" aria-hidden="true"></i>
                    </label>
                    <input type="text" required id="Editemail" onChange={this.onEmail}/>
                   
                    <i className="fa fa-check-circle" title="success"></i>
                    <i className="fa fa-exclamation-circle" title="required valid email Address "></i>
                    
                </div >
                <div className="phonenumbers">
                <div className="form-controls" >
                    <label>
                        Mobile<i className="fa fa-asterisk" aria-hidden="true"></i>
                    </label>
                    <input type="text" required id="Editmobile" onChange={this.onMobile}/>
                   
                    <i className="fa fa-check-circle"></i>
                    <i className="fa fa-exclamation-circle" title="required valid mobile number "></i>
                   
                </div>
                <div>
                    <label>
                        Landline
                    </label>
                    <input type="text" id="Editlandline"/>
                </div>
            </div>
                <div className="form-controls">
                   
           <label>
            Website
          </label>
           <input type="text" id="Editwebsite" onChange={this.onUrl}/>
          
           <i className="fa fa-check-circle"></i>
                    <i className="fa fa-exclamation-circle" title="required valid mobile number "></i>
                </div>
             <div>
                <label>
                    Address
                </label><br/>
                <textarea  name="address" id="Editaddress">
                </textarea>
      
             </div>
      
            </div>
            
      
      <div className="button" id="Editbutton" onClick={this.Edit}>
      Update
      </div>
      <div className="button2" onClick={this.close}>
      Close
      </div>
        </form>
        </div>
        );
      }

};