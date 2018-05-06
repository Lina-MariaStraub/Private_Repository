namespace memory_4 {//
    export interface Player {//Variablen deklarieren
        name: string;//Spielernamen sind strings
        points: number;//Punktezahlen sind numbers
    }
    export interface Players {
        [players: string]: Player;
    }
    export let players: Players = {}  //Objekt
}









