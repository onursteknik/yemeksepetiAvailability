//Code Start
'use strict';
var fs = require('fs');
var content = 'https://www.yemeksepeti.com/{RESTAURANT}}';
//console.log('read data:', content);
var kontrol=false;
var page = require('webpage').create();
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36';

page.open(content, function(status) {
    if (status === "success") {
        console.log("Sayfa basariyla acildi !");
    }
});

page.onLoadFinished = function(status) {
    if (status === "success") {
		kontrol=false;
		var d = new Date();
var n = d.getTime();
		console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());

        var aa = page.evaluate(function() {
            return document.getElementsByClassName('ys-icons ys-icons-warningBig').length
        })

        if (aa > 0) {
            console.log('Restoran Yogun');
          
          setTimeout(function(){page.reload();}, 60000);

        } else {
            console.log('Restoran Musait!');
           
            setTimeout(function() {
                phantom.exit();
            }, 1000);
        }

    } else {
        console.log('Sayfa Yuklenirken Sorun Olustu, Tekrar Deneniyor...');
		kontrol=true;
		setTimeout(function(){ if (kontrol===true){page.reload();}}, 60000);
    }

};
//Code END