function validateform(){

let username=document.getElementById('username').value;
let userpass=document.getElementById('userpass').value;
if(username==""){
    alert("please type your username or RegNo.")
}else if(userpass==""){
    alert("please type your password")
}else{
   
   window.open("frontend.html")
   alert(username+ " welcome")
}
}