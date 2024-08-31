function fun() {
    var root = document.getElementsByClassName("root")[0];
    root.style="display:none"
    var page22 = document.getElementsByClassName("page22")[0];
    page22.style = "display:block";
}

function but() {
    var firstName = document.querySelector('input[name="firstName"]').value;
    var secondName = document.querySelector('input[name="secondName"]').value;
    var date = document.querySelector('input[name="date"]').value;
    var address = document.querySelector('input[name="address"]').value;
    var gender = document.querySelector('input[name="see"]:checked');
    var showTime = document.querySelector('select[name="showTime"]').value;
    var seatsRequired = document.querySelector('input[name="seatsRequired"]').value;
    var mobileNumber = document.querySelector('input[name="mobileNumber"]').value;

    if (firstName && secondName && date && address && gender && showTime && seatsRequired && mobileNumber) {
        var z = document.getElementsByClassName("s0")[0];
        z.style = "display:none";
        var k = document.getElementsByClassName("special")[0];
        k.style = "display:block";
    } else {
        alert("Please enter all the data");
    }
}