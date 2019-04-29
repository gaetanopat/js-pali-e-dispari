// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Poi generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.
// (Quindi classico gioco pari o dispari dove utente sceglie a priori se uscirà pari o dipsari
// e poi dichiara un numero (tra 1 e 5) . Il computer genera random altro numero sullo stesso range, così sapremo chi ha vinto.

// dichiaro le variabili che mi serviranno
var user_choice, user_number, pc_number, sum;

// chiedo all'utente se vuole pari o dispari
user_choice = prompt('Pari o Dispari?');

// per far sì che a prescindere da quello che scriva l'utente la prima lettera sia Maiuscola
user_choice = user_choice.charAt(0).toUpperCase() + user_choice.slice(1).toLowerCase();

// controllo che l'utente scriva Pari o Dispari e non qualcosa di sbagliato
if (user_choice == 'Pari' || user_choice == 'Dispari'){
  // l'utente sceglie il numero che userà lui
  user_number = parseInt(prompt('Scegli il tuo numero da 1 a 5'));

  // controllo che il numero scritto dall'utente sia compreso tra 1 e 5 estremi compresi
  if (user_number >= 1 && user_number <= 5){
    // numero random per il computer
    pc_number = Math.floor(Math.random() * 5) + 1;

    // visualizzo a schermo la scelta dell'utente, il numero dell'utente e quello del pc
    document.writeln('Hai scelto ' + user_choice + '<br><br>');
    document.writeln('Il tuo numero è: ' + user_number + '<br>');
    document.writeln('Il numero del computer è: ' + pc_number + '<br><br>');

    // sommo i due numeri
    sum = user_number + pc_number;

    // se la somma è multiplo di due allora sarà Pari e se l'utente sceglie Pari
    if (sum % 2 == 0 && user_choice == 'Pari'){
      document.writeln('La somma dei due numeri è: ' + sum + ', quindi essendo PARI e scegliendo PARI hai vinto');
    }
    // se la somma è multiplo di due allora sarà Pari e se l'utente sceglie Dispari
    if (sum % 2 == 0 && user_choice == 'Dispari'){
      document.writeln('La somma dei due numeri è: '+ sum + ', quindi essendo PARI e scegliendo DISPARI hai perso');
    }
    // se la somma non è multiplo di due allora sarà Dispari e se l'utente sceglie Pari
    if (sum % 2 !=0 && user_choice == 'Pari'){
      document.writeln('La somma dei due numeri è: '+ sum + ', quindi essendo DISPARI e scegliendo PARI hai perso');
    }
    // se la somma non è multiplo di due allora sarà Dispari e se l'utente sceglie Dispari
    if (sum % 2 != 0 && user_choice == 'Dispari') {
      document.writeln('La somma dei due numeri è: '+ sum + ', quindi essendo DISPARI e scegliendo DISPARI hai vinto');
    }
  } // fine if per controllare che l'utente abbia scelto un numero giusto
  else {
    document.writeln('Il numero deve essere maggiore o uguale a 1 e minore o uguale a 5');
  }
} // fine if per controllare che l'utente abbia scelto pari o dispari
else{
  document.writeln('Hai sbagliato a scegliere se Pari o Dispari');
}
