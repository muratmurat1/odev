varnumJewelsInStones = function (J, S) {
    letsayi = 0
    for (i = 0; i < S.length; i++) {
        for (k = 0; k < J.length; k++) {
            İf(S.charAt(i) === J.charAt(k)) {
                sayi++;
            }
        }
    }
    returnsayi
};