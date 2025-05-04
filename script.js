const str1 = "abcdrf";
const str2 = "ABCDRF";

function compareStrings(str1, str2) {

    if (str1.length === 0 && str2.length === 0) {
        return false;
    }

    if (str1.length !== str2.length) {
        return false;
    }
    if (str1.toUpperCase() === str2.toUpperCase()) {
        const strToArr1 = str1.split('');
        const strToArr2 = str2.split('');

        for (i = 0; i < strToArr1.length; i++) {
            if (strToArr1[i] === strToArr2[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(compareStrings(str1, str2))

function removeExclamationMarks(str) {
    const chengeStr = str.replaceAll('!', '');
    return chengeStr;
}

console.log(removeExclamationMarks('dshf!ds!jdskjf!'))