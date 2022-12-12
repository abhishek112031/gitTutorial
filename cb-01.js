function mainFunc(cb){
    console.log('hello world');
    cb(201);
}

mainFunc(function(pram){
    console.log('mars');
});