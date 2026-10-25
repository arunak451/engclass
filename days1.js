// World 1 (Days 1-9) and World 2 start (Days 10-15)
// w: [word, Tanglish meaning, example]
// g: grammar lesson; q: [question, options, correct index, why]; s: speaking mission
window.DAYS = (window.DAYS || []).concat([
{
  d: 1, t: "Hello, I am...", tg: "Unnai pathi 4 line pesa kathukalaam",
  w: [
    ["introduce", "arimugam pannu", "Let me introduce myself."],
    ["name", "peyar", "My name is Arun."],
    ["native place", "sondha ooru", "My native place is Madurai."],
    ["hobby", "pozhudhupokku (free time la pannradhu)", "My hobby is drawing."],
    ["family", "kudumbam", "I have a small family."]
  ],
  g: {
    h: "Sentence = Train (S + V + O)",
    story: [
      "English sentence oru train maadhiri da. Munnadi Engine, naduvula oru box, kadaisila innoru box.",
      "Engine = Subject (yaaru?). Middle box = Verb (enna pannaanga?). Last box = Object (edha?).",
      "Tamil la naama 'Naan saadham saapitten' nu solluvom. Inga verb (saapitten) kadaisila varudhu. Aana English la verb ah NADUVULA podanum: I ate rice."
    ],
    f: "Subject + Verb + Object",
    ex: [
      ["I drink milk.", "Naan paal kudikkiren."],
      ["Priya reads books.", "Priya puthagam padikkiraa."],
      ["We play cricket.", "Naanga cricket vilayaaduvom."],
      ["My name is Ravi.", "En peyar Ravi."]
    ],
    tip: "'I rice eat' thappu. Engine (I) ku apram udane action (eat) varanum: 'I eat rice.'"
  },
  q: [
    ["Correct sentence edhu?", ["I rice eat.", "I eat rice.", "Rice I eat.", "Eat I rice."], 1, "Subject (I) + Verb (eat) + Object (rice)."],
    ["'She plays tennis' la VERB edhu?", ["She", "plays", "tennis", "Onnum illa"], 1, "Verb = action word. 'plays' thaan action."]
  ],
  s: {
    p: "Introduce yourself in 4 sentences: name, native place, family, hobby.",
    help: "Indha 4 starters use pannu: My name is... / I am from... / I have... / My hobby is...",
    sample: "Hello! My name is Arun. I am from Madurai. I have a small family: my father, my mother and my sister. My hobby is drawing.",
    keys: ["my name is", "i am from", "hobby"]
  }
},
{
  d: 2, t: "Am, Is, Are", tg: "Be verbs: English oda glue",
  w: [
    ["happy", "sandhosham", "I am happy today."],
    ["tired", "kalaippa irukku", "She is tired after work."],
    ["ready", "thayaar", "We are ready for the class."],
    ["busy", "vela adhigam / free illa", "My father is busy."],
    ["friendly", "pazhaga easy aana", "My neighbours are friendly."]
  ],
  g: {
    h: "Am / Is / Are: who gets which?",
    story: [
      "Am, Is, Are = 'irukku / irukken' maadhiri. Idhu glue: Subject ah adhoda vivarathoda otti vaikkum.",
      "Three friends nu nenachuko. 'I' kooda eppovume 'am' thaan varum. Oruthar or onnu (he, she, it, Ravi, the dog) kooda 'is' varum. Neraya per (we, you, they) kooda 'are' varum.",
      "Tamil la 'Naan doctor' nu solluvom, glue illama. English la glue kandippa venum: I AM a doctor."
    ],
    f: "I → am  |  He/She/It/One person → is  |  We/You/They → are",
    ex: [
      ["I am a student.", "Naan oru student."],
      ["He is my brother.", "Avan en thambi."],
      ["The tea is hot.", "Tea soodaa irukku."],
      ["They are in Chennai.", "Avanga Chennai la irukkaanga."]
    ],
    tip: "'I is' or 'I are' nu sonna interviewer udane note pannuvaanga. 'I' ku 'am' mattum thaan!"
  },
  q: [
    ["My friends ___ very kind.", ["am", "is", "are", "be"], 2, "Friends = neraya per, so 'are'."],
    ["Fill: I ___ from Trichy.", ["am", "is", "are", "was be"], 0, "I ku eppovume 'am'."]
  ],
  s: {
    p: "Describe 3 people in your family using am / is / are.",
    help: "Example starters: My mother is... / My brothers are... / I am...",
    sample: "My mother is a teacher. She is very kind. My brothers are in college. I am the youngest in my family.",
    keys: ["is", "are", "am"]
  }
},
{
  d: 3, t: "A, An, The", tg: "Articles: chinna words, periya power",
  w: [
    ["umbrella", "kudai", "I need an umbrella."],
    ["hour", "mani neram", "The class is an hour long."],
    ["office", "aluvalagam", "The office is near my house."],
    ["engineer", "porriyaalar", "He is an engineer."],
    ["university", "palkalaikazhagam", "She studies at a university."]
  ],
  g: {
    h: "A / An / The",
    story: [
      "'A' and 'an' = 'oru'. Edho oru saadharana things solla use pannuvom: a pen, an apple.",
      "Eppo 'an'? Word oda first SOUND a, e, i, o, u maadhiri irundha (vowel sound): an apple, an egg, an hour (h silent, 'our' nu sound). University 'you' nu sound aagudhu, so 'a university'.",
      "'The' = 'andha'. Specific ah, rendu perukkum therinja thing: 'the sun', 'the book I gave you'."
    ],
    f: "a + consonant sound  |  an + vowel sound  |  the + specific thing",
    ex: [
      ["I saw a dog.", "Naan oru naaya paathen."],
      ["The dog was black.", "Andha naai karuppaa irundhudhu."],
      ["She ate an orange.", "Ava oru orange saapitaa."],
      ["He is an honest man.", "Avar oru nermaiyaana manushan. (h silent)"]
    ],
    tip: "Spelling paakkaadha, SOUND ah kelu. 'an hour', 'a uniform', 'an MBA'."
  },
  q: [
    ["I am ___ engineer.", ["a", "an", "the", "no article"], 1, "'engineer' vowel sound la start aagudhu, so 'an'."],
    ["Please close ___ door.", ["a", "an", "the", "any"], 2, "Rendu perukkum therinja specific door, so 'the'."]
  ],
  s: {
    p: "Describe your room. Use a, an and the at least once each.",
    help: "Starter: In my room there is a... / I have an... / The ... is near the window.",
    sample: "In my room there is a bed and a small table. I have an old fan. The table is near the window. The window is big.",
    keys: [" a ", " an ", "the"]
  }
},
{
  d: 4, t: "I, You, He, She", tg: "Pronouns: peyarukku badhila",
  w: [
    ["colleague", "kooda vela paakkravar", "My colleague is helpful."],
    ["neighbour", "pakkathu veettukaarar", "Our neighbour is a doctor."],
    ["cousin", "maama/athai/chithappa paiyan/ponnu", "My cousin lives in Coimbatore."],
    ["classmate", "ore class la padichavanga", "She was my classmate."],
    ["team", "kuzhu", "Our team won the match."]
  ],
  g: {
    h: "Pronouns + their 'my, his, her' family",
    story: [
      "Ovvoru thadavaiyum 'Ravi, Ravi, Ravi' nu solla bore aagum. Adhukku badhila 'he' nu solrom. Idhu thaan pronoun.",
      "Subject pronouns (vela seyravanga): I, you, he, she, it, we, they.",
      "Owner words (yaaroda?): my, your, his, her, its, our, their. 'Idhu ENNODA bag' = 'This is MY bag'.",
      "Object pronouns (vela avangalukku nadakkum): me, you, him, her, it, us, them. 'Call me', 'Help him'."
    ],
    f: "I-my-me | you-your-you | he-his-him | she-her-her | we-our-us | they-their-them",
    ex: [
      ["She is my sister.", "Ava en akka."],
      ["Her name is Meena.", "Avaloda peyar Meena."],
      ["I called him yesterday.", "Naan nethu avana call panninen."],
      ["They love their job.", "Avangalukku avanga vela pidikkum."]
    ],
    tip: "'He' ponnu ku illa, 'she' paiyan ku illa. Phone la pesumbodhu idhu romba common mistake."
  },
  q: [
    ["This is Kavya. ___ is my classmate.", ["He", "She", "They", "It"], 1, "Kavya ponnu, so 'She'."],
    ["Please help ___. (Ravi and me)", ["we", "our", "us", "they"], 2, "Help-ku apram object pronoun: 'us'."]
  ],
  s: {
    p: "Talk about your best friend: name, what he/she does, and one good habit.",
    help: "Use he/she, his/her correctly. Starter: My best friend is... He/She works as... His/Her good habit is...",
    sample: "My best friend is Karthik. He works in a bank. His good habit is waking up early. I meet him every Sunday.",
    keys: ["my best friend", "he", "she", "his", "her"]
  }
},
{
  d: 5, t: "One Book, Two Books", tg: "Singular & Plural",
  w: [
    ["child / children", "kuzhandhai / kuzhandhaigal", "The children are playing."],
    ["person / people", "oru aal / makkal", "Many people came."],
    ["box / boxes", "petti / pettigal", "Keep the boxes here."],
    ["knife / knives", "kaththi / kaththigal", "The knives are sharp."],
    ["tooth / teeth", "pal / palgal", "Brush your teeth."]
  ],
  g: {
    h: "Plural making rules",
    story: [
      "Onnu na singular, onnukku mela na plural. Tamil la '-gal' serthu solluvom (pen-gal). English la mostly '-s' serpom: pen → pens.",
      "s, sh, ch, x, o la mudinja '-es': box → boxes, watch → watches, potato → potatoes.",
      "Consonant + y na y ah eduthutu '-ies': city → cities. Aana vowel + y na just '-s': boy → boys.",
      "Sila words rules follow pannaadhu (rebel words!): man → men, child → children, foot → feet, mouse → mice."
    ],
    f: "+s | +es (s, sh, ch, x, o) | y → ies | f/fe → ves | rebels: men, children, feet",
    ex: [
      ["I have two brothers.", "Enakku rendu annan/thambi irukkaanga."],
      ["These watches are costly.", "Indha watches vilai adhigam."],
      ["Many cities have metro trains.", "Neraya city la metro irukku."],
      ["The men are working.", "Andha aalunga vela paakkuraanga."]
    ],
    tip: "'peoples' sollaadha. 'people' already plural. 'Many people', not 'many peoples'."
  },
  q: [
    ["Plural of 'baby'?", ["babys", "babies", "babyes", "babis"], 1, "Consonant + y → ies: babies."],
    ["Correct one?", ["Two childs", "Two childrens", "Two children", "Two child"], 2, "child → children (rebel word)."]
  ],
  s: {
    p: "What things are in your kitchen? Say 5 items with numbers (two plates, three cups...).",
    help: "Starter: In my kitchen there are...",
    sample: "In my kitchen there are four plates, three cups and two knives. There are many boxes of spices. We also have five glasses.",
    keys: ["there are", "s "]
  }
},
{
  d: 6, t: "This, That, These, Those", tg: "Pakkam & dhooram",
  w: [
    ["near", "pakkathula", "The bus stop is near."],
    ["far", "dhoorathula", "The station is far from here."],
    ["here", "inga", "Come here."],
    ["there", "anga", "Put it there."],
    ["shelf", "alamaari thattu", "The books are on that shelf."]
  ],
  g: {
    h: "Pointing words",
    story: [
      "Kaila pidichu kaattumbodhu: 'idhu' = this (onnu, pakkathula). 'Ivai' = these (neraya, pakkathula).",
      "Dhoorathula kaattumbodhu: 'adhu' = that (onnu). 'Avai' = those (neraya).",
      "Easy trick: tH-IS-ra 'is' = onnu. tH-ESE la double 'e' = neraya."
    ],
    f: "Near: this (1) / these (many)   |   Far: that (1) / those (many)",
    ex: [
      ["This is my phone.", "Idhu en phone."],
      ["These shoes are new.", "Indha shoes pudhusu."],
      ["That building is tall.", "Andha building uyaramaa irukku."],
      ["Those boys are my students.", "Andha pasanga en students."]
    ],
    tip: "'These' kooda 'are' varum, 'is' illa: 'These are my books.'"
  },
  q: [
    ["(pointing far, many) ___ are mango trees.", ["This", "That", "These", "Those"], 3, "Dhooram + neraya = those."],
    ["___ is my bag. (in my hand)", ["This", "These", "Those", "They"], 0, "Kaila, onnu = this."]
  ],
  s: {
    p: "Look around you right now. Point and describe 4 things using this, that, these, those.",
    help: "Starter: This is my... / That is a... / These are... / Those are...",
    sample: "This is my mobile phone. That is a clock on the wall. These are my notebooks. Those are my father's shoes near the door.",
    keys: ["this", "that", "these", "those"]
  }
},
{
  d: 7, t: "Have & Has", tg: "Ennakku irukku nu solla",
  w: [
    ["laptop", "laptop", "I have a laptop."],
    ["degree", "pattam", "She has a degree in commerce."],
    ["experience", "anubavam", "He has two years of experience."],
    ["skill", "thiramai", "I have good computer skills."],
    ["fever", "kaaichal", "My son has a fever."]
  ],
  g: {
    h: "Have / Has: possession",
    story: [
      "'Enakku oru bike irukku' = 'I have a bike'. Have / has = 'kitta irukku'.",
      "I, you, we, they → have. He, she, it, one person → has.",
      "Interview la romba use aagum: 'I have a B.Sc degree', 'I have experience in sales'."
    ],
    f: "I/You/We/They + have  |  He/She/It + has",
    ex: [
      ["I have two sisters.", "Enakku rendu akka thangachi irukkaanga."],
      ["She has a cold.", "Avalukku jalathosham."],
      ["We have a meeting at 10.", "Engalukku 10 manikku meeting irukku."],
      ["The phone has a good camera.", "Indha phone la nalla camera irukku."]
    ],
    tip: "'I am having a car' sollaadha. Correct: 'I have a car.' Possession ku -ing venaam."
  },
  q: [
    ["My brother ___ a new job.", ["have", "has", "having", "is have"], 1, "Brother = he, so 'has'."],
    ["Correct?", ["I am having two years experience.", "I has two years of experience.", "I have two years of experience.", "I having two years experience."], 2, "I + have. Simple ah sollu."]
  ],
  s: {
    p: "Tell what you have: education, skills, and things you own.",
    help: "Starter: I have a degree in... / I have good... skills / I have a...",
    sample: "I have a degree in computer science. I have good typing skills. I also have a laptop and a smartphone. My father has a small shop.",
    keys: ["i have", "has", "skill"]
  }
},
{
  d: 8, t: "My Daily Routine", tg: "Simple Present: dhinamum nadakkradhu",
  w: [
    ["usually", "pothuvaa", "I usually wake up at six."],
    ["always", "eppovume", "She always smiles."],
    ["sometimes", "sila neram", "Sometimes I cook dinner."],
    ["never", "eppovume illa", "He never drinks alcohol."],
    ["routine", "dhinasari vela pattiyal", "Exercise is part of my routine."]
  ],
  g: {
    h: "Simple Present + the 'S' rule",
    story: [
      "Dhinamum nadakkradhu, habit, unmai: Simple Present. 'Naan dhinamum tea kudippen' = 'I drink tea every day.'",
      "Secret rule: he / she / it / one person vandha, verb ku 's' or 'es' podanum. I drink → She drinkS. I go → He goES. I study → She studIES.",
      "Ninaivu vachuko: 'He/She' ku 'S' pidikkum. S + S = friends!"
    ],
    f: "I/You/We/They + V1   |   He/She/It + V1 + s/es",
    ex: [
      ["I go to work by bus.", "Naan bus la velaikku poven."],
      ["She teaches English.", "Ava English solli kodukkiraa."],
      ["My father reads the newspaper every morning.", "Appa dhinamum kaalaila paper padippaaru."],
      ["The sun rises in the east.", "Sooriyan kizhakku la udhikkum. (unmai)"]
    ],
    tip: "'He go', 'She work' nu sonna 's' miss aagudhu. Interview la idhu thaan No.1 mistake."
  },
  q: [
    ["My mother ___ up at 5 a.m.", ["wake", "wakes", "waking", "woken"], 1, "Mother = she → wakes."],
    ["We ___ cricket on Sundays.", ["plays", "playing", "play", "played on"], 2, "We + V1 (no s)."]
  ],
  s: {
    p: "Describe your daily routine from morning to night. Use usually, always, sometimes.",
    help: "Starter: I usually wake up at... Then I... After that... At night I...",
    sample: "I usually wake up at six. I always drink coffee first. Then I take a bath and go to work. I come home at seven. Sometimes I watch TV. I sleep at ten thirty.",
    keys: ["usually", "always", "then", "sometimes"]
  }
},
{
  d: 9, t: "Do You? Does She?", tg: "Kelvi kekkradhu & 'illa' solradhu",
  w: [
    ["like", "pidikkum", "Do you like tea?"],
    ["prefer", "adhigam pidikkum", "I prefer coffee."],
    ["often", "adikkadi", "Do you often travel?"],
    ["weekend", "sani-gnayiru", "What do you do on weekends?"],
    ["understand", "puriyum", "I don't understand this."]
  ],
  g: {
    h: "Do / Does for questions & negatives",
    story: [
      "Simple present la kelvi kekka 'Do' or 'Does' ah munnaadi podu. 'Do you like dosa?'",
      "He/She/It ku 'Does'. Magic: 'does' vandha, verb oda 's' odi poyidum! 'Does she like dosa?' (likes illa).",
      "Illa nu solla: don't (do not) / doesn't (does not). 'I don't smoke.' 'He doesn't drive.'"
    ],
    f: "Do/Does + Subject + V1?   |   Subject + don't/doesn't + V1",
    ex: [
      ["Do you speak English?", "Unakku English pesa theriyumaa?"],
      ["Does he work here?", "Avar inga vela paakkuraara?"],
      ["I don't eat meat.", "Naan meat saapida maatten."],
      ["She doesn't watch TV.", "Ava TV paakka maataa."]
    ],
    tip: "'Does she likes?' thappu. Does already 's' eduthuduchu: 'Does she like?'"
  },
  q: [
    ["___ your brother live in Chennai?", ["Do", "Does", "Is", "Are"], 1, "Brother = he → Does."],
    ["Correct one?", ["She doesn't likes milk.", "She don't like milk.", "She doesn't like milk.", "She not like milk."], 2, "doesn't + V1 (no s)."]
  ],
  s: {
    p: "Ask 3 questions to a new friend with Do/Does, then answer them yourself.",
    help: "Example: Do you like movies? Yes, I do. / Does your sister work? No, she doesn't.",
    sample: "Do you like movies? Yes, I do. I like comedy movies. Does your sister work? No, she doesn't. She studies. Do you play any sport? Yes, I play badminton.",
    keys: ["do you", "does", "don't", "doesn't"]
  }
},
{
  d: 10, t: "Right Now!", tg: "Present Continuous: ippo nadakkudhu",
  w: [
    ["currently", "ippo / thatpodhu", "I am currently working in Chennai."],
    ["waiting", "kaathirukkiren", "I am waiting for the bus."],
    ["preparing", "thayaar aagitu irukken", "She is preparing for an interview."],
    ["searching", "theditu irukken", "He is searching for a job."],
    ["at the moment", "indha nimisham", "I am busy at the moment."]
  ],
  g: {
    h: "am/is/are + verb-ing",
    story: [
      "Ippo, indha second la nadakkura action: 'Naan saapitu irukken' = 'I am eating.'",
      "Formula simple: Day 2 la paatha glue (am/is/are) + verb + ing.",
      "Spelling: e la mudinja e ah thookidu (come → coming). Chinna verb vowel-consonant la mudinja last letter double (run → running, sit → sitting)."
    ],
    f: "Subject + am/is/are + V1+ing",
    ex: [
      ["I am learning English.", "Naan English kathukittu irukken."],
      ["She is talking on the phone.", "Ava phone la pesittu irukkaa."],
      ["They are playing outside.", "Avanga veliya vilayaaditu irukkaanga."],
      ["It is raining.", "Mazhai peyyudhu."]
    ],
    tip: "Interview la: 'Currently I am working as...' or 'I am looking for a job in...' nu use pannalaam."
  },
  q: [
    ["Look! The baby ___.", ["sleep", "sleeps", "is sleeping", "are sleeping"], 2, "Ippo nadakkudhu + baby (it) → is sleeping."],
    ["Spelling correct?", ["writeing", "writting", "writing", "writeng"], 2, "e drop pannu: write → writing."]
  ],
  s: {
    p: "What is happening around you now? Say 4 things that are happening right now.",
    help: "Starter: Right now I am... My mother is... Outside, people are...",
    sample: "Right now I am sitting in my room. I am practising English. My mother is cooking in the kitchen. Outside, some children are playing.",
    keys: ["i am", "ing", "is", "are"]
  }
},
{
  d: 11, t: "Yesterday...", tg: "Simple Past: nadandhu mudinjadhu",
  w: [
    ["yesterday", "nethu", "I met him yesterday."],
    ["last week", "pona vaaram", "We went to Ooty last week."],
    ["ago", "munnaadi", "I joined two years ago."],
    ["graduated", "padippu mudichen", "I graduated in 2022."],
    ["visited", "poyi paathen", "We visited the temple."]
  ],
  g: {
    h: "Simple Past = V2",
    story: [
      "Mudinju pona vishayam solla V2 use pannuvom. Idhu thaan unga V1-V2-V3 table oda power!",
      "Regular verbs: just '-ed' serthudu: play → played, work → worked.",
      "Irregular verbs (rebels): avangalukku special V2: go → went, eat → ate, see → saw. Idha daily Verb Power section la kathukuvom.",
      "Good news: past la he/she ku 's' rule illa. I went, she went, they went. Ellarukkum same!"
    ],
    f: "Subject + V2 (+ yesterday / last week / ago)",
    ex: [
      ["I watched a movie yesterday.", "Nethu oru padam paathen."],
      ["She went to Bangalore last month.", "Ava pona maasam Bangalore ponaa."],
      ["We ate biryani.", "Naanga biryani saapittom."],
      ["I completed my degree in 2023.", "2023 la en degree mudichen."]
    ],
    tip: "'Yesterday I go' thappu. Time word past ah irundha verb um past ah (V2) irukkanum: 'Yesterday I went.'"
  },
  q: [
    ["Last Sunday we ___ to the beach.", ["go", "goes", "went", "gone"], 2, "Past → V2: went."],
    ["She ___ her homework yesterday.", ["finish", "finished", "finishes", "finishing"], 1, "Regular verb: finish + ed."]
  ],
  s: {
    p: "Tell what you did last Sunday, from morning to night.",
    help: "Use V2: woke, went, ate, watched, met, slept...",
    sample: "Last Sunday I woke up late. I ate dosa for breakfast. In the afternoon I met my friends and we played cricket. At night I watched a movie and slept early.",
    keys: ["last sunday", "ed", "went", "ate"]
  }
},
{
  d: 12, t: "Did You?", tg: "Past la kelvi & 'illa'",
  w: [
    ["attend", "kalandhuko", "Did you attend the meeting?"],
    ["miss", "thavara vidu", "I missed the bus."],
    ["reach", "poi seru", "Did you reach home?"],
    ["receive", "perru", "I didn't receive the mail."],
    ["reply", "badhil sollu", "He didn't reply to my message."]
  ],
  g: {
    h: "Did + V1 (V2 odi pogum!)",
    story: [
      "Past la kelvi kekka 'Did' use pannu. 'Did you eat?' = 'Saapitiyaa?'",
      "Magic rule: 'Did' already past. So pinnadi verb V1 thaan varum. 'Did you went?' thappu → 'Did you go?' correct.",
      "Illa nu solla 'didn't' + V1: 'I didn't go.' 'She didn't call.'"
    ],
    f: "Did + Subject + V1?   |   Subject + didn't + V1",
    ex: [
      ["Did you call me?", "Nee enna call pannaiyaa?"],
      ["Did she pass the exam?", "Ava exam la pass aanaalaa?"],
      ["I didn't see him.", "Naan avana paakkala."],
      ["We didn't go to the party.", "Naanga party ku pogala."]
    ],
    tip: "Ore sentence la past rendu thadavai venaam: 'didn't went' thappu, 'didn't go' correct."
  },
  q: [
    ["___ you reach the office on time?", ["Do", "Did", "Does", "Was"], 1, "Past kelvi → Did."],
    ["Correct one?", ["I didn't saw it.", "I didn't see it.", "I not saw it.", "I don't saw it."], 1, "didn't + V1."]
  ],
  s: {
    p: "Your friend missed a party. Ask 3 'Did you...?' questions and give 2 'I didn't...' answers.",
    help: "Example: Did you get my message? / I didn't see your call.",
    sample: "Did you get my message? Did you forget the party? Did you work late? Sorry, I didn't see your message. I didn't finish my work on time.",
    keys: ["did you", "didn't"]
  }
},
{
  d: 13, t: "Tomorrow I Will...", tg: "Future: will & going to",
  w: [
    ["tomorrow", "naalaikku", "I will call you tomorrow."],
    ["soon", "seekiram", "I will reply soon."],
    ["next year", "adutha varusham", "I am going to study MBA next year."],
    ["goal", "ilakku", "My goal is to become a manager."],
    ["promise", "sathiyam / vaakku", "I promise I will help you."]
  ],
  g: {
    h: "Will vs Going to",
    story: [
      "Naalaikku nadakkum vishayam solla rendu vazhi irukku.",
      "WILL = ippo dhaan mudivu panninen, promise, guess. 'I will help you.' Will ku apram eppovume V1.",
      "GOING TO = munnaadiye plan pannitten. 'I am going to buy a bike next month' (already plan irukku).",
      "Will ellaarukkum same: I will, she will, they will. 's' kidaiyaadhu."
    ],
    f: "Subject + will + V1   |   Subject + am/is/are + going to + V1",
    ex: [
      ["I will send the report today.", "Inniki report anuppiduven."],
      ["It will rain tonight.", "Inniki raathiri mazhai peyyum (guess)."],
      ["She is going to join a new company.", "Ava pudhu company la serapporaa (plan)."],
      ["I won't be late.", "Naan late aaga maatten. (won't = will not)"]
    ],
    tip: "Interview la future plan: 'In five years, I will be a team leader' or 'I am going to improve my skills.'"
  },
  q: [
    ["The phone is ringing. I ___ answer it.", ["will", "am going to", "going", "willing"], 0, "Ippo dhaan mudivu → will."],
    ["She ___ visit Delhi next week. Tickets booked!", ["will to", "is going to", "going", "are going to"], 1, "Already plan → is going to."]
  ],
  s: {
    p: "Tell your plans for next weekend and one goal for next year.",
    help: "Use: I am going to... / I will... / My goal is to...",
    sample: "Next weekend I am going to visit my grandmother. I will take her to the temple. Next year I am going to learn digital marketing. My goal is to get a good job.",
    keys: ["going to", "will", "goal"]
  }
},
{
  d: 14, t: "What? Where? Why?", tg: "WH questions: detective aagalaam",
  w: [
    ["what", "enna", "What is your name?"],
    ["where", "enga", "Where do you live?"],
    ["when", "eppo", "When did you join?"],
    ["why", "yen", "Why do you want this job?"],
    ["how", "eppadi", "How did you learn this?"]
  ],
  g: {
    h: "WH word + helper + subject + verb",
    story: [
      "Detective maadhiri kelvi kekka WH words: What (enna), Where (enga), When (eppo), Why (yen), Who (yaaru), Which (edhu), How (eppadi).",
      "Formula: WH word munnaadi, apram helper (do/does/did/is/are/will), apram subject, apram verb.",
      "'Where you live?' thappu. Helper miss aagudhu → 'Where DO you live?'"
    ],
    f: "WH + do/does/did/is/are/will + Subject + Verb?",
    ex: [
      ["What do you do?", "Nee enna vela pannra?"],
      ["Where did you study?", "Nee enga padichaa?"],
      ["Why are you late?", "Yen late?"],
      ["How will you reach there?", "Anga eppadi poga poraa?"]
    ],
    tip: "Interview la neraya WH questions varum. Kelvi la vara verb ah vachu answer pannu: 'Where did you study?' → 'I studied at...'"
  },
  q: [
    ["___ do you live? In Salem.", ["What", "Where", "When", "Who"], 1, "Edam (place) → Where."],
    ["Correct question?", ["Why you are sad?", "Why are you sad?", "Why you sad?", "Why sad you are?"], 1, "WH + helper (are) + subject (you)."]
  ],
  s: {
    p: "Answer these about yourself: Where do you live? What do you do? Why are you learning English?",
    help: "Answer with full sentences, kelvi oda verb use pannu.",
    sample: "I live in Tiruppur. I work in a garment company. I am learning English because I want to crack interviews and get a better job.",
    keys: ["i live", "i work", "because"]
  }
},
{
  d: 15, t: "In, On, At", tg: "Prepositions: enga, eppo",
  w: [
    ["inside", "ulla", "The keys are inside the bag."],
    ["between", "rendukkum naduvula", "The bank is between the school and the temple."],
    ["opposite", "edhire", "My house is opposite the park."],
    ["next to", "pakkathula", "Sit next to me."],
    ["behind", "pinnaala", "The car is behind the bus."]
  ],
  g: {
    h: "In / On / At: Big, Medium, Small box",
    story: [
      "Moonu box nenachuko: periya box IN, middle box ON, chinna point AT.",
      "TIME ku: IN = periya time (in 2024, in May, in the morning). ON = days & dates (on Monday, on 5th June). AT = exact time (at 9 o'clock, at night).",
      "PLACE ku: IN = ulla (in the room, in Chennai). ON = mela surface (on the table, on the wall). AT = point / specific edam (at the bus stop, at the door)."
    ],
    f: "IN (big: month, year, city) > ON (day, date, surface) > AT (time, point)",
    ex: [
      ["I was born in 2001.", "Naan 2001 la porandhen."],
      ["The interview is on Monday.", "Interview Thingal kizhamai."],
      ["Meet me at 10 a.m.", "10 manikku ennai paaru."],
      ["The phone is on the table.", "Phone table mela irukku."]
    ],
    tip: "'in the morning' aana 'at night'. Idhu rebel, apdiye mug pannidu!"
  },
  q: [
    ["My birthday is ___ July.", ["in", "on", "at", "to"], 0, "Month → in."],
    ["The class starts ___ 7:30.", ["in", "on", "at", "by on"], 2, "Exact time → at."]
  ],
  s: {
    p: "Give directions from your house to the nearest shop. Use next to, opposite, between, on, at.",
    help: "Starter: Go straight... The shop is next to... It is opposite...",
    sample: "Go straight from my house. Turn left at the bus stop. The shop is next to the bank. It is opposite the school, on the main road.",
    keys: ["next to", "opposite", "at", "on"]
  }
}
]);
