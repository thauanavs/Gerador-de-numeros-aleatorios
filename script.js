const numbers = document.querySelectorAll(".number");
const generateBtn = document.querySelector("#generate");

function generateNumbers() {

    const max = 80;
    const min = 1;
    const result = [];

    while(result.length < 5){
        const number = Math.floor(Math.random() * (max - min + 1)) + min;

        if(!result.includes(number)) {
         result.push(number);
    }

    for(let i = 0; i < numbers.length; i++) {

        numbers[i].textContent = result[i];
    }

    console.log(result);
}

}
generateBtn.addEventListener("click", generateNumbers);
