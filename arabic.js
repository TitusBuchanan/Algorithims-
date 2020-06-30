// Conver Arabic to Roman Numbers

function romanConventerBasic(number) {
    // 1. Create array with roman numbers and arabic equivalents
    const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanValue = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  
    // 2. New variable that will be romanized number
    let romanized = '';
  
    // 3. Map through numbers array and comapre against your number
    decimalValue.map((a, i) => {
      // 4. As long as your number is bigger than value in an array
      while (a <= number) {
        // 5. Add corresponding roman character to the string
        romanized += romanValue[i];
        // 6. And reduce your number by a value from arabic array.
        number -= a;
      }
    });
  
    return romanized;
  }
  
  console.log(romanConventerBasic(2345))