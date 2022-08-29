class Kisi{
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
musteri.kaydet();
musteri.satis();

let personel = new Personal();
personel.kaydet();
personel.massOde();

let kisi = new Personal();
kisi.kaydet();
kisi.massOde()