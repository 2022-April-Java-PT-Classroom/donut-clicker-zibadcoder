class DonutMaker {

    constructor(numDonuts,numAutoclickers, numDonutMultipliers){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.numDonutMultipliers = numDonutMultipliers;
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
        if(this.numDonutMultipliers === 0){
        this.numDonuts+= this.numAutoclickers > 0 ? 1*this.numAutoclickers: 1;
        }else if(this.numDonutMultipliers > 0 && this.numAutoclickers === 0){
            this.numDonuts += Math.round(Math.pow(1.2, this.numDonutMultipliers));
        }else if(this.numDonutMultipliers > 0 && this.numAutoclickers > 0){
            this.numDonuts = this.numDonuts + Math.round((this.numAutoclickers*(Math.pow(1.2, this.numDonutMultipliers))));
        }

    }
    addAutoclicker() {


        let autoClickercost = 100;
        for(let i = 0; i < this.numAutoclickers; i++){
            autoClickercost+= Math.round(autoClickercost* 0.100);
            
        }
        if(this.numDonuts >= 100 ){
        this.numDonuts -= autoClickercost;
        this.numAutoclickers += 1;
        }


            
        

    }
    findAutoclickerCost(){
        let autoclickerPrice = 100;
        for(let i = 0; i < this.numAutoclickers; i++){
            autoclickerPrice += Math.round(autoclickerPrice*0.1);
        }
        return autoclickerPrice;
    }
    findMultiplierCost(){
        let multiplierCost = 10;
        for(let i = 0; i < this.numDonutMultipliers; i++){
            multiplierCost += Math.round(multiplierCost*0.1);
        }
        return multiplierCost;

    }
    addDonutMultiplier(){
        let priceOfDonutMultiplier = 10;

        for(let i = 0; i < this.numDonutMultipliers; i++){
            priceOfDonutMultiplier += Math.round(priceOfDonutMultiplier*0.1);
        }


        if(this.numDonuts >= 10){
            this.numDonutMultipliers +=1;
            this.numDonuts -= priceOfDonutMultiplier;
        }
    }
    
    

}
export default DonutMaker;