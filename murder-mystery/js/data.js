const characters = {
  A: {
    name: "Heiress Allison",
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
        description: `On December 8, 2017, after your parents took your car keys to stop you from street racing, you snuck out to borrow Host Gen’s car. While racing through the mountains, a text from your parents warning they’d cut off your allowance distracted you — you nearly hit a girl in a blue dress, but a boy jumped in front, taking the hit and tumbling off a cliff. The girl was knocked unconscious. Shaken, you returned the car to Host Gen, who spotted the damage and demanded the truth. She agreed to keep quiet in exchange for $4,000 a month and told you to scrap the car. You’ve never raced since.`,
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
        name: "Dealer Doug",
        personalDetails: {
          gender: "Male",
          birthDate: "1990-02-14",
          age: 35,
          relStatus: "Dating Heiress Allison",
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
        name: "Brother Brodie",
        personalDetails: {
          gender: "Male",
          birthDate: "1992-01-01",
          age: 33,
          relStatus: ["First time meeting at the Retreat","Dating Pharmacist Evelyn."],
        },
        other: ["N/A"],
        work: "Prosecutor",
        impression: "Passionate, protective, straight-laced man.",
        dayOfTheMurder: []
      },

      C: {
        name: "Scared Carl",
        personalDetails: {
          gender: "Male",
          birthDate: "1998-01-01",
          age: 27,
          relStatus: ["First time meeting at the Retreat","Dating Free Faye."],
        },
        other: ["N/A"],
        work: "Contract worker",
        impression: "Easily spooked man. Not worth your attention.",
        dayOfTheMurder: []
      },

      E: {
        name: "Pharmacist Evelyn",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["First time meeting at the Retreat","Dating Brother Brodie."],
        },
        other: ["N/A"],
        work: "Pharmacist",
        impression: "Strict and gloomy woman. Seems very prideful.",
        dayOfTheMurder: []
      },

      F: {
        name: "Free Faye",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["First time meeting at the Retreat","Dating Scared Carl."],
        },
        other: ["N/A"],
        work: "N/A",
        impression: `Timid and quiet. A little airheaded. Seems not quite right in the head.`,
        dayOfTheMurder: [
          "Free Faye was upset at G. You didn’t know they knew each other."
        ]
      }
    },
    timeline: [
      {
        time: "1:00 PM",
        events: [
          "Went out to have lunch with Dealer Doug.",
          "Your parents warn you to learn the value of money if you want to inherit the business, and to avoid street racing or scandals.",
          "Dealer Doug is stressed after reading a text message."
        ]
      },
      {
        time: "2:10 PM",
        events: [
          "Returned from lunch with Dealer Doug.",
          "Dealer Doug excuses himself to take a work call.",
          "Went to your room to freshen up."
        ]
      },
      {
        time: "2:30 PM",
        events: [
          "Went to Host Gen's room and confronted her about the monthly $4,000 payment.",
        ]
      },
      {
        time: "2:45 PM",
        events: [
          "Host Gen gets a call about Sick Harry's accident and tells you to leave.",
          "Decided to go out stress shopping."
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
          "Passed by Brother Brodie in the kithen",
          "Saw a threatening letter and screenshot from a recording from Host Gen.",
          "Decided to steal the recording.",
          "Hid the letter in the room and get ready for dinner."
        ]
      },
      {
        time: "5:00 PM",
        events: [
          "Dealer Doug returns to your room to shower before dinner.",
          "You wait for Dealer Doug to enter the shower and then leave."
        ]
      },
      {
        time: "5:05 PM",
        events: [
          "Saw Free Faye arguing with G.",
          "Snuck into Host Gen's room to steal the blackbox recording."
        ]
      },
      {
        time: "5:30 PM",
        events: [
          "Left Host Gen's room and return to her room to hide the blackbox recording with the letter."
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
    name: "Brother Brodie",
    password: "20",
    personalDetails: {
      gender: "Male",
      birthDate: "1992-01-01",
      age: 29,
      relStatus: ["Older brother of Cadie","Dating Evelyn for 5 years."],
    },
    personality: ["Protective", "Takes work very seriously", "Jaded by the justice system"],
    work: "Criminal Prosecutor",
    other: ["Grew up in Mid Village", "Stresses about losing criminal cases"],
    history: [
      {
        title: 'Raising your sister',
        description: `Your parents died young, so you raised your sister Cadie, eight years younger. Over protective and strict, you often argued. You bought her a cloud keychain for her nickname, “Cloud.”. `,
      },
      {
        title: 'Missing Sister - Hit-and-Run',
        description: `On December 8, 2017, you fought with Cadie, and she ran away from home. You assumed she was at her friend Evelyn’s, but when neither could be reached, you reported them missing. The next day, police said Evelyn was in a suspected hit-and-run. At the hospital, Evelyn could only recall someone yelling “watch out” and seeing a red Mercedes before blacking out. Your sister wasn’t found, and her case was closed as a runaway due to lack of evidence. However, you always believed Cadie actually died in the hit-and-run accident. You spent over a year searching for your sister with Pharmacist Evelyn in vain.`,
      },
    ],
    whyYouHere: `Recently, you and Pharmacist Evelyn have been depressed. You lost a reopened criminal case. Evelyn was mistakenly invited, then uninvited, from an alumni gathering of surgeon friends. Additionally, the anniversary of Cadie’s disappearance is approaching. You booked this Lover’s Retreat to help both of you relax. `,
    dayOfTheMurder: [
      "Discovered Host Gen used to own a red Mercedes.",
      "Pharmacist Evelyn shared a recording of Host Gen and Heiress Allison arguing about a hit-and-run.",
      "Snuck into Host Gen's room and saw evidence proving Cadie was hit by Host Gen's car",
      "Saw that Host Gen has Cadie's cloud keychain",
      "Stole Pharmacist Evelyn's muscle relaxant medicine",
      "Murdered Host Gen - Waited for Host Gen in garage, knocked out Host Gen using the muscle relaxant, unlocked her car, put her in the backseat, turned the engine on, and locked the keys inside the car.",
      "Retrieved Cadie's cloud keychain and hid it in your luggage."
    ],
    motives: [
      "Revenge for your dead younger sister, Cadie.",
      "Revenge for girlfriend, Pharmacist Evelyn, who had to give up their dreams because of the hit-and-run.",
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
        other: [],
        work: "Manager for Lover’s Retreat",
        impression: `Originally, a normal rule-abiding woman. After, angry this murderer is living normally when they caused so much pain to my loved ones.`,
        history: [
          {
            title: `Missing Sister - Hit-and-Run`,
            description: `Discovered that Host Gen was behind the hit-and-run that caused Cadie to go missing and ruined Evelyn's dreams.`
          },
        ],
        dayOfTheMurder: [
          "Pharmacist Evelyn overheard and recorded Host Gen and Allison arguing about an accident 8 years ago.",
          "Found multiple clues (red Mercedes, blackbox recording, cloud keychain) that point to Host Gen being the driver in the hit-and-run.",
          "Killed Host Gen and reclaimed the cloud keychain."
        ]
      },
      E: {
        name: "Pharmacist Evelyn",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["Dating for 7 years","Best friend of younger sister, Cadie"],
        },
        other: ["Grew up in Mid Village", "Regularly attends weekly physiotherapy sessions for hand tremors", "Owns muscle relaxing medicine", "Dreamt of becoming a surgeon"],
        work: "Pharmacist",
        impression: `Strong-willed and prideful, but sensitive and supportive. Feel like kindred spirits.`,
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
        dayOfTheMurder: ["Depressed over pictures of surgeon alumni gathering", "Recorded Host G arguing with someone about an accident 8 years ago.", "Argued over reporting to police", "Attended physiotherapy session"]
      },

      A: {
        name: "Heiress Allison", 
        personalDetails: {
          gender: "Female",
          birthDate: "1996-11-09",
          age: 29,
          relStatus: ["First time meeting at the Retreat","Dating Dealer Doug."],
        },
        other: ["N/A"],
        work: "Future heiress to a car manufacturing business.",
        impression: "Arrogant, spoiled.",
        dayOfTheMurder: ["Pharmacist Evelyn overheard and recorded Host Gen and Allison arguing about an accident 8 years ago.", "Was angry about something after returning from somewhere."]
      },

      D: {
        name: "Dealer Doug",
        personalDetails: {
          gender: "Male",
          birthDate: "1990-02-14",
          age: 35,
          relStatus: "Dating Heiress Allison",
        },
        other: [],
        work: "Owner of CGG (Cars Gotta Go), a scrapyard business",
        impression: "Rough and gangster-like man.",
        dayOfTheMurder: []
      },

      C: {
        name: "Scared Carl",
        personalDetails: {
          gender: "Male",
          birthDate: "1998-01-01",
          age: 27,
          relStatus: ["First time meeting at the Retreat","Dating Free Faye."],
        },
        other: ["N/A"],
        work: "Contract worker",
        impression: "Seems constantly nervous.",
        dayOfTheMurder: ["Saw him leave the Retreat."]
      },

      F: {
        name: "Free Faye",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["First time meeting at the Retreat","Dating Scared Carl."],
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
          "Went out for lunch with Pharmacist Evelyn.",
        ]
      },
      {
        time: "2:00 PM",
        events: [
          "Host Gen returns with snacks.",
          "Returned to house with and head to your room to watch a drama.",
          "Saw a picture of Host Gen driving a red Mercedes."
        ]
      },
      {
        time: "2:30 PM",
        events: [
          "Evelyn leaves to get water after seeing picture of surgeon alumni gathering.",
        ]
      },
      {
        time: "3:00 PM",
        events: [
          "Evelyn returns and tells you she recorded an argument between Host Gen and someone about an accident 8 years ago; the recording mentioned evidence.",
          "Argued with Evelyn about reporting Host Gen immediately. You don't have the evidence and confronting her could lead her to run.",
          "Angrily leave to take a walk outside.",
          "Passed by Scared Carl holding water."
        ]
      },
      {
        time: "3:30 PM",
        events: [
          "Saw Host Gen quickly leaving the Retreat and enter a black car.",
          "Saw Scared Carl leave the Retreat",
          "Evelyn should be busy remotely attending a physiotherapy session for her hands.",
          "Decide to sneak into her room to find evidence; Host Gen's room was luckily unlocked",
        ]
      },
      {
        time: "4:00 PM",
        events: [
          "Found a blackbox recording of the accident.",
          "Saw Host Gen has the same cloud keychain that you gave Cadie and decide to kill Host Gen for vengeance.",
          "Heard sounds that Host Gen has returned and leave."
        ]
      },
      {
        time: "4:15 PM",
        events: [
          "Checked Host Gen's posted schedule in the kitchen and see she is planning on picking up drinks for dinner.",
          "An angry Allison passes by."
        ]
      },
      {
        time: "4:30 PM",
        events: [
          "Returned to your room; Evelyn is sleeping.",
          "Stole some of Evelyn's muscle relaxant medicine."
        ]
      },
      {
        time: "5:00 PM",
        events: [
          "Waited in the garage with a brick.",
          "Heard someone opening and closing the coat closet."
        ]
      },
      {
        time: "5:15 PM",
        events: [
          "Host Gen goes to garage to pick up drinks for dinner.",
          "Knocked out Host Gen with a brick, unlocked her car, and put her in the backseat.",
          "Injected Host Gen with the muscle relaxant, turned on the engine, and locked her in the car.",
          "Took Cadie's cloud keychain and leave the keys in the car."
        ]
      },
      {
        time: "5:30 PM",
        events: [
          "Returned to your room to get ready for dinner.",
          "Hid the cloud keychain in your luggage"
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
    name: "Scared Carl 'Charlie'",
    password: "20",
    personalDetails: {
      gender: "Male",
      birthDate: "1998-01-01",
      age: 29,
      relStatus: ["Dating Free Faye for 5 years."],
    },
    personality: ["Skittish","Cowardly","Guilt-ridden"],
    work: "Contract worker, Former drug dealer.",
    other: ["Grew up in Poor Land", "Has gang tattoo", "Changed name from Charlie to Carl"],
    history: [
      {
        title: 'The Hit',
        description: `You used to deal drugs to a kid named Harry. 8 years ago, Harry texted that he wanted to stop and would report you to the police. Scared, you told your boss, Dealer Doug; they instructed you to scare Harry from snitching. On August 11, 2016, you and Dealer Doug tracked down Harry and beat him up. Harry ended up in a coma. Scared of being caught, you changed your name, hid your gang tattoo, and went into hiding, moving to a cottage in Mid Village.`,
      },
      {
        title: 'Finding Faye',
        description: `In December 2017, while hunting in the forest around Mid Village, you find an injured unconscious girl. You bring her home and nurse her back to health. She has amnesia so you name her Faye (like a fairy who appeared). Taking pity on her and feeling you can atone for your past, you let her stay. You gradually came to like each other and after confessing, started dating 5 years ago. To support your livelihood, you start doing manual labour contract jobs. The only clue about her identity is a cloud keychain that was found nearby; you've never shown this keychain to Faye because you're scared she will leave you if ever she gets her memories back.`,
      },
    ],
    whyYouHere: `Worried about your own and Faye's mysterious past, you try to remain hidden. However, Faye has always expressed wanting to travel. Recently, Dealer Doug called to tell you that Harry's family apparently got a lead regarding the Hit incident and the gang is not happy about it. Dealer Doug and you need to finish the job and tie up loose ends. You also hope this retreat satisfies Faye's travel desires.`,
    dayOfTheMurder: [
      "Snuck into Host Gen's room to find out if she has evidence.", 
      "Found out that Host Gen was the one who texted you 8 years ago, threatening to report you to the police.",
      "Free Faye admitted that she had been visiting a hypnotherapist to recover her memories; mentions remembering a lady driving a red car whom she suspects is Host Gen.",
      "Overheard Host Gen mention private investigator and incoming package.",
      "Showed Free Faye the keychain you had kept hidden.",
    ],
    motives: [
      "Instructed to get rid of Host Gen by former gang boss",
      "Hide your involvement in the Hit",
      "Protect Free Faye from her assailant"
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
        other: [],
        work: "Manager for Lover’s Retreat",
        impression: `A nosy woman who is getting unnecessarily involved.`,
        history: [
          {
            title: 'The Hit',
            description: `The older sister of Harry who you used to deal drugs to. 8 years ago, after receiving a text from Harry that he will report you to the police, you tracked him down and beat him up. Harry fell into a coma and since then, Host Gen has been trying to track you and Dealer Doug down.`
          },
          {
            title: 'Finding Faye',
            description: `Potentially was the person who caused Faye to lose her memories. `
          }
          
        ],
        dayOfTheMurder: [
          "Found out that Host Gen was the one who texted you 8 years ago, threatening to report you to the police.",
          "Received a package from a private investigator about Sick Harry's accident.",
          "Planned to kill Host Gen with Dealer Doug by drug overdose.",
        ]
      },
      A: {
        name: "Heiress Allison", 
        personalDetails: {
          gender: "Female",
          birthDate: "1996-11-09",
          age: 29,
          relStatus: ["First time meeting at the Retreat","Dating Dealer Doug (Dealer Doug doesn't want her to know that you know him)."],
        },
        other: ["N/A"],
        work: "Future heiress to a car manufacturing business.",
        impression: "Loud, Pretty women are scary.",
        dayOfTheMurder: []
      },
      B: {
        name: "Brother Brodie",
        personalDetails: {
          gender: "Male",
          birthDate: "1992-01-01",
          age: 30,
          relStatus: ["First time meeting at the Retreat, Dating Pharmacist Evelyn."],
        },
        other: ["N/A"],
        work: "Prosecutor",
        impression: "Seems like a very passionate, protective man. A little temperamental.",
        dayOfTheMurder: []
      },

      D: {
        name: "Dealer Doug",
        personalDetails: {
          gender: "Male",
          birthDate: "1990-02-14",
          age: 35,
          relStatus: ["Your 'big bro' in the gang (pretending you don't know each other)","Dating Heiress Allison"],
        },
        other: ["Gave you the tickets to go on this Retreat"],
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
        name: "Pharmacist Evelyn",
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
        name: "Free Faye",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["Dating for 5 years"],
        },
        other: ["Has amnesia", "Takes sleeping medication"],
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
          "Admitted to her visting a hypnotherapist to recover her memories",
          "Remembered a lady driving a red car; convinced it was Host Gen.",
          "Showed her the cloud keychain you kept since you found her.",
        ]
      }
    },
    timeline: [
      {
        time: "1:00 PM",
        events: [
          "On the way back from bringing dessert for Free Faye (who was napping).",
          "Host Gen left to buy groceries.",
          "Snuck into Host Gen's room and sees an old phone with texts",
        ]
      },
      {
        time: "1:30 PM",
        events: [
          "Discovered Host Gen was actually the one who threatened to report you to the police 8 years ago.",
          "Messaged Dealer Doug about Host Gen's involvement."
        ]
      },
      {
        time: "1:45 PM",
        events: [
          "Left Host Gen's room and arrived back to room.",
          "Free Faye woke up and admitted that she has been visiting a hypnotherapist to recover their memories. Mentions they remember a red car.",
          "Went out for lunch with Free Faye."
        ]
      },
      {
        time: "2:45 PM",
        events: [
          "Returned from lunch with Free Faye.",
          "Free Faye suddenly feels dizzy, goes to room to rest and takes sleep medication.",
          "On the way to get water for Free Faye and overheard Host Gen mention private investigator and incoming package."
        ]
      },
      {
        time: "3:00 PM",
        events: [
          "Told Dealer Doug about the private investigator’s incoming package and confirms Host Gen's involvement with the H accident.",
          "Passed by Brother Brodie leaving his room angrily",
          "Scared Carl returns to room with water."
        ]
      },
      {
        time: "3:15 PM",
        events: [
          "Former gang boss instructs you to get rid of Host Gen.",
          "Dealer Doug texts you to wait for further instructions"
        ]
      },
      {
        time: "3:30 PM",
        events: [
          "Received text from Dealer Doug to pick up drugs from gang boss to use on Host Gen.",
          "Left the Retreat to pick up drugs.",
          "Saw Host Gen quickly leaving the Retreat and enter a black car.",
        ]
      },
      {
        time: "4:15 PM",
        events: [
          "Free Faye called you and says she remembered being hit by a lady driving a red car, likely to be Host Gen."
        ]
      },
      {
        time: "5:00 PM",
        events: [
          "Stashed drugs in coat closet then returned to room to get ready for dinner.",
          "Free Faye is not in the room."
        ]
      },
      {
        time: "5:30 PM",
        events: [
          "Free Faye returned to the room upset.",
          "Showed Free Faye the cloud keychain that you picked up near the place you found Free Faye, in 2017"
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