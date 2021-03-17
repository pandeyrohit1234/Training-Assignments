function nextcount(){
    let c=1;
    function next(){
        c=c+1;
        return c
    }
    return next;

}

let ctr=nextcount();
console.log(ctr());