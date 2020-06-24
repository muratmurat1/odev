1.[codelang =”fsharp”]
2.openSystem
3.lettriangleNumber(n: int64) = [1L..n] |> Seq.sum
4.letfindFactorsOf(n: int64) =
    5.letupperBound = int64(Math.Sqrt(double(n)))
6.[1L..upperBound]
7. |> Seq.filter(funx -> n % x = 0L)
8. |> Seq.collect(funx -> [x; n / x])
9.letnaturalNumbers = Seq.unfold(fun x -> Some(x, x + 1L)) 1L
10.letanswer = naturalNumbers
11. |> Seq.map(funx -> triangleNumber(x))
12. |> Seq.filter(funx -> Seq.length(findFactorsOf(x)) >= 500)
13. |> Seq.head
14.[/code]