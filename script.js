let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://api.adviceslip.com/advice', true);
myRequest.send();
let adviceIsGreat = document.getElementById("advice-panel");
myRequest.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {
            let myRequest = JSON.parse(this.responseText);
            let adviceTag = document.createElement('p');
            adviceTag.innerHTML = "Random Advice: " + myRequest.slip.advice;
            adviceIsGreat.appendChild(adviceTag);
        } else {
            console.log("Error processing Request")
        }
    }
}


