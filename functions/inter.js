function localGreet(locale) {
    let language = extractLanguage(locale);
    let region = extractRegion(locale);
  
    switch (region) {
      case 'US': return 'Hey!';
      case 'GB': return 'Hello!';
      case 'AU': return 'Howdy!';
      default: return greet(language);
    }
  }

function extractLanguage2(str) {
    return str.split('_')[0]; //split the string into array at the _ and return the first element
}

function extractRegion(str) {
    return str.split('.')[0].split('_')[1]; 
}

