1.liste = [1, 2] # başlangıç terimlerinibelirledik.
2.toplam = 0 # sonuç da göstereceyiğimiztoplamıtanımladık.
3.for i in range(2, 100): # ilk 100 terimebaktım.Bu aslındaiyibirçözümsayılmaz
4.   fib = liste[i - 2] + liste[i - 1] # seçilenterimveöncekiterimitopladım.
5.   if fib > 4000000: #4 milyanuaşmıssakeğerdöngüyükırıyoruz.
6.   break
7.liste.append(fib) # fibonaccisayılarımızlisteyeekliyoruz.
8.for i in liste:
    9.   if i % 2 == 0 :
        10.toplam = toplam + i # toplamıbul
11.print(liste) # tümsayılarıgöster.
12.print(toplam)  #Toplamıgöster.