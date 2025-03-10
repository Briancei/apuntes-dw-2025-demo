function queJugadorGana(jugador1, jugador2) {
    return (jugador1 === jugador2) ? "Empate" :
           (jugador1 === "piedra" && jugador2 === "tijera") ? "Jugador 1" :
           (jugador1 === "papel" && jugador2 === "piedra") ? "Jugador 1" :
           (jugador1 === "tijera" && jugador2 === "papel") ? "Jugador 1" :

           "Jugador 2";

}