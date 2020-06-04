function extractLanguage(str) {
    return str.slice(0,2);
}

//or 
function extractLanguage2(str) {
    return str.split('_')[0]; //split the string into array at the _ and return the first element
}
console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'