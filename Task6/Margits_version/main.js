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


const tempConverter = (id) => {
    const celInput = document.querySelector
    ('#cel');
    const fahInput = document.querySelector
    ('#fah');
    const kelInput = document.querySelector
    ('#kel');

    if (id=="cel") {
        fahInput.value = (+celInput.value * 1.8 +32).toFixed(2);
        kelInput.value = (+celInput.value + 273.15).toFixed(2);
    } else if (id=="fah") {
        celInput.value = ((+fahInput.value - 32) / 1.8).toFixed(2);
        kelInput.value = ((+fahInput.value - 32) / 1.8 + 273.15).toFixed(2);
    } else if (id=="kel") {
        fahInput.value = ((+kelInput.value - 273.15) * 1.8 +32).toFixed(2);
        celInput.value = (+kelInput.value - 273.15).toFixed(2);
    }
};

