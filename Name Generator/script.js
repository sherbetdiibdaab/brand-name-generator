
const firstPart = ["All", "Act", "Asp", "Att", "Ali", "Apo", "Ax", "Ana", "Amo", "Ara", "Agra", "Ava", "Bar", "Bat", "Bree", "Barc", "Bur", "Bop", "Bil", "Bla", "Blu", "Blo", "Broo", "Byu", "Bag", "Cra", "Cree", "Coo", "Char", "Chir", "Cham", "Clar", "Cleo", "Clu", "Clo", "Cyu", "Cew", "Cuw", "Dru", "Druc", "Dran", "Dal", "Dom", "Daj", "Dup", "Drew", "Dow", "Eo", "Era", "Eu", "Eta", "Eto", "Elar", "Eloo", "Ecta", "Eac", "Edu", "Eko", "Eku", "Fra", "Froo", "Flor", "Far", "Flee", "Flu", "Fop", "Fio", "Fea", "Fru", "Faw", "Frow", "Gio", "Geo", "Groo", "Gup", "Grea", "Gan", "Gom", "Gia", "Gyu", "Gloo", "Gler", "Hao", "Hutt", "Hio", "Haf", "Hod", "Hem", "Haj", "Hip", "Haw", "Io", "Ir", "Ila", "Inu", "Ica", "Iko", "Iloo", "Igo", "Iya", "Jor", "Jann", "Joll", "Jyu", "Jira", "Jarp", "Jorl", "Jott", "Jall", "Jirt", "Kal", "Kur", "Krat", "Klus", "Kio", "Keo", "Kell", "Kew", "Kiw", "Kon", "Kott", "Lar", "Leo", "Lubb", "Lom", "Lua", "Lav", "Loy", "Leff", "Lid", "Lago", "Luk", "Lass", "Mor", "Matt", "Meo", "Mak", "Mura", "Moda", "Mish", "Mosh", "Mya", "Myeo", "Maff", "Mox", "Nat", "Nort", "Nish", "Nopp", "Null", "Narl", "Nova", "Neo", "Nato", "Natur", "Nell", "Oop", "Oasi", "Oni", "Ona", "Omoo", "Ore", "Ota", "Oti", "Olar", "Opee", "Out", "Oga", "Pra", "Plee", "Pass", "Pal", "Pibb", "Ploo", "Pio", "Pam", "Punn", "Pho", "Paw", "Pix", "Qua", "Quoo", "Ras", "Roy", "Ryu", "Rech", "Reo", "Reat", "Roll", "Rabb", "Rom", "Ruk", "Sra", "Suss", "Seo", "Subb", "Sert", "Soll", "Sola", "Sew", "Suth", "Sitt", "Sax", "Soo", "Teo", "Tree", "Tox", "Tunn", "Tobb", "Tass", "Tea", "Tok", "Tow", "Tech", "Tog", "Tert", "Thir", "Thea", "Theo", "Thur", "Ura", "Una", "Uno", "Uma", "Uwa", "Uwoo", "Utar", "Uko", "Veo", "Var", "Voll", "Vue", "Voth", "Vut", "Veo", "Vitu", "Virto", "Vark", "Vex", "Vox", "Worl", "Wae", "Wass", "Whir", "Whos", "Warb", "Woy", "Wux", "Wio", "Walo", "Woo", "Wu", "Xa", "Xeo", "Xyo", "Xoo", "Xi", "Xoll", "Yeo", "Yar", "Yu", "Yur", "Yux", "Yon", "Yoo", "Yir", "Zoo", "Zu", "Zar", "Zeo", "Zee", "Zorb", "Zap", "Zipp", "Zin", "Zag"];

const secondPart = ["art", "arp", "ast", "apt", "att", "aro", "atu", "abb", "ant", "aw", "bat", "boo", "bu", "bap", "bul", "ber", "beth", "bar", "boll", "box", "bux", "buzz", "biz", "buck", "car", "cat", "cha", "choo", "cur", "co", "coll", "cow", "cab", "cash", "copp", "datt", "deo", "doo", "du", "dul", "dat", "dox", "dek", "dash", "dish", "dart", "ett", "each", "eon", "ell", "ess", "ex", "emo", "ew", "fu", "fa", "fact", "gyu", "gu", "gap", "gan", "gum", "giv", "gow", "han", "hoo", "hatt", "hand", "hut", "hall", "how", "haw", "hox", "hux", "io", "ir", "iss", "ix", "ion", "ish", "ist", "ire", "ite", "i", "izz", "ino", "ill", "ju", "joo", "jan", "jam", "jaw", "jott", "koo", "ku", "kat", "kom", "kaw", "ko", "kew", "kio", "kall", "kon", "lar", "lay", "lop", "lish", "list", "lan", "lew", "lly", "lash", "learn", "lore", "lu", "loo", "mar", "moo", "mo", "mat", "mit", "mart", "mill", "mio", "mee", "mane", "morn", "more", "mash", "mosh", "my", "non", "norm", "nass", "ny", "no", "nu", "na", "now", "nott", "nore", "note", "neo", "noll", "oo", "ott", "ore", "osha", "ona", "oa", "or", "one", "ost", "ope", "ode", "ou", "part", "pu", "pio", "per","pall", "po", "pu", "pit", "push", "poll", "pow", "pew", "pax", "ro", "rat", "row", "ra", "rill", "rox", "ron", "ry", "ree", "ri", "reo", "rich", "rest", "rew", "rech", "so", "soy", "sare", "san", "son", "seek", "saw", "sort", "say", "sh", "sho", "shee", "shea", "sha", "shi", "show", "shot", "to", "tu", "ti", "ta", "ter", "tra", "tro", "ton", "tin", "tow", "taw", "tea", "th", "tha", "tho", "toll", "teo", "tio", "tok", "tax", "u", "uo", "ua", "uno", "una", "une", "ute", "uto", "utu", "ulo", "ula", "uwo", "uvo", "upo", "upa", "uja", "ux", "vo", "vu", "var", "ver", "vi", "va", "vow", "vox", "vat", "voss", "via", "voo", "vue", "wow", "ware", "wash", "wish", "wa", "wu", "wo", "war", "wer", "won", "wall", "win", "wed", "xo", "xi", "xy", "xa", "ya", "yo", "yi", "yar", "yer", "zo", "zi", "za", "zow"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${firstPart[getRandomNumber(firstPart.length)]}${secondPart[getRandomNumber(secondPart.length)]}`;


  const setRandomName = () => {
    document.getElementById('random-name').innerText = getRandomName();
  }

  document.getElementById('generate')
  .addEventListener('click', setRandomName);

  setRandomName();