import { ErrorModal } from "../ContactItemModal/ErrorModal";

export class Utilities{
    UrlCheck(w:HTMLInputElement){
        var obj :ErrorModal;
    
        if(w.value.length==0){
           obj={ele:w,message:"empty",status:true,field:"website"};
            return obj;
        }else{
            var pattern = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/; // fragment locator
            if(pattern.test(w.value)==false){
            obj={ele:w,message:"Valid Url",status:false,field:"website"};
            return obj;
            }else {
                obj={ele:w,message:"",status:true,field:"website"};
                return obj;
            }
        }
        
    }


    checkEmail(e:HTMLInputElement) {
        var obj :ErrorModal;
       
        var email = e;
        var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(e.value.length==0){
        obj={ele:e,message:"empty",status:false,field:"email"};
        return obj;
    }else
        if (!pattern.test(email.value)) {
            obj={ele:e,message:"Valid Email",status:false,field:"email"};
        return obj;
     }else{
        obj={ele:e,message:"",status:true,field:"email"};
         return obj;
     }
    
    }

 
    checkMobileNumber(m:HTMLInputElement){
        var reg = new RegExp('^[0-9]+$');
        var obj :ErrorModal;
      
        var mobile:HTMLInputElement = m;
        if(mobile.value.length==0){
            obj={ele:m,message:"empty",status:false,field:"mobile"};
            return obj;
        }else    
       
        if(mobile.value.length!=10){
            obj={ele:m,message:"10 digit mobile",status:false,field:"mobile"};
            return obj;
       
            
        }
        else{
            if(!reg.test(mobile.value)){
                obj={ele:m,message:"valid mobile",status:false,field:"mobile"};
                return obj;
                
            }else{
                obj={ele:m,message:"",status:true,field:"mobile"};
                return obj;
                
            }
           
        } 
      
      }
      checkName(n:HTMLInputElement){
        var obj :ErrorModal;
       
          if(n.value.length==0){
            obj={ele:n,message:"empty",status:true,field:"name"};
              return obj;
          }else{
            obj={ele:n,message:"",status:true,field:"name"};
              return obj;
          }
      }
     

}


