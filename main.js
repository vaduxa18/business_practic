const icon = document.querySelector('.icon');
const menu = document.querySelector('#myTopnav');


const sliderBtn = document.querySelector('.slider');
const caruselBtns = document.querySelectorAll('.slider');

icon.addEventListener('click', function(){
   if(menu.classList == 'topnav'){
       menu.classList.add('responsive');
   }
   else{
       menu.classList.remove('responsive');
   }
   

})


    
    for (const button of caruselBtns) {
        button.addEventListener('click', function(event){
            for (const button of caruselBtns) {
                if(button.classList != 'slider'){
                    button.classList.remove('checked');
                    
                }
            }
            let thisBtn = event.target;
            thisBtn.classList.add('checked');
        })
        
    }
    



