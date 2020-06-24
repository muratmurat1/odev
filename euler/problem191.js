1.varsayi = 0;
2.var ara = function (day, consecA, lateOnce) {
    3.varsayi = 0;
    4.if (day == 30) { return 1; }
    5.if (consecA < 2) {
        6.sayi += ara(day + 1, consecA + 1, lateOnce);
        7.
    }
    8.İf(!lateOnce) {
        9.sayi += search(day + 1, 0, true);
        10.
    }
    11.sayi += ara(day + 1, 0, lateOnce);
    12.returnsayi;
    13.
}
14.console.log(ara(0, 0, false));