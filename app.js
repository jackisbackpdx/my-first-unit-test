import add from './add.js';
//reference elements
const xInput = document.getElementById('x');
const yInput = document.getElementById('y');
const sum = document.getElementById('sum');

xInput.oninput = showSum;
yInput.oninput = showSum;

function showSum() {
    console.log('f runs');
    const x = Number(xInput.value);
    const y = Number(yInput.value);

    sum.textContent = add(x, y);
};

// wire up events