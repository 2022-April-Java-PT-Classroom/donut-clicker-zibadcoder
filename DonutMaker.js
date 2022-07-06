class DonutMaker {

    constructor(numDonuts,numAutoclickers){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
    }
    addDonut(){
        this.numDonuts+=1;

    }
    addAutoclicker() {
        if(this.numDonuts >= 100 && this.numAutoclickers === 0){
        this.numDonuts -= 100;
        this.numAutoclickers += 1;
        }else if(this.numAutoclickers > 0 && this.numDonuts >= 100){
            let price = 100;
            for(let i = 1; i <= this.numAutoclickers; i++){
                price = price + (price*0.1);
            this.numDonuts = this.numDonuts - price;
            this.numAutoclickers += 1;
            } 
            
        }

    }
    
    

}
export default DonutMaker;