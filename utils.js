const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => { //args com tres pontos pega todos os argumentos recebidos
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args); //apply repassa todos os argumentos dinamicamente
        }, delay)
    };
};