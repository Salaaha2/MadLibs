function createParagraph() {
    //Ten Words
                //Person in Room
    var wordOne = document.getElementById('wordOne').value;
                //Number
    var wordTwo = document.getElementById('wordTwo').value;
    //Adjective
    var wordThree = document.getElementById('wordThree').value;
    //Color
    var wordFour = document.getElementById('wordFour').value;
    //Noun
    var wordFive = document.getElementById('wordFive').value;
    //Type Of...
    var wordSix = document.getElementById('wordSix').value;
    //Verb ending...
    var wordSeven = document.getElementById('wordSeven').value;
    //Article of...
    var wordEight = document.getElementById('wordEight').value;
    //Celeberaity
    var wordNine = document.getElementById('wordNine').value;
    //Occupation
    var wordTen = document.getElementById('wordTen').value;

    //Story 
    var paragraphOne = `<p>My name is ${wordOne} and I am ${wordTwo} years old. If I were president, I'd do a whole bunch of ${wordThree}</p><br><center><p>things:</p></center>`

    var paragraphTwo = `<ol><li> I would drive the biggest ${wordFour} car in the country. And that car would go faster than any other ${wordFive} in the world! </li>`

    var paragraphThree = `<li>Everyone would eat cheese ${wordSix} for dinner.</li>`

    var paragraphFour = `<li>I would live in the Statue of ${wordFive} and build a ${wordSeven} pool at her feet.</li>`

    var paragraphFive = `<li>I would wear a/an ${wordEight} on my head, and everyone would say I look ${wordThree} like ${wordNine}.</li>`
    
    var paragraphSix = `<li>School would be open only ${wordTwo} days a year.</li>`

    var paragraphSeven = `<li>I would give my friends the best jobs. I woulud nominate ${wordOne} to be secertary of (the) ${wordFive}, and ${wordOne} could be vice ${wordTen}!</li></ol>`
    document.getElementById('answer').innerHTML = paragraphOne + paragraphTwo + paragraphThree + paragraphFour + paragraphFive + paragraphSix + paragraphSeven;
}
