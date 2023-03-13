
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

    var dog_001 = document.getElementById("dog_001").innerHTML = "<strong>" + data.Dogs[0].name + "</strong> " + "<br><strong>Lifespan: </strong>" + data.Dogs[0].lifespan + "<br>" + data.Dogs[0].shortDescription;
    var dog_002 = document.getElementById("dog_002").innerHTML = "<strong>" + data.Dogs[1].name + "</strong> " + "<br><strong>Lifespan: </strong>" + data.Dogs[1].lifespan + "<br>" + data.Dogs[1].shortDescription;
    var dog_003 = document.getElementById("dog_003").innerHTML = "<strong>" + data.Dogs[2].name + "</strong> " + "<br><strong>Lifespan: </strong>" + data.Dogs[2].lifespan + "<br>" + data.Dogs[2].shortDescription;
    var dog_004 = document.getElementById("dog_004").innerHTML = "<strong>" + data.Dogs[3].name + "</strong> " + "<br><strong>Lifespan: </strong>" + data.Dogs[3].lifespan + "<br>" + data.Dogs[3].shortDescription;
    var dog_005 = document.getElementById("dog_005").innerHTML = "<strong>" + data.Dogs[4].name + "</strong> " + "<br><strong>Lifespan: </strong>" + data.Dogs[4].lifespan + "<br>" + data.Dogs[4].shortDescription;

    }
