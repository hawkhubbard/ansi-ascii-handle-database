(function () {
    "use strict";
    var handles;

    handles = {
        "Aaron Frick": "fever",
        "Alexandre Ménard": "The Night Angel",
        "Anders Larsson": "U-MAN",
        "Andy Herbert": "andyh",
        "Ahto Harmo": "Zefyros",
        "Antti Kiuru": "H7",
        "Antti Kolsi": "ansichrist",
        "Antti Minkkinen": "unseen",
        "Avidan Frommer": "aOh",
        "Bart Dumon": "burps",
        "Beau Gunderson": "bludwulf",
        "Bensonn Anspach": "Metal Head",
        "Björn Odendahl": "nail",
        "Brian Cassidy": "Mighty Mouse",
        "Brian Forbes": "magnatop",
        "Cat Spencer": "Catbones",
        "Chris Brunjes": "Whazzit",
        "Chris Lewis": "ungenannt",
        "Christian Wirth": "RaD Man",
        "Cliff Anderson": "deathy",
        "Craig Rokcity": "Creator",
        "Curtis Wensley": "eto",
        "Dave Begic": "Aesthetic",
        "Doug Moore": "Lord Scarlet",
        "Dave Kelly": "TANGo",
        "David Steketee": "Quisling",
        "Eric Turevon": "ewheat",
        "Ernie Hsiung": "beez",
        "Erkka Vesa": "aBHO",
        "Esko Barba": "Trivial",
        "Flavien 'iks' Deneu": "irokos",
        "Florian Ochmann": "bw!",
        "Filip De Haes": "Otium",
        "Françoys Villeneuve": "The ExtremisT",
        "Frédéric Masse Noel": "Mr. Wrong",
        "Fredrik Möller": "phlare",
        "Fredrik Olsson": "bym",
        "Fredrik Sköld": "lord",
        "George Bordovsky": "g-man",
        "Grant Olney Passmore": "Skaboy",
        "Greg Ipp: aphex": "twin",
        "Gustavo Pares": "dopie",
        "Hawk Hubbard": "caphood",
        "Hin Håle": "Sephiroth",
        "Ismo Kalevi": "sliver",
        "Ivan Segaric": "Avenging Angel",
        "Jaakko Raami": "tarot",
        "James Andrew Vaughn \"Andy\"": "Sodium",
        "James Bodie": "Misfit",
        "James Boutcher": "Dimebag",
        "Jamie Martin": "delicious",
        "Jason Hyde": "Cardiac Arrest",
        "Jay Phillips": "jack phlash",
        "Jeff Nicholas": "cheeze",
        "Jean-Philippe Théroux": "j33p33",
        "Jeff Priest": "Hennifer",
        "Jeremias Soovéer": "Medium",
        "Jesse Kates": "halaster",
        "Joel Börjel": "Zeus II",
        "Joel O'Connell": "Slam Dunk",
        "Johnny Ernest": "Sinister X",
        "Jon Shiring": "Slothy",
        "Joshua Hillyard": "filth",
        "Jurgen Philippaerts": "thrasher",
        "Kareem Ajani": "WatOr",
        "Karl Grenet": "cryogenic",
        "Karl Ringman": "mend",
        "Keith Aaron Von Nadolny": "whitetrash",
        "Kevin Pearsall": "necronite",
        "Knoc Turnal": "knocturnal",
        "Kris Wallace": "offspring",
        "Kristian Vuorinen": "prst",
        "Lawrence Manuel": "Smooth",
        "Leslie Given": "Skuz",
        "Luciano Ayres": "enzO",
        "Lukos Weagant": "Maytag Man",
        "Manfred Fischer": "nightmare^NUANCE",
        "Marc Verdon": "Deeply Disturbed",
        "Mark Dunn": "Necromancer",
        "Mark Pendell": "spear",
        "Markus Avignon": "H2o",
        "Matt Perkins": "hFaze",
        "Matt Yee": "mattmatthew",
        "mcoldschuh": "irata",
        "Matthew P Kemp": "ironghost",
        "Mikael Aspling": "bizzarro",
        "Michael Hischer": "sk!n",
        "Mikko Laitinen": "riddler Blend",
        "Marcus Wallinder": "dFUSE",
        "Nav Dhillon": "Tribe",
        "Nick Boel": "Access Denied",
        "Nicky Werner": "elD!",
        "Niklas Bergius": "Polymorph",
        "Niklas Isaksson": "kARMA",
        "Niklas Brodin": "Rev",
        "Noel Geren": "Pixel Pusher",
        "Olof Sellgren": "Sensei",
        "Pat Swanson": "Cyonx",
        "Patrick Hajduch": "haji",
        "Patrick Liu": "mongi",
        "Phil Smith": "God among Lice",
        "Pjotr Likedeeler": "aox",
        "Reapern66": "Ecstasy BBs",
        "Retribution Stankonit": "Retribution Stankonit",
        "Richard Boardman": "Shadow Streaker",
        "Rick Christy": "grymmjack",
        "Rodman Lau": "rodamn",
        "Ron Tsang": "Carnifex",
        "Rowan Lipkovits": "Cthulu",
        "Ryan Garland": "Tsk",
        "Sal Oner": "saL-onE",
        "Sanna Stålbandt": "Idler",
        "Sean (Higgins) Rules": "Cypher Hex",
        "Sebastien 'Sns'": "Senser",
        "Sergey Safonov": "Iron_Lung",
        "Steve Sykes": "maestro",
        "Steven Kachtan": "BitStream",
        "Tatu Petersen-Jessen": "luminator",
        "Thomas Aylott": "agent_42",
        "Thorin Teague": "Thor",
        "Threshold Prod": "tosh10",
        "Till Oyen": "ave",
        "Timo Puputti": "prOwler",
        "Todd Boyd": "haliphax",
        "Tomasz Kure": "Noches",
        "Torsten Edwinson (Threshold Prod)": "Tosh10",
        "Vili Wilen": "estatic",
        "Wijnand Modderman-Lenstra": "maze",
        "Wil Hines": "Balls Wilson",
        "Yahwe Chao": "smoke"
    };

    function rehashLinks() {
        var contentArea, elements, i, handle;
        contentArea = document.getElementById("contentArea");
        if (contentArea !== null) {
            elements = contentArea.getElementsByTagName("a");
            for (i = 0; i < elements.length; i += 1) {
                handle = elements[i].textContent;
                if (handles.hasOwnProperty(handle)) {
                    elements[i].textContent += " (" + handles[handle] + ")";
                }
            }
        }
    }

    setTimeout(function () {
        rehashLinks();
        setInterval(rehashLinks, 7000);
    }, 1500);
}());