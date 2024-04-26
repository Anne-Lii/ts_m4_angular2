# Moment 4 Angular II

Projekt genererat med [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Installation
`git clone https://github.com/Anne-Lii/ts_m4_angular2.git`
navigera till projektmappen 
`npm install`
`ng serve --open` för att köra applikationen i utvecklingsläge alt kopiera`http://localhost:4200/` till en webbläsare.

## Beskrivning av applikationen
En Angular-applikation som är skapad för att presentera kursdata för Webutvecklingsprogrammet.
Kursdatan hämtas dynamiskt från en extern webbtjänst genom en service i Angular ramverket.

### Hämtning av kursdata 
En separat service har skapats där Angulars HttpClient-modul används för att göra ett HTTP-anrop. Kursdata hämtas från en API och tas emot i JSON-format. Datan presenteras i en tabell på sidan.

### Sortering
I tabellen har en sorterings funktion gjorts för att kunna sortera data i tabellen. Genom att klicka på tabellrubrikerna kör kurskod, kursnamn och progression kan användaren sortera i fallande och stigande ordning.

### Filtrering
Ett sökfält finns tillgängligt ovanför tabellen för filtrering av kurser.
Så fort minst ett tecken skrivits in i fältet görs en filtrering av kursdata utifrån den inmatade sökfrasen.
Bara kurser och kurskoder som innehåller den skrivna sökfrasen visas.