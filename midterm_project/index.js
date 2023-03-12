fetch('data.json')
.then(function (response) {
return response.json();
})
.then(function (data) {
appendData(data);
})
.catch(function (err) {
console.log('error:' + err);
})
function appendData(data) {
let mainContainer = document.getElementById("myData");
for (let name in data) {
let div = document.createElement("div");
div.innerHTML = `<br> <br> <h2> ${name} </h2>`;
mainContainer.appendChild(div);

let mainContainer2 = document.getElementById("myBreed");
for (let element of data[name]) {
console.log(element);
let div2 = document.createElement("div");
div2.innerHTML = `${element["productId"]} : ${element["name"]} : ${element["lifespan"]} : ${element["shortDescription"]} <br>`;
mainContainer.appendChild(div2);
}
} // end of for

} // end of function appendData