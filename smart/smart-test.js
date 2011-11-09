var sys = require('sys');
var fs = require('fs');
var path = require('path');
var jsonld = require('../js/jsonld');

data = JSON.parse(fs.readFileSync("smart-data.json", 'utf8'));
frame = JSON.parse(fs.readFileSync("smart-frame.json", 'utf8'));

var ts = new Date().getTime();
normalized = jsonld.normalize(data);
var tn = new Date().getTime();

framed = jsonld.frame(data, frame);
var tf = new Date().getTime();


triples = jsonld.toTriples(data);
var tt = new Date().getTime();

sys.log("Normalization time: " + (tn-ts));
sys.log("Framing time: " + (tf-tn));
sys.log(triples.length +" Triples time: " + (tt-tf));
