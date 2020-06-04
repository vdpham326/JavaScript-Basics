function extractLanguage(str) {
    return str.slice(0,2);
}

//or 
function extractRegion(str) {
    return str.split('.')[0].split('_')[1]; 
}
console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'