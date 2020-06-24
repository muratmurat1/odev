1.functionnamesScores(arr) {
    2.arr.unshift(0)
    3.arr = arr.sort()
    4.functionnameScoreCalc(word, i){
        5.letsum = 0
        6.letscore;
        7.letalpha = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        8.for (let i = 0; i < word.length; i++) {
            9.sum += alpha.indexOf(word[i].toLowerCase())
            10.
        }
        11.	returnsum * i
        12.
    }
    13.
    14.let total = 0
    15.for (let i = 0; i < arr.length; i++) {
        16.total += nameScoreCalc(arr[i], i)
        17.
    }
    18.return total
    19.
}
20.const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
21.const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
22.namesScores(test1);