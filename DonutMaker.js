class DonutMaker {

    constructor(numDonuts,numAutoclickers, numDonutMultipliers, isAutoclickerActivated){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.numDonutMultipliers = numDonutMultipliers;
        this.isAutoclickerActivated = isAutoclickerActivated;
    }

    getNumDonuts(){
        return this.numDonuts;
    }
    getNumAutoclickers(){
        return this.numAutoclickers;
    }
    getNumDonutMultipliers(){
        return this.numDonutMultipliers;
    }
    addDonut(){
        if(this.numDonutMultipliers === 0 && this.isAutoclickerActivated ){
        this.numDonuts+=  1*this.numAutoclickers;
        }else if(this.numDonutMultipliers > 0 && this.numAutoclickers === 0){
            this.numDonuts += (Math.pow(1.2, this.numDonutMultipliers));
        }else if(this.numDonutMultipliers > 0 && this.numAutoclickers > 0 && this.isAutoclickerActivated === true){
            this.numDonuts +=  (this.numAutoclickers*(Math.pow(1.2, this.numDonutMultipliers)));
        }else {
            this.numDonuts += 1;
        }

    }
    addAutoclicker() {


        let autoClickercost = 100;
        for(let i = 0; i < this.numAutoclickers; i++){
            autoClickercost +=autoClickercost* 0.100;
            
        }
        if(this.numDonuts >= 100 ){
        this.numDonuts -= autoClickercost;
        this.numAutoclickers += 1;
        }


            
        

    }
    findAutoclickerCost(){
        let autoclickerPrice = 100;
        for(let i = 0; i < this.numAutoclickers; i++){
            autoclickerPrice += autoclickerPrice*0.1;
        }
        return autoclickerPrice;
    }
    findMultiplierCost(){
        let multiplierCost = 10;
        for(let i = 0; i < this.numDonutMultipliers; i++){
            multiplierCost += multiplierCost*0.1;
        }
        return multiplierCost;

    }
    resetGame(){
        this.numDonuts = 0;
        this.numAutoclickers = 0;
        this.numDonutMultipliers = 0;
        this.isAutoclickerActivated = false;
    }
    addDonutMultiplier(){
        let priceOfDonutMultiplier = 10;

        for(let i = 0; i < this.numDonutMultipliers; i++){
            priceOfDonutMultiplier += priceOfDonutMultiplier*0.1;
        }


        if(this.numDonuts >= 10){
            this.numDonutMultipliers +=1;
            this.numDonuts -= priceOfDonutMultiplier;
        }
    }
    activateAutoclicker(){
        this.isAutoclickerActivated = true;
    }
    
    

}
export default DonutMaker;