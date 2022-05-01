
const fetchAdvice = () => {
    try {
        fetch('https://api.adviceslip.com/advice').then(res => {
            // console.log(res.json())
            // let ele = document.getElementById("advice_id");
            // ele.innerText = "ADVICE #"
            return res.json()
    })
    .then(data => {
        let adTitle = document.getElementById("advice_id");
        adTitle.innerText = "ADVICE #" + data.slip.id

        let adVal = document.getElementById("advice_val");
        adVal.innerText = data.slip.advice;
        
    })
    .error(err => console.log(err))
    }
    catch {

    }
}

window.onload = fetchAdvice();