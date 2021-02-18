import {Service} from "../services/service";
import {Utilities} from "../services/Utility";
function DismissMessage(){
  var Messageelement =  <HTMLElement> document.querySelector('.ErrorMessage');
  if(Messageelement!=null){
      Messageelement.style.display="none";
  }
}
function ShowMessage(){
    var Messageelement =  <HTMLElement> document.querySelector('.ErrorMessage');
    if(Messageelement!=null){
        Messageelement.style.display="";
    }
  }

function validate(name:HTMLInputElement,email:HTMLInputElement,mobile:HTMLInputElement,website:HTMLInputElement){
    var Messageelement =  <HTMLElement> document.querySelector('.ErrorMessage');
    var message:string  = "";
    var Ut = new Utilities();
    var Nobj,Eobj,Mobj,Wobj ;
Nobj = Ut.checkName(name);
Eobj = Ut.checkEmail(email);
Mobj = Ut.checkMobileNumber(mobile);
Wobj = Ut.UrlCheck(website);

var arr = [Nobj,Eobj,Mobj,Wobj];
if(Nobj.status==true && Eobj.status==true && Mobj.status==true && Wobj.status==true ){
    return true;
}else{
 arr.forEach((obj,index)=>{
     if(obj.status==false ){
         setErrorMessage(obj.ele);
       if(obj.message!="empty"){
           message = message+" "+obj.message+",";
       }
         
     }else{
         if(obj.field=="url" && obj.ele.value.length!=0){
            setSuccesssMessage(obj.ele);
         }
        
      
     }
     
 })
 if(Messageelement!=null){
    Messageelement.innerHTML=message+" required";
    Messageelement.style.display="";
}
 return false;
}
}


function setErrorMessage(input:HTMLInputElement)
{
    var formcontrol = input.parentElement;
   if(formcontrol!=null)
    formcontrol.className = "form-controls error";
  
  
   
}


 export function setSuccesssMessage(input:HTMLInputElement){
    var formcontrol = input.parentElement;
    console.log(formcontrol);
    if(formcontrol!=null)
    formcontrol.className = "form-controls success";
 
 
}
export function addvalue(name:HTMLInputElement,email:HTMLInputElement,mobile:HTMLInputElement,website:HTMLInputElement,landline:HTMLInputElement,address:HTMLInputElement):boolean{
if(validate(name,email,mobile,website)==true){
    var Ser = new Service();
    var id =  Math.floor(Math.random() * 10000);
    var arr = Ser.gelist();
    arr.forEach(ele=>{
        if(id==ele.id){
           id = Math.floor(Math.random() * 11);
        }
    })
    console.log(Ser.AddItem(id,name.value,email.value,mobile.value,landline.value,website.value,address.value));
    return true;
}else{
    return false;
}
}

export function onMobilechange(x:HTMLInputElement){
    DismissMessage();
  
  var Ut = new Utilities();
    var obj = Ut.checkMobileNumber(x);
    if(obj.status==true){
       DismissMessage();
       setSuccesssMessage(obj.ele);
    }else{
        document.querySelector('.ErrorMessage').innerHTML = obj.message+" required";
        ShowMessage();
        
        setErrorMessage(obj.ele); 
    }
  
  }

   export function onNameChange(x:HTMLInputElement){
   
  if(x.value.length!=0){
    setSuccesssMessage(x);
    DismissMessage();
  }else{
    x.parentElement.className = "form-controls";
  }
    }



   export function onEmailChange(x:HTMLInputElement){
       DismissMessage();
    
    var Ut = new Utilities();
   
    var obj = Ut.checkEmail(x);
    if(obj.status==true){
        DismissMessage();
        setSuccesssMessage(obj.ele);
          }else{
              document.querySelector('.ErrorMessage').innerHTML = obj.message+" required";
            ShowMessage();
              setErrorMessage(obj.ele);
          }
  
  }
  
   export function onWebUrlchange(x:HTMLInputElement){
       DismissMessage();

    var Ut = new Utilities();
    var obj = Ut.UrlCheck(x);
   
    if(obj.status==true){
        if(x.value.length==0){
            x.parentElement.className = "form-controls";
            
        }else{
            setSuccesssMessage(obj.ele);
        }
        DismissMessage();
       
          }else{
            document.querySelector('.ErrorMessage').innerHTML = obj.message+" required";
            ShowMessage();
            setErrorMessage(obj.ele);
          }
  
  }

  
  export function  EditValue(name:HTMLInputElement,email:HTMLInputElement,mobile:HTMLInputElement,website:HTMLInputElement,landline:HTMLInputElement,address:HTMLInputElement):boolean{
var ser = new Service();
var id = sessionStorage.getItem("selectedIndex");
ser.EditItem(parseInt(id),name.value,email.value,mobile.value,landline.value,website.value,address.value);
return true;

  }