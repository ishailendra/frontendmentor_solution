const submit = () => {
    console.log("input submit");
    let ele = document.querySelector('input[name="rating"]:checked');
    let value = ele !== null ? ele.value : null;

    if(value !== null) {
        
        let rating_form = document.getElementById("rating-form")
        let rating_thanks = document.getElementById("rating-thanks")

        rating_form.classList.toggle("hide");
        rating_thanks.classList.toggle("hide");

        let score_out = document.getElementById("score_out");
        score_out.innerText = "You selected "+ value + " out of 5"
    }
}