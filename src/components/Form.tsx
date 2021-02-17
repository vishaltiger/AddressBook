import * as React from 'react';
import { Stack, IStackStyles,TextField } from 'office-ui-fabric-react';
import TopNavigation from './TopNavigation';
import "./form.css";
import {Link} from "react-router-dom";



export default class Form extends React.Component {
    constructor(props:any) {
        super(props);
        this.state={
          inputError:''
        }
       
      }
  
      
      render() {
        return (
            <div>
            <TopNavigation/>
            <form className="form " id="formDisplay">
           
            <p className="heading">
              <Link to="/home" className="link">
              <i className="fa fa-arrow-left"  aria-hidden="true" style={{'cursor':'pointer'}}>
              </i>  
              </Link>
               <span className="titleHeading">Add Contact Details</span>
               
            </p>
            <div className="formsection ">
                <div className="form-controls">
                    <label>
                        Name<i className="fa fa-asterisk" aria-hidden="true"></i>
                    </label>
                
                    <input type="text" id="name" required/>
                    <i className="fa fa-check-circle"></i>
                    <i className="fa fa-exclamation-circle" aria-hidden="true" title="required name "></i>
                    
                  
                </div>
                <div className="form-controls">
                    <label>
                        Email<i className="fa fa-asterisk" aria-hidden="true"></i>
                    </label>
                    <input type="text" required id="email"/>
                    <i className="fa fa-check-circle" title="success"></i>
                    <i className="fa fa-exclamation-circle" title="required valid email Address "></i>
               
                </div >
                <div className="phonenumbers">
                <div className="form-controls" >
                    <label>
                        Mobile<i className="fa fa-asterisk" aria-hidden="true"></i>
                    </label>
                    <input type="text" required id="mobile"/>
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
           <input type="text" id="website"/>
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
            
      
      <div className="button" id="button">
      <Link to="/contacts" className="link">ADD</Link>
      </div>
        </form>
        </div>
        );
      }

};