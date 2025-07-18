// template_yt3u68q
// service_g0nlx76
// VOaeM_EyQEysq2e7y


/* this is the first step to verify if its working*/
/*function contact(event) {
    event.preventDefault();
    console.log('it worked')
}*/


//function contact(event) {
  //  event.preventDefault();
    /* This is the emailjs configuration that allow to send us the email */
    //emailjs
    //.sendForm(
      //'service_g0nlx76',
      //'template_yt3u68q',
      //event.target,
      //'VOaeM_EyQEysq2e7y' 
    //).then(() => {
      //  console.log('this workedtims')
    //})
    /* this is the configuration help us to make app working */

   //const loading = document.querySelector('.modal__overlay--loading')
  // const success = document.querySelector('.modal__overlay--success')
  // loading.classList += " modal__overlay--visible"; /*to make it visible infinite*/
  // setTimeout(() => {
   // loading.classList.remove("modal__overlay--visible"); /* to make it visible and remove after 1000ms */
   // success.classList+= " modal__overlay--visible" /* to show the message bihing*/
   // console.log("it work ")
   //}, 1000); 
//}

const scaleFactor = 1 / 20;
function moveBackground(event) {
    const shapes = document.querySelectorAll(" .shape");
    const x = event.clientX ;
    const y = event.clientY ;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !==0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}



let contrastToggle = false;
function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
     document.body.classList += " dark-theme"
    }
    else {
     document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    event.preventDefault();

   const loading = document.querySelector('.modal__overlay--loading');
   const success = document.querySelector('.modal__overlay--success');
   loading.classList += " modal__overlay--visible"; /*to make it visible infinite*/

    /* This is the emailjs configuration that allow to send us the email */
    emailjs
    .sendForm(
      'service_g0nlx76',
      'template_yt3u68q',
      event.target,
      'VOaeM_EyQEysq2e7y' 

    ).then(() => {
         /*throw new Error("error"); /* mention this if the website is unavailable with alert message below*/
         loading.classList.remove("modal__overlay--visible"); /* to make it visible and remove after 1000ms */
         success.classList+= " modal__overlay--visible" /* to show the message bihing*/

    }).catch(() => {
        loading.classList += " modal__overlay--visible"; /*to make it visible infinite*/
        /*alert(
            "The email service is temporarily unavailable. Please contact me directly on tim.tchouamou@gmail.com"
        );*/
    })

/*setTimeout(() => {
   
    console.log("it work ")
   }, 1000); This is optional */
}

/* function toggleModal() {
    // toggle modal
    console.log('toggleModal()')
} * this to make sure it is working*/



let isModalOpen = false; /* to initialize the condition*/

    function toggleModal() {
    // toggle modal

    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;

    document.body.classList += " modal--open"
}








