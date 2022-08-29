class Kisi{
    private _isim: string;

    get isim(): string {
        return this._isim;
    }

    set isim(value: string) {
        this._isim = value;
    }

    kaydet(){
        console.log("kisi kaydedildi");
    }
}

class Musteri extends Kisi{
    satis(){
        console.log("satis yapildi");
    }
}

class Personal extends Kisi{
    massOde(){
        console.log("maas odendi");
    }
}

let musteri = new Musteri();
musteri.isim = 'gafur';
console.log(musteri.isim);