
let number_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];
let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
let timer;
let special_array =[1, 2, 3, 4, 5, 6, 7];
let counter = 0;
let multiNumber = [];
window.onload = function () {
    declareEvent()
}
/** all events in body */
function declareEvent() {
    let btn = document.querySelector("#id_btn");
    btn.addEventListener("click", function () {
        if (counter <= 5) {
            
            clearInterval(timer);
            timer = setInterval(rndNumber, 500);
        }
        else {
            counter = 0;
            clearInterval(timer);
            multiNumber = [];
            document.querySelector("#id_h2").innerHTML = ""
            timer = setInterval(rndNumber, 500);
        }
    })
}
/** Loto game */
function rndNumber() {
    counter++
    if (counter >= 7) {
        clearInterval(timer);
    }
    let rnd = Math.floor(Math.random() * number_arr.length);
    // just if array its empty
    if (multiNumber.length === 0) {
        multiNumber.push(number_arr[rnd]);
        // console.log(`multiNumber: ${multiNumber}`);
    }
    else {
        while (checkDuplicate(multiNumber, number_arr[rnd])) {
            rnd = Math.floor(Math.random() * number_arr.length);
        }
        if(counter==7){
            rnd = Math.floor(Math.random() * special_array.length);
            multiNumber.push(special_array[rnd]);
        }
        else{
            multiNumber.push(number_arr[rnd]);
        }
        
    }
    let ball = document.createElement("span");
    ball.id = "id_ball";
    ball.style.border = "2px solid black";
    ball.style.borderRadius = "50%";
    ball.style.width = "75px";
    ball.style.height = "75px";
    // ball.style.display = "inline-block"
    ball.style.display = "flex"
    ball.style.justifyContent = "center"
    ball.style.alignItems = "center"
    ball.style.margin = "0 12px 8px 12px";
    if (counter == 7) {
        ball.style.backgroundColor = "red";
        ball.style.border = "4px solid yellow";
        ball.innerHTML = multiNumber[6];
        document.querySelector("#id_h2").append(ball);
    }
    else {
        ball.style.backgroundColor = colorArray[rnd];
        ball.innerHTML = number_arr[rnd];
        document.querySelector("#id_h2").append(ball);
    }
}
/** return true if duplicate number in array else false*/
function checkDuplicate(arr, n) {
    return arr.indexOf(n) == -1 ? false : true;
}