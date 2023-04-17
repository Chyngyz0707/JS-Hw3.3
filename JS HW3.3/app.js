/** Написать функцию переворота строки. СТАНДАРТНУЮ ФУНКЦИЮ REVERSE НЕ ИСПОЛЬЗОВАТЬ.
 Например: myReverse("123456789") -> "987654321"*/
  
 /*const str = 'qwerty';
 
const reverse = str.split('').reverse().join('');
console.log(reverse);
 





/** Написать функцию капитализации строк. Например: capitalizeString("ЕВГЕНИЙ") -> "Евгений"; 
capitalizeString("иВАНОВ") -> "Иванов"; Капитализация - это процесс преобразования строки, 
когда первая буква становится заглавной, а остальные строчными.*/

/*function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("computer ") );






/* Написать функцию по обезличиванию ФИО. Функция должна заменить все символы 
кроме первого и последнего на знак _. 
Например: depersonalize(“Киселев Евгений Дмитриевич”) -> “К_____в Е_____й Д________ч”, 
depersonalize(“Сидоров Вова”) -> “С_____в В__а”.*/

let text = "Иванов Иван Иванович"


function depersonalize(text) {
    var words = text.split(" ");
    var newText = [];
  
    for (const word of words) {
      var newWord = "";
      for (var i = 0; i < word.length; i++) {
        newWord += i === 0 || i === word.length - 1 ? word[i] : "_";
      }
      newText.push(newWord);
    }
    return newText.join(" ");
}