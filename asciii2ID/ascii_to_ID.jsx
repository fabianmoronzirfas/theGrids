﻿//written by fabiantheblind//using lots of stuff//this is code that only works on my machine.// it is open source and provided as is.// no warrenty// Don't forget to update your path// to extendables.jsx :alert("Go here and get the extendables lib http://stdbrouw.github.com/Extendables/ then delete this and the following line");exit();#include "./Extendables/extendables.jsx";var http = require('http');//var URL = "http://project.the-moron.net/jsascii/jsascii.html"; // returns only the html no ascii (hidden canvas)//var phpURL =  "http://project.the-moron.net/phpascii/asciiify.php"; // returns something but has to many html tags//var bestPhpURL = "http://project.the-moron.net/sweetphpascii/sweet_asciiify.php"; // this is nice// returns default settings if used like thisvar theBaseURL = "http://project.the-moron.net/sweetphpascii/sweet_asciiify.php"; // these are some additional settings// it only takes greyscale png at the moment.// no transparancy// not interlaced// only png-8// characters have to be url encoded "+" means " "(whitespace)// this is super experimental and doesent work all the time// use the base url. this worxvar theDisplayChars = "+.,:;i1tfLCG08@";var theImgURL = "http://project.the-moron.net/sweetphpascii/julis_200w.png";var paramFile = "file=";var paramChar = "chars=";var fullURL = "http://project.the-moron.net/sweetphpascii/sweet_asciiify.php";var url = theBaseURL + "?" + paramChar + theDisplayChars + "&" + paramFile + theImgURL;	// We call the generic 'is' method provided by the framework:	if( !app.is('indesign') )		{		// Extendables's EnvironmentError:		throw new EnvironmentError( "This script only works in InDesign." );		}	if( !http.has_internet_access() )		{		// HTTPError is provided by the http module		throw new HTTPError("No internet access.");		}	var response = getHTTPResponse(theBaseURL);//$.writeln(response.body);var doc = app.documents.add();var page = doc.pages.add();var txtF = page.textFrames.add();	txtF.geometricBounds = [0,0,200,200];	txtF.contents = response.body;	txtF.characters.everyItem().pointSize = 8;	txtF.characters.everyItem().leading = 5;				// do it again for the characters that where in the overflow has to be solved	txtF.characters.everyItem().pointSize = 8;	txtF.characters.everyItem().leading = 5;		try{		// this tryss to load the font		// if it doesn't exist it uses the std font		txtF.characters.everyItem().appliedFont = "DejaVu Sans Mono";	}catch(e){		txtF.characters.everyItem().appliedFont = "Courier";	}function getHTTPResponse( theURL){	//var url = URL;	// use extendables http#get()	var response = http.get(theURL);//    alert (response) ;var req = new http.HTTPRequest("GET", theURL);//req.follow_redirects(false);var timeout = req.timeout();req.timeout(200);//$.writeln("Changing timeout from {} to {} seconds".format(timeout, 10));//req.header("User-Agent", "My ExtendScript app");var res = req.do();	if( res.status != 200 )		{		throw new HTTPError( "Unable to get {}.".format(theURL) );		}	// All is fine: response.body contains the whole HTML contentsreturn res;};