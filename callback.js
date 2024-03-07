function hey(){
    console.log("hey")
}
function addition(a,b,callback){
    console.log(a+b);
    callback()
}

addition(10,20,hey)