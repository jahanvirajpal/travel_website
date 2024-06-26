//-------------- responsive header javascript------------//

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click' ,() =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');  
});


//-------------- animation on headings (on home page------------//

        $(document).ready(function()
        {
          $(window).scroll(function(){
            var positiontop=$(document).scrollTop();
            console.log(positiontop);

            if((positiontop>163)&&(positiontop<246)){
              $("#one").addClass("animate__animated animate__bounceIn ");
            }

            if((positiontop>470)&&(positiontop<818)){
              $("#photo").addClass(" animate__animated animate__bounceInRight");
            }
          })
        })


 //--------------cards carousel (on home page) javascript------------//
     
  let items = document.querySelectorAll('.carousel_1 .item_1')

    items.forEach((el) => {
      const minPerSlide = 3
      let next = el.nextElementSibling
      for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[1]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0]) 
        next = next.nextElementSibling
    }
})
















