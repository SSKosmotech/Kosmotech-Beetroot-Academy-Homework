class Recharge extends Marker{
    constructor (color, amountInk){
    // constructor (color, amountInk, rechargedInk){
        super(color, amountInk)
        // this.rechargedInk = rechargedInk
    }
    set setAmount(newAmountInk){
        this.amountInk = newAmountInk;
    }

    reCharged(){
        if(this.amountInk < 100) {
            let count = 100 - this.amountInk;
            this.amountInk = this.amountInk + count;
            // console.log(count);
        }
        // console.log(`Recharge:${this.amountInk}`);
        // super.showBarAfter();
        // super.showPercenAfter();
    }

    getAndShow(text){
        let ink = this.amountInk;
        // let writeText = text.split(" ").join("");
        let newText = '';
        let writeText = Array.from(text);
        // console.log(`Array: ${writeText}`);
        for(let i = 0; i < (writeText.length+this.amountInk); i++){
            if(ink !== 0) {
                newText += writeText[i];
                if(writeText[i] !== ' '){
                    ink -= 0.5;
                }
            } else {
                break
            }
        }
        console.log(newText);
        
        document.querySelector('.marker_tex').innerHTML = 
        `
            <div style="color:${this.color}">
                ${newText}
            </div>
        `;
        console.log(`After: ${ink}`);
        this.amountInk = ink;
    }

}