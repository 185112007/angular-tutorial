abstract class KrediBase{
    constructor() {
    }

    kaydet():void{
        console.log("kaydedildi");
    }
    abstract hesapla(): void;
}

class TuketiciKredisi extends KrediBase{
    constructor() {
        super();
    }

    hesapla(): void {
        console.log("teketici kredisi hesaplandi");
    }

}

let tuketiciKredisi = new TuketiciKredisi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let kredi: KrediBase;
kredi = new TuketiciKredisi();
kredi.hesapla();
kredi.kaydet();