class Ev{
    odaSayisi: number;
    pencereSayisi: number;
    kat: number;

    constructor(odaSayisi: number, pencereSayisi: number, kat:number) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }

    yemekYe(){
        console.log(this.kat + " katli evde yemek yiyildi");
    }
}

let ev = new Ev(3,4,5);
console.log("oda sayisi: " + ev.odaSayisi);
console.log("pencere sayisi: " + ev.pencereSayisi);
console.log("kat sayisi" + ev.kat);
ev.yemekYe();