import axios from "axios";

let nanshigou =axios.create({
    baseURL:"https://www.nanshig.com/mobile/index.php"
})

async function get(params){
    let {data} =await nanshigou.get("",{
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