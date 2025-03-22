document.getElementById("login-btn").addEventListener("click",
    function (event) {

    event.preventDefault();
    const accountNumber = document.getElementById("Account_number").value;
    const pin = document.getElementById("pin").value;
    const convertedPin=parseInt(pin);
    
    if(accountNumber.length==8){
        if(convertedPin===1234){
            window.location.href="./main.html";
        }
        else{
            console.log("pin thik nai")
        }
    }
    else{
        console.log("need valid account number");
    }
})