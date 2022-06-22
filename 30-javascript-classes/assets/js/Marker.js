class Marker {
    constructor(color, amountInk) {
        this.color = color;
        this.amountInk = amountInk;
    }
    // set setAmount(newAmountInk){
    //     this.amountInk = newAmountInk;
    // }

    showColor() {
        document.getElementById('showColor').innerText = this.color;
    }

    showPercent() {
        document.getElementById('showPercent').innerText = `${this.amountInk}%`;
    }

    // showBar(){
    //     document.querySelector('.marker_bar').innerHTML = 
    //     `
    //         <div style="width:${this.amountInk}%;
    //         position: absolute;
    //         display: block;content: '';
    //         background-color: aquamarine;
    //         height: 18px;">
    //         </div>
    //     `;
    // }
  
    getAndShow(text){
        console.log(`Check text: ${text}`);
        let ink = this.amountInk;
        // let writeText = text.split(" ").join("");
        let newText = '';
        let writeText = Array.from(text);
        // console.log(`Array: ${writeText}`);
        for(let i = 0; i < writeText.length; i++){
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

    showPercenAfter() {
        document.getElementById('showPercenAfter').innerText = `${this.amountInk}%`;
    }

    showBarAfter(){
        document.querySelector('.marker_bar').innerHTML = 
        `
            <div style="width:${this.amountInk}%;
            position: absolute;
            display: block;content: '';
            background-color: aquamarine;
            height: 18px;">
            </div>
        `;
    }

    
}



