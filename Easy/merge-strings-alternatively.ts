// https://leetcode.com/problems/merge-strings-alternately

function mergeAlternately(word1: string, word2: string): string {
    let index1 = 0;
    let index2 = 0;
    let turn = true;
    let str = [];

    while (index1 < word1.length || index2 < word2.length) {
        str.push(turn ? word1[index1] : word2[index2]);
        if(turn) {
            index1++;
        }
        else{
            index2++;
        }

        turn = !turn;

        if((turn && index1 >= word1.length) || (!turn && index2 >= word2.length)) {
            turn = !turn;
        }
    }   
    return str.join("");
};
