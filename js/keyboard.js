'use strict';

// global variables for XML document
var USER_DATA;
var CURRENT_TRIAL;
var ENTRY_COUNTER;

// letters object
var letters = {
    a: {
        value: "a",
        up: "q",
        down: "z",
        left: "",
        right: "s"
    },
    b: {
        value: "b",
        up: "g",
        down: "space",
        left: "v",
        right: "n"
    },
    c: {
        value: "c",
        up: "d",
        down: "space",
        left: "x",
        right: "v"
    },
    d: {
        value: "d",
        up: "e",
        down: "c",
        left: "s",
        right: "f"
    },
    e: {
        value: "e",
        up: "",
        down: "d",
        left: "w",
        right: "r"
    },
    f: {
        value: "f",
        up: "r",
        down: "c",
        left: "d",
        right: "g"
    },
    g: {
        value: "g",
        up: "t",
        down: "v",
        left: "f",
        right: "h"
    },
    h: {
        value: "h",
        up: "y",
        down: "b",
        left: "g",
        right: "j"
    },
    i: {
        value: "i",
        up: "",
        down: "j",
        left: "u",
        right: "o"
    },
    j: {
        value: "j",
        up: "u",
        down: "n",
        left: "h",
        right: "k"
    },
    k: {
        value: "k",
        up: "i",
        down: "m",
        left: "j",
        right: "l"
    },
    l: {
        value: "l",
        up: "o",
        down: "m",
        left: "k",
        right: ""
    },
    m: {
        value: "m",
        up: "k",
        down: "space",
        left: "n",
        right: ""
    },
    n: {
        value: "n",
        up: "j",
        down: "space",
        left: "b",
        right: "m"
    },
    o: {
        value: "o",
        up: "",
        down: "l",
        left: "i",
        right: "p"
    },
    p: {
        value: "p",
        up: "",
        down: "l",
        left: "o",
        right: ""
    },
    q: {
        value: "q",
        up: "",
        down: "a",
        left: "",
        right: "w"
    },
    r: {
        value: "r",
        up: "",
        down: "d",
        left: "e",
        right: "t"
    },
    s: {
        value: "s",
        up: "w",
        down: "z",
        left: "a",
        right: "d"
    },
    t: {
        value: "t",
        up: "",
        down: "f",
        left: "r",
        right: "y"
    },
    u: {
        value: "u",
        up: "",
        down: "h",
        left: "y",
        right: "i"
    },
    v: {
        value: "v",
        up: "f",
        down: "space",
        left: "c",
        right: "b"
    },
    w: {
        value: "w",
        up: "",
        down: "a",
        left: "q",
        right: "e"
    },
    x: {
        value: "x",
        up: "s",
        down: "space",
        left: "z",
        right: "c"
    },
    y: {
        value: "y",
        up: "",
        down: "g",
        left: "t",
        right: "u"
    },
    z: {
        value: "z",
        up: "a",
        down: "123",
        left: "",
        right: "x"
    },
    '123': {
        value: "123",
        up: "z",
        down: "",
        left: "",
        right: "space"
    }
};

// symbols object
var symbols = {
    1: {
        value: "1",
        up: "",
        down: "-",
        left: "",
        right: "2"
    },
    2: {
        value: "2",
        up: "",
        down: "/",
        left: "1",
        right: "3"
    },
    3: {
        value: "3",
        up: "",
        down: ":",
        left: "2",
        right: "4"
    },
    4: {
        value: "4",
        up: "",
        down: ";",
        left: "3",
        right: "5"
    },
    5: {
        value: "5",
        up: "",
        down: "(",
        left: "4",
        right: "6"
    },
    6: {
        value: "6",
        up: "",
        down: ")",
        left: "5",
        right: "7"
    },
    7: {
        value: "7",
        up: "",
        down: "$",
        left: "6",
        right: "8"
    },
    8: {
        value: "8",
        up: "",
        down: "&",
        left: "7",
        right: "9"
    },
    9: {
        value: "9",
        up: "",
        down: "@",
        left: "8",
        right: "0"
    },
    0: {
        value: "0",
        up: "",
        down: "@",
        left: "9",
        right: ""
    },
    '-': {
        value: "-",
        up: "1",
        down: ".",
        left: "",
        right: "/"
    },
    '/': {
        value: "/",
        up: "2",
        down: ",",
        left: "-",
        right: ":"
    },
    ':': {
        value: ":",
        up: "3",
        down: ",",
        left: "/",
        right: ";"
    },
    ';': {
        value: ";",
        up: "4",
        down: "?",
        left: ":",
        right: "("
    },
    '(': {
        value: "(",
        up: "5",
        down: "!",
        left: ";",
        right: ")"
    },
    ')': {
        value: ")",
        up: "6",
        down: "'",
        left: "(",
        right: "$"
    },
    '$': {
        value: "$",
        up: "7",
        down: "\"",
        left: ")",
        right: "&"
    },
    '&': {
        value: "&",
        up: "8",
        down: "\"",
        left: "$",
        right: "@"
    },
    '@': {
        value: "@",
        up: "0",
        down: "#",
        left: "&",
        right: ""
    },
    '.': {
        value: ".",
        up: "-",
        down: "123",
        left: "",
        right: ","
    },
    ',': {
        value: ",",
        up: "/",
        down: "space",
        left: ".",
        right: "?"
    },
    '?': {
        value: "?",
        up: ";",
        down: "space",
        left: ",",
        right: "!"
    },
    '!': {
        value: "!",
        up: "(",
        down: "space",
        left: "?",
        right: "'"
    },
    "'": {
        value: "'",
        up: ")",
        down: "space",
        left: "!",
        right: "\""
    },
    '\"': {
        value: "\"",
        up: "&",
        down: "return",
        left: "'",
        right: "#"
    },
    '#': {
        value: "#",
        up: "@",
        down: "return",
        left: "\"",
        right: ""
    },
}

var special = {
    123: {
        value: "123",
        up: "z",
        down: "",
        left: "",
        right: "space"
    },
    space: {
        value: "space",
        up: "",
        down: "",
        left: "123",
        right: "return"
    },
    return: {
        value: "return",
        up: "m",
        down: "",
        left: "space",
        right: ""
    },
}

var write = $('#write'),
    shift = false,
    capslock = false;

var myElement = document.getElementById('keyboarddd');
var mc = new Hammer(myElement);
mc.get('pan').set({
    direction: Hammer.DIRECTION_ALL
});

// listen to events...
mc.on("panup", function(ev) { // panupn on keyboard = add uppercase
    //  myElement.textContent = ev.type +" = uppercase";  
    $('.letter').addClass('uppercase');
    //         $('.symbol span').toggle();           
    //       shift = (shift === true) ? false : true;
    capslock = false;
    return false;
});

mc.on("pandown", function(ev) { // pandown on keyboard = removes uppercase
    //   myElement.textContent = ev.type +" = lowercase";
    $('.letter').removeClass('uppercase');
    //      $('.symbol span').toggle();          
    //        shift = (shift === true) ? false : true;
    capslock = false;
    return false;
});



$('.letter' || '.special').hover(
  function() {
        var onLetter = $(this).text(); //changed
        createTooltip(event, onLetter);
  }, function() {
    $( "table" ).remove();
  }
);

function createTooltip(event, letter) {

    var letterString = letter;

    var tip = $('<table class="tooltip"><tr><td></td><td class="up"></td><td></td></tr><tr><td class="left"></td><td class="middle"></td><td class="right"></td></tr><tr><td></td><td class="down"></td><td></td></tr></table>');


    if (shift == false) {
        letter = letterString.charAt(0);

        $(tip).appendTo('body');

        $('.middle').text(letter);
        $('.up').text(letters[letter]['up']);
        $('.down').text(letters[letter]['down']);
        $('.left').text(letters[letter]['left']);
        $('.right').text(letters[letter]['right']);
    } else {
        letter = letterString.charAt(1);

        $(tip).appendTo('body');

        $('.middle').text(letter);
        $('.up').text(symbols[letter]['up']);
        $('.down').text(symbols[letter]['down']);
        $('.left').text(symbols[letter]['left']);
        $('.right').text(symbols[letter]['right']);
    }

    positionTooltip(event);
};

function positionTooltip(event) {
    var tPosX = event.pageX - 10;
    var tPosY = event.pageY - 100;
    $('table.tooltip').css({
        'position': 'absolute',
        'top': tPosY,
        'left': tPosX
    });

};


function generatePhrases() {
    // initialize the list of phrases
    var phrases = [];

    // grab the file that contains phrases
    var phrasesFile = new XMLHttpRequest();

    // add every phrase to the list
    phrasesFile.open("GET", "dict/phrases2.txt", false);
    phrasesFile.onreadystatechange = function() {
        if (phrasesFile.readyState === 4) {
            if (phrasesFile.status === 200 || phrasesFile.status == 0) {
                phrases = phrasesFile.responseText.split("\n");
            }
        }
    };
    phrasesFile.send(null);

    // return the list of phrases
    return phrases;
}

//choose first phrase from the list
// randomly chooses a phrase
function choosePhrase(phrases) {
  // randomly choose a phrase from the list of phrases
  var index = Math.round(Math.random() * (phrases.length - 1));
  var phrase = phrases[index];

  // removes the phrase from the list
  phrases.splice(index, 1);

  // display a new phrase
  $(".phrase").append(phrase);
}

// format date
function formatDate(date) {
    var d = new Date(date);
    var hh = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var dd = "AM";
    var h = hh;
    if (h >= 12) {
        h = hh - 12;
        dd = "PM";
    }
    if (h === 0) {
        h = 12;
    }

    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var pattern = new RegExp("0?" + hh + ":" + m + ":" + s);

    var replacement = h + ":" + m;
    replacement += ":" + s;
    replacement += " " + dd;

    return date.replace(pattern, replacement);
}

// append a trial to XML
function appendTrial(counter) {
    // create a trial element
    var trial = USER_DATA.createElement("Trial");

    // add the trial number
    $(trial).attr("number", counter + 1);

    // if the current trial is 1-5
    if (counter < 5) {
        // make the testing attribute false
        $(trial).attr("testing", false);
    } else {
        // otherwise, make it true
        $(trial).attr("testing", true);
    }

    // initialize the number of entries with 0
    $(trial).attr("entries", ENTRY_COUNTER);

    // make the current trial a global variable
    CURRENT_TRIAL = trial;

    // append the trial
    USER_DATA.getElementsByTagName("TextTest")[0].appendChild(trial);

    // append the presented text to the trial
    appendPresented(counter);
}

// append the presented phrase to XML
function appendPresented(counter) {
    // create a presented element
    var presentedPhrase = USER_DATA.createElement("Presented");

    // make the presented element's text content be the presented phrase
    presentedPhrase.textContent = $(".phrase").text();

    // append the presented element
    USER_DATA.getElementsByTagName("Trial")[counter].appendChild(presentedPhrase);
}

// append an entry to a trial
function appendEntry(counter, char) {

    // initialize the ticks and seconds
    var ticks = (new Date().getTime() * 10000) + 621355968000000000;
    var seconds = new Date().getTime() / 1000;

    // if the character is the backspace
    if (char === "&#x8;") {
        // create an entry element
        var entry = USER_DATA.createElement("Entry");

        // add the char, value, ticks, and seconds attributes
        $(entry).attr("char", char);
        $(entry).attr("value", 8);
        $(entry).attr("ticks", ticks);
        $(entry).attr("seconds", seconds);

        // append the entry
        USER_DATA.getElementsByTagName("Trial")[counter].appendChild(entry);

        // increment the entry counter
        ENTRY_COUNTER++;
    } else {
        // split the character
        var charArray = char.split("");

        // if the character is a string
        if (charArray.length > 1) {
            // make the last character into a space
            charArray[charArray.length - 1] = " ";
        } else {
            // if character has length of 0, make it into a space
            if (charArray[0].length === 0) {
                charArray[charArray.length - 1] = " ";
            }
        }

        // for each character in the array
        charArray.forEach(function(character) {
            // create the entry element
            var entry = USER_DATA.createElement("Entry");

            // add the character to entry
            $(entry).attr("char", character);

            // if character is a blank space, add its ASCII value
            if (character === " ") {
                $(entry).attr("value", 32);
            } else {
                // add the letter's ASCII value
                $(entry).attr("value", character.charCodeAt(0));
            }

            // add the ticks and seconds
            $(entry).attr("ticks", ticks);
            $(entry).attr("seconds", seconds);

            // append the entry to the trial
            USER_DATA.getElementsByTagName("Trial")[counter].appendChild(entry);

            // increase entry counter
            ENTRY_COUNTER++;
        });
    }

    // update the current trial's entry counter
    $(CURRENT_TRIAL).attr("entries", ENTRY_COUNTER);
}

// append the transcribed phrase to XML
function appendTranscribed(counter) {
    // create the transcribed phrase element
    var transcribedPhrase = USER_DATA.createElement("Transcribed");

    // grab the input, excluding any whitespace at end of phrase
    transcribedPhrase.textContent = $("input").val().trim();

    // append the transcribed phrase element
    USER_DATA.getElementsByTagName("Trial")[counter].appendChild(transcribedPhrase);
}

$(document).ready(function() {
    ENTRY_COUNTER = 0;

    $("input").focus();
    var phrases = generatePhrases();

    // make the list of phrases all lowercase
    phrases = phrases.map(function(phrase) {
        return phrase.toLowerCase();
    });

    // initialize the counter of phrases
    var phraseCounter = 0;

    choosePhrase(phrases);

    // initialize user data for XML
    USER_DATA = document.implementation.createDocument(null, "TextTest");
    var root = USER_DATA.documentElement;

    // initialize the date for xml: https://stackoverflow.com/questions/4898574
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var currentDate = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    currentDate = formatDate(currentDate);
    currentDate = weekdays[date.getDay()] + ", " + currentDate;

    // add attributes to XML
    $(root).attr("version", "2.7.2");
    $(root).attr("trials", 45);
    $(root).attr("ticks", (date.getTime() * 10000) + 621355968000000000);
    $(root).attr("seconds", date.getTime() / 1000);
    $(root).attr("date", currentDate);

    // append the first trial
    appendTrial(phraseCounter);

    $('#keyboard li').click(function() {
        var $this = $(this),
            character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

        // Shift keys
        if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
            //     $('.letter').toggleClass('uppercase');
            $('.symbol span').toggle();

            shift = (shift === true) ? false : true;
            capslock = false;
            return false;
        }

        // Caps lock
        if ($this.hasClass('capslock')) {
            $('.letter').toggleClass('uppercase');
            capslock = true;
            return false;
        }

        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.html();

            $write.html(html.substr(0, html.length - 1));
            return false;
        }

        // Special characters
        if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
        if ($this.hasClass('space')) character = ' ';
        if ($this.hasClass('tab')) character = "\t";
        if ($this.hasClass('return')) character = "\n";

        // Uppercase letter
        if ($this.hasClass('uppercase')) character = character.toUpperCase();

        // Add the character
        var text = $('#write').val();
        if (character.charCodeAt(0) != 10) {
           appendEntry(phraseCounter, character);
           $("#write").val(text + character);
       }       
        $("input").focus();
    });

    mc.on("panleft", function(ev) { // pandown on keyboard = removes uppercase
        //   myElement.textContent = ev.type +" = delete";
        //var html = $write.html();
        var text = $('#write').val();

        //$write.html(html.substr(0, html.length - 1));
        if(text.length !== 0) {
            appendEntry(phraseCounter, '&#x8;');
        }
        $("#write").val(text.substring(0, text.length - 1));
        $("input").focus();

        return false;
    });

    $(".return").click(function() {

        while (USER_DATA.getElementsByTagName("Trial")[phraseCounter].lastChild.getAttribute("char") === " ") {
            // remove that entry with whitespace
            USER_DATA.getElementsByTagName("Trial")[phraseCounter].lastChild.remove();

            // decrement the entry counter
            ENTRY_COUNTER--;
        }

        // update number of entries
        $(CURRENT_TRIAL).attr("entries", ENTRY_COUNTER);

        // append the transcribed phrase to XML
        appendTranscribed(phraseCounter);

        // reset the entry counter
        ENTRY_COUNTER = 0;

        // increase the counter
        phraseCounter++;

        // remove the current phrase
        $(".phrase").empty();

        // if the counter reaches 45
        if (phraseCounter === 45) {
            // empty the input
            $("#write").val('');

            // alert that testing has ended
            $(".phrase-box h2").text("Thank you for participating in our study.");
            $(".phrase").text("An .xml file containing your inputs is now downloading...");
            $("button").remove();

            // download the XML document
            var a = document.createElement("a"),
                xml, ev;
            a.download = "keyboardTest.xml";
            xml = '<?xml version = "1.0" encoding="utf-8" standalone="yes"?>' + (new XMLSerializer()).serializeToString(USER_DATA).replace(/&amp;#x8;/gi, "&#x8;");
            a.href = 'data:application/octet-stream;base64,' + btoa(xml);
            ev = document.createEvent("MouseEvents");
            ev.initMouseEvent("click", true, false, self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(ev);
        } else {
            // empty the input
            $("#write").val('');

            // choose and display a new phrase
            choosePhrase(phrases);

            // create a new trial
            appendTrial(phraseCounter);
        }
    });
});