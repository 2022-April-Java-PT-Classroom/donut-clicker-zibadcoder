
import DonutMaker from "./DonutMaker";

describe("DonutMaker", () => {
    test("should be able to add a donut and retrieve the total count", () =>{
        //Arrange 
        const underTest = new DonutMaker(0,0,0);
        //Act
        underTest.addDonut();
        //Assert
        expect(underTest.numDonuts).toEqual(1);



    });
    test("should be able to add an autoclicker with 100 donuts", () =>{
        //Arrange 
        const underTest = new DonutMaker(100, 0);
        //Act
        underTest.addAutoclicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoclickers).toEqual(1);


    });

    test("should not be able to purchase an autoclicker with 99 donuts", () =>{
        const underTest = new DonutMaker(99,0);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoclickers).toEqual(0);



    });
    test("should be able to increase the price of Autoclickers by 10 percent", () =>{
        const underTest= new DonutMaker(110,1);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoclickers).toEqual(2);


    });
    test("should be able to increase the price of third autoclicker by 10 percent", () =>{
        const underTest= new DonutMaker(121,2);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoclickers).toEqual(3);


    });
    test("should be able to should be able to increase the number of donuts when autoclicer is active", () =>{
        const underTest= new DonutMaker(133,3);
        underTest.addAutoclicker();
        underTest.addDonut();
        expect(underTest.numDonuts).toBeLessThan(4);
        expect(underTest.numAutoclickers).toEqual(4);

        


    });
    test("should be able to should be able to increase the number of donutmultipliers by 1 with 10 donuts", () =>{
        const underTest= new DonutMaker(10, 0, 0);
        
        
        underTest.addDonutMultiplier();
        
        underTest.addAutoclicker();      
        expect(underTest.numDonutMultipliers).toEqual(1);
        
        expect(underTest.numAutoclickers).toEqual(0);

        


    });
    test("should be able to increase the price of the second donut multiplier by 10 percent", () =>{
        const underTest= new DonutMaker(11, 0, 1);               
        
        underTest.addDonutMultiplier();
        underTest.addDonut();
        
            
        expect(underTest.numDonutMultipliers).toEqual(2);
        expect(underTest.numDonuts).toEqual(1.44);
        

        


    });
    test("should be able to increase the price of the second donut multiplier by 10 percent", () =>{
        const underTest= new DonutMaker(13, 0, 2);               
        
        underTest.addDonutMultiplier();
        
        
            
        expect(underTest.numDonutMultipliers).toEqual(3);
        expect(underTest.numDonuts).toBeLessThan(1);
        

        


    });
    test("should be able to increase the value of click by 1.2 for each donut multiplier before rounding", () =>{
        const underTest= new DonutMaker(10, 0, 1);               
        
        underTest.addDonut();     
                   
        //after rounding
        expect(underTest.numDonuts).toEqual(11.2);
        

        


    });
    test("should be able to increase the value of click by 1.44 with the second donut multiplier ", () =>{
        const underTest= new DonutMaker(10, 0, 2);               
        
        underTest.addDonut();     
                   
        //after rounding
        expect(underTest.numDonuts).toEqual(11.44);
        

        


    });
    test("should be able to increase the value of each auto clicker by the number of donut multiplier ", () =>{
        const underTest= new DonutMaker(10, 1, 2);               
        
        underTest.addDonut();     
                   
        
        expect(underTest.numDonuts).toEqual(11);
        

        


    });
    test("should be able to double the increase in the number of donuts when auto clicker is 2 and donut multiplier is 2", () =>{
        const underTest= new DonutMaker(10, 2, 2);               
        
        underTest.addDonut();     
                   
        
        expect(underTest.numDonuts).toBeLessThan(22.88);
        

        


    });
    
    
    
    


});