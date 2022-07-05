class DonutMaker {

    constructor(numDonuts,numAutoclickers){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
    }
    addDonut(){
        this.numDonuts+=1;

    }
    addAutoclicker() {
        if(this.numDonuts >= 100){
        this.numDonuts -= 100;
        this.numAutoclickers += 1;
        }
    }
    addAutoClickers(){
        if(this.numAutoclickers == 0 && this.numDonuts >=100){
            this.numDonuts-=100;
            this.numAutoclickers+=1;
        }else if(this.numAutoclickers > 0 && this.numDonuts >= 100){
            let autoclickerCost = 100;
            
            this.numDonuts = this.numDonuts - 110;
            this.numAutoclickers +=1;

        }
    }


}
export default DonutMaker;