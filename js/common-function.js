function getInputValueById(inputFieldId) {
    const inputValue = document.getElementById(inputFieldId);
    const inputValueText = inputValue.value;
    const value =parseFloat(inputValueText);
    return value;
}

// set function value
function setInnerTextById(inputFieldId, area) {
    const element = document.getElementById(inputFieldId);
    element.innerText = area;
}