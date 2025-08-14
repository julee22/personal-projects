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
    work: "Future heiress to a car manufacturer business. Currently unemployed.",
    other: ["Grew up in Rich Town","Likes street racing. Was once part of a street racing club.","Receives a $5,000 monthly allowance"],
    history: [
      {
        title: 'The Accident',
        description: `On December 8, 2017, after your parents took your car keys to stop you from street racing, you snuck out to borrow Host Gen’s car. While racing through the mountains, a text from your parents warning they’d cut off your allowance distracted you — you nearly hit a girl in a blue dress, but a boy jumped in front, taking the hit and tumbling off a cliff. The girl was knocked unconscious. Shaken, you returned the car to Host Gen, who spotted the damage and demanded the truth. She agreed to keep quiet in exchange for $4,000 a month and told you to scrap the car. You’ve never raced since.`,
      },
    ],
    whyYouHere: `Recently, your parents have threatened to cut you off from your inheritance if you don’t prove you can handle more responsibility. They’ve also repeatedly warned you not to cause any scandals. You decided to visit Lover’s Retreat to enjoy a free vacation and talk to Host Gen about ending the $4,000 payments.`,
    importantEvents: [
      "Parents discovered that you have been sending money to someone and are demanding an explanation",
      "Found out that Host Gen kept the black box recording of the Accident.",
      "Snuck into Host Gen's room to steal black box recording."
    ],
    motives: [
      "Is getting blackmailed by G.",
      "Since you cannot pay Host Gen any more, Host Gen will report the Accident to the police. Your parents may actually disown you."
    ],
    relationships: {
      G: {
        name: "Host Gen",
        personalDetails: {
          gender: "Female",
          birthDate: "1996-07-02",
          age: 29,
          relStatus: ["Older sister of Sick Harry (in a coma)","Long time friends with Heiress Allison"],
        },
        other: ["Grew up in Mid Village"],
        work: "Spokesperson and manager for Lover’s Retreat",
        impression: `Stuck up and stuffy. Friends of necessity and convenience. While long time friends, since Host Gen is not of the same social class, your lifestyles and values often clash. Host Gen is willing to do what it takes to support her younger brother, Sick Harry.`,
        history: `Involved with the Accident. Currently being paid $4,000 monthly to keep the secret. Host Gen uses the money to pay for Sick Harry's hospital bills. Due to the blackmail, you have not been living comfortably. Additionally, Host Gen always cockily brings up the Accident whenever they argue even though it’s been 8 years.`,
        dayOfTheMurder: [
          "Found out that Host Gen kept the black box recording of the accident.",
          "Host Gen threatened to go to the cops if the $4,000 payments are stopped."
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
        impression: "An alpha male. The rugged beast to your beauty. Treats you like a princess. Potentially only dating her due to her position. Parents only mildly approve of him.",
        history: [
          {
            title: 'The Accident',
            description: `Met when you were disposing of Host Gen's car from the Accident and immediately hit it off. Never told him about The Accident nor your past street racing hobby.`}
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
          "Free Faye was upset at G.",
          "Strange, you didn’t know they knew each other."
        ]
      }
    },
    timeline: [
      {
        time: "1:00 PM",
        events: [
          "You and Dealer Doug went out to have lunch.",
          "Your parents warn you to learn the value of money if you want to inherit the business, and to avoid street racing or scandals.",
          "You notice Dealer Doug is stressed after reading a text message."
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
          "You go to Host Gen's room to confront Host Gen about the blackmail.",
          `“I know you don’t need the money. How could you tell me to stop?”`,
          `“It’s my money to begin with! I'll decide whether I need it or not!”`,
          `“I helped you and this is how you repay me? We had a deal!”`,
          `“Ugh, it was your car 8 years ago!"`,
          `“You had better not stop the payments. I still have proof of what happened!”`
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