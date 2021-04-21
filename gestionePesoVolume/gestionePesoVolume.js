//capienza massima di volume e peso di un furgoncino standard
const maxWeight = 1440; //kg
const maxVolume = 5.43; //m^3

//vettore dei pacchetti caricati
var parcelsUpload = new Array();
//numero dei pacchetti caricati
var parcelUpload = 0;

//questo valore e il vettore me lo passerà un'altra funzione
var maxParcels = 100; 
<% parcels[0]%>

function upload(){
    for(int i = 0; i < maxParcels && volume < maxVolume && weight < maxWeight; i++){
    weight = weight + <% parcels[i].weight%>;
    volume = volume + (<% parcels[i].height%> * <% parcels[i].width%> * <% parcels[i].depth%>);
    parcelsUpload.push(<% parcels[i]%>);
    parcelUpload++;
    }

    //se il volume o il peso hanno superato il massimo, tolgo l'ultimo pacchetto inseritos
    if(volume > maxVolume || weight > maxWeight){
    parcelsUpload.splice(parcelUpload, 1);
    weight = weight + <% parcels[i].weight%>;
    volume = volume + (<% parcels[i].height%> * <% parcels[i].width%> * <% parcels[i].depth%>);
    }
}
