// triangle area calculation
function triangleAreaCalculation() {
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');
    const area = 0.5 * base * height;
    setInnerTextById('triangle-area', area);
}

// rectangle area calculation
function rectangleAreaCalculation() {
    const width = getInputValueById ('rectangle-width');
    const length = getInputValueById('rectangle-length');
    const area = width * length;
    setInnerTextById ('rectangle-area', area);
}

// parallelogram area calculation
function parallelogramAreaCalculation() {
    const base = getInputValueById ('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
    setInnerTextById('parallelogram-area', area);
}

// rhombus area calculation
function rhombusAreaCalculation() {
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');
    const area = (d1 * d2) / 2;
    setInnerTextById('rhombus-area', area);
}

// pentagon area calculation
function pentagonAreaCalculation() {
    const p = getInputValueById('pentagon-p');
    const b = getInputValueById('pentagon-b');
    const area = (p * b) / 2;
    setInnerTextById('pentagon-area', area);
}

// ellipse area calculation
function ellipseAreaCalculation() {
    const r1 = getInputValueById('ellipse-r1');
    const r2 = getInputValueById('ellipse-r2');
    const area = Math.PI * r1 * r2;
    setInnerTextById('ellipse-area', area);
}