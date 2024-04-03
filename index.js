// code your solution here
const record = [
  { year: '2015', result: 'W' },
  { year: '2014', result: 'N/A' },
  { year: '2013', result: 'L' },
];
function superbowlWin(data) {
  for (let records of data) {
    if (records.result === 'W') {
      return `${records.year}`;
    }
  }
}

// record.prototype.find(superbowlWin);
superbowlWin(record);
