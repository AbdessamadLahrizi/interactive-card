let allLis = document.querySelectorAll("ul li");
let btn = document.querySelector('.front input[type="button"]');
let box = document.querySelector('.container .box');
let ul = document.querySelector(".rate");

let ratingDiv = document.querySelector('.selected-items');






allLis.forEach(function (ele) {
    ele.onclick = function () {
        allLis.forEach(function (ele) {
            ele.classList.remove('active');
        });
        this.classList.add('active');
        // Check if the person have clicked in the rate button
        if (ele.classList.contains("active")) {
            flip();
            let elem = ele.innerHTML;
            ratingDiv.innerHTML = `Your selected ${elem} out of 5`;
        } else {
            btn.preventDefault();
        }
    }
});

// for (let i = 0; i < allLis.length; i++) {
//     allLis[i].setAttribute("data-name", `${i}`);
// }
let flip = () => btn.onclick = () => box.classList.add("animate");

