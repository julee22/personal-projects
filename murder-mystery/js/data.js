const characters = {
  A: {
    name: "Allison",
    phonePass: "",
    password: "10",
    personalDetails: {
      gender: "Female",
      birthDate: "1996-11-09",
      age: 29,
      relStatus: ["Dating Doug for 7 years."],
    },
    personality: ["Arrogant", "Spoiled", "Lavish lifestyle"],
    work: "Heiress to a car manufacturer business. Currently unemployed.",
    other: ["Grew up in Rich Town","Likes street racing. Was once part of a street racing club.","Receives a $5,000 monthly allowance"],
    history: [
      {
        title: 'The Accident',
        description: `On December 8, 2017, after your parents took your car keys to stop you from street racing, you snuck out to borrow Host Gen’s car. While racing through the mountains of Mid Village, a text from your parents warning they’d cut off your allowance distracted you — you nearly hit a girl in a blue dress, but another girl pushed her away, taking the hit and tumbling off a cliff. The girl in the blue dress was knocked unconscious. Shaken, you returned the car to Host Gen, who spotted the damage and demanded the truth. She agreed to keep quiet in exchange for $4,000 a month and told you to scrap the car. You’ve never raced since.`,
      },
    ],
    whyYouHere: `Recently, your parents are cracking down on your spending and want you to prove you can handle more responsibility. They told you to learn from your manager friend, Host Gen. You decided to visit Lover’s Retreat with your boyfriend and potentially talk to Host Gen about ending the $4,000 payments.`,
    dayOfTheMurder: [
      "Parents threatened to cut you off if you cause any problems.",
      "Parents discovered that you have been sending money to someone.",
      "Confronted Host Gen about $4,000 but was rejected.",
      "Blackmailed by Host Gen with a black box recording of the Accident.",
      "Snuck into Host Gen's room to steal black box recording."
    ],
    motives: [
      "Is getting blackmailed by G.",
      "If you stop paying, Host Gen will report the Accident to the police.",
      "Your parents may disinherit you."
    ],
    relationships: {
      G: {
        name: "Host Gen",
        personalDetails: {
          gender: "Female",
          birthDate: "1996-07-02",
          age: 29,
          relStatus: ["Longtime friends","Older sister of Sick Harry"],
        },
        other: ["Grew up in Mid Village"],
        work: "Manager for Lover’s Retreat",
        impression: `Stuck-up and stuffy. Lifestyle differences cause friction. Fiercely devoted to Sick Harry. Used to be easier to deal with`,
        history: [
          {
            title: `Harry's Coma`,
            description: `Host Gen's brother, Sick Harry, has been in a coma for 9 years due to unknown reasons. Host Gen claims to use the money to pay for his hospital bills.`
          },
          {
            title: 'The Accident',
            description: `Host Gen helped cover up the accident and is the only person who knows. Currently being paid $4,000 monthly to keep the secret. Because of this, you have not been living comfortably and are worried that your parents will find out. Caused Host Gen to become more arrogant.`
          }
        ],
        dayOfTheMurder: [
          "Is actively investigating Sick Harry's accident.",
          "Discovered that Host Gen kept the black box recording of the accident.",
          "Threatened to go to the cops if the $4,000 payments are stopped."
        ]
      },

      D: {
        name: "Doug",
        personalDetails: {
          gender: "Male",
          birthDate: "1990-02-14",
          age: 35,
          relStatus: "Dating Allison",
        },
        other: ["Has a tattoo."],
        work: "Owner of CGG (Cars Gotta Go), a scrapyard business",
        impression: "An alpha male. The rugged beast to your beauty. Treats you like a princess. ",
        history: [
          {
            title: 'Love at first sight',
            description: `Met when you were disposing of Host Gen's car from the Accident and immediately hit it off. Never told him about The Accident nor your past street racing hobby. Parents only mildly approve of him.`}
        ],
        dayOfTheMurder: [
          "Seemed a little stressed.",
          "Kept looking at their phone for work related reasons."
        ]
      },

      B: {
        name: "Brodie",
        personalDetails: {
          gender: "Male",
          birthDate: "1992-01-01",
          age: 33,
          relStatus: ["First time meeting at the Retreat","Dating Evelyn."],
        },
        other: ["N/A"],
        work: "Prosecutor",
        impression: "Passionate, protective, straight-laced man.",
        dayOfTheMurder: []
      },

      C: {
        name: "Carl",
        personalDetails: {
          gender: "Male",
          birthDate: "1998-01-01",
          age: 27,
          relStatus: ["First time meeting at the Retreat","Dating Faye."],
        },
        other: ["N/A"],
        work: "Contract worker",
        impression: "Easily spooked man. Not worth your attention.",
        dayOfTheMurder: []
      },

      E: {
        name: "Evelyn",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["First time meeting at the Retreat","Dating Brodie."],
        },
        other: ["N/A"],
        work: "Pharmacist",
        impression: "Strict and gloomy woman. Seems very prideful.",
        dayOfTheMurder: []
      },

      F: {
        name: "Faye",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["First time meeting at the Retreat","Dating Carl."],
        },
        other: ["N/A"],
        work: "N/A",
        impression: `Timid and quiet. A little airheaded. Seems not quite right in the head.`,
        dayOfTheMurder: [
          "Faye was upset at G. You didn’t know they knew each other."
        ]
      }
    },
    timeline: [
      {
        time: "1:00 PM",
        events: [
          "Went out to have lunch with Doug.",
          "Your parents text to warn you to learn the value of money if you want to inherit the business, and to avoid street racing or scandals.",
        ]
      },
      {
        time: "2:10 PM",
        events: [
          "Returned from lunch with Doug.",
          "Doug takes a private work call in your room.",
          "Went to find Host Gen."
        ]
      },
      {
        time: "2:15 PM",
        events: [
          "Went to Host Gen's room and confronted her about the monthly $4,000 payment. Threatened her saying 'Don't forget what you also did 8 years ago!'",
        ]
      },
      {
        time: "3:00 PM",
        events: [
          "Host Gen gets a call about Sick Harry and tells you to leave.",
          "Decided to go out stress shopping & texted Doug.",
          "Saw Carl in the kitchen.",
        ]
      },
      {
        time: "4:00 PM",
        events: [
          "Credit card gets declined so you call your parents.",
          "Your parents say that they won’t give you more allowance for this month."
        ]
      },
      {
        time: "4:15 PM",
        events: [
          "Returned angrily from shopping with nothing.",
          "Passed by Brodie in the kithen",
          "Found a threatening letter about recording recording evidence from Host Gen in bedside table.",
          "Decided to steal the recording.",
          "Ripped up and threw out the letter then got ready for dinner."
        ]
      },
      {
        time: "5:00 PM",
        events: [
          "Doug returns to your room to shower before dinner.",
          "Waited for Doug to enter the shower then left room for Host Gen's."
        ]
      },
      {
        time: "5:05 PM",
        events: [
          "Snuck into Host Gen's room to steal the blackbox recording. Door was unlocked."
        ]
      },
      {
        time: "5:45 PM",
        events: [
          "Found blackbox recording.",
          "Left Host Gen's room and returned to room to hide the blackbox recording with the letter.",
          "Passed by Evelyn in the hall."
        ]
      },
      {
        time: "6:00 PM",
        events: [
          "Kitchen staff call Host Gen regarding drinks for dinner and discover body."
        ]
      }
    ]
  },
  B: {
    name: "Brodie",
    phonePass: "",
    password: "20",
    personalDetails: {
      gender: "Male",
      birthDate: "1992-01-01",
      age: 29,
      relStatus: ["Older brother of Cadie","Dating Evelyn for 7 years."],
    },
    personality: ["Protective", "Takes work very seriously", "Jaded by the justice system"],
    work: "Criminal Prosecutor",
    other: ["Grew up in Mid Village", "Stresses about losing criminal cases"],
    history: [
      {
        title: 'Raising your sister',
        description: `Your parents died young, so you raised your sister Cadie, eight years younger. Over protective and strict, you often argued. You bought her a cloud keychain for her nickname, “Cloud.”`,
      },
      {
        title: 'Missing Sister - Hit-and-Run',
        description: `On December 8, 2017, you fought with Cadie, and she ran away from home. You assumed she was at her friend Evelyn’s, but when neither could be reached, you reported them missing. The next day, police said Evelyn was in a suspected hit-and-run. At the hospital, Evelyn could only recall someone yelling “watch out” and seeing a red car before blacking out. Your sister wasn’t found, and her case was closed as a runaway due to lack of evidence. However, you always believed Cadie actually died in the hit-and-run accident. You spent over a year searching for your sister with Evelyn in vain.`,
      },
    ],
    whyYouHere: `Recently, you and Evelyn have been depressed. You lost a reopened criminal case. Evelyn was mistakenly invited, then uninvited, from an alumni gathering of surgeon friends. Additionally, the anniversary of Cadie’s disappearance is approaching. You booked this Lover’s Retreat to help both of you relax. `,
    dayOfTheMurder: [
      "Discovered Host Gen used to own a red Mercedes.",
      "Evelyn shared a recording of Host Gen and Allison arguing about a hit-and-run.",
      "Snuck into Host Gen's room and saw evidence proving Cadie was hit by Host Gen's car",
      "Saw that Host Gen has Cadie's cloud keychain",
      "Stole Evelyn's muscle relaxant medicine",
      "Murdered Host Gen - Waited for Host Gen in garage, knocked out Host Gen using the muscle relaxant, unlocked her car, put her in the backseat, turned the engine on, and locked the keys inside the car.",
      "Retrieved Cadie's cloud keychain and hid it in your luggage."
    ],
    motives: [
      "Revenge for your dead younger sister, Cadie.",
      "Revenge for girlfriend, Evelyn, who had to give up their dreams because of the hit-and-run.",
      "Feared you may never cross paths again"
    ],
    relationships: {
      G: {
        name: "Host Gen",
        personalDetails: {
          gender: "Female",
          birthDate: "1996-07-02",
          age: 29,
          relStatus: ["First time meeting at Lover's Retreat", "Murdered Cadie"],
        },
        other: ["Owned a red car", "Seems to have lived in Mid Village"],
        work: "Manager for Lover’s Retreat",
        impression: `Originally, a normal rule-abiding woman. After, angry this murderer is living normally when they caused so much pain to my loved ones.`,
        history: [
          {
            title: `Missing Sister - Hit-and-Run`,
            description: `Discovered that Host Gen was behind the hit-and-run that caused Cadie to go missing and ruined Evelyn's dreams. Fought with Evelyn over reporting to the police (she wanted to call the cops but you don't trust them).`
          },
        ],
        dayOfTheMurder: [
          "Evelyn overheard and recorded Host Gen and Allison arguing about an accident 8 years ago.",
          "Found multiple clues (red Mercedes, blackbox recording, cloud keychain) that point to Host Gen being the driver in the hit-and-run.",
          "Killed Host Gen and reclaimed the cloud keychain."
        ]
      },
      E: {
        name: "Evelyn",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["Dating for 7 years","Best friend of younger sister, Cadie"],
        },
        other: ["Grew up in Mid Village", "Regularly attends weekly physiotherapy sessions for hand tremors", "Owns muscle relaxing medicine", "Dreamt of becoming a surgeon"],
        work: "Pharmacist",
        impression: `Strong-willed and prideful, but sensitive. Feel like kindred spirits. A bit cynical.`,
        history: [
          {
            title: `Missing Sister - Hit-and-Run`,
            description: `Direct witness and victim in the hit-and-run incident. You try not to blame her for not remembering much. The hit-and-run injured her hands, shattering her dream of becoming a surgeon. This remains a sensitive topic for her.`
          },
          {
            title: `Bonding over loss`,
            description: `For over a year, helped you search for Cadie. The only one who believed Cadie didn't just run away from home. Eventually got close and started dating.`
          },
        ],
        dayOfTheMurder: ["Depressed over pictures of surgeon alumni gathering", "Recorded Host G arguing with someone about an accident 8 years ago.", "Argued over reporting Host Gen to police", "Attended physiotherapy session"]
      },

      A: {
        name: "Allison", 
        personalDetails: {
          gender: "Female",
          birthDate: "1996-11-09",
          age: 29,
          relStatus: ["First time meeting at the Retreat","Dating Doug."],
        },
        other: ["N/A"],
        work: "Future heiress to a car manufacturing business.",
        impression: "Arrogant, spoiled.",
        dayOfTheMurder: ["Evelyn overheard and recorded Host Gen and Allison arguing about an accident 8 years ago.", "Was angry about something after returning from somewhere."]
      },

      D: {
        name: "Doug",
        personalDetails: {
          gender: "Male",
          birthDate: "1990-02-14",
          age: 35,
          relStatus: "Dating Allison",
        },
        other: ["N/A"],
        work: "Owner of CGG (Cars Gotta Go), a scrapyard business",
        impression: "Rough and gangster-like man.",
        dayOfTheMurder: [
          "Saw them in the kitchen once."
        ]
      },

      C: {
        name: "Carl",
        personalDetails: {
          gender: "Male",
          birthDate: "1998-01-01",
          age: 27,
          relStatus: ["First time meeting at the Retreat","Dating Faye."],
        },
        other: ["N/A"],
        work: "Contract worker",
        impression: "Seems constantly nervous.",
        dayOfTheMurder: ["Saw him leave the Retreat."]
      },

      F: {
        name: "Faye",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["First time meeting at the Retreat","Dating Carl."],
        },
        other: ["N/A"],
        work: "N/A",
        impression: `Timid and quiet. Nothing interesting`,
        dayOfTheMurder: []
      }
    },
    timeline: [
      {
        time: "1:00 PM",
        events: [
          "Host Gen left to buy groceries.",
          "Went out for lunch with Evelyn.",
        ]
      },
      {
        time: "2:00 PM",
        events: [
          "Host Gen returns to Resort.",
          "Returned to house with Evelyn and went to your room to watch a drama.",
          "Saw a picture of Host Gen posing beside a red Mercedes on the wall."
        ]
      },
      {
        time: "2:30 PM",
        events: [
          "Evelyn leaves to get water after getting a picture message of surgeon alumni gathering.",
        ]
      },
      {
        time: "3:00 PM",
        events: [
          "Evelyn returns and tells you she recorded an argument between Host Gen and someone about an accident 8 years ago; the recording mentioned evidence.",
          "Argued with Evelyn about reporting Host Gen immediately. You don't have the evidence and confronting her could lead her to run.",
        ]
      },
      {
        time: "3:15 PM",
        events: [
          "Angrily left to take a walk outside.",
        ]
      },
      {
        time: "3:30 PM",
        events: [
          "Saw Host Gen quickly leaving the Retreat and enter a black car.",
          "Saw Carl leave the Retreat",
          "Evelyn should be busy remotely attending a physiotherapy session for her hands.",
          "Snuck into Host Gen's room to find evidence; Host Gen's room was unlocked",
        ]
      },
      {
        time: "4:00 PM",
        events: [
          "Found a blackbox recording of the accident.",
          "Saw Host Gen has the same cloud keychain that you gave Cadie and decide to kill Host Gen for vengeance.",
        ]
      },
      {
        time: "4:15 PM",
        events: [
          "Saw Host Gen's car return to the Resort and left Host Gen's room.",
          "Went to kitchen to check Host Gen's posted schedule; saw she is planning on picking up drinks for dinner.",
          "Ate snacks to pass the time.",
          "An angry Allison passes by.",
        ]
      },
      {
        time: "4:30 PM",
        events: [
          "Doug arrived at the kitchen. Told him Allison seemed angry.",
          "Returned to your room; Evelyn is sleeping.",

        ]
      },
      {
        time: "4:45 PM",
        events: [
          "Stole some of Evelyn's muscle relaxant medicine.",
          "Left the room."
        ]
      },
      {
        time: "5:00 PM",
        events: [
          "Waited in the garage with a brick and blocked the car exhaust",
          "Heard someone opening and closing a door.",
          "Heard Host Gen talking to a female with a soft voice."
        ]
      },
      {
        time: "5:15 PM",
        events: [
          "Host Gen goes to garage to pick up drinks for dinner.",
          "Knocked out Host Gen with a brick, unlocked her car, and put her in the backseat.",
        ]
      },
      {
        time: "5:30 PM",
        events: [
          "Heard someone opening and closing a door again.",
          "Took Cadie's cloud keychain.",
          "Injected Host Gen with the muscle relaxant, turned on the engine, left the keys in the car and locked the door.",
        ]
      },
      {
        time: "5:45 PM",
        events: [
          "Returned to your room to shower and get ready for dinner.",
          "Evelyn leaves",
          "Hid the cloud keychain in your luggage."
        ]
      },
      {
        time: "6:00 PM",
        events: [
          "Kitchen staff call Host Gen regarding drinks for dinner and discover body."
        ]
      }
    ]
  },
  C: {
    name: "Carl 'Charlie'",
    phonePass: "",
    password: "30",
    personalDetails: {
      gender: "Male",
      birthDate: "1998-01-01",
      age: 29,
      relStatus: ["Dating Faye for 5 years."],
    },
    personality: ["Skittish","Cowardly","Guilt-ridden"],
    work: "Contract worker, Former drug dealer.",
    other: ["Lives with Faye", "Grew up in Poor Land", "Has gang tattoo", "Changed name from Charlie to Carl"],
    history: [
      {
        title: 'The Hit',
        description: `You used to deal drugs to a kid named Harry. 8 years ago, Harry texted that he wanted to stop and would report you to the police. Scared, you told your boss, Doug; they instructed you to scare Harry from snitching. On August 11, 2016, you and Doug tracked down Harry and beat him up. Harry ended up in a coma. Scared of being caught, you changed your name, hid your gang tattoo, and went into hiding, moving to a cottage in Mid Village.`,
      },
      {
        title: 'Finding Faye',
        description: `In December 2017, while hunting in the forest around Mid Village, you find an injured unconscious girl. You bring her home and nurse her back to health. She has amnesia so you name her Faye (like a fairy who appeared). Taking pity on her and feeling you can atone for your past, you let her stay. You gradually came to like each other and after confessing, started dating 5 years ago. To support your livelihood, you start doing manual labour contract jobs. The only clue about her identity is a cloud keychain that was found nearby; you've never shown this keychain to Faye because you're scared she will leave you if ever she gets her memories back.`,
      },
    ],
    whyYouHere: `Worried about your own and Faye's mysterious past, you try to remain hidden. However, Faye has always expressed wanting to travel. Recently, Doug called to tell you that Harry's family apparently got a lead regarding the Hit incident and the gang is not happy about it. Doug and you need to finish the job and tie up loose ends. He sent you the Lover's Resort tickets. You also hope this retreat satisfies Faye's travel desires.`,
    dayOfTheMurder: [
      "Snuck into Host Gen's room to find out if she has evidence.", 
      "Found out that Host Gen was the one who texted you 8 years ago, threatening to report you to the police.",
      "Faye admitted that she had been visiting a hypnotherapist to recover her memories; mentions remembering a lady driving a red car whom she suspects is Host Gen.",
      "Overheard Host Gen mention private investigator and incoming package.",
      "Showed Faye the keychain you had kept hidden.",
    ],
    motives: [
      "Instructed to get rid of Host Gen by former gang boss",
      "Hide your involvement in the Hit",
      "Protect Faye from her assailant"
    ],
    relationships: {
      G: {
        name: "Host Gen",
        personalDetails: {
          gender: "Female",
          birthDate: "1996-07-02",
          age: 29,
          relStatus: ["First time meeting at Lover's Retreat", "Sister of Harry", "Suspected assailant of Faye"],
        },
        other: ["N/A"],
        work: "Manager for Lover’s Retreat",
        impression: `A nosy woman who is getting unnecessarily involved.`,
        history: [
          {
            title: 'The Hit',
            description: `The older sister of Harry who you used to deal drugs to. 8 years ago, after receiving a text from Harry that he will report you to the police, you tracked him down and beat him up. Harry fell into a coma and since then, Host Gen has been trying to track you and Doug down.`
          },
          {
            title: 'Finding Faye',
            description: `Potentially was the person who caused Faye to lose her memories. `
          }
          
        ],
        dayOfTheMurder: [
          "Found out that Host Gen was the one who texted you 8 years ago, threatening to report you to the police.",
          "Received a package from a private investigator about Sick Harry's accident.",
          "Planned to kill Host Gen with Doug by drug overdose.",
        ]
      },
      A: {
        name: "Allison", 
        personalDetails: {
          gender: "Female",
          birthDate: "1996-11-09",
          age: 29,
          relStatus: ["First time meeting at the Retreat","Dating Doug (Doug doesn't want her to know that you know him)."],
        },
        other: ["N/A"],
        work: "Future heiress to a car manufacturing business.",
        impression: "Loud, Pretty women are scary.",
        dayOfTheMurder: []
      },
      B: {
        name: "Brodie",
        personalDetails: {
          gender: "Male",
          birthDate: "1992-01-01",
          age: 30,
          relStatus: ["First time meeting at the Retreat, Dating Evelyn."],
        },
        other: ["N/A"],
        work: "Prosecutor",
        impression: "Seems like a very passionate, protective man. A little temperamental.",
        dayOfTheMurder: [
          "Passed by in the hall"
        ]
      },

      D: {
        name: "Doug",
        personalDetails: {
          gender: "Male",
          birthDate: "1990-02-14",
          age: 35,
          relStatus: ["Your 'big bro' in the gang (pretending you don't know each other)","Dating Allison"],
        },
        other: ["Gave you the tickets to go on this Retreat", "Grew up in Poor Land"],
        work: "Owner of CGG (Cars Gotta Go), a scrapyard business",
        impression: "His word is law.",
        history: [
          {
            title: 'The Hit',
            description: `8 years ago, after receiving a threatening text from Harry, a drug customer, you asked your big bro for help in handling the issue. Together, you tracked Harry down and beat him up.`
          },
        ],
        dayOfTheMurder: [
          "Texted you to find out what Host Gen knows.",
          "Told him that Host Gen was the one who texted you 8 years ago, threatening to report you to the police",
          "Informed him Host Gen is meeting with a private investigator and has an incoming package.",
          "Instructed you to pick up drugs from gang boss and stash in coat closet",
          "Planned together to kill Host Gen by drug overdose."
        ]
      },
      E: {
        name: "Evelyn",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["Firt time meeting at Lover's Retreat"],
        },
        other: ["N/A"],
        work: "Pharmacist",
        impression: `Intimidating, serious and no-nonsense.`,
        dayOfTheMurder: []
      },
      F: {
        name: "Faye",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01 (maybe?)",
          age: 25,
          relStatus: ["Dating for 5 years"],
        },
        other: ["Has amnesia", "Takes sleeping medication", "Birthday is date you found her and an estimated year"],
        work: "N/A",
        impression: `An angel sent from heaven. A pure soul you don't deserve but would do anything to protect.`,
        history: [
          {
            title: 'Finding Faye',
            description: `The girl you found in the forest who symbolizes a change in your life. The only clue about her identity is the cloud keychain that was found nearby; you've never shown this keychain to Faye because you're scared she will leave you if ever she gets her memories back. However, it seems she's getting more and more curious about her true identity. You're also very worried she will eventually find out about your ugly past and leave you.`,
          },
        ],
        dayOfTheMurder: [
          "Was not feeling well.",
          "Admitted to visting a hypnotherapist to recover her memories.",
          "Remembered a lady driving a red car; convinced it was Host Gen.",
          "Showed her the cloud keychain you kept since you found her and got into a fight.",
        ]
      }
    },
    timeline: [
      {
        time: "1:00 PM",
        events: [
          "On the way back from bringing dessert for Faye (who was napping).",
          "Host Gen left to buy groceries.",
          "Picklocked Host Gen's room.",
        ]
      },
      {
        time: "1:30 PM",
        events: [
          "Found an old unlocked phone; text messages prove Host Gen was actually the one who threatened to report you to the police 8 years ago.",
          "Messaged Doug about Host Gen's involvement.",
          "Left Host Gen's room and locked the door."
        ]
      },
      {
        time: "1:45 PM",
        events: [
          "Arrived back to room with Faye.",
          "Faye woke up and admitted that she has been visiting a hypnotherapist to recover their memories. Mentions they remember a red car.",
          "Went out for lunch with Faye."
        ]
      },
      {
        time: "2:45 PM",
        events: [
          "Returned from lunch with Faye.",
          "Faye suddenly feels dizzy, goes to room to rest and takes sleep medication.",
          "On the way to get water for Faye, overheard Host Gen mention private investigator and incoming secret package."
        ]
      },
      {
        time: "3:00 PM",
        events: [
          "Called Doug to confirm Host Gen's involvement with 'The Hit' and an incoming package from a private investigator.",
          "Saw Allison leave the Resort."
        ]
      },
      {
        time: "3:15 PM",
        events: [
          "Returns to room with water. Faye fell asleep.",
          "Former gang boss texts Doug and you to get rid of Host Gen.",
          "Doug texts you to wait for further instructions."
        ]
      },
      {
        time: "3:30 PM",
        events: [
          // "Saw Host Gen quickly leaving the Retreat and enter a black car.",
          "Received text from Doug to pick up drugs from gang boss to use on Host Gen.",
          "Left the Retreat to pick up drugs.",
        ]
      },
      {
        time: "4:00 PM",
        events: [
          // "Saw Host Gen quickly leaving the Retreat and enter a black car.",
          "Received text from Doug to stash drugs in the coat closet."
        ]
      },
      {
        time: "4:15 PM",
        events: [
          "Faye called you and says she remembered being hit by a lady driving a red car, likely to be Host Gen.",
          "Told Faye you stepped out for a work matter."
        ]
      },
      {
        time: "5:00 PM",
        events: [
          "Returned to resort with drug",
          "Stashed drugs in coat closet then returned to room to get ready for dinner.",
          "Noticed Faye is not in the room."
        ]
      },
      {
        time: "5:35 PM",
        events: [
          "Faye returned to the room upset.",
          "Showed Faye the cloud keychain that you picked up near where you found Faye in 2017.",
          "Fought with Faye about keeping secrets."
        ]
      },
      {
        time: "6:00 PM",
        events: [
          "Kitchen staff call Host Gen regarding drinks for dinner and discover body"
        ]
      }
    ]
  },
  D: {
    name: "Doug",
    phonePass: "",
    password: "40",
    personalDetails: {
      gender: "Male",
      birthDate: "1993-08-01",
      age: 34,
      relStatus: ["Dating Allison since 2017."],
    },
    personality: ["Alpha male","Rough","Ruthless","Get the job done."],
    work: "Owner of CGG (Cars Gotta Go), a scrapyard business. Secretly an active member of a gang.",
    other: ["Grew up in Poor Land", "Has gang tattoo"],
    history: [
      {
        title: 'The Hit',
        description: `Your underling, Scared Charlie used to deal drugs to a kid named Harry. 8 years ago, Harry threatened to report Carl to the police. You instructed Scared Charlie to intimidate Harry from snitching. On August 11, 2016, you and Scared Charlie tracked down Harry and beat him up. Harry ended up in a coma. Scared of being caught, Scared Charlie went into hiding and changed his name to Carl. You stopped contacting him for deals. `,
      },
    ],
    whyYouHere: `Recently, your bosses have informed you that someone has been investigating the Hit incident again. They suspect it to be Host Gen, Harry's sister. They tell you to deal with it before it causes problems for the gang. You called up Carl to finish the job and tie up loose ends. Coincidentally, Allison is best friends with Host Gen and was offered a free stay at Lover's Retreat.`,
    dayOfTheMurder: [
      "Instructed and pressured to get rid of Host Gen and any evidence by gang boss",
      "Instructed Carl to pick up drugs",
      "Broke into Host Gen's room and stole investigative package",
      "Picked up drugs Carl stashed in coat closet",
      "Snuck into kitchen and laced Host Gen's meal with drugs",
      
    ],
    motives: [
      "Pressure from gang boss",
      "Stop Host Gen from investigating the Hit",
      "Hide gangster identity from Allison",
    ],
    relationships: {
      G: {
        name: "Host Gen",
        personalDetails: {
          gender: "Female",
          birthDate: "1996-07-02",
          age: 29,
          relStatus: ["First time meeting at Lover's Retreat", "Sister of Harry"],
        },
        other: ["N/A"],
        work: "Manager for Lover’s Retreat",
        impression: `A nosy woman who is getting unnecessarily involved.`,
        history: [
          {
            title: 'The Hit',
            description: `The older sister of Harry who you used to deal drugs to in Mid Village. 8 years ago, after receiving a text from Harry that he will report you to the police, you tracked him down and beat him up. Harry fell into a coma and since then, Host Gen has been trying to track you and Carl down.`
          }          
        ],
        dayOfTheMurder: [
          "Found out that Host Gen was the one who texted Carl 8 years ago, threatening to report you to the police.",
          "Received a package from a private investigator about Sick Harry's accident.",
          "Planned to kill Host Gen with Carl by drug overdose.",
        ]
      },
      A: {
        name: "Allison", 
        personalDetails: {
          gender: "Female",
          birthDate: "1996-11-09",
          age: 29,
          relStatus: ["Dating Doug."],
        },
        other: ["Ignorant to your shady background","Knows of your tattoo"],
        work: "Future heiress to a car manufacturing business.",
        impression: "Your pretty little princess. Spoiled, naive, rich kid. Easy to deal with.",
        history: [
          {
            title: 'Hitting the jackpot',
            description: `Met when she dropped off a red car at your scrapyard and immediately hit it off. Have been trying to impress her parents so you can get married into a rich family.`}
        ],
        dayOfTheMurder: [
          "Stressed about something and went shopping",
        ]
      },
      B: {
        name: "Brodie",
        personalDetails: {
          gender: "Male",
          birthDate: "1992-01-01",
          age: 30,
          relStatus: ["First time meeting at the Retreat, Dating Evelyn."],
        },
        other: ["N/A"],
        work: "Prosecutor",
        impression: "Stuffy, white collar worker.",
        dayOfTheMurder: [
          "Saw him in the kitchen"
        ]
      },
      C: {
        name: "Carl 'Charlie'",
        personalDetails: {
          gender: "Male",
          birthDate: "1998-01-01",
          age: 29,
          relStatus: ["Seems to be dating Faye. Your underling (pretending you don't know each other)."],
        },
        work: "Contract worker, Former drug dealer.",
        other: ["Grew up in Poor Land", "Has gang tattoo", "Changed name from Charlie to Carl","Gave him the tickets to go on this Retreat", ],
        impression: "Spineless. Has to be told what to do.",
        history: [
          {
            title: 'The Hit',
            description: `8 years ago, after receiving a threatening text from Harry, a drug customer, he asked for your help in handling the issue. Together, you tracked Harry down and beat him up. This incident spooked him to change his name.`
          },
        ],
        dayOfTheMurder: [
          "Texted him to investigate Host Gen knows.",
          "Told you that Host Gen was the real texter 8 years ago, threatening to report to the police",
          "Told you that Host Gen is meeting with a private investigator and has an incoming package.",
          "Instructed him to pick up drugs from gang boss and stash in coat closet",
        ]
      },
      E: {
        name: "Evelyn",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["First time meeting at Lover's Retreat"],
        },
        other: ["N/A"],
        work: "Pharmacist",
        impression: `Snobbish. Very prideful of her intellect.`,
        dayOfTheMurder: [
          "Saw you in the kitchen"
        ]
      },
      F: {
        name: "Faye",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["First time meeting at Lover's Retreat. Seems to be Carl's girl."],
        },
        other: ["N/A"],
        work: "N/A",
        impression: `Has a few screws loose. Where did this random girl come from?`,
        dayOfTheMurder: [
          "Knocked on the door when you were in Host Gen's room."
        ]
      },
    },
    timeline: [
      {
        time: "1:00 PM",
        events: [
          "Out having lunch with Allison.",
          "Allison's gets annoyed after reading a text message.",
        ]
      },
      {
        time: "1:30 PM",
        events: [
          "Received text from Carl about Host Gen's involvement in the Hit 8 years ago.",
        ]
      },
      {
        time: "2:10 PM",
        events: [
          "Came back from lunch with Allison.",
          "Received call 'work call' from gang boss; answered in room. Gang boss wants an update on the situation with Host Gen.",
          "Allison left elsewhere."
        ]
      },
      {
        time: "3:00 PM",
        events: [
          "Carl called to confirm Host Gen's involvement with the H accident and an incoming package from a private investigator.",
          "Informed boss about Host Gen.",
          "Allison texted 'Went out stress shopping'"
        ]
      },
      {
        time: "3:15 PM",
        events: [
          "A threatening letter is slid under the door, saying 'I will expose what you did 8 years ago'; opened door and saw Host Gen turning the corner.",
          "Former gang boss texts you to get rid of Host Gen.",
          "Texted Carl to wait for further instructions.",
          "Hid threatening letter in bedside table."
        ]
      },
      {
        time: "3:30 PM",
        events: [
          // "Saw Host Gen quickly leaving the Retreat and enter a black car.",
          "Texted Carl to pick up drugs from gang boss to use on Host Gen.",
        ]
      },
      {
        time: "4:00 PM",
        events: [
          "Left room to smoke in backyard",
          "Texted Carl to stash the drugs in the coat closet."
        ]
      },
      {
        time: "4:30 PM",
        events: [
          "Went to the kitchen and saw Brodie leaving.",
          "Brodie informed you that Allison seemed angry.",
          "Checked Host Gen's schedule; saw that she has left to pick up drinks for dinner.",
          "Picklocked Host Gen's room to steal the private investigator’s package.",
        ]
      },
      {
        time: "4:45 PM",
        events: [
          "Faye knocked on Host Gen's room but left when noone opened the door.",
          "Left Host Gen's room after a few minutes.",
        ]
      },
      {
        time: "5:00 PM",
        events: [
          "Returned to room to shower; Allison already ready in the room.",
        ]
      },
      {
        time: "5:30 PM",
        events: [
          "Went to the coat closet to pick up stashed drugs.",
          "Faye passed by from outside",
          "Snuck into kitchen to lace Host Gen's meal with drugs."
        ]
      },
      {
        time: "5:45 PM",
        events: [
          "Went outside for a smoke and messaged boss that everything will be settled tonight.",
          "Evelyn left the Resort upset."
        ]
      },
      {
        time: "6:00 PM",
        events: [
          "Kitchen staff call Host Gen regarding drinks for dinner and discover body"
        ]
      }
    ]
  },
  E: {
    name: "Evelyn",
    phonePass: "",
    password: "50",
    personalDetails: {
      gender: "Female",
      birthDate: "2000-01-01",
      age: 25,
      relStatus: ["Best friend of Cadie", "Dating Brodie for 7 years"],
    },
    personality: ["Ambitious", "Prideful", "Cynical"],
    work: "Pharmacist",
    other: ["Grew up in Mid Village", "Dreamt of being surgeon", "Has hand tremors", "Takes muscle relaxant medicine", "Attends remote physiotherapy sessions"],
    history: [
      {
        title: 'Missing Friend - Hit-and-Run',
        description: `On December 8, 2017, your best friend, Cadie, ran away from home after a fight with her brother. You planned to pick her up as always. On the way, you heard Cadie yelling "watch out" briefly saw a red car before being knocked unconscious. Waking up in the hospital, you learned that Cadie never arrived at your house. You believe something must have happened to Cadie but the cops labelled her a runaway. The accident caused your hand tremors, forcing you to drop out of med school for surgery and become a pharmacist instead.`,
      },
    ],
    whyYouHere: `Recently, you and Brodie have been depressed. He lost a criminal case. You were embaressed when your friends invited, then uninvited, you from an alumni gathering of surgeon. Additionally, the anniversary of Cadie’s disappearance is approaching. Brodie booked this Lover's Retreat to help you both relax.'`,
    dayOfTheMurder: [
      "Overheard and recorded Host Gen and Allison arguing about an accident 8 years ago.", 
      "Depressed over pictures of surgeon alumni gathering", 
      "Argued over reporting Host Gen to police", 
      "Attended physiotherapy session",
      "Took muscle relaxant medication for pain in hands."
    ],
    motives: [
      "Host Gen was the driver in the Hit-and-Run 8 years ago",
      "Hurt pride when reminded about your surgeon dreams",
      "Vengeance for your best friend, Cadie, and boyfriend, Brodie."
    ],
    relationships: {
      G: {
        name: "Host Gen",
        personalDetails: {
          gender: "Female",
          birthDate: "1996-07-02",
          age: 29,
          relStatus: ["First time meeting at Lover's Retreat"],
        },
        other: ["Owned a red car"],
        work: "Manager for Lover’s Retreat",
        impression: `Average working woman.`,
        history: [
          {
            title: 'Missing Friend - Hit-and-Run',
            description: `Discovered that Host Gen was behind the hit-and-run that caused Cadie to go missing and ruined your dreams. Fought with Brodie over reporting to the police (you wanted to call the cops but he didn't trust them).`
          }          
        ],
        dayOfTheMurder: [
          "Overheard and recorded Host Gen and Allison arguing about an accident 8 years ago."
        ]
      },
      B: {
        name: "Brodie",
        personalDetails: {
          gender: "Male",
          birthDate: "1992-01-01",
          age: 30,
          relStatus: ["Dating for 7 years", "Brother of your ex-best friend, Cadie"],
        },
        other: ["N/A"],
        work: "Prosecutor",
        impression: "Protective and hard-working. Still depressed about finding Cadie. Jaded by the justice system.",
        history: [
          {
            title: `Missing friend - Hit-and-Run`,
            description: `Tries not to blame you for the incident but you still feel guilty at times. Believes Cadie died in the hit-and-run accident. You spent over a year searching for your friend with Brodie in vain.`
          },
          {
            title: `Bonding over loss`,
            description: `For over a year, helped him search for Cadie. The only one who believed Cadie didn't just run away from home. Eventually got close and started dating.`
          },
        ],
        dayOfTheMurder: [
          "Told Brodie about Host Gen and Allison arguing about an accident 8 years ago.", "Depressed over pictures of surgeon alumni gathering", "Argued over reporting Host Gen to police"
        ]
      },
      A: {
        name: "Allison", 
        personalDetails: {
          gender: "Female",
          birthDate: "1996-11-09",
          age: 29,
          relStatus: ["Dating Doug."],
        },
        other: ["Seemed "],
        work: "Future heiress to a car manufacturing business.",
        impression: "A spoiled princess. Annoying to be around.",
        dayOfTheMurder: [
          "Overheard and recorded Host Gen and Allison arguing about an accident 8 years ago.", 
          "Seemed to be hiding something",
        ]
      },
      C: {
        name: "Carl 'Charlie'",
        personalDetails: {
          gender: "Male",
          birthDate: "1998-01-01",
          age: 29,
          relStatus: ["First time meeting at Lover's Retreat. Seems to be dating Faye."],
        },
        work: "Contract worker",
        other: ["N/A"],
        impression: "Easily spooked man. Not really much. Easy to deal with.",
        history: [],
        dayOfTheMurder: [
          "Overheard him and Faye fighting."
        ]
      },
      D: {
        name: "Doug",
        personalDetails: {
          gender: "Male",
          birthDate: "1990-02-14",
          age: 35,
          relStatus: "Dating Allison",
        },
        other: ["N/A"],
        work: "Owner of CGG (Cars Gotta Go), a scrapyard business",
        impression: "Rough and gangster-like man. Best not to associate with his kind.",
        dayOfTheMurder: [
          ""
        ]
      },
      F: {
        name: "Faye",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["First time meeting at Lover's Retreat. Seems to be dating Carl."],
        },
        other: ["N/A"],
        work: "N/A",
        impression: `Kind, naive, airheaded girl.`,
        dayOfTheMurder: [
          "Overheard Carl and her fighting."]
      },
    },
    timeline: [
      {
        time: "1:00 PM",
        events: [
          "Out having lunch with Brodie.",
        ]
      },
      {
        time: "2:00 PM",
        events: [
          "Host Gen returns to Resort.",
          "Returned to house with Brodie and went to your room to watch a drama.",
          "Saw a picture of Host Gen posing beside a red Mercedes."
        ]
      },
      {
        time: "2:30 PM",
        events: [
          "Received picture of alumni gathering and got depressed; stepped out to get water."
        ]
      },
      {
        time: "2:35 PM",
        events: [
          "Overheard Host Gen and another girl arguing in Host Gen's room about a car accident 8 years ago. 'Don't forget what you also did 8 years ago!'"
        ]
      },
      {
        time: "3:00 PM",
        events: [
          "Argued with Brodie about reporting Host Gen immediately. He says that there is not enough evidence and confronting her could lead her to run.",
        ]
      },
      {
        time: "3:15 PM",
        events: [
          "Brodie angrily left to take a walk outside.",
        ]
      },
      {
        time: "3:30 PM",
        events: [
          "Heard Host Gen leaving from room.",
          "Remotely attended a physiotherapy session for her hand.",
        ]
      },
      {
        time: "4:15 PM",
        events: [
          "Hand really hurts after physiotherapy session.",
          "Took muscle relaxant medicine and fell asleep.",
        ]
      },
      {
        time: "4:45 PM",
        events: [
          "Woke up hearing movement outside but went back to sleep."
        ]
      },
      {
        time: "5:35 PM",
        events: [
          "Woke up.",
          "Overhears fighting from Faye and Carl.",
          "Took a shower to get ready for dinner."
        ]
      },
      {
        time: "5:45 PM",
        events: [
          "Brodie returns to the room and goes to shower.",
          "Decided to leave house to avoid Brodie.",
          "Passed by Allison in the hall; seemed to be hiding something.",
          "Passed by Doug smoking outside."
        ]
      },
      {
        time: "6:10 PM",
        events: [
          "Called back about discovered body."
        ]
      }
    ]
  },
  F: {
    name: "Faye",
    phonePass: "",
    password: "60",
    personalDetails: {
      gender: "Female",
      birthDate: "2000-01-01 (maybe?)",
      age: 25,
      relStatus: ["Dating Carl for 5 years."],
    },
    personality: ["Pure, calm, quite, and shy."],
    work: "N/A",
    other: ["Has amnesia", "Birthday is date you were found and an estimated year", "Takes sleeping medication for hypnotherapy sessions", "Wants to regain memories to be useful.."],
    history: [
      {
        title: 'Becoming Faye',
        description: `In December 2017, Carl found you injured and unconscious in the forest while hunting. He brings you home to a cottage and nurse you back to health. He named you Faye (like a fairy who appeared). Taking pity on you, he let you stay with him. Due to your amnesia and lack of ID, you don't work or go out. You gradually came to like each other and after Carl confessed, started dating 5 years ago.`,
      },
      {
        title: 'Secret Therapy',
        description: `To try and regain memories, while Carl is out working, you've secretly started visiting a hypnotherapist to recover your memories. In these sessions, you have come to remember a red car.`,
      },
    ],
    whyYouHere: `You've always expressed wanting to travel but Carl is worried that you might encounter someone dangerous from your unknown past (since you were abandonned with injuries). However, for some reason, he's surprised you with this trip to Lover's Resort!`,
    dayOfTheMurder: [
      "Recalled that it was a lady driving a red car; suspected it was Host Gen",
      "Confronted Host Gen; who denied being the culprit",
      "Felt dizzy and took sleep medication",
      "Fought with Carl who hid a clue (cloud keychain) connected to your past"
    ],
    motives: [
      "Believes Host Gen is the culprit behind your amnesia",
    ],
    relationships: {
      G: {
        name: "Host Gen",
        personalDetails: {
          gender: "Female",
          birthDate: "1996-07-02",
          age: 29,
          relStatus: ["First time meeting at Lover's Retreat", "Suspected assailant"],
        },
        other: ["Owned a red car"],
        work: "Manager for Lover’s Retreat",
        impression: `Someone who runs a tight ship and has things very organized.`,
        history: [
          {
            title: 'Becoming Faye',
            description: `Potentially was the person who caused you to lose your memories.`
          }
          
        ],
        dayOfTheMurder: [
          "Recalled that a lady was driving the red car that hit you in Mid Village.",
          "Suspected it was Host Gen who hit you and ran.",
          "Confronted Host Gen; who denied being the culprit",
        ]
      },
      C: {      
        name: "Carl",
        personalDetails: {
          gender: "Male",
          birthDate: "1998-01-01",
          age: 29,
          relStatus: ["Dating for 5 years."],
        },
        work: "Contract worker.",
        other: ["Grew up in Poor Land", "Has gang tattoo", "Changed name from Charlie to Carl","Gave him the tickets to go on this Retreat", ],
        impression: "Kind, gentle man. Your saviour.",
        history: [
          {
            title: 'Becoming Faye',
            description: `Saviour who found you injured in the Mid village forest. He healed you and gave you food and shelter. Till now, he is working extra hard to provide for both of you since you can't get a job. You constantly feel guilty and appreciative towards him.`
          }, {
            title: 'Secret Therapy',
            description: `You don't tell him about your hypnotherapy sessions so he doesn't worry. Another part of you worries that he doesn't really want you to regain your memory.`,
          }
        ],
        dayOfTheMurder: [
          "Told him about hypnotherapist.",
          "Told him about your suspicions towards Host Gen",
          "Showed you a cloud keychain that you had kept since you found her and got into a fight."
        ]
      },
      A: {
        name: "Allison", 
        personalDetails: {
          gender: "Female",
          birthDate: "1996-11-09",
          age: 29,
          relStatus: ["First time meeting at the Retreat"],
        },
        other: ["N/A"],
        work: "Future heiress to a car manufacturing business.",
        impression: "Flamboyant and loud. Very rich.",
        dayOfTheMurder: []
      },
      B: {
        name: "Brodie",
        personalDetails: {
          gender: "Male",
          birthDate: "1992-01-01",
          age: 30,
          relStatus: ["First time meeting at the Retreat, Dating Evelyn."],
        },
        other: ["N/A"],
        work: "Prosecutor",
        impression: "Righteous. Fights for justice. Symbol of justice.",
        dayOfTheMurder: [
          "Passed by in the hall"
        ]
      },

      D: {
        name: "Doug",
        personalDetails: {
          gender: "Male",
          birthDate: "1990-02-14",
          age: 35,
          relStatus: ["First time meeting at the Retreat. Seems like has something with Carl"],
        },
        other: ["N/A"],
        work: "Owner of CGG (Cars Gotta Go), a scrapyard business",
        impression: "Intimidating, rough man. Like a tiger.",
        history: [],
        dayOfTheMurder: [
        ]
      },
      E: {
        name: "Evelyn",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["Firt time meeting at Lover's Retreat"],
        },
        other: ["N/A"],
        work: "Pharmacist",
        impression: `Serious person. Seems stressed all the time.`,
        dayOfTheMurder: []
      },
    },
    timeline: [
      {
        time: "1:30 PM",
        events: [
          "Woke up from nap. Carl is not in the room.",
          "Dreamt about a red car coming at you.",
          "Messaged hypnotherapist about dream.",
        ]
      },
      {
        time: "1:45 PM",
        events: [
          "Carl arrived back to room with dessert.",
          "Admitted to Carl about visiting a hypnotherapist to recover their memories. Mentions red car dream.",
          "Went out for lunch with Carl."
        ]
      },
      {
        time: "2:45 PM",
        events: [
          "Returned from lunch with Carl.",
          "Saw picture of Host Gen's past red car",
          "Suddenly feels dizzy, goes to room to rest and takes sleep medication.",
          "Carl offers to bring you water."
        ]
      },
      {
        time: "3:00 PM",
        events: [
          "Heard yelling from Evelyn and Brodie's room.",
          "Carl returns to room with water.",
          "Fell asleep",
        ]
      },
      {
        time: "4:10 PM",
        events: [
          "Woke up after dreaming about being hit by a lady driving a red car. Also remembered something in the shape of a cloud.",
          "Carl is not in the room."
        ]
      },
      {
        time: "4:15 PM",
        events: [
          "Called Carl about lady and red car in dream. It's likely Host Gen caused you to lose your memories.",
          "Carl says he stepped out for a work matter."
        ]
      },
      {
        time: "4:45 PM",
        events: [
          "Heard a noise from Host Gen's room.",
          "Left room and knocked on Host Gen's door. No response.",
          "Returned to room after a few minutes.",
        ]
      },
      {
        time: "4:55 PM",
        events: [
          "Saw Host Gen return to the Resort.",
          "Left room."
        ]
      },
      {
        time: "5:00 PM",
        events: [
          "Argued with Host Gen in the hallway about the red car and dream.",
          "Saw Host Gen had a cloud keychain.",
        ]
      },
      {
        time: "5:15 PM",
        events: [
          "Host Gen goes to garage to pick up drinks for dinner.",
          "Took a walk to calm down.",
        ]
      },
      {
        time: "5:30 PM",
        events: [
          "Returned to the resort.",
          "Passed by Doug near the entrance.",
          "Went to room.",
        ]
      },
      {
        time: "5:35 PM",
        events: [
          "Carl showed the cloud keychain that he picked up near where you were found in 2017.",
          "Fought with Carl."
        ]
      },
      {
        time: "6:00 PM",
        events: [
          "Kitchen staff call Host Gen regarding drinks for dinner and discover body"
        ]
      }
    ]
  },
};

export default characters;