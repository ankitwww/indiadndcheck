'use strict';

var request = require('request');
var cheerio = require('cheerio');

/**
 *  expose isDND method
 *	Takes a mobile number and callback(err, isDnd)
 */
exports.isDND = function(mobile, next) {
    request.post({url:'http://www.nccptrai.gov.in/nccpregistry/saveSearchSub.misc', form: {phoneno:mobile}}, function(err,httpResponse,body){
        if(!err && httpResponse.statusCode===200){
            //console.log(body);
            var $ = cheerio.load(body);
            var row = $("form > div > table > tr:nth-child(6) > td > b > font")[0];
            if(row.children[0].data==="The number is registered in NCPR"){
                next(null, true);
            } else {
                next(null, false);
            }
        } else {
            console.log(httpResponse.statusCode);
            console.log(err);
            next(err, false);
        }
    })
};