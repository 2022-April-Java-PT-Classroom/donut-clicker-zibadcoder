import DonutMaker from "./DonutMaker";



const donutBtn = document.querySelector('.donut-maker');
const donutCountText = document.querySelector('.donut-count');
const donutCountValue = document.querySelector('.donut-count-score');
const autoClickerBtn = document.querySelector('.auto-clicker');
const autoClickerCountText = document.querySelector('.auto-clicker-count');
const autoClickerCountValue = document.querySelector('.auto-clicker-score');
const multiplierBtn = document.querySelector('.donut-multiplier');
const multiplierCountText = document.querySelector('.donut-multiplier-count');
const multiplierCountValue = document.querySelector('.donut-multiplier-score');
const resetBtn = document.querySelector('.reset-btn');
const multiplierCost = document.querySelector('#multiplier_cost');
const autoclickerCost = document.querySelector('#autoclicker_cost');
const autoclickerActivator = document.querySelector('.activate-auto-clicker');

const donutMultiplierPrice = document.createElement('p');
const donutMultiplierPriceScore = document.createElement('span');
donutMultiplierPrice.className = 'donut-multiplier-price';
donutMultiplierPrice.textContent = 'Donut Multiplier Price: ';

const autoclickerValue = document.createElement('p');
const autoclickerPriceScore = document.createElement('span');      
        
autoclickerValue.className = 'auto-clicker-price';
autoclickerValue.textContent = 'Autoclicker Price: ';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');
const overlay = document.querySelector('.overlay');

const createdDonutMaker = new DonutMaker(0, 0 , 0, false); 
donutCountValue.textContent = 0;
autoClickerCountValue.textContent = 0;
multiplierCountValue.textContent = 0;

renderPage();

function renderPage(){
  donutMakerFunctionalities();
  

  setInterval(() => {
    if (createdDonutMaker.isAutoclickerActivated) {
      donutBtn.click();
      createdDonutMaker.addDonut();
    }
  }, 1000);

}
function donutMakerFunctionalities(){
  function closeModalWindow(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

  }

btnsOpenModal.addEventListener('click', () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
btnCloseModal.addEventListener('click',  closeModalWindow);
  

overlay.addEventListener('click',   closeModalWindow);  


const backgroundChanger = function (){
  if(donutCountValue.textContent >= 100){
    autoClickerBtn.style.backgroundColor = '#669900';
    multiplierBtn.style.backgroundColor = '#669900';
    // autoclickerActivator.style.backgroundColor = '#669900';

  }else if(donutCountValue.textContent < 100 && donutCountValue.textContent >= 10){
    autoClickerBtn.style.backgroundColor = 'grey';
    multiplierBtn.style.backgroundColor = '#669900';
    // autoclickerActivator.style.backgroundColor = 'grey';
    

  } else if(donutCountValue.textContent < 10){
    autoClickerBtn.style.backgroundColor = 'grey';
    multiplierBtn.style.backgroundColor = 'grey';
    // autoclickerActivator.style.backgroundColor = 'grey';

  }

}
  
  donutBtn.addEventListener('click', () => {      

      
      createdDonutMaker.addDonut();
      
      donutCountValue.textContent = createdDonutMaker.getNumDonuts();
      backgroundChanger();
      
    });   
    multiplierBtn.addEventListener('click', () =>{
      createdDonutMaker.addDonutMultiplier();
      multiplierCountValue.textContent = createdDonutMaker.getNumDonutMultipliers();
      donutCountValue.textContent = createdDonutMaker.getNumDonuts();
      backgroundChanger();
      

      const returnedDonutMultiplierPrice = createdDonutMaker.findMultiplierCost();
      donutMultiplierPriceScore.textContent = returnedDonutMultiplierPrice;
      donutMultiplierPrice.appendChild(donutMultiplierPriceScore);
      multiplierCost.appendChild(donutMultiplierPrice);

     

      
    });
    
         
      autoClickerBtn.addEventListener('click', () => {
       

        createdDonutMaker.addAutoclicker();
        autoClickerCountValue.textContent = createdDonutMaker.getNumAutoclickers();
        donutCountValue.textContent = createdDonutMaker.getNumDonuts();
        backgroundChanger();
        
              
        const returnedAutoclickerPrice = createdDonutMaker.findAutoclickerCost();
        autoclickerPriceScore.textContent = returnedAutoclickerPrice;
        autoclickerValue.appendChild(autoclickerPriceScore);
        autoclickerCost.appendChild(autoclickerValue);
               
                               
            
        

      });

      autoclickerActivator.addEventListener('click', () =>{
        createdDonutMaker.addAutoclicker();
        
        autoClickerCountValue.textContent = createdDonutMaker.getNumAutoclickers();
        
        

        if( autoClickerCountValue.textContent >= 1){
          createdDonutMaker.activateAutoclicker();
          autoclickerActivator.style.backgroundColor = '#669900';
        }
        else if(autoClickerCountValue.textContent < 1){
          autoclickerActivator.style.backgroundColor = 'grey';
        }
      });


      resetBtn.addEventListener('click', () => {
         
         donutCountValue.textContent = 0;
         autoClickerCountValue.textContent = 0;
         multiplierCountValue.textContent = 0;
         autoClickerBtn.style.backgroundColor = '#669900';
         multiplierBtn.style.backgroundColor = '#669900';
         autoclickerActivator.style.backgroundColor = '#669900';
         autoclickerValue.remove();
         donutMultiplierPrice.remove();
        
         createdDonutMaker.resetGame();      
                


      });

}

      
      
          
      

    

  
    
    
  

  
    
  

  
  
  

