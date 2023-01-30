const calcGasoline = () => {
    // here we will get element by id
    const price = Number(document.getElementById('price').value);
    // const money = document.getElementById('money').value;
    
    // here we get element by querySelector
    const money = +document.querySelector('#money').value; // # for id and . for class. "+" to do string in Number
    const answer = document.querySelector('#answer');

    let text;

    const amount = Math.floor(money / price);

    if (amount >= 10){
        text = `You could get about ${amount} liters, good now you can go`;
    } else {text = `Ups, you could get only ${amount} liters, you have to stay here`}

    answer.textContent = text;
};

/*
const calcTemperature = (scale) => {
    celsius = +document.querySelector('#celsius').value;
    fah = +document.querySelector('#fah').value;
    kelvin = +document.querySelector('#kelvin').value;
    if (scale = 'celsius') {let output = celsius}
    else if (scale = 'fah') {let output = fah}
    else if (scale = 'fah') {let output = fah}
    console.log(celsius)
}
*/

const tempConverter = () => {
    const celInput = document.querySelector
    ('#celsius');
    const fahInput = document.querySelector
    ('#fah');
    const kelInput = document.querySelector
    ('#kelvin');

    console.log(celInput.value);
    console.log(fahInput.value);
    console.log(kelInput.value);

    fahInput.value = celInput.value * 1.8 +32;
};