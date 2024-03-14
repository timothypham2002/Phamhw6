const getSum = () => {
  const n1 = prompt("Enter the first integer:");
  const n2 = prompt("Enter the second integer:");

  if (!isInteger(n1) || !isInteger(n2)) {
    document.getElementById('content').innerHTML = '<span style="color: red; font-weight: bold;">Error!</span> You must enter integers. You entered "' + n1 + '" and "' + n2 + '". Try again.';
  } else {
    const sum = parseInt(n1) + parseInt(n2);
    document.getElementById('content').innerHTML = n1 + ' + ' + n2 + ' = <span style="color: red; font-weight: bold;">' + sum + '</span>';
  }
};

const isInteger = (value) => {
  return /^\d+$/.test(value);
};

getSum();