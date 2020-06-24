class Solution {
    publicList<String>generateParenthesis(int n) {
        List < String > combinations = newArrayList();
        generateAll(newchar[2 * n], 0, combinations);
        returncombinations;
    }

    publicvoidgenerateAll(char[] current, int pos, List<String> result) {
    if (pos == current.length) {
        if (valid(current))
            result.add(newString(current));
    } else {
        current[pos] = '(';
        generateAll(current, pos + 1, result);
        current[pos] = ')';
        generateAll(current, pos + 1, result);
    }
}

20.publicbooleanvalid(char[] current) {
    21.intbalance = 0;
    22.for (char c: current) {
        23.if (c == '(') balance++;
        24.elsebalance--;
        25.if (balance < 0) returnfalse;
        26.
    }
    27.return (balance == 0);
    28.
}
29.}
30.
    .defgenerateParenthesis(self, N):
    .if N == 0: return ['']
    .ans = []
        .for c in xrange(N):
forleft in self.generateParenthesis(c):
forright in self.generateParenthesis(N - 1 - c):
.ans.append('({}){}'.format(left, right))
return ans