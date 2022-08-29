class Ev{
    private odaSayisi: number;
    private pencereSayisi: number;
    private kat: number;

    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }

    yemekYe(){
        console.log(this.kat + " katta yemen yiyildi");
    }
}

class Kisi{
    private isim: string;
    protected soyad: string;

    kaydet(){
        console.log("kisi kaydedildi");
    }
}

class Musteri extends Kisi{
    satis(){
        console.log(this.soyad + "'a satis yapildi");
    }
}

class Personal extends Kisi{
    massOde(){
        console.log("maas odendi");
    }
}

let ev = new Ev(3,12,4);
ev.yemekYe();