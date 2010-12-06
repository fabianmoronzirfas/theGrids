// basic javascript snippets for indesign cs 4
// written by fabiantheblind

// first of all open basicDoc.idml or use script buildDocument.jsx
// to build the doc we are using

//this runs the function
main();
// this is the function
function main(){
// setup some variables
var theDoc = app.activeDocument; // active doc
var theParStyle;
var theName;
	try{
    	theParStyle = theDoc.paragraphStyles.item("newParStyle");
    	//If the paragraph style does not exist, trying to get its name will generate an error.
    	theName = theParStyle.name;
    }
    catch (myError){
    	//The paragraph style did not exist, so create it.
    	theParStyle = theDoc.paragraphStyles.add({name:"newParStyle"})
	with(theParStyle){

		pointSize = 13;
		leading = 11.5;
		tracking = 100;
		appliedFont = "Times";
		kerningMethod : "Metrics";
		tracking  = 100; //The amount by which to loosen or tighten a block of text, specified in thousands of an em.
		capitalization = Capitalization.ALL_CAPS;
		position = Position.NORMAL; // The text position relative to the baseline.
		Underline = false;
		strikeThru = false;
		ligatures =  true;
		noBreak =  false;
		
		appliedLanguage : "de_DE_2006";
		
	
		alignToBaseline = true;
		gridAlignFirstLineOnly = false;			
		justification = Justification.CENTER_ALIGN; //1667591796;
		balanceRaggedLines  = false;

		
		hyphenation = true;
		hyphenateWordsLongerThan = 5;
		hyphenateAfterFirst = 2;
		hyphenateBeforeLast = 2;
		hyphenateLadderLimit = 3;
		hyphenationZone  = "12.7mm";
		hyphenWeight  = 5;
		hyphenateCapitalizedWords = true;
		hyphenateLastWord = true;

		maximumWordSpacing  = 133; // (Range: 0 to 1000)
		minimumWordSpacing  =  80; // (Range: 0 to 1000)
		desiredWordSpacing  = 100; // (Range: 0 to 1000)

		maximumLetterSpacing  = 0; // (Range: -100 to 500) 
		minimumLetterSpacing  =  0; //(Range: -100 to 500) 
		desiredLetterSpacing  = 0; //(Range: -100 to 500) 

		maximumGlyphScaling  = 100; // (Range: 50 to 200)
		minimumGlyphScaling  =  100; //(Range: 50 to 200)
		desiredGlyphScaling  = 100; //(Range: 50 to 200)

		autoLeading =  120; //(Range: 0 to 500)

		singleWordJustification  = SingleWordJustification.FULLY_JUSTIFIED;
		composer: "Adobe-Absatzsetzer";
		
		dropCapCharacters = 0;// (range: 0 - 150) The number of characters to drop cap.
		dropCapLines = 0; // (range: 0 - 25) The number of lines to drop cap.
//				dropCapStyle = myDocument.charcterStyles.item(0);
//				nestedStyles = 0; // A collection of nested styles

		fillColor = theDoc.swatches.item("Black"); // Schwarz/Black
		fillTint  = 66; 
		overprintFill = false;
		strokeWeight = "1pt";
		strokeColor =  myDocument.swatches.item("None");
		strokeTint = 100;
		overprintStroke  = false;
		
		underline = false;
		strikeThru = false;
	
		}
    }

var thePage = theDoc.pages.item(0); // first page
var theTextFrame = thePage.textFrames.item(0); // the one textframe that is there
	theTextFrame.paragraphs.item(0).appliedParagraphStyle = theParStyle;

}