const error = document.querySelector(".error")

function numberFormat(number, decimals = 0, decimalSeparator = '.', thousandSeparator = ',') {
    number = parseFloat(number);
    if (isNaN(number)) {
        return '';
    }

    const sign = number < 0 ? '-' : '';
    const integerPart = parseInt(Math.abs(number).toFixed(decimals), 10).toString();
    const decimalPart = decimals > 0 ? decimalSeparator + Math.abs(number - integerPart).toFixed(decimals).slice(2) : '';

    let formattedNumber = '';
    let count = 0;
    for (let i = integerPart.length - 1; i >= 0; i--) {
        count++;
        formattedNumber = integerPart[i] + formattedNumber;
        if (count % 3 === 0 && i !== 0) {
            formattedNumber = thousandSeparator + formattedNumber;
        }
    }

    return sign + formattedNumber + decimalPart;
}

function preloader(){
    const wrapper = document.querySelector(".wrapper")
    const preloader = document.querySelector(".preloader")
    preloader.style.opacity = '0'
    wrapper.style.opacity = '1'
    //alert(1)
}
amountcount = 734;
function loadamount(){
    const amount = document.querySelector(".amount")
    if(amountcount < 800.00){
        amountcount++
        amount.innerHTML = amountcount
    }
}
setInterval(loadamount, 0)

// Change the amount entered in usdt to naira
function changenaira(element) {
    // Get the value from the input that triggered the event
    const usdtAmount = element.value;
    
    // Find the related output element using a sibling selector or a parent selector
    const nairaAmount2 = element.closest('.buy').querySelector('.nairaamount2');

    // Calculate the naira amount
    const amount = usdtAmount //* 800; // Adjust the multiplier as needed

    // Set the result in the related naira amount element
    nairaAmount2.innerText = numberFormat(amount, 2, '.', ',');
}



// Change the amount entered in naira to usdt
function changeusdt(){
    const usdtamount = document.querySelector("#usdtamount")
    const nairaamount = document.querySelector("#nairaamount").value
    const nairaamount2 = document.querySelector("#nairaamount2")
    const amount = nairaamount/800
    usdtamount.value = amount
    nairaamount2.innerText = numberFormat(nairaamount, 2, '.', ',');
}

// Show the div for entering wallet address
function show_wallet_div(){
    const wallet_div = document.querySelector("#time_div")
    const buy = document.querySelector("#inv")
    buy.style.display = "none"
    wallet_div.style.display = "block"
    error.style.display = "none"
}



const btn_pay = document.querySelector("#btn_pay")
btn_pay.addEventListener("click", function(){
    //alert(1)
    const usdtamount = document.querySelector("#usdtamount").value
    if(usdtamount == "" || usdtamount == 0){
        error.style.display = "block"
        error.innerText = "Enter the amount of USDT"
        setTimeout(function(){
            error.style.display = "none"
        }, 1500)
    }
    else if(usdtamount < 1){
        error.style.display = "block"
        error.innerText = "You cannot buy USDT worth less than $15"
        setTimeout(function(){
            error.style.display = "none"
        }, 1500)
    }
    else if(usdtamount > 1500000000000000){
        error.style.display = "block"
        error.innerText = "You cannot buy USDT worth more than $15,000"
        setTimeout(function(){
            error.style.display = "none"
        }, 1500)
    }
    else{
        show_wallet_div()
    }
})
