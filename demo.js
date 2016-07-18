var dnd = require('./index');

var mobile = 1234567890; //replace with 10 digit number
dnd.isDND(mobile, function(err, isDnd){
    if(!err){
        console.log(mobile,isDnd);
    } else {
        console.log(err)
    }
});
