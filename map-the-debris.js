/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (let i = 0; i < arr.length; i++) {
    let orbitalPeriodCalc = (2 * Math.PI) * Math.sqrt(
      Math.pow(earthRadius + arr[i]['avgAlt'], 3) / GM
    )

    delete arr[i]['avgAlt'];

    arr[i]['orbitalPeriod'] = Math.round(orbitalPeriodCalc);
  }

  return arr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
