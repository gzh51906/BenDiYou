import axios from "axios";

let bendihome =axios.create({
    baseURL:"http://localhost:1906/home"
})

async function get(params){
    let {data} =await bendihome.get("",{
    params
})
return data;
}
async function getKucun(){
    let {data} = await axios.get("http://localhost:1906/goods/kucun");
    return data;
}
function post(){
    
}
function patch(){
    
}
function remove(){
    
}
export default {
    get,
    post,
    patch,
    delete:remove,
    getKucun
}