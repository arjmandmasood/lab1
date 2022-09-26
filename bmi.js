class BMI{
    // this is data is initialised in the class
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    // Calculate BMI with formula
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}
let myBMI = new BMI(2,100);
let result = myBMI.calculateBMI();
console.log("BMI: " +result);