/*==============================================================================
 * When Buttom is Pressed Store Image in a Variable with Email Variable
===============================================================================*/

/*================================================ Car Array Section 1 ==================================================*/
function submit1() {

    var name = document.getElementById('cname').value;
    var number = document.getElementById('rnumber').value;
    var miles = document.getElementById('cmiles').value;
    var leaving = document.getElementById('leavingTime').value;

    /*=========================== Data Checking Area =============================*/
    if (document.getElementById('cname').value == "" || document.getElementById('rnumber').value == "" || document.getElementById('cmiles').value == "" || document.getElementById('leavingTime').value == "") {
        alert("Please Fill in All text Fields");
        window.location.reload();
    } else if (number.length > 6) { /* Check that Registration is valid, if not then inform online user */
        alert("Invalid Car Registration Number");
    } else if (miles > 44) { /* Check that Miles is valid, if not then inform online user */
        alert('"Invalid Miles as these cars maximum distance is "44 miles"');
    } else {
        /*=========================== Calculations Area ===============================*/
        cmiles = 44 - miles; /* Results for Miles Remaining for cars */
        /*=============================================================================*/

        /*====================== Stores Variable in Local Storage =====================*/
        var car1 = [name, number, cmiles + "m", miles + "m", leaving];

        var carDetails1 = JSON.stringify(car1);
        localStorage.setItem('car1', carDetails1);

        console.log(JSON.parse(localStorage['car1']));
        alert("Your data been stored into Local Storage!");
        window.location.reload();  
        /*============================================================================*/ 
    }   
 }
/*=======================================================================================================================*/
 
/*=============================================================================*/

/*================================================ Car Array Section 2 ==================================================*/
function submit2() {

    var name = document.getElementById('cname').value;
    var number = document.getElementById('rnumber').value;
    var miles = document.getElementById('cmiles').value;
    var leaving = document.getElementById('leavingTime').value;

    /*=========================== Data Checking Area =============================*/
    if (document.getElementById('cname').value == "" || document.getElementById('rnumber').value == "" || document.getElementById('cmiles').value == "" || document.getElementById('leavingTime').value == "") {
        alert("Please Fill in All text Fields");
        window.location.reload();
    } else if (number.length > 6) { /* Check that Registration is valid, if not then inform online user */
        alert("Invalid Car Registration Number");
    } else if (miles > 44) { /* Check that Miles is valid, if not then inform online user */
        alert('"Invalid Miles as these cars maximum distance is "44 miles"');
    } else {
        /*=========================== Calculations Area ===============================*/
        cmiles = 44 - miles; /* Results for Miles Remaining for cars */
        /*=============================================================================*/

        /*====================== Stores Variable in Local Storage =====================*/
        var car2 = [name, number, cmiles + "m", miles + "m", leaving];

        var carDetails2 = JSON.stringify(car2);
        localStorage.setItem('car2', carDetails2);

        console.log(JSON.parse(localStorage['car2']));
        alert("Your data been stored into Local Storage!");
        window.location.reload();  
        /*============================================================================*/ 
    }   
 }
/*=======================================================================================================================*/

/*================================================ Car Array Section 3 ==================================================*/
function submit3() {

    var name = document.getElementById('cname').value;
    var number = document.getElementById('rnumber').value;
    var miles = document.getElementById('cmiles').value;
    var leaving = document.getElementById('leavingTime').value;

    /*=========================== Data Checking Area =============================*/
    if (document.getElementById('cname').value == "" || document.getElementById('rnumber').value == "" || document.getElementById('cmiles').value == "" || document.getElementById('leavingTime').value == "") {
        alert("Please Fill in All text Fields");
        window.location.reload();
    } else if (number.length > 6) { /* Check that Registration is valid, if not then inform online user */
        alert("Invalid Car Registration Number");
    } else if (miles > 44) { /* Check that Miles is valid, if not then inform online user */
        alert('"Invalid Miles as these cars maximum distance is "44 miles"');
    } else {
        /*=========================== Calculations Area ===============================*/
        cmiles = 44 - miles; /* Results for Miles Remaining for cars */
        /*=============================================================================*/

        /*====================== Stores Variable in Local Storage =====================*/
        var car3 = [name, number, cmiles + "m", miles + "m", leaving];

        var carDetails3 = JSON.stringify(car3);
        localStorage.setItem('car3', carDetails3);

        console.log(JSON.parse(localStorage['car3']));
        alert("Your data been stored into Local Storage!");
        window.location.reload();  
        /*============================================================================*/ 
    }   
 }
/*=======================================================================================================================*/

/*================================================ Car Array Section 4 ==================================================*/
function submit4() {

    var name = document.getElementById('cname').value;
    var number = document.getElementById('rnumber').value;
    var miles = document.getElementById('cmiles').value;
    var leaving = document.getElementById('leavingTime').value;

    /*=========================== Data Checking Area =============================*/
    if (document.getElementById('cname').value == "" || document.getElementById('rnumber').value == "" || document.getElementById('cmiles').value == "" || document.getElementById('leavingTime').value == "") {
        alert("Please Fill in All text Fields");
        window.location.reload();
    } else if (number.length > 6) { /* Check that Registration is valid, if not then inform online user */
        alert("Invalid Car Registration Number");
    } else if (miles > 44) { /* Check that Miles is valid, if not then inform online user */
        alert('"Invalid Miles as these cars maximum distance is "44 miles"');
    } else {
        /*=========================== Calculations Area ===============================*/
        cmiles = 44 - miles; /* Results for Miles Remaining for cars */
        /*=============================================================================*/

        /*====================== Stores Variable in Local Storage =====================*/
        var car4 = [name, number, cmiles + "m", miles + "m", leaving];

        var carDetails4 = JSON.stringify(car4);
        localStorage.setItem('car4', carDetails4);

        console.log(JSON.parse(localStorage['car4']));
        alert("Your data been stored into Local Storage!");
        window.location.reload();  
        /*============================================================================*/ 
    }   
 }
/*=======================================================================================================================*/

/*================================================ Car Array Section 5 ==================================================*/
function submit5() {

    var name = document.getElementById('cname').value;
    var number = document.getElementById('rnumber').value;
    var miles = document.getElementById('cmiles').value;
    var leaving = document.getElementById('leavingTime').value;

    /*=========================== Data Checking Area =============================*/
    if (document.getElementById('cname').value == "" || document.getElementById('rnumber').value == "" || document.getElementById('cmiles').value == "" || document.getElementById('leavingTime').value == "") {
        alert("Please Fill in All text Fields");
        window.location.reload();
    } else if (number.length > 6) { /* Check that Registration is valid, if not then inform online user */
        alert("Invalid Car Registration Number");
    } else if (miles > 44) { /* Check that Miles is valid, if not then inform online user */
        alert('"Invalid Miles as these cars maximum distance is "44 miles"');
    } else {
        /*=========================== Calculations Area ===============================*/
        cmiles = 44 - miles; /* Results for Miles Remaining for cars */
        /*=============================================================================*/

        /*====================== Stores Variable in Local Storage =====================*/
        var car5 = [name, number, cmiles + "m", miles + "m", leaving];

        var carDetails5 = JSON.stringify(car5);
        localStorage.setItem('car5', carDetails5);

        console.log(JSON.parse(localStorage['car5']));
        alert("Your data been stored into Local Storage!");
        window.location.reload();  
        /*============================================================================*/ 
    }   
 }
/*=======================================================================================================================*/

/*================================================ Car Array Section 6 ==================================================*/
 function submit6() {

    var name = document.getElementById('cname').value;
    var number = document.getElementById('rnumber').value;
    var miles = document.getElementById('cmiles').value;
    var leaving = document.getElementById('leavingTime').value;

    /*=========================== Data Checking Area =============================*/
    if (document.getElementById('cname').value == "" || document.getElementById('rnumber').value == "" || document.getElementById('cmiles').value == "" || document.getElementById('leavingTime').value == "") {
        alert("Please Fill in All text Fields");
        window.location.reload();
    } else if (number.length > 6) { /* Check that Registration is valid, if not then inform online user */
        alert("Invalid Car Registration Number");
    } else if (miles > 44) { /* Check that Miles is valid, if not then inform online user */
        alert('"Invalid Miles as these cars maximum distance is "44 miles"');
    } else {
        /*=========================== Calculations Area ===============================*/
        cmiles = 44 - miles; /* Results for Miles Remaining for cars */
        /*=============================================================================*/

        /*====================== Stores Variable in Local Storage =====================*/
        var car6 = [name, number, cmiles + "m", miles + "m", leaving];

        var carDetails6 = JSON.stringify(car6);
        localStorage.setItem('car6', carDetails6);

        console.log(JSON.parse(localStorage['car6']));
        alert("Your data been stored into Local Storage!");
        window.location.reload();  
        /*============================================================================*/ 
    }   
 }
/*=======================================================================================================================*/