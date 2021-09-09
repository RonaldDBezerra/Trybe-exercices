const HOF = (number, callback) => {

let resultado = Math.floor(Math.random() * 5);
    
    if (resultado === 0) {
        resultado = 1;
    }

    if (resultado > 5) {
        resultado =  5;
    }

    if (callback(number, resultado)) {
        return "Parabéns você ganhou"
    } else {
        return "Tente novamente" 
    }
};

const checked = (number, resultado) => {
    
    if (number === resultado) {
        return true
    } else {
        return false
    }

};

console.log(HOF(3, checked));
