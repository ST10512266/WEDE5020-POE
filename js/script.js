
// submit button 
function sub(){
    Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});}

function emailConfirmation(){
    const { value: email } = await Swal.fire({
  title: "Input email address",
  input: "email",
  inputLabel: "Your email address",
  inputPlaceholder: "Enter your email address"
});
if (email) Swal.fire(`Entered email: ${email}`);
}

 $( function() {
    $( "#accordion" ).accordion();
  } );




  
  
// initialize swiper
    const swiper = new Swiper('.swiper-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// form validation
const name = document.getElementById(`name`)
const surname = document.getElementById(`surname`)
const email = document.getElementById(`email`)
const phoneNumber= document.getElementById(`phoneNumber`)
const form = document.getElementById(`form`)
 const messages = document.getElementById('message')

form.addEventListener('submit', function (event){
event.preventDefault();

}
     