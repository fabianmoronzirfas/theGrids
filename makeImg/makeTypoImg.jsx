﻿#include "theValues.jsx";var theValues = theValues();var myLines = app.selection[0].lines.everyItem();for(var i = 0; i<app.selection[0].characters.length;i++){		var c = app.selection[0].characters[i];		//c.fillTint = Math.random()*100;		c.fillTint = theValues[i];		}