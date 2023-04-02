const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")


const convertValues = async () => {
    const inputReais = document.getElementById("input-real").value
    const realvaluetext = document.getElementById("real-value-text")
    const currencyvaluetext = document.getElementById('currency-value-text')

const data = await fetch ("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL ").then (response => response.json())
const dolar = data.USDBRL.high
const euro = data.EURBRL.high


    realvaluetext.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);


    if (select.value === "US$ Dolar Americano") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar);

    }
    if (select.value === "€ Euro") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    };
}
changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyimg = document.getElementById("currency-img")

    if (select.value === "US$ Dolar Americano") {
        currencyName.innerHTML = "Dolar americano"
        currencyimg.src = "./assets/estados-unidos (1) 1.svg"
    }
    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyimg.src = "./assets/euro.svg"
    }
    convertValues ()
}


button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)