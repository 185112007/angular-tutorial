var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this.kat + " katli evde yemek yiyildi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
console.log("oda sayisi: " + ev.odaSayisi);
console.log("pencere sayisi: " + ev.pencereSayisi);
console.log("kat sayisi" + ev.kat);
ev.yemekYe();
