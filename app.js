const navBar = document.querySelector(".nav-bar");
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");
const logoResp= document.querySelector(".logo-resp");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const InputName = document.getElementById("name");
const InputEmail = document.getElementById("email");
const InputDiscription = document.getElementById("discription");
const InputSubmit = document.querySelector(".inputsubmit");

burger.addEventListener("click",function(){
           navBar.classList.toggle("nav-h");
           navList.classList.toggle("nav-d-none");
           logoResp.classList.toggle("logo-resp-resp");
           line1.classList.toggle("line1-anim");
           line2.classList.toggle("line2-anim");
           line3.classList.toggle("line3-anim");

});     
 
var UserInformationArray = [];

InputSubmit.addEventListener("click",function(event){
    
    event.preventDefault();

    const UserName = InputName.value;
    const UserEmail = InputEmail.value;
    const UserDiscription = InputDiscription.value;

    const User = {
        UserName: UserName,
        UserEmail: UserEmail,
        UserDiscription: UserDiscription
    };

    
    InputName.value = "";
    InputEmail.value = "";
    InputDiscription.value = "";
    
    
    UserInformationArray.push(User);
    
    UserInformation = JSON.stringify(User);

});



















// gallery.addEventListener("click",function(e){
//        if(e.target !== e.currentTarget){
//            const n = e.target.id
//           const download = document.createElement("a");
//           download.classList.add("download");
          
//        }
// });

