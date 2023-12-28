// for loop

for (let i = 0; i <=10; i++) {
    console.log(i);
    if(i == 4){
        console.log("4 is lucky number");
    }
}
// table from 1 to 10
for(let i=1; i<=10; i++){
    console.log("Table of : ",i);
    for(j=1; j<=10; j++){
        console.log(i + '*' + j + '=' + i*j);
    }
}

// break and continue

// break statement is used to stop the loop & continue is used to skip the current iteration of loop.

// while and do while loop.

// while loop
let i=0;
while (i<=10) {
    console.log(i);
    i= i+2;
}


console.log("Do - While loop ");
// do while
let even = 0
do {
    console.log(even);
    even = even+2
} while (even<=10);