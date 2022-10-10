
//5% button 

document.getElementById("five").addEventListener("click", function () {

    if (document.querySelectorAll(".activebutton").length !== 0) {
        document.querySelectorAll(".activebutton")[0].classList.remove("activebutton")
    }

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("cantbezero").innerHTML = "Can't be zero"
        document.getElementById("numofpeople").classList.add("cantbezero")

    } else {

        document.getElementById("cantbezero").innerHTML = ""
        document.getElementById("numofpeople").classList.remove("cantbezero")

    }

    document.getElementById("five").classList.add("activebutton")

    let tipamount = document.getElementById("bill").value * 0.05 / document.getElementById("numofpeople").value

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("tipamount").innerHTML = "$0.00"
        document.getElementById("total").innerHTML = "$0.00"
    } else {
        document.getElementById("tipamount").innerHTML = `$${tipamount.toFixed(2)}`

        document.getElementById("total").innerHTML = `$${(document.getElementById("bill").value / document.getElementById("numofpeople").value + tipamount).toFixed(2)}`
    }
})

//10% button 

document.getElementById("ten").addEventListener("click", function () {

    if (document.querySelectorAll(".activebutton").length !== 0) {
        document.querySelectorAll(".activebutton")[0].classList.remove("activebutton")
    }

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("cantbezero").innerHTML = "Can't be zero"
        document.getElementById("numofpeople").classList.add("cantbezero")
    } else {
        document.getElementById("cantbezero").innerHTML = ""
        document.getElementById("numofpeople").classList.remove("cantbezero")

    }

    document.getElementById("ten").classList.add("activebutton")

    let tipamount = document.getElementById("bill").value * 0.1 / document.getElementById("numofpeople").value

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("tipamount").innerHTML = "$0.00"
        document.getElementById("total").innerHTML = "$0.00"
    } else {
        document.getElementById("tipamount").innerHTML = `$${tipamount.toFixed(2)}`

        document.getElementById("total").innerHTML = `$${(document.getElementById("bill").value / document.getElementById("numofpeople").value + tipamount).toFixed(2)}`
    }
})


//15% button 

document.getElementById("fifteen").addEventListener("click", function () {

    if (document.querySelectorAll(".activebutton").length !== 0) {
        document.querySelectorAll(".activebutton")[0].classList.remove("activebutton")
    }

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("cantbezero").innerHTML = "Can't be zero"
        document.getElementById("numofpeople").classList.add("cantbezero")
    } else {
        document.getElementById("cantbezero").innerHTML = ""
        document.getElementById("numofpeople").classList.remove("cantbezero")

    }

    document.getElementById("fifteen").classList.add("activebutton")

    let tipamount = document.getElementById("bill").value * 0.15 / document.getElementById("numofpeople").value

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("tipamount").innerHTML = "$0.00"
        document.getElementById("total").innerHTML = "$0.00"
    } else {
        document.getElementById("tipamount").innerHTML = `$${tipamount.toFixed(2)}`

        document.getElementById("total").innerHTML = `$${(document.getElementById("bill").value / document.getElementById("numofpeople").value + tipamount).toFixed(2)}`
    }
})


//25% button 

document.getElementById("twentyfive").addEventListener("click", function () {

    if (document.querySelectorAll(".activebutton").length !== 0) {
        document.querySelectorAll(".activebutton")[0].classList.remove("activebutton")
    }

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("cantbezero").innerHTML = "Can't be zero"
        document.getElementById("numofpeople").classList.add("cantbezero")
    } else {
        document.getElementById("cantbezero").innerHTML = ""
        document.getElementById("numofpeople").classList.remove("cantbezero")

    }

    document.getElementById("twentyfive").classList.add("activebutton")

    let tipamount = document.getElementById("bill").value * 0.25 / document.getElementById("numofpeople").value

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("tipamount").innerHTML = "$0.00"
        document.getElementById("total").innerHTML = "$0.00"
    } else {
        document.getElementById("tipamount").innerHTML = `$${tipamount.toFixed(2)}`

        document.getElementById("total").innerHTML = `$${(document.getElementById("bill").value / document.getElementById("numofpeople").value + tipamount).toFixed(2)}`
    }
})


//50% button 

document.getElementById("fifty").addEventListener("click", function () {

    if (document.querySelectorAll(".activebutton").length !== 0) {
        document.querySelectorAll(".activebutton")[0].classList.remove("activebutton")
    }

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("cantbezero").innerHTML = "Can't be zero"
        document.getElementById("numofpeople").classList.add("cantbezero")
    } else {
        document.getElementById("cantbezero").innerHTML = ""
        document.getElementById("numofpeople").classList.remove("cantbezero")

    }

    document.getElementById("fifty").classList.add("activebutton")

    let tipamount = document.getElementById("bill").value * 0.5 / document.getElementById("numofpeople").value

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("tipamount").innerHTML = "$0.00"
        document.getElementById("total").innerHTML = "$0.00"
    } else {
        document.getElementById("tipamount").innerHTML = `$${tipamount.toFixed(2)}`

        document.getElementById("total").innerHTML = `$${(document.getElementById("bill").value / document.getElementById("numofpeople").value + tipamount).toFixed(2)}`
    }
})




//Custom field 

document.getElementById("custombutton").addEventListener("change", function () {

    if (document.querySelectorAll(".activebutton").length !== 0) {
        document.querySelectorAll(".activebutton")[0].classList.remove("activebutton")
    }

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("cantbezero").innerHTML = "Can't be zero"
        document.getElementById("numofpeople").classList.add("cantbezero")
    } else {
        document.getElementById("cantbezero").innerHTML = ""
        document.getElementById("numofpeople").classList.remove("cantbezero")
    }

    let tipamount = document.getElementById("bill").value * (document.getElementById("custombutton").value / 100) / document.getElementById("numofpeople").value

    if (document.getElementById("numofpeople").value == 0) {
        document.getElementById("tipamount").innerHTML = "$0.00"
        document.getElementById("total").innerHTML = "$0.00"
    } else {
        document.getElementById("tipamount").innerHTML = `$${tipamount.toFixed(2)}`

        document.getElementById("total").innerHTML = `$${(document.getElementById("bill").value / document.getElementById("numofpeople").value + tipamount).toFixed(2)}`
    }
})


//Changes on input when customfield is used

let numofpeople = document.getElementById("numofpeople")
document.getElementById("numofpeople").addEventListener("input", function () {

    if (numofpeople !== 0) {
        for (let i = 0; i < document.querySelectorAll(".activebutton").length; i++)
            document.querySelectorAll(".activebutton")[i].classList.remove("activebutton")
        document.getElementById("cantbezero").innerHTML = ""
        document.getElementById("numofpeople").classList.remove("cantbezero")

    }

    if (Number((document.getElementById("custombutton").value)) !== 0) {
        let tipamount = document.getElementById("bill").value * (document.getElementById("custombutton").value / 100) / document.getElementById("numofpeople").value
        document.getElementById("tipamount").innerHTML = `$${tipamount.toFixed(2)}`
        document.getElementById("total").innerHTML = `$${(document.getElementById("bill").value / document.getElementById("numofpeople").value + tipamount).toFixed(2)}`
    }


})


//Reset button

document.getElementById("reset").addEventListener("click", function () {

    document.getElementById("bill").value = ""
    document.getElementById("numofpeople").value = ""
    document.getElementById("tipamount").innerHTML = "$0.00"
    document.getElementById("total").innerHTML = "$0.00"

    if (numofpeople !== 0) {
        for (let i = 0; i < document.querySelectorAll(".activebutton").length; i++)
            document.querySelectorAll(".activebutton")[i].classList.remove("activebutton")
        document.getElementById("cantbezero").innerHTML = ""
        document.getElementById("numofpeople").classList.remove("cantbezero")
        document.getElementById("custombutton").value = null;


    }
})



document.getElementById("bill").addEventListener("input", function () {


    let tipamount = document.getElementById("bill").value * (document.getElementById("custombutton").value / 100) / document.getElementById("numofpeople").value

    if (document.getElementById("custombutton").value !== "" && document.getElementById("numofpeople").value !== "") {
            
        document.getElementById("tipamount").innerHTML = `$${tipamount.toFixed(2)}`
        document.getElementById("total").innerHTML = `$${(document.getElementById("bill").value / document.getElementById("numofpeople").value + tipamount).toFixed(2)}`
    } 

})


