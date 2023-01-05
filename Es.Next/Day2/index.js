// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));

function * fib(number){

    let n1 = 0, n2 = 1, nextTerm;
    
    
    for (let i = 0; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }}

fib(5).next()



