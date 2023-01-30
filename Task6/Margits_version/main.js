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

const tempConverter = (id) => {
    const celInput = document.querySelector
    ('#cel');
    const fahInput = document.querySelector
    ('#fah');
    const kelInput = document.querySelector
    ('#kel');

    if (id=="cel") {
        fahInput.value = Number(+celInput.value * 1.8 +32).toFixed(2);
        kelInput.value = Number(+celInput.value + 273.15).toFixed(2);
    } else if (id=="fah") {
        celInput.value = Number((+fahInput.value - 32) / 1.8).toFixed(2);
        kelInput.value = Number((+fahInput.value - 32) / 1.8 + 273.15).toFixed(2);
    } else if (id=="kel") {
        fahInput.value = Number((+kelInput.value -273,15) * 1.8 +32).toFixed(2);
        celInput.value = Number(+kelInput.value - 273.15).toFixed(2);
    }
};