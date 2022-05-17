const localQuotes = [
  {
    text: 'Shawty Imma party till the sun down' ,
    author: 'Sehun, EXO, Love Me Right',
  },
  {
    text: 'Risky Risky, Wiggi wiggy, this is an emergency.',
    author: 'Chaeyoung, Twice, Cant Stop Me',
  },
  {
    text: 'Cookin like a chef, I am a 5 star Michelin.',
    author: 'Felix, Stray Kids, Gods Menu',
  },
  {
    text: 'Bless me ah-choo.',
    author: 'Jungwoo, NCT 127, Simon Says'
  },
  {
    text: 'Shimmie, shimmie ko ko bop, I think I like it',
    author: 'Baekhyun, EXO, Ko Ko Bop',
  },
  {
    text: 'BLACKPINK in your area.',
    author: 'BLACKPINK',
  },
  {
    text: 'Your dog speaks chinese?',
    author: 'Eric Nam',
  },
  {
    text: 'You’re embarrassing me!',
    author: 'Krystal, F(X)',
  },
  {
    text: 'Stob it!.',
    author: 'Jin, BTS',
  },
  {
    text: 'Do you know what else is BiG?.... My Feet',
    author: 'Bangchan, Stray Kids',
  },
  {
    text: 'How do you know I am NoT BiG?',
    author: 'BamBam, Got7',
  },
  {
    text: 'Mai mee Tang KaAaA.',
    author: 'Jisoo, BLACKPINK',
  },
  {
    text: 'Dibidibidis My name is Minho',
    author: 'Minho, SHINee',
  },
  {
    text: 'Jimin you got no jams',
    author: 'RM, BTS',
  },
  {
    text: "RAp MonSTer",
    author: 'RM, BTS, We Are Bulletproof, PT.2',
  },
  {
    text: 'Porronesian parrapio',
    author: 'RM, BTS',
  },
  {
    text: "Yoo!Nice Paprika",
    author: 'V, BTS',
  },
  {
    text: 'SexY PoRn StAr',
    author: 'V, BTS',
  },
  {
    text: 'I am God',
    author: 'V, BTS',
  },
  {
    text: 'Lachimolalala',
    author: 'Jimin, BTS',
  },
  {
    text: 'HEY CORDEN!Don’t worry,I’m not afraid!!',
    author: 'Jimin, BTS',
  },
  {
    text: 'Papa Mochi',
    author: 'Jimin, BTS',
  },
  {
    text: 'Here I come kickin’ the door',
    author: 'Lisa, BLACKPINK, Kill This Love',
  },
  {
    text: 'Call me pretty and nasty',
    author: 'Lisa, BLACKPINK, As If Its Your Last',
  },
  {
    text: 'I don’t want a boy, I need a man',
    author: 'Lisa, BLACKPINK, BOOMBAYAH',
  },
  {
    text: 'Yadom!',
    author: 'Lisa, BLACKPINK',
  },
  {
    text: 'I told you to smile, but you just ignore my word',
    author: 'Lisa, BLACKPINK',
  },
  {
    text: 'My mom said she adopted me form under a bridge.',
    author: 'Yoongi',
  },
  {
    text: 'Why are you here? My cheese-stick.',
    author: 'Bangchan and Felix, Stray Kids',
  },
  {
    text: 'Seungmin in the building!',
    author: 'Seungmin, Stray Kids',
  },
  {
    text: 'My name is…V, and I’m…good boy',
    author: 'V, BTS',
  },
  {
    text: 'Not DANCE monster, I’m rap monster',
    author: 'RM, BTS',
  },
  {
    text: 'Name is…Jungkook! Scale is…Jungkook! National…iNtErNaTiOnAl pLaY bOy!',
    author: 'RM and Jungkook, BTS',
  },
  {
    text: 'Hey, you wanna come in?',
    author: 'Stray Kids, Back door',
  },
  {
    text: 'I can hear it callin’! From where you are, something in the way you wanna talk, Touch me, tease me, feel me up.',
    author: 'Love Talk, WayV',
  },
  {
    text: 'WORLD WIDE HANDSOME',
    author: 'Jin, BTS',
  },
  {
    text: '3 DOLLA CHAIN YA KNOW?',
    author: 'Yoongi, BTS',
  },
  {
    text: 'I’m crying in the club, you’re in the club?',
    author: 'Key, SHINee',
  },
  {
    text: 'Im Jisoo, im okay',
    author: 'Jisoo, BLACKPINK',
  },
  {
    text: 'Ayo stop, let me put it down another way.',
    author: 'SNSD, ‘I Got a Boy',
  },
  {
    text: 'Do u know what can i give lisa fpr her birthday present? I was Planning on giving her a big…slap on herself',
    author: 'Jennie, BLACKPINK',
  },
  {
    text: 'What am I suppose to twerk?',
    author: 'Rose, BLACKPINK',
  },
  {
    text: 'SO I WANT EVERYBODY TO DANCE LIKE ITS YOUR LAST!!!!!',
    author: 'Rose, BLACKPINK, Coachella',
  },
  {
    text: 'Go slowly pleceu',
    author: 'Jisoo, BLACKPINK',
  },
  {
    text: 'Knock knock, whos there? Boo.boo who? Awww dont cry',
    author: 'Rose, BLACKPINK',
  },
  {
    text: 'Hold up! I am a geek, the big paradox.',
    author: 'Lee Yubin, Boca',
  },
  {
    text: "Aamericanoo choaa choaa.",
    author: 'Hyunjin, Stray Kids',
  },
  {
    text: 'Big Tiddie Gang',
    author: 'BM, KARD',
  },
  {
    text: 'The possibility of all these possibilities being possible is just another possibility that could possibly happen.',
    author: 'Mark Lee, NCT',
  },
  {
    text: 'if yOu gUys arE mY bAbY giRls, does that mean I’m your……dAddY? mOvinG On!',
    author: 'Bangchan, Stray Kids',
  },
  {
    text: 'AND SPRITE!',
    author: 'J-Hope, BTS',
  },
  {
    text: 'infires man yeah infires!',
    author: 'Yoongi and Jungkook, BTS',
  },
  {
    text: 'OI FELIX, C’MERE BRO!',
    author: 'Bangchan, Stray Kids',
  },
  {
    text: 'Soobin soobin you know soobin?',
    author: 'Yeonjun, TXT',
  },
  {
    text: 'Global shookie',
    author: 'Soobin, TXT',
  },
  {
    text: 'Uh and that’s a long ass ride',
    author: 'Mark Lee, NCT',
  },
  {
    text: "I’m Jisoo, I’m okay",
    author: 'Jisoo, BLACKPINK',
  },
  {
    text: "I’m sorry I just call it cat",
    author: 'Lay, EXO',
  },
  {
    text: 'Like mate, stop procrastinating!',
    author: 'Bangchan, Stray Kids',
  },
  {
    text: 'Opinionated, but I’m always spitting straight facts.',
    author: 'Mark Lee, SUPERM',
  },
  {
    text: 'Waeng!',
    author: 'Beomgyu, TXT',
  },
  {
    text: 'Yes daddy!',
    author: 'Felix, Stray Kids',
  },
  {
    text: 'Hello, I’m an alli-alligator',
    author: 'Jooheon, Monsta X, Alligator',
  },
  {
    text: 'I know, you know, we know, Lee know',
    author: 'Lee Know, Stray Kids, The Tortoise and the Hare',
  },
  {
    text: 'I’ve been walking the cheese, that’s that queso',
    author: 'Jaehyun, NCT, Regular',
  },
  {
    text: 'I’M NOT SCARY',
    author: 'Jisoo, BLACKPINK',
  },
  {
    text: 'Oppa Gangnam Style',
    author: 'PSY',
  },
  {
    text: 'He is always no have girlfriend. He is always solo. He is want marry. But SHINee singing “Marry You” but my manager, Namgoong Euisoo, no marry. So sad.',
    author: 'Taemin and Key, SHINee',
  },
  {
    text: 'Eww! Fruit! … Oh! Cookie!',
    author: 'Ten, WayV',
  },
  {
    text: 'When I have a son, I’m gonna name him Eleven, because he’s gonna dance better than you.',
    author: 'Yangyang, WayV',
  },
  {
    text: 'Im like TT, just like TT.',
    author: 'Twice, TT',
  },
  {
    text: 'So give it up give it up give it up for SHINee',
    author: 'SHINee, Sherlock',
  },
  {
    text: 'My name is T to the A to the E (To the) Y to the A N G',
    author: 'Taeyang, BigBang, Ringa Linga',
  },
  {
    text: 'Listen girls. My first love story',
    author: 'Girls Generations, Gee',
  },
  {
    text: 'Because You Naughty Naughty, Hey Mr. Simple',
    author: 'Super Juniors, Mr. Simple',
  },
  {
    text: 'Loverholic Robotronic ',
    author: 'SHINee, Lucifer',
  },
  {
    text: 'Peaches and cream, Sweeter than sweet, Chocolate cheeks and chocolate wings.',
    author: 'RM, BTS, Blood, Sweat, & Tears',
  },
  {
    text: 'Dont stop, lets bring it back to 140',
    author: 'Girls Generation, I Got A Boy',
  },
  {
    text: 'Wow, Fantastic Baby!',
    author: 'BIGBANG, Fantastic Baby',
  },
  {
    text: 'That is right tell em how it is thats right your my oppa. Who is my oppa? Well it is obviously Yuta. Yuta oppa',
    author: 'Mark Lee, NCT',
  },

];
