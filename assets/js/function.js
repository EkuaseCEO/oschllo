function Check() {
    Swal.fire({
        title: "Server Management?",
        text: "Sorry! The Website is undergoing Upgrade?",
        icon: "error"
      });
}
function BookNow() {
    Swal.fire({
        title: "I'M Here To Assist You!",
        text: "Please Kindly Email us on this info@ultimatetrucks.com and We will get back within 2hours. Thank You",
        Html: "Hello",
        icon: "success"
      });
}

function Submit(){
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');  
    const service = document.getElementById('service');  
    const message = document.getElementById('message');
    if(!name.value || !phone.value || !email.value || !message.value || !service.value ){
        Swal.fire({
            title: "Oops! Something's Wrong!",
            text: "It seems You Have Not Filled All The Fields?",
            icon: "error"
          });
    }  else {
        Swal.fire({
            title: `Hi, ${name.value}`,
            text: `We are Received Your Message and One of our Representative Will Get Back to You within 24hours to this ${email.value}`,
            icon: "success"
          });
    } 

   
}


function Subscribe(){
    const email = document.getElementById('email');
if(!email.value){
    Swal.fire({
        title: "Email Not Typed?",
        text: "Sorry! You didn't type anything. Please Enter A Valid Email Address",
        icon: "error"
      });
}
    if(email.value.length < 10){
        Swal.fire({
            title: "Email Not Valid?",
            text: "Sorry! Please Enter A Valid Email Address",
            icon: "error"
          });
    }

if(email.value.length > 10){
    Swal.fire({
        title: "Subscribed",
        text: "Your Email Has Been Added To our Database for Update",
        icon: "success"
      });
}
}



{/* <script src="js/function.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> */}