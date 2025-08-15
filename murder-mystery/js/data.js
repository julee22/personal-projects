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
        impression: "Passionate, straight-laced man.",
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
};

export default characters;