
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

    // console.log(data)
    // console.log(data.Cats)
    // console.log(data.Cats[0].name)
    // console.log(data.Cats[0].lifespan)

    
    var cat_001 = document.getElementById("cat_001").innerHTML = "<strong>" + data.Cats[0].name + "</strong> " +  data.Cats[0].lifespan + "<br>" + data.Cats[0].shortDescription;
    var cat_002 = document.getElementById("cat_002").innerHTML = data.Cats[1].name + " " +  data.Cats[1].lifespan + "<br>" + data.Cats[1].shortDescription;
    var cat_003 = document.getElementById("cat_003").innerHTML = data.Cats[2].name + " " +  data.Cats[2].lifespan + "<br>" + data.Cats[2].shortDescription;
    var cat_004 = document.getElementById("cat_004").innerHTML = data.Cats[3].name + " " +  data.Cats[3].lifespan + "<br>" + data.Cats[3].shortDescription;
    var cat_005 = document.getElementById("cat_005").innerHTML = data.Cats[4].name + " " +  data.Cats[4].lifespan + "<br>" + data.Cats[4].shortDescription;

    }


       // logs "marketing"