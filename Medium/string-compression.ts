// https://leetcode.com/problems/string-compression

function compress(chars: string[]): number {
    let start = 0;
    let end = 0;

    while (end <= chars.length) {
        if(chars[start] !== chars[end]) {
            end--;
            chars.splice(start + 1, end - start);
            if(end - start >= 1){
                const toAdd = (end + 1 - start).toString().split("");
                chars.splice(start + 1, 0, ...toAdd);
                start += toAdd.length;
            }
            start++;
            end = start;
        }
        end++;
    }   
    return chars.length;
};
