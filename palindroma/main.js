// Capire se la parola inserita dall’utente è palindroma o no (e quindi output di conseguenza)

// inserisco una parola in input
var input_word = prompt('Inserisci la parola');
console.log(input_word);

// la suddivido in un array di caratteri
var word = input_word.split('');
console.log(word);

// visualizzo l'array di caratteri al contrario
var reverse_word = word.reverse();
console.log(reverse_word);

// ricostruisco la parola al contrario
var joined_word = reverse_word.join('');
console.log(joined_word);

// controllo che la parola in input e la parola scritta al contrario siano uguali
if(input_word == joined_word){
  document.writeln('La parola ' + input_word + ' è palindroma')
}
else{
  document.writeln('La parola ' + input_word + ' non è palindroma');
}
