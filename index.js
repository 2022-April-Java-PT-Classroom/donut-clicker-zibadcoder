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
const autclickersSect = document.querySelector('.auto-clickers');
const donutMultipliersSect = document.querySelector('.donut-multipliers');




const createdDonutMaker = new DonutMaker(0, 0 , 0); 
donutCountValue.textContent = 0;
autoClickerCountValue.textContent = 0;
multiplierCountValue.textContent = 0;

 



  


const backgroundChanger = function (){
  if(donutCountValue.textContent >= 100){
    autoClickerBtn.style.backgroundColor = '#669900';
    multiplierBtn.style.backgroundColor = '#669900';

  }else if(donutCountValue.textContent < 100 && donutCountValue.textContent >= 10){
    autoClickerBtn.style.backgroundColor = 'grey';
    multiplierBtn.style.backgroundColor = '#669900';
    

  } else if(donutCountValue.textContent < 10){
    autoClickerBtn.style.backgroundColor = 'grey';
    multiplierBtn.style.backgroundColor = 'grey';

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
      const donutMultiplierPrice = document.createElement('p');
      const donutMultiplierPriceScore = document.createElement('span');
      donutMultiplierPrice.className = 'donut-multiplier-price';
      donutMultiplierPrice.textContent = 'Donut Multiplier Price: ';

      const returnedDonutMultiplierPrice = createdDonutMaker.findMultiplierCost();
      donutMultiplierPriceScore.textContent = returnedDonutMultiplierPrice;
      donutMultiplierPrice.appendChild(donutMultiplierPriceScore);
      donutMultipliersSect.appendChild(donutMultiplierPrice);

      if(donutCountValue.textContent < 10){
        donutMultiplierPrice.style.display = 'none';
        donutMultiplierPriceScore.style.display = 'none';
      }


  



      

      


    });

    
    
      
      autoClickerBtn.addEventListener('click', () => {
       

        createdDonutMaker.addAutoclicker();
        autoClickerCountValue.textContent = createdDonutMaker.getNumAutoclickers();
        donutCountValue.textContent = createdDonutMaker.getNumDonuts();
        backgroundChanger();
         const autoclickerValue = document.createElement('p');
         const autoclickerPriceScore = document.createElement('span');      
        
        autoclickerValue.className = 'auto-clicker-price';
        autoclickerValue.textContent = 'Autoclicker Price: ';
              
        const returnedAutoclickerPrice = createdDonutMaker.findAutoclickerCost();
        autoclickerPriceScore.textContent = returnedAutoclickerPrice;
        autoclickerValue.appendChild(autoclickerPriceScore);
        autclickersSect.appendChild(autoclickerValue);
        if(donutCountValue.textContent < 100){
          autoclickerValue.style.display = 'none';
          autoclickerPriceScore.style.display = 'none';
        }

              
              
        
              
                
        

      });
      resetBtn.addEventListener('click', () => {
         donutCountValue.textContent = 0;
         autoClickerCountValue.textContent = 0;
         multiplierCountValue.textContent = 0;
         autoClickerBtn.style.backgroundColor = '#669900';
         multiplierBtn.style.backgroundColor = '#669900';
         autoclickerValue.style.display = none;
         autoclickerPriceScore.display = none;



      })

      
      
          
      

    

  
    
    
  

  
    
  

  
  
  

