//part one

function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (isIncreasing) {
        caseInput.value = 180;
    }
    else {
        caseInput.value = 0;
    }

    //update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = parseInt(caseInput.value) + 1299;
}
//storage increase decrease events
//handle case increase decrease events
document.getElementById('memory-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});
document.getElementById('memory-minus').addEventListener('click', function () {
    updateCaseNumber(false);
});

//part three

function updateCaseNumber2(isIncreas) {
    const caseInput = document.getElementById('case-charge');
    let caseNumber = caseInput.value;
    if (isIncreas) {
        caseInput.value = 0;
    }
    
    else {
        caseInput.value = 20;
    }

    //update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = parseInt(caseInput.value) + 1299;
}
//storage increase decrease events
//handle case increase decrease events
document.getElementById('delivery1').addEventListener('click', function () {
    updateCaseNumber2(true);
});
document.getElementById('delivery2').addEventListener('click', function () {
    updateCaseNumber2(false);
});


//part two

document.getElementById('storage1').addEventListener('click',function(){
    const caseInput = document.getElementById('case-storage');
    const caseNumber = caseInput.value;
    caseInput.value =  0;
});

document.getElementById('storage2').addEventListener('click',function(){
    const caseInput = document.getElementById('case-storage');
    const caseNumber = caseInput.value;
    caseInput.value =  100;
});

document.getElementById('storage3').addEventListener('click',function(){
    const caseInput = document.getElementById('case-storage');
    const caseNumber = caseInput.value;
    caseInput.value =  180;
});

//promo code
document.getElementById('user-promo').addEventListener('click', function () {
    // get user promo
    constpromoField = document.getElementById('promo');
    const userPromo = passwordField.value;
    // check promo
    if ( userPassword == 'stevekaku') {
      document.getElementById('case-total');
    }
});
