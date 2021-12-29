const paymentbutton = document.querySelector(".pay");
const cancelbutton = document.querySelector(".cancel");

paymentbutton.addEventListener("click", () => {

   window.alert("Your order is being processed.");

     
})

cancelbutton.addEventListener("click", () => {


   window.alert("Your order has been cancelled.");

})