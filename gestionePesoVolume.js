//capienza massima di volume e peso di un furgoncino standard
const maxWeight = 1440; //kg
const maxVolume = 5,43; //m^3

//raccolgo i dati dal database:
// scorro il database e controllo se ci sono pacchi a priorità 1
// prendo quelli con priorità alta, calcolo il volume di ogni pacchetto, visualizzo 
//  il peso, controllo che ci stia e lo "carico" sul furgone
// // scorro il database e controllo se ci sono pacchi che sono arriati da più di 10 giorni,
// se ci sono, calcolo il volume di ogni pacchetto, visualizzo 
//  il peso, controllo che ci stia e lo "carico" sul furgone
// scorro il database e controllo se ci sono pacchi che hanno più di un tentativo di consegna
// prendo quelli che hanno già 1 o 2 tentativi, calcolo il volume di ogni pacchetto, visualizzo 
//  il peso, controllo che ci stia e lo "carico" sul furgone
// se ho ancora spazio scorro il database e controllo se ci sono pacchi che sono arrivati da più di 3 giorni                                                                                                                                                                                                                                                                                                                                                                                                                                              ,
// se ci sono, calcolo il volume di ogni pacchetto, visualizzo 
//  il peso, controllo che ci stia e lo "carico" sul furgone