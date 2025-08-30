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
    personality: ["Prideful", "Spoiled", "Lavish lifestyle"],
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
            description: `Host Gen's brother, Sick Harry, has been in a coma for 8 years due to unknown reasons. Host Gen claims to use the money to pay for his hospital bills.`
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
        name: "Brother Brady",
        personalDetails: {
          gender: "Male",
          birthDate: "1992-01-01",
          age: 33,
          relStatus: ["First time meeting at the Retreat","Dating Pharmacist Evelyn."],
        },
        other: ["N/A"],
        work: "Lawyer",
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
          relStatus: ["First time meeting at the Retreat","Dating Brother Brady."],
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
          "You and Dealer Doug went out to have lunch.",
          "Your parents warn you to learn the value of money if you want to inherit the business, and to avoid street racing or scandals.",
          "Dealer Doug is stressed after reading a text message."
        ]
      },
      {
        time: "2:10 PM",
        events: [
          "You and Dealer Doug return from lunch.",
          "Dealer Doug excuses himself to take a work call.",
          "You return to your room to freshen up."
        ]
      },
      {
        time: "2:30 PM",
        events: [
          "You go to Host Gen's room and confront her about the monthly $4,000 payment.",
        ]
      },
      {
        time: "2:45 PM",
        events: [
          "Host Gen gets a call about Sick Harry's accident and tells you to leave.",
          "You decide to go out stress shopping."
        ]
      },
      {
        time: "4:00 PM",
        events: [
          "Your credit card gets declined so you call your parents.",
          "Your parents say that they won’t give you more allowance for this month."
        ]
      },
      {
        time: "4:15 PM",
        events: [
          "You return angrily from shopping with nothing.",
          "You pass by Brother Brady in the kithen",
          "You see a threatening letter and screenshot from a recording from Host Gen.",
          "You decide to steal the recording.",
          "You hide the letter in the room and get ready for dinner."
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
          "You saw Free Faye arguing with G.",
          "You snuck into Host Gen's room to steal the blackbox recording."
        ]
      },
      {
        time: "5:30 PM",
        events: [
          "You leave Host Gen's room and return to her room to hide the blackbox recording with the letter."
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
    name: "Brother Brady",
    password: "20",
    personalDetails: {
      gender: "Male",
      birthDate: "1992-01-01",
      age: 29,
      relStatus: ["Older brother of Cadie","Dating Evelyn for 5 years."],
    },
    personality: ["Dedicated", "Meticulous", "Overprotective", "Jaded by the justice system"],
    work: "Lawyer",
    other: ["Grew up in Mid Village"],
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
    whyYouHere: `Recently, Pharmacist Evelyn has been depressed after hearing about an alumni gathering of their former surgeon friends. You booked this Lover’s Retreat to help Pharmacist Evelyn relax.Additionally, the anniversary of the day Cadie went missing is coming up and both you and Evelyn get more sensitive around this time.`,
    dayOfTheMurder: [
      "Discovered Host Gen used to own a red Mercedes.",
      "Pharmacist Evelyn overheard Host Gen being involved in some sort of accident 8 years ago.",
      "Snuck into Host Gen's room and saw blackbox recording proving Cadie was hit by her car",
      "Saw that Host Gen has Cadie's cloud keychain",
      "Checked Host Gen's schedule and stole Pharmacist Evelyn's muscle relaxant medicine",
      "Murdered Host Gen - Waited for Host Gen in garage, knocked out Host Gen using the muscle relaxant, unlocked her car, put her in the backseat, turned the engine on, and locked the keys inside the car.",
      "Stole back Cadie's cloud keychain and hid it in your luggage."
    ],
    motives: [
      "Feared you may never cross paths again",
      "Revenge for your dead younger sister, Cadie.",
      "Revenge for girlfriend, Pharmacist Evelyn, who had to give up their dreams because of the hit-and-run."
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
        other: [],
        work: "Manager for Lover’s Retreat",
        impression: `Originally, a normal rule-abiding woman. Now, How dare this murderer live normally when they caused so much pain to my loved ones.`,
        history: [
          {
            title: `Missing Sister - Hit-and-Run`,
            description: `Discovered that Host Gen was behind the hit-and-run that caused Cadie to go missing and ruined Evelyn's dreams.`
          },
        ],
        dayOfTheMurder: [
          "Pharmacist Evelyn overheard Host Gen being involved in some sort of accident 8 years ago.",
          "Found multiple clues (red Mercedes, blackbox reocrding, cloud keychain) that point to Host Gen being the driver from the hit-and-run.",
          "Killed Host Gen and reclaimed the cloud keychain."
        ]
      },
      E: {
        name: "Pharmacist Evelyn",
        personalDetails: {
          gender: "Female",
          birthDate: "2000-01-01",
          age: 25,
          relStatus: ["Dating for 7 years","Best friend of Cadie"],
        },
        other: ["Grew up in Mid Village", "Attends physiotherapy sessions for hand tremors and takes muscle relaxing medicine", "Dreamt of becoming a surgeon"],
        work: "Pharmacist",
        impression: `Strong-willed. Still upset about hand tremors. Recently stressed.`,
        history: [
          {
            title: `Missing Sister - Hit-and-Run`,
            description: `Direct witness and victim in the hit-and-run incident. You try not to blame her for not remembering much. The hit-and-run injured her hands, shattering her dream of becoming a surgeon. This remains a sore spot for her.`
          },
          {
            title: `Bonding over loss`,
            description: `For over a year, searched for Cadie together. Got close and started dating.`
          },
        ],
        dayOfTheMurder: ["Saw pictures of surgeon alumni gathering", "Recorded Host G arguing with someone about an accident 8 years ago.", "Argued over reporting to police", "Attended physiotherapy session"]
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
        impression: "Prideful, spoiled.",
        dayOfTheMurder: ["Angry about something"]
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
        impression: `Timid and quiet. Nothing interesting`,
        dayOfTheMurder: []
      }
    },
    timeline: [
      {
        time: "1:00 PM",
        events: [
          "Host Gen left to buy groceries.",
          "You and Pharmacist Evelyn go out for lunch.",
        ]
      },
      {
        time: "2:00 PM",
        events: [
          "Host Gen returns with snacks.",
          "You and Evelyn return and head to your room to watch a drama.",
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
          "Evelyn returns and tells you she recorded an argument between Host Gen and someone about an accident 8 years ago, with evidence.",
          "You argue with Evelyn about confronting Host Gen immediately. There is no evidence and confront her could lead her to run away.",
          "You angrily leave to take a walk outside."
        ]
      },
      {
        time: "3:30 PM",
        events: [
          "You see Host Gen leaving the Retreat",
          "You decide to sneak into her room to find evidence",
          "Host Gen's room was unlocked",
          "Evelyn is remotely attending a physiotherapy session for her hands."
        ]
      },
      {
        time: "4:00 PM",
        events: [
          "You saw a blackbox recording of the accident.",
          "You saw Host Gen has the same cloud keychain that you gave Cady.",
          "You hear that Host Gen has returned, leave and decide to kill Host Gen."
        ]
      },
      {
        time: "4:15 PM",
        events: [
          "You check Host Gen's posted schedule.",
          "You pass by an angry Allison."
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
          "You wait in the garage with a brick.",
          "You hear someone opening and closing the coat closet."
        ]
      },
      {
        time: "5:15 PM",
        events: [
          "Host Gen goes to garage to pick up drinks for dinner.",
          "You knock out Host Gen with a brick, unlock her car, and put her in the backseat.",
          "You inject Host Gen with the muscle relaxant, turn on the engine, and lock her in the car.",
          "You take Cady's cloud keychain and leave the keys in the car."
        ]
      },
      {
        time: "5:30 PM",
        events: [
          "You return to your room to get ready for dinner.",
          "You hide the cloud keychain in your luggage"
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
};

export default characters;