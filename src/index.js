module.exports = function toReadable (number) {

  const strNumber = number.toString();

  const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred',];
  const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const tenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let i = strNumber.length - 1;
  let j = 0;
  let result = [];

  if (parseInt(strNumber) === 0) {
    result.push('zero');
  } else{

        while (i >= 0) {

            if (i === 2) {
                result.push(hundreds[strNumber[j]]);
                i--;
                j++;
            } else if (i === 1) {
                if (strNumber[j] == 0) {
                    i--;
                    j++;                
                } else if (strNumber.slice(-2) < 20 && strNumber.slice(-2) >= 10) {
                    result.push(tenToTwenty[strNumber[strNumber.length - 1]]);
                    break;
                } else {
                    result.push(dozens[strNumber[j]]);
                    i--;
                    j++;
                }
            } else if (i === 0) {
                if (strNumber[j] == 0) {
                    i--;
                } else {
                result.push(units[strNumber[j]]);
                i--;
            }
        }
    }
}
    return result.join(' ');
}

// console.log(toReadable(906));
