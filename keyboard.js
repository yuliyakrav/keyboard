'use strict';

// letters object
var letters = {
    a : {
        value: "a",
        up: "q",
        down: "z",
        left: "",
        right: "s"
    },
     b : {
        value: "b",
        up: "g",
        down: "space",
        left: "v",
        right: "n"
    },
    c : {
        value: "c",
        up: "d",
        down: "space",
        left: "x",
        right: "v"
    }, 
    d : {
        value: "d",
        up: "e",
        down: "c",
        left: "s",
        right: "f"
    }, 
    e : {
        value: "e",
        up: "",
        down: "d",
        left: "w",
        right: "r"
    },
    f : {
        value: "f",
        up: "r",
        down: "c",
        left: "d",
        right: "g"
    },
    g : {
        value: "g",
        up: "t",
        down: "v",
        left: "f",
        right: "h"
    },
    h : {
        value: "h",
        up: "y",
        down: "b",
        left: "g",
        right: "j"
    },
    i : {
        value: "i",
        up: "",
        down: "j",
        left: "u",
        right: "o"
    },
    j : {
        value: "j",
        up: "u",
        down: "n",
        left: "h",
        right: "k"
    },
    k : {
        value: "k",
        up: "i",
        down: "m",
        left: "j",
        right: "l"
    },
    l : {
        value: "l",
        up: "o",
        down: "m",
        left: "k",
        right: ""
    },
    m : {
        value: "m",
        up: "k",
        down: "space",
        left: "n",
        right: ""
    },
    n : {
        value: "n",
        up: "j",
        down: "space",
        left: "b",
        right: "m"
    },
    o : {
        value: "o",
        up: "",
        down: "l",
        left: "i",
        right: "p"
    },
    p : {
        value: "p",
        up: "",
        down: "l",
        left: "o",
        right: ""
    },
    q : {
        value: "q",
        up: "",
        down: "a",
        left: "",
        right: "w"
    },
    r : {
        value: "r",
        up: "",
        down: "d",
        left: "e",
        right: "t"
    },
    s : {
        value: "s",
        up: "w",
        down: "z",
        left: "a",
        right: "d"
    },
    t : {
        value: "t",
        up: "",
        down: "f",
        left: "r",
        right: "y"
    },
    u : {
        value: "u",
        up: "",
        down: "h",
        left: "y",
        right: "i"
    },
    v : {
        value: "v",
        up: "f",
        down: "space",
        left: "c",
        right: "b"
    },
    w : {
        value: "w",
        up: "",
        down: "a",
        left: "q",
        right: "e"
    },
    x : {
        value: "x",
        up: "s",
        down: "space",
        left: "z",
        right: "c"
    },
    y : {
        value: "y",
        up: "",
        down: "g",
        left: "t",
        right: "u"
    },
    z : {
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
    1 : {
        value: "1",
        up: "",
        down: "-",
        left: "",
        right: "2"
    },
     2 : {
        value: "2",
        up: "",
        down: "/",
        left: "1",
        right: "3"
    },
    3 : {
        value: "3",
        up: "",
        down: ":",
        left: "2",
        right: "4"
    }, 
    4 : {
        value: "4",
        up: "",
        down: ";",
        left: "3",
        right: "5"
    }, 
    5 : {
        value: "5",
        up: "",
        down: "(",
        left: "4",
        right: "6"
    },
    6 : {
        value: "6",
        up: "",
        down: ")",
        left: "5",
        right: "7"
    },
    7 : {
        value: "7",
        up: "",
        down: "$",
        left: "6",
        right: "8"
    },
    8 : {
        value: "8",
        up: "",
        down: "&",
        left: "7",
        right: "9"
    },
    9 : {
        value: "9",
        up: "",
        down: "@",
        left: "8",
        right: "0"
    },
    0 : {
        value: "0",
        up: "",
        down: "@",
        left: "9",
        right: ""
    },
    '-' : {
        value: "-",
        up: "1",
        down: ".",
        left: "",
        right: "/"
    },
    '/' : {
        value: "/",
        up: "2",
        down: ",",
        left: "-",
        right: ":"
    },
    ':' : {
        value: ":",
        up: "3",
        down: ",",
        left: "/",
        right: ";"
    },
    ';' : {
        value: ";",
        up: "4",
        down: "?",
        left: ":",
        right: "("
    },
    '(' : {
        value: "(",
        up: "5",
        down: "!",
        left: ";",
        right: ")"
    },
    ')' : {
        value: ")",
        up: "6",
        down: "'",
        left: "(",
        right: "$"
    },
    '$' : {
        value: "$",
        up: "7",
        down: "\"",
        left: ")",
        right: "&"
    },
    '&' : {
        value: "&",
        up: "8",
        down: "\"",
        left: "$",
        right: "@"
    },
    '@' : {
        value: "@",
        up: "0",
        down: "#",
        left: "&",
        right: ""
    },
    '.' : {
        value: ".",
        up: "-",
        down: "123",
        left: "",
        right: ","
    },
    ',' : {
        value: ",",
        up: "/",
        down: "space",
        left: ".",
        right: "?"
    },
    '?' : {
        value: "?",
        up: ";",
        down: "space",
        left: ",",
        right: "!"
    },
    '!' : {
        value: "!",
        up: "(",
        down: "space",
        left: "?",
        right: "'"
    },
    "'" : {
        value: "'",
        up: ")",
        down: "space",
        left: "!",
        right: "\""
    },
    '\"' : {
        value: "\"",
        up: "&",
        down: "return",
        left: "'",
        right: "#"
    },
    '#' : {
        value: "#",
        up: "@",
        down: "return",
        left: "\"",
        right: ""
    },
}

var special = {
    123 : {
        value: "123",
        up: "z",
        down: "",
        left: "",
        right: "space"
    },
    space : {
        value: "space",
        up: "",
        down: "",
        left: "123",
        right: "return"
    },
    return : {
        value: "return",
        up: "m",
        down: "",
        left: "space",
        right: ""
    },
}

 var $write = $('#write'),
        shift = false,
        capslock = false;
       



var myElement = document.getElementById('keyboarddd');
var mc = new Hammer(myElement);
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
mc.on("panup", function(ev) {                                       // panupn on keyboard = add uppercase
  //  myElement.textContent = ev.type +" = uppercase";  
    $('.letter').addClass('uppercase');
   //         $('.symbol span').toggle();           
     //       shift = (shift === true) ? false : true;
            capslock = false;
            return false;
});

mc.on("pandown", function(ev) {                                     // pandown on keyboard = removes uppercase
 //   myElement.textContent = ev.type +" = lowercase";
    $('.letter').removeClass('uppercase');
      //      $('.symbol span').toggle();          
    //        shift = (shift === true) ? false : true;
            capslock = false;
            return false;
});

mc.on("panleft", function(ev) {                                     // pandown on keyboard = removes uppercase
 //   myElement.textContent = ev.type +" = delete";
    var html = $write.html();
             
            $write.html(html.substr(0, html.length - 1));
            return false;
});


    // $('.special').hover(function(event){
    //  var onLetter = $( this ).text();   //changed

    // function createTooltip(){  
    // var tip = $('<table class="tooltip"><tr><td></td><td class="up"></td><td></td></tr><tr><td class="left"></td><td class="middle"></td><td class="right"></td></tr><tr><td></td><td class="down"></td><td></td></tr></table>');
    // if (shift == false){
    //     letter = letterString.charAt(0);
    //     $(tip).appendTo('body');
    //     $('.middle').text(onLetter);
    //     $('.up').text(letters[letter]['up']);
    //     $('.down').text(letters[letter]['down']);
    //     $('.left').text(letters[letter]['left']);
    //     $('.right').text(letters[letter]['right']);
    // }
    // })
             

$('.letter' || '.special').hover(function(event) {
    
    $('.letter').hover(function(event){
     var onLetter = $( this ).text();   //changed
  //  console.log(onLetter);              //changed
    createTooltip(event, onLetter);
    })
             
})




function createTooltip(event, letter){  
    
    var letterString = letter;

    var tip = $('<table class="tooltip"><tr><td></td><td class="up"></td><td></td></tr><tr><td class="left"></td><td class="middle"></td><td class="right"></td></tr><tr><td></td><td class="down"></td><td></td></tr></table>');

    // if(shift = false && letterString !== '123' && letterString != 'space' && letterString != 'return') {
    //     console.log("special key");
    //     $(tip).appendTo('body');
    //     $('.middle').text(letter);
    //     $('.up').text(special[letter]['up']);
    //     $('.down').text(special[letter]['down']);
    //     $('.left').text(special[letter]['left']);
    //     $('.right').text(special[letter]['right']);
    // }


    if (shift == false){
        letter = letterString.charAt(0);

        $(tip).appendTo('body');

        $('.middle').text(letter);
        $('.up').text(letters[letter]['up']);
        $('.down').text(letters[letter]['down']);
        $('.left').text(letters[letter]['left']);
        $('.right').text(letters[letter]['right']);
    }else {
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

function positionTooltip(event){
    var tPosX = event.pageX - 10;
    var tPosY = event.pageY - 100;
    $('table.tooltip').css({'position': 'absolute', 'top': tPosY, 'left': tPosX});

};


// $(function(){
    // var $write = $('#write'),
    //     shift = false,
    //     capslock = false;
     
    $('#keyboard li').click(function(){
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
         
        // Remove shift once a key is clicked.
        // if (shift === true) {
        //     $('.symbol span').toggle();
        //     if (capslock === false) $('.letter').toggleClass('uppercase');
             
        //     shift = false;
        // }
         
        // Add the character
        $write.html($write.html() + character);
    });
// });


