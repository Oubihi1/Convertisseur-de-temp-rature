// Créer un fichier JavaScript
// Écrire une fonction qui convertit de Celsius en Fahrenheit
function celsiusToFahrenheit() {
    // Lire la valeur de la température du champ de saisie Celsius
    let celsius = document.getElementById("celsius").value;
    // Effectuer la conversion
    let fahrenheit = (celsius * 9/5) + 32;
    // Afficher le résultat dans le champ de saisie Fahrenheit
    document.getElementById("fahrenheit").value = fahrenheit;
}

// Écrire une fonction qui convertit de Fahrenheit en Celsius
function fahrenheitToCelsius() {
    // Lire la valeur de la température du champ de saisie Fahrenheit
    let fahrenheit = document.getElementById("fahrenheit").value;
    // Effectuer la conversion
    let celsius = (fahrenheit - 32) * 5/9;
    // Afficher le résultat dans le champ de saisie Celsius
    document.getElementById("celsius").value = celsius;
}

// Associer chaque fonction à son bouton correspondant avec un écouteur d'événements
document.getElementById("c-to-f").addEventListener("click", celsiusToFahrenheit);
document.getElementById("f-to-c").addEventListener("click", fahrenheitToCelsius);
