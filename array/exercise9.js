let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  function contains(string, array) {
      let i;
      for (i = 0; i < array.length; i += 1) {
          if (array[i] === string) {
              return true;
          }
      }
      return false;
  }

  function contains2(string, array) {
      return array.indexOf(string) >= 0;
  }


  console.log(contains('Barcelona', destinations));
  console.log(contains('Nashville', destinations));