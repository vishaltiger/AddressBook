import { ContactItemModal } from "../ContactItemModal/Modal";

export class Service{
    Service(){
    console.log("service");  
    }
    public gelist():ContactItemModal[]{
    var Contactlist:ContactItemModal[]=[];
    if(sessionStorage.getItem("items")!=null){
    if(JSON.parse(sessionStorage.getItem("items") || '').length!=0){
    Contactlist=   JSON.parse(sessionStorage.getItem("items") || '{}');
    }
     }
    
    return Contactlist;
    }


    public AddItem(id:number,name:string,email:string,mobile:string,landline:string,website:string,address:string):ContactItemModal {
    var Contactlist:ContactItemModal[]=this.gelist();
    var obj :ContactItemModal=  {id,name,email,mobile,landline,website,address};
    Contactlist.push(obj);
    sessionStorage.setItem("items",JSON.stringify(Contactlist));
    return obj;
    }



    public EditItem(id:number,name:string,email:string,mobile:string,landline:string,website:string,address:string):ContactItemModal{
    var Contactlist:ContactItemModal[]=this.gelist();
    var obj:ContactItemModal = {id,name,email,mobile,landline,website,address};
    Contactlist = Contactlist.filter(item=>{
        return item.id!=id;
    })
    Contactlist.push(obj);
    sessionStorage.setItem("items",JSON.stringify(Contactlist));
    
    return obj; 
    }


    public DeleteItem(id:number):boolean{
    var Contactlist:ContactItemModal[]=this.gelist();
    Contactlist = Contactlist.filter(item=>{
        return item.id!=id;
    })
    sessionStorage.setItem("items",JSON.stringify(Contactlist));
    return true;
    }
    
    }