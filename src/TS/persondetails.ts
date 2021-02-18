import {Service} from "../services/service";

export function del(){
var ser = new Service();
var id = sessionStorage.getItem("selectedIndex");
if(ser.DeleteItem(parseInt(id))){
    alert("item deleted");
    window.location.replace("http://localhost:3000/#/contacts");
}
}

