var namee = "GopiNath";
const vowels = "aeiouAEIOU";
var sum ="";

for (i = 0; i < namee.length; i++) {
    for (j = 0; j < vowels.length; j++) {
        if (namee[i] == vowels[j]) {
            sum=sum+namee[i]
        }
    }
}
console.log(sum);