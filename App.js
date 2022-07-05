
let img = document.querySelector("img");

let info = document.querySelector(".info");

let locate = document.querySelector(".location-icon")
let emails = document.querySelector(".email-icon")

let calendar  = document.querySelector(".calendar-icon")

let name = document.querySelector(".name-icon")

let phone = document.querySelector(".phone-icon")


let password = document.querySelector(".password-icon")

let rotate = document.querySelector("#rotate");

window.onload =()=>{
  name.style.color = "#CCFF33";
}


const api ="https://randomuser.me/api/";


rotate.addEventListener('click', (e)=>{
  
  
  rotate.classList.add("rotate-icon")
  
 
  fetch(api)
  
  .then(response => response.json())
  
  .then(data =>{
    info.innerHTML= data.results[0].name.first + " " + data.results[0].name.last ;
    
    img.src = data.results[0].picture.large;
    console.log(data)
      
      this.addEventListener('animationend', () => {
        rotate.classList.remove('rotate-icon')
      })
      
       

  })
})

emails.addEventListener('click', (e)=>{
  
e.preventDefault()
  
  name.style.color = "#000";

  fetch(api)
  
  .then(response => response.json())
  
  .then(data =>{
    info.innerHTML= data.results[0].email
    
    
    console.log(data)
      
      
      
       

  })
})

calendar.addEventListener('click', (e) => {

      e.preventDefault()
name.style.color = "#000";
    

      fetch(api)

        .then(response => response.json())

        .then(data => {
            info.innerHTML = "Age : " + "" + data.results[0].dob.age


        })
            
        })
        
        
        locate.addEventListener('click', (e) => {

      e.preventDefault()

    name.style.color = "#000";

      fetch(api)

        .then(response => response.json())

        .then(data => {
           info.innerHTML = data.results[0]. location.city +" "+ data.results[0]. location.country + " " + 
            data.results[0].location.postcode;
          

        })
            
        })
        
        
        phone.addEventListener('click', (e) => {

      e.preventDefault()

    name.style.color = "#000";

      fetch(api)

        .then(response => response.json())

        .then(data => {
            info.innerHTML = "number : " + "" + data.results[0]. phone;


        })
            
        })
        
        password.addEventListener('click', (e) => {

      e.preventDefault()

    name.style.color = "#000";

      fetch(api)

        .then(response => response.json())

        .then(data => {
            info.innerHTML = "Password : " + "" + data.results[0].login.password;


        })
            
        })
        

