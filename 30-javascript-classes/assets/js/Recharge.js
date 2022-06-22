class Recharge extends Marker{
    constructor (color, amountInk){
    // constructor (color, amountInk, rechargedInk){
        super(color, amountInk)
        // this.rechargedInk = rechargedInk
    }
    
    // set setAmount(newAmountInk){
    //     this.amountInk = newAmountInk;
    // }

    reCharged(){
        if(this.amountInk < 100) {
            let count = 100 - this.amountInk;
            this.amountInk = this.amountInk + count;

            
            console.log(`super.amountInk: ${super.amountInk}`);
        }
        // console.log(`Recharge:${this.amountInk}`);
        // super.showBarAfter();
        // super.showPercenAfter();
    }
}