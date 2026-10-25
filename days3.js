// World 4 end (Days 31-36), World 5 Interview Boss (Days 37-45)
window.DAYS = (window.DAYS || []).concat([
{
  d: 31, t: "He Said That...", tg: "Reported Speech: vera oruthar sonnadha sollu",
  w: [
    ["mentioned", "kurippittaar", "He mentioned that the meeting was cancelled."],
    ["informed", "theriya paduthinaar", "HR informed me about the interview."],
    ["asked", "kettaar", "She asked if I was free."],
    ["replied", "badhil sonnaar", "He replied that he was busy."],
    ["confirmed", "uruthi paduthinaar", "The manager confirmed the date."]
  ],
  g: {
    h: "Direct → Reported speech",
    story: [
      "Direct = exact words, quotes la: Ravi said, \"I am tired.\"",
      "Reported = naama vera oruthar kitta sollumbodhu: Ravi said that he WAS tired.",
      "Rule: 'said' past ah irundhaa, ulla irukkura tense oru step pinnaadi pogum. am/is → was. will → would. can → could. V1 → V2.",
      "Pronoun um maarum: 'I' → he/she. 'my' → his/her."
    ],
    f: "said that + one-step-back tense  (is→was, will→would, can→could, go→went)",
    ex: [
      ["She said, \"I like tea.\" → She said that she liked tea.", "Avalukku tea pidikkum nu sonnaa."],
      ["He said, \"I will come.\" → He said that he would come.", "Varuven nu sonnaan."],
      ["HR said, \"You can join on Monday.\" → HR said that I could join on Monday.", "Monday join pannalaam nu HR sonnaanga."],
      ["He asked, \"Are you ready?\" → He asked if I was ready.", "Ready ah nu kettaan."]
    ],
    tip: "Kelvi report pannumbodhu 'if' use pannu, question mark venaam: 'She asked if I had a car.'"
  },
  q: [
    ["He said, \"I am busy.\" → He said that he ___ busy.", ["is", "was", "were", "will"], 1, "am → was."],
    ["She said, \"I will call.\" → She said that she ___ call.", ["will", "would", "can", "shall"], 1, "will → would."]
  ],
  s: {
    p: "Your manager called and said 3 things. Report them to your colleague using 'He said that...'",
    help: "Example: He said that the meeting was at 3. He said that we would get a bonus.",
    sample: "The manager called me. He said that the meeting was at three o'clock. He said that the client would come tomorrow. He also asked if I could prepare the report.",
    keys: ["said that", "was", "would"]
  }
},
{
  d: 32, t: "Dear Sir/Madam", tg: "Professional Email English",
  w: [
    ["regarding", "pathi / sambandhamaa", "I am writing regarding the job opening."],
    ["attached", "inaikkappattulladhu", "Please find my resume attached."],
    ["request", "vendugol", "I request you to grant me leave."],
    ["regards", "vaazhthukkal (email mudivu)", "Best regards, Arun."],
    ["at your earliest convenience", "ungalukku mudinja seekiram", "Please reply at your earliest convenience."]
  ],
  g: {
    h: "Email skeleton",
    story: [
      "Email = 5 part sandwich.",
      "1. Subject line: chinna ah, clear ah. 'Application for Sales Executive Role'.",
      "2. Greeting: 'Dear Sir/Madam,' or 'Dear Mr. Kumar,'.",
      "3. Purpose (first line): 'I am writing to apply for...' / 'I am writing regarding...'",
      "4. Details + request: 2-3 lines. 'Please find my resume attached.'",
      "5. Closing: 'Thank you for your time. Best regards, [Name], [Phone]'."
    ],
    f: "Subject → Dear ___ → I am writing to/regarding ___ → Details → Thank you → Regards",
    ex: [
      ["I am writing to apply for the post of Accountant.", "Accountant velaikku apply panna ezhudhuren."],
      ["Please find my resume attached.", "En resume inaichirukken."],
      ["I look forward to hearing from you.", "Unga badhilukkaaga kaathirukkiren."],
      ["Kindly let me know if you need any more details.", "Innum details venum na sollunga."]
    ],
    tip: "'PFA' maadhiri short form venaam, full ah ezhudhu: 'Please find attached'. 'Revert back' venaam, 'reply' podhum."
  },
  q: [
    ["Best first line for job email?", ["Hi bro, need job.", "I am writing to apply for the post of Clerk.", "Job venum sir.", "Give me job please."], 1, "Formal + clear purpose."],
    ["Best closing?", ["Bye.", "Ok thanks.", "Thank you for your time. Best regards, Arun.", "Reply fast."], 2, "Thank you + Regards + Name."]
  ],
  s: {
    p: "Say out loud a short email applying for a job. Include subject, greeting, purpose, attachment and closing.",
    help: "Follow the 5-part skeleton above.",
    sample: "Subject: Application for Customer Support role. Dear Sir or Madam, I am writing to apply for the Customer Support role at your company. I have one year of experience in a call centre. Please find my resume attached. Thank you for your time. Best regards, Arun.",
    keys: ["dear", "i am writing", "attached", "regards"]
  }
},
{
  d: 33, t: "Mistake Busters", tg: "Indians common ah pannra thappu",
  w: [
    ["discuss", "pesi aalosi (about venaam)", "Let's discuss the plan."],
    ["reply", "badhil sollu", "Please reply soon."],
    ["myself", "naane (intro ku illa)", "I did it myself."],
    ["passed out", "mayakkam (graduated illa!)", "I graduated in 2022."],
    ["prepone", "Indian word, use pannaadha", "Can we move the meeting earlier?"]
  ],
  g: {
    h: "Top 6 mistakes, fix pannu",
    story: [
      "Indha thappu ellaam naama dhinamum kekkurom, adhanaala correct nu nenaikkurom. Interview la idhu ellaam note pannuvaanga.",
      "1. 'Myself Arun' ✗ → 'I am Arun' / 'My name is Arun' ✓",
      "2. 'I passed out in 2022' ✗ (mayangi vizhundhen nu artham!) → 'I graduated in 2022' ✓",
      "3. 'Discuss about' ✗ → 'discuss' ✓ (about venaam)",
      "4. 'Revert back' ✗ → 'reply' ✓",
      "5. 'I am having 2 years experience' ✗ → 'I have 2 years of experience' ✓",
      "6. 'Do the needful' ✗ (old) → 'Please do what is needed' / 'Please help with this' ✓"
    ],
    f: "Simple + correct > Fancy + wrong",
    ex: [
      ["I am Priya, from Salem.", "'Myself Priya' badhilaa."],
      ["I completed my B.E. in 2023.", "'Passed out' badhilaa."],
      ["We discussed the problem.", "'Discussed about' badhilaa."],
      ["I have two years of experience in sales.", "'I am having' badhilaa."]
    ],
    tip: "Doubt ah irundhaa simple ah sollu. Simple English thaan smart English."
  },
  q: [
    ["Best intro?", ["Myself Ravi.", "Myself is Ravi.", "I am Ravi.", "Me Ravi."], 2, "'I am Ravi' or 'My name is Ravi'."],
    ["Correct one?", ["We discussed about salary.", "We discussed salary.", "We discussing about salary.", "We discuss about salary."], 1, "discuss + object, no 'about'."]
  ],
  s: {
    p: "Introduce your education correctly, avoiding all 6 mistakes.",
    help: "Use: I am... / I graduated in... / I have ... years of experience...",
    sample: "Good morning. I am Arun. I graduated in mechanical engineering in 2022 from Anna University. I have one year of experience as a trainee in a car company.",
    keys: ["i am", "graduated", "i have"]
  }
},
{
  d: 34, t: "Look Up, Give Up!", tg: "Phrasal verbs: verb + chinna word",
  w: [
    ["look for", "thedu", "I am looking for a job."],
    ["give up", "vittu kodu / quit", "Never give up."],
    ["carry on", "thodarndhu sei", "Carry on with your work."],
    ["find out", "kandupidi / therinjuko", "I will find out the reason."],
    ["take over", "poruppu edu", "She took over the project."]
  ],
  g: {
    h: "Phrasal verbs",
    story: [
      "Verb + chinna word (up, on, off, out, for) = pudhu artham! Idhu native speakers favourite.",
      "look = paaru. look FOR = thedu. look AFTER = paathuko (care). look FORWARD to = aavalaa kaathiru.",
      "turn ON = on pannu. turn OFF = off pannu. set UP = amai. fill IN / fill OUT = form fill pannu.",
      "Office la: follow up (thirumba check pannu), back up (support / copy), sort out (solve pannu)."
    ],
    f: "Verb + particle (up/on/off/out/for/after) = new meaning",
    ex: [
      ["I look after my parents.", "En parents ah naan paathukkiren."],
      ["I look forward to working with you.", "Ungaloda vela seyya aavalaa irukken."],
      ["Please fill out this form.", "Indha form ah fill pannunga."],
      ["I will follow up with the client.", "Client kitta thirumba check pannuven."]
    ],
    tip: "Interview mudivu la: 'I look forward to hearing from you.' Nalla impression kudukkum."
  },
  q: [
    ["I am ___ a new house. (searching)", ["looking after", "looking for", "looking up", "looking on"], 1, "look for = thedu."],
    ["Don't ___! You can do it.", ["give up", "give in to", "take up", "set up"], 0, "give up = quit pannaadha."]
  ],
  s: {
    p: "Talk about your week using 4 phrasal verbs (look for, find out, set up, follow up, carry on...).",
    help: "Example: This week I set up... I found out... I will follow up...",
    sample: "This week I set up a new email account. I am looking for a job in banking. I found out about two openings online. Tomorrow I will follow up with the HR team. I will carry on practising English.",
    keys: ["looking for", "found out", "follow up", "set up"]
  }
},
{
  d: 35, t: "In the Meeting", tg: "Meeting la confident ah pesu",
  w: [
    ["agenda", "pesa vendiya vishayangal list", "What is today's agenda?"],
    ["suggest", "yosanai sollu", "I suggest we start early."],
    ["clarify", "thelivu paduthu", "Could you clarify that point?"],
    ["update", "latest nilai", "Let me give a quick update."],
    ["deadline", "kadaisi thedhi", "The deadline is Friday."]
  ],
  g: {
    h: "Meeting phrases toolkit",
    story: [
      "Meeting la amaidhiya irundhaa yaarum notice panna maattaanga. Indha phrases vachu chinna chinna ah pesa start pannu.",
      "Update kudukka: 'Let me give a quick update.' / 'So far, we have completed...'",
      "Idea solla: 'I suggest that we...' / 'How about ...ing?' / 'What if we...?'",
      "Puriyalanna: 'Could you clarify that?' / 'Just to confirm, you mean...?'",
      "Interrupt panna (politely): 'Sorry to interrupt, but...' / 'Can I add something?'"
    ],
    f: "Update → Suggest → Clarify → Agree / Add",
    ex: [
      ["So far, we have completed 70% of the work.", "Ippo varaikkum 70% vela mudichittom."],
      ["How about using WhatsApp for updates?", "Updates ku WhatsApp use pannalaame?"],
      ["Just to confirm, the deadline is Friday?", "Confirm panna, deadline Velli thaane?"],
      ["Sorry to interrupt, can I add one point?", "Mannikkavum, oru point add pannalaamaa?"]
    ],
    tip: "'How about' ku apram verb+ing: 'How about meeting tomorrow?'"
  },
  q: [
    ["Polite way to interrupt?", ["Stop talking.", "Sorry to interrupt, but can I add something?", "Wait wait.", "Listen to me."], 1, "Sorry + request."],
    ["How about ___ a break?", ["take", "taking", "to take", "took"], 1, "How about + V-ing."]
  ],
  s: {
    p: "Give a 30-second update in a team meeting: what is done, what is pending, one suggestion.",
    help: "Use: Let me give a quick update... So far... We still need to... I suggest...",
    sample: "Let me give a quick update. So far, we have finished the design. We still need to test the app. The deadline is Friday, so I suggest that we start testing tomorrow.",
    keys: ["update", "so far", "suggest"]
  }
},
{
  d: 36, t: "Before That, I Had...", tg: "Past Perfect: past kulla past",
  w: [
    ["before", "munnaadi", "I had eaten before he came."],
    ["by the time", "andha nerathukulla", "By the time I reached, the bus had left."],
    ["earlier", "munnaadiye", "I had met her earlier."],
    ["previously", "ithukku munnaadi", "Previously, I had worked in a bank."],
    ["realised", "purinjudhu", "I realised I had forgotten my phone."]
  ],
  g: {
    h: "had + V3",
    story: [
      "Rendu past action irukku. Edhu FIRST nadandhuchu nu kaatta past perfect. Mudhal action = had + V3. Rendaavadhu = V2.",
      "'Naan station ku poradhukku munnaadiye train poyiduchu' = 'When I reached the station, the train HAD LEFT.'",
      "Story telling ku romba useful: 'I had never seen snow before I went to Manali.'",
      "Ellaarukkum 'had' same. Easy!"
    ],
    f: "Earlier action: had + V3   |   Later action: V2",
    ex: [
      ["When I arrived, the movie had started.", "Naan varumbodhu padam start aagiduchu."],
      ["She had finished her work before 6.", "6 manikku munnaadiye vela mudichittaa."],
      ["I had never flown before 2023.", "2023 ku munnaadi flight la ponadhe illa."],
      ["He realised he had lost his wallet.", "Wallet tholainjudhu nu avanukku purinjudhu."]
    ],
    tip: "Interview story: 'Before I joined this company, I had worked as a trainee for six months.'"
  },
  q: [
    ["By the time we reached, the show ___.", ["started", "has started", "had started", "starts"], 2, "First action → had + V3."],
    ["I ___ never seen the sea before I went to Chennai.", ["have", "had", "was", "did"], 1, "Past kulla past → had."]
  ],
  s: {
    p: "Tell a story: something that had already happened when you arrived somewhere.",
    help: "Use: When I reached..., ... had already... / I realised that I had...",
    sample: "Last month I went to my friend's wedding. When I reached the hall, the ceremony had already started. I realised that I had forgotten the gift at home. My friend laughed and said it was okay.",
    keys: ["had", "when i", "already"]
  }
},
{
  d: 37, t: "Tell Me About Yourself", tg: "Interview oda No.1 question",
  w: [
    ["background", "pinnani (padippu, ooru)", "I come from a farming background."],
    ["currently", "thatpodhu", "Currently, I am working as a sales executive."],
    ["passionate", "romba aarvam", "I am passionate about technology."],
    ["eager", "aavalaa", "I am eager to learn."],
    ["contribute", "pangalippu sei", "I want to contribute to your team."]
  ],
  g: {
    h: "Present → Past → Future formula",
    story: [
      "Indha question ku 1 minute answer podhum. Full life story venaam!",
      "PRESENT: Ippo nee yaaru? 'I am Arun, currently working as... / a recent graduate in...'",
      "PAST: Padippu + experience + oru achievement. 'I completed... I worked at... I achieved...'",
      "FUTURE: Yen indha job? 'Now I am looking for a role where I can... I am excited about this opportunity because...'",
      "Family details, hobbies romba venaam. Job ku sambandhamaanadhu mattum."
    ],
    f: "Present (who I am) → Past (education, experience, achievement) → Future (why this job)",
    ex: [
      ["I am Priya, a commerce graduate from Salem.", "Present"],
      ["I completed my B.Com in 2023 and worked as an accounts intern for six months.", "Past"],
      ["During my internship, I handled GST filing for 20 clients.", "Achievement"],
      ["Now I am looking for an accounts role where I can grow and contribute.", "Future"]
    ],
    tip: "Smile pannu, eye contact kudu, 60-90 seconds la mudi. Mug pannaadha, structure ah nyabagam vachuko."
  },
  q: [
    ["'Tell me about yourself' ku best start?", ["Myself Ravi, my father name is...", "I was born in 1999 in a hospital...", "I am Ravi, a computer science graduate with one year of experience in web development.", "What do you want to know?"], 2, "Present: name + role + key skill."],
    ["Edhu sollave venaam?", ["Your degree", "Your key skill", "Your full family members list", "Why you want the job"], 2, "Job ku sambandham illadhadhu skip pannu."]
  ],
  s: {
    p: "Answer: 'Tell me about yourself.' Use Present → Past → Future in about 1 minute.",
    help: "I am... currently... I completed... I worked/achieved... Now I am looking for...",
    sample: "Good morning. I am Arun, a mechanical engineering graduate from Coimbatore. I completed my degree in 2022 with 78 percent. After that, I worked as a production trainee at a pump company for one year, where I reduced waste by ten percent in my line. I am good at teamwork and I learn quickly. Now I am looking for a quality engineer role where I can grow and contribute to your company.",
    keys: ["i am", "completed", "worked", "looking for"]
  }
},
{
  d: 38, t: "Strengths & Weaknesses", tg: "Unna pathi nermaiya, smart ah",
  w: [
    ["strength", "balam", "My biggest strength is patience."],
    ["weakness", "balaveenam", "My weakness is public speaking."],
    ["quick learner", "seekiram kathukkuravar", "I am a quick learner."],
    ["working on", "sari pannittu irukken", "I am working on my time management."],
    ["feedback", "karuthu / review", "I take feedback positively."]
  ],
  g: {
    h: "Strength = Claim + Proof. Weakness = Real + Fixing",
    story: [
      "STRENGTH: Verum 'I am hardworking' nu sonna podhaadhu. Proof (example) kudu: 'I am hardworking. In college, I did a part-time job and still scored 80%.'",
      "WEAKNESS: 'I have no weakness' nu sollaadha (over-confident). 'I work too hard' um cliché.",
      "Real weakness sollu, job ah bayangaramaa affect pannaadhadhu, plus adha eppadi improve pannra nu sollu: 'I used to be nervous speaking in English, so I practise 30 minutes every day.'",
      "Indha app eh unga proof thaan! 😄"
    ],
    f: "Strength: I am ___. For example, ___.   |   Weakness: I used to ___, so now I ___.",
    ex: [
      ["My strength is problem solving. For example, I fixed a billing error that saved ₹20,000.", "Claim + proof"],
      ["I am a quick learner. I learned Tally in two weeks.", "Claim + proof"],
      ["I used to hesitate to speak in English, so I practise every day and it is improving.", "Weakness + fix"],
      ["Sometimes I take on too many tasks, so now I use a to-do list.", "Weakness + fix"]
    ],
    tip: "Weakness answer la positive ending kandippa irukkanum: '...and I have improved a lot.'"
  },
  q: [
    ["Best weakness answer?", ["I have no weakness.", "I am lazy.", "I used to be shy in meetings, so I joined a speaking club and now I share ideas.", "I get angry easily."], 2, "Real + improvement."],
    ["Strong strength answer has:", ["Only adjectives", "Claim + example", "A long story about family", "Salary demand"], 1, "Proof illama claim weak."]
  ],
  s: {
    p: "Answer: 'What are your strengths and weaknesses?' Give one strength with proof, and one weakness with improvement.",
    help: "My biggest strength is... For example... One weakness is... so I...",
    sample: "My biggest strength is that I am a quick learner. For example, I learned Excel formulas in two weeks and made a sales report for my team. One weakness is that I used to be nervous speaking in English. So I practise thirty minutes every day, and I feel much more confident now.",
    keys: ["strength", "for example", "weakness", "so i"]
  }
},
{
  d: 39, t: "Why Should We Hire You?", tg: "Unna sell pannu, mariyaadhaiya",
  w: [
    ["suitable", "porutthamaana", "I am suitable for this role."],
    ["requirement", "thevai", "My skills match your requirement."],
    ["reputation", "nalla peyar", "Your company has a good reputation."],
    ["growth", "valarchi", "I see good growth here."],
    ["value", "mathippu / payan", "I can add value to your team."]
  ],
  g: {
    h: "Match formula",
    story: [
      "'Why should we hire you?' = 'Unga thevaikkum en thiramaikkum enna match?'",
      "Step 1: Job ku enna venum nu sollu (job description la irundhu). Step 2: Unkitta adhu irukku nu proof. Step 3: Extra value (attitude).",
      "'Why this company?' ku: company pathi research pannu. 'I know your company is known for...' + 'I want to grow in...'",
      "Mattavangala kevalama pesaadha. Un balatha mattum sollu."
    ],
    f: "You need ___ → I have ___ (proof) → Plus I bring ___ (attitude)",
    ex: [
      ["You need someone good with customers. I handled 50 calls a day in my last job.", "Need → proof"],
      ["I am also punctual and I learn quickly.", "Extra value"],
      ["I know your company is a leader in solar energy.", "Why this company"],
      ["I want to grow with a company that values learning.", "Future fit"]
    ],
    tip: "'Because I need a job' nu mattum sollaadha. Avangalukku unna vachu enna labam nu sollu."
  },
  q: [
    ["Best answer start for 'Why should we hire you?'", ["Because I need money.", "Because my skills match what this role needs.", "Because others are not good.", "I don't know."], 1, "Match + proof."],
    ["'Why this company?' ku mukkiyam:", ["Salary only", "Company research", "Office distance", "Free food"], 1, "Research kaatanum."]
  ],
  s: {
    p: "Answer: 'Why should we hire you?' Use Need → Proof → Extra value.",
    help: "This role needs... I have... For example... Also, I am...",
    sample: "This role needs someone who can talk to customers and solve their problems. I have one year of experience in customer support, where I handled more than fifty calls a day and got good ratings. Also, I am punctual, I learn quickly and I stay calm under pressure. I believe I can add value to your team from day one.",
    keys: ["this role needs", "i have", "experience", "also"]
  }
},
{
  d: 40, t: "The STAR Story", tg: "Project / experience questions",
  w: [
    ["situation", "soozhnilai", "The situation was difficult."],
    ["task", "en vela / poruppu", "My task was to finish the report."],
    ["action", "naan senjadhu", "I took quick action."],
    ["result", "mudivu", "As a result, sales went up."],
    ["responsible for", "poruppaaga irundhen", "I was responsible for billing."]
  ],
  g: {
    h: "STAR method",
    story: [
      "'Tell me about a challenge' / 'Explain your project' maadhiri kelvikku STAR oru super structure.",
      "S = Situation: enga, eppo, enna problem. T = Task: un poruppu enna. A = Action: NEE enna senja (I, we illa!). R = Result: enna aachu, number irundhaa best.",
      "Past tense (V2) la sollu: I noticed, I created, I solved.",
      "Result la number sollu: '20% faster', '₹10,000 saved', '50 customers'."
    ],
    f: "Situation → Task → Action (I ___) → Result (number)",
    ex: [
      ["S: In my final year, our project team had only two weeks left.", "Situation"],
      ["T: I was responsible for the database part.", "Task"],
      ["A: I made a daily plan and worked with my friend at night.", "Action"],
      ["R: We finished on time and got an A grade.", "Result"]
    ],
    tip: "Action part la 'we' badhilaa 'I' adhigam use pannu. Interviewer ku NEE enna panna nu theriyanum."
  },
  q: [
    ["STAR la 'A' = ?", ["Answer", "Action", "Ability", "Agenda"], 1, "Action: nee enna senja."],
    ["Strong 'Result' edhu?", ["It was good.", "Everyone was happy.", "We reduced complaints by 30% in two months.", "Nothing happened."], 2, "Number + time."]
  ],
  s: {
    p: "Answer: 'Tell me about a challenge you faced.' Use S-T-A-R.",
    help: "The situation was... My task was... So I... As a result...",
    sample: "In my last job, our shop had many customer complaints about late delivery. My task was to fix the delivery schedule. I made a simple Excel sheet to track orders and called customers to update them. As a result, complaints came down by thirty percent in two months.",
    keys: ["situation", "my task", "as a result"]
  }
},
{
  d: 41, t: "Stay Calm, Speak Smart", tg: "Theriyaadha kelvi vandhaa enna pannradhu",
  w: [
    ["honestly", "nermaiyaa", "Honestly, I haven't used that software."],
    ["familiar", "pazhakkamaana", "I am familiar with MS Office."],
    ["moment", "oru nimisham", "Let me think for a moment."],
    ["willing", "thayaaraa", "I am willing to learn it."],
    ["confident", "thannambikkai", "I am confident I can learn it quickly."]
  ],
  g: {
    h: "Freeze aagaama irukka phrases",
    story: [
      "Mind blank aanaa amaidhiyaa irukkaadha, 'umm... aaah...' um adhigam venaam. Time vaangura smart phrases irukku.",
      "Time vaanga: 'That's a good question. Let me think for a moment.'",
      "Puriyalanna: 'Could you please explain what you mean by...?'",
      "Theriyaadhu na (nermaiyaa + positive): 'Honestly, I haven't worked on that yet, but I am a quick learner and I am willing to learn it.'",
      "Bluff pannaadha! Interviewer ku udane theriyum."
    ],
    f: "Pause phrase → Honest answer → Positive bridge (but I can learn / similar thing I did)",
    ex: [
      ["That's an interesting question. Let me think.", "Time vaangu"],
      ["Do you mean ... or ...?", "Clarify"],
      ["I haven't used SAP, but I have used Tally, so I can learn SAP quickly.", "Honest + bridge"],
      ["I'm not sure, but I think the answer is...", "Guess politely"]
    ],
    tip: "Slow ah pesu. Fast ah pesinaa dhaan mistakes varum. Slow = confident."
  },
  q: [
    ["Theriyaadha tool pathi kettaa best answer?", ["Yes, I know it very well. (bluff)", "No.", "I haven't used it yet, but I learn fast and have used a similar tool.", "Why are you asking?"], 2, "Honest + positive bridge."],
    ["Mind blank aanaa sollalaam:", ["Umm umm umm...", "Let me think for a moment.", "Next question.", "I don't know anything."], 1, "Smart pause."]
  ],
  s: {
    p: "Interviewer asks: 'Do you know Power BI?' You don't. Give an honest, positive answer.",
    help: "Honestly, I haven't... but I have... I am willing to...",
    sample: "That's a good question. Honestly, I haven't used Power BI yet. But I am good at Excel, and I have made charts and pivot tables for my team. I am confident I can learn Power BI quickly, and I am willing to take a course.",
    keys: ["honestly", "but", "willing", "learn"]
  }
},
{
  d: 42, t: "Salary & Last Questions", tg: "Kadaisi round kelvigal",
  w: [
    ["expectation", "ethirpaarppu", "My salary expectation is 3 to 3.5 lakhs."],
    ["negotiable", "pesi mudivu pannalaam", "The salary is negotiable."],
    ["notice period", "pazhaya company la vela vida theva padra naal", "My notice period is 30 days."],
    ["relocate", "vera ooruku shift aagu", "I am ready to relocate to Bangalore."],
    ["shift", "vela neram (shift)", "I am okay with night shifts."]
  ],
  g: {
    h: "Salary, notice, relocation, your questions",
    story: [
      "SALARY: Market range theriyanum. 'Based on my skills and market standards, I expect between 3 and 3.5 lakhs per year, but it is negotiable.'",
      "NOTICE: 'I can join immediately' (fresher) or 'My notice period is 30 days.'",
      "RELOCATE / SHIFTS: Nermaiyaa, positive ah: 'Yes, I am open to relocation.'",
      "'Any questions for us?' ku 'No' sollaadha! Kelu: 'What does a typical day look like in this role?' / 'What skills should I improve to succeed here?'"
    ],
    f: "Range + reason + negotiable  |  Always ask 1-2 smart questions at the end",
    ex: [
      ["I am a fresher, so I am open to the company's standard package.", "Fresher salary"],
      ["I can join within two weeks.", "Joining"],
      ["Yes, I am comfortable with rotational shifts.", "Shifts"],
      ["What is the next step in the process?", "Smart question"]
    ],
    tip: "First interview la leave, holidays pathi mattum kekkaadha. Role, learning, growth pathi kelu."
  },
  q: [
    ["'Do you have any questions?' best reply?", ["No.", "How many leaves?", "What does success look like in this role in the first six months?", "When is lunch?"], 2, "Role-focused question."],
    ["Salary answer la irukkanum:", ["Only 'any amount'", "Range + reason + negotiable", "Double of last salary, fixed", "Silence"], 1, "Professional + flexible."]
  ],
  s: {
    p: "Answer: 'What is your salary expectation and when can you join?' Then ask the interviewer one question.",
    help: "Based on... I expect... It is negotiable. I can join... May I ask...?",
    sample: "Based on my skills and the market standard, I expect around three lakhs per year, but it is negotiable. I can join within two weeks. May I ask what a typical day looks like in this role?",
    keys: ["expect", "negotiable", "join", "may i ask"]
  }
},
{
  d: 43, t: "Group Discussion", tg: "GD la pesi jeyikka",
  w: [
    ["initiate", "aarambi", "I would like to initiate the discussion."],
    ["perspective", "paarvai kōṇam", "From a student's perspective..."],
    ["add on", "serthu sollu", "I would like to add on to her point."],
    ["summarise", "churukkama sollu", "To summarise, we discussed three points."],
    ["conclude", "mudi", "Let me conclude the discussion."]
  ],
  g: {
    h: "GD game plan",
    story: [
      "GD la satham podravanga jeyikka maattaanga. Clear point + respect = win.",
      "START (initiate): 'Good morning everyone. I would like to start by saying that...'",
      "ADD: 'I agree with Ravi, and I would like to add that...'",
      "DISAGREE: 'That's a valid point, but from another perspective...'",
      "BRING BACK quiet person: 'Priya, what do you think?' (Leader quality!)",
      "END: 'To summarise, we discussed... Overall, we feel that...'"
    ],
    f: "Initiate → Point + Example → Add / Counter politely → Summarise",
    ex: [
      ["I would like to begin by defining the topic.", "Start"],
      ["Building on what Kavya said, technology also creates jobs.", "Add"],
      ["I respect your view, but the data shows something different.", "Counter"],
      ["To conclude, AI is useful if we use it responsibly.", "End"]
    ],
    tip: "Minimum 3 thadavai pesu, ovvoru thadavaiyum 20-30 seconds. Quality > quantity."
  },
  q: [
    ["Polite GD counter?", ["You are totally wrong.", "That's a valid point, but from another perspective...", "Stop it.", "No no no."], 1, "Respect + new view."],
    ["Leader quality GD la:", ["Talk all the time", "Invite quiet members to speak", "Shout louder", "Stay silent"], 1, "Others ah include pannu."]
  ],
  s: {
    p: "GD topic: 'Work from home is better than office.' Initiate, give 2 points with examples, and summarise.",
    help: "Good morning everyone. I would like to start... Firstly... Secondly... To summarise...",
    sample: "Good morning everyone. I would like to start the discussion. Firstly, work from home saves travel time. For example, many people in Chennai spend two hours in traffic daily. Secondly, office work is better for teamwork and learning. To summarise, I feel a hybrid model, with both home and office days, is the best option.",
    keys: ["i would like to", "firstly", "for example", "to summarise"]
  }
},
{
  d: 44, t: "What Would You Do?", tg: "Situational HR questions",
  w: [
    ["conflict", "sandai / karuthu vithyaasam", "I handled a conflict calmly."],
    ["pressure", "azhutham", "I can work under pressure."],
    ["prioritise", "mukkiyamaanadha munnaadi sei", "I prioritise urgent tasks first."],
    ["calmly", "amaidhiyaa", "I listened calmly."],
    ["solution", "theervu", "We found a solution together."]
  ],
  g: {
    h: "Situation answer = Listen → Think → Act → Learn",
    story: [
      "'Team member kooda sandai vandhaa enna pannuva?' maadhiri kelvi = un attitude test.",
      "LISTEN: 'First, I would listen to understand their view.'",
      "THINK: 'Then I would find the real problem.'",
      "ACT: 'I would talk privately and suggest a solution. If needed, I would involve my manager.'",
      "LEARN: 'This helps the team work better.' Would + V1 use pannu (imagination situation, Day 30 nyabagam irukkaa?)."
    ],
    f: "First, I would ___. Then, I would ___. If needed, I would ___. This helps ___.",
    ex: [
      ["First, I would stay calm and listen.", "Listen"],
      ["Then I would list tasks and do the urgent ones first.", "Prioritise"],
      ["If needed, I would ask my manager for guidance.", "Escalate politely"],
      ["Angry customer: I would apologise, understand the issue and solve it quickly.", "Customer"]
    ],
    tip: "Yaarayum blame pannaadha. 'Naan eppadi problem solve pannuven' nu mattum sollu."
  },
  q: [
    ["Two deadlines same day. Best answer?", ["I would panic.", "I would prioritise by urgency, plan my time and inform my manager early if needed.", "I would skip one.", "I would ask someone else to do both."], 1, "Prioritise + communicate."],
    ["Situational answer la mostly use aagura word:", ["would", "will have been", "did", "was"], 0, "Imagination → would + V1."]
  ],
  s: {
    p: "Answer: 'What would you do if a customer shouted at you?'",
    help: "First, I would... Then I would... If needed, I would... This helps...",
    sample: "First, I would stay calm and listen to the customer without interrupting. Then I would apologise for the trouble and understand the real problem. I would try to solve it quickly. If needed, I would involve my senior. This helps the customer trust our company again.",
    keys: ["first", "i would", "then", "calm"]
  }
},
{
  d: 45, t: "Final Boss: Mock Interview", tg: "Ellaame serthu, full interview!",
  w: [
    ["opportunity", "vaaippu", "Thank you for this opportunity."],
    ["dedicated", "arpanippu ulla", "I am dedicated to my work."],
    ["long-term", "neenda kaalam", "I am looking for a long-term career."],
    ["impression", "mudhal paarvai karuthu", "First impression matters."],
    ["selected", "therndhedukkappattavar", "I hope to be selected."]
  ],
  g: {
    h: "Interview day checklist",
    story: [
      "45 days la nee ellaam kathukitta: sentence train, tenses, V1-V2-V3, polite English, STAR. Inniki final boss battle!",
      "ENTRY: 'Good morning. May I come in?' → Smile, handshake / vanakkam, utkaarumbodhu 'Thank you.'",
      "ANSWERS: Day 37 (about yourself), 38 (strength/weakness), 39 (why hire), 40 (STAR), 41 (don't know), 42 (salary), 44 (situations).",
      "EXIT: 'Thank you for your time. I look forward to hearing from you.'",
      "Mistake pannaa paravaa illa, smile panni continue pannu. Confidence > perfect grammar."
    ],
    f: "Greet → About me → Strengths → Why hire → STAR story → Questions → Thank you",
    ex: [
      ["Good morning, sir. May I come in?", "Entry"],
      ["Thank you for giving me this opportunity.", "Start"],
      ["I look forward to hearing from you.", "Exit"],
      ["It was nice talking to you. Have a great day.", "Exit"]
    ],
    tip: "Interview ku munnaadi raathiri indha app la Days 37-44 speaking mission ellaam oru round practice pannu. You are ready! 🏆"
  },
  q: [
    ["Interview room entry best line?", ["Hi, I came.", "Good morning. May I come in?", "Can I sit?", "Hello boss."], 1, "Polite permission."],
    ["Interview exit best line?", ["Ok bye.", "Did I pass?", "Thank you for your time. I look forward to hearing from you.", "Call me soon."], 2, "Thank + look forward."]
  ],
  s: {
    p: "Full mock: Greet, tell about yourself, one strength with proof, why they should hire you, and a thank-you close. (2 minutes)",
    help: "Days 37, 38, 39 answers ah serthu, oru flow la pesu. Slow ah, smile oda.",
    sample: "Good morning, sir. Thank you for this opportunity. I am Arun, a commerce graduate from Salem with one year of experience in accounts. My biggest strength is accuracy. For example, I found and fixed billing errors that saved my company twenty thousand rupees. This role needs someone careful with numbers and good with people, and I have both skills. I am a quick learner and I am looking for a long-term career here. Thank you for your time. I look forward to hearing from you.",
    keys: ["good morning", "i am", "strength", "thank you", "look forward"]
  }
}
]);
