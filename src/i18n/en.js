window.I18N = window.I18N || { strings: {}, data: {} };

window.I18N.strings.en = {
  eyebrowIndex: "A Numerology Instrument",
  titleIndex: "Life Path",
  subtitleIndex: "Enter your birth date to see where it falls on the dial.",
  dialCaption: "Explore the full dial →",
  dialAriaLabel: "View the full dial guide",
  dobLabel: "Date of birth",
  dobClear: "Clear",
  themeToLight: "Switch to light mode",
  themeToDark: "Switch to dark mode",
  yearFieldLabel: "Year",
  monthFieldLabel: "Month",
  dayFieldLabel: "Day",
  openCalendar: "Open calendar",
  calculateBtn: "Read the Dial",
  showWorking: "Show the working",
  hideWorking: "Hide the working",
  figuresLabel: "Notable figures on this path",
  footerIndex: "Numerology is a symbolic tradition, not a scientific method.",

  eyebrowGuide: "The Full Dial",
  titleGuide: "Numbers Guide",
  subtitleGuide: "Every position on the dial, its strengths and shadows, and who has stood there.",
  backToSetDate: "← Set Your Date",
  filterAll: "All",
  strengthsLabel: "Strengths",
  challengesLabel: "Challenges",
  pairsWellWith: "Pairs well with",
  footerGuide: "Notable figures are numerology attributions based on birth date, not scientific claims. Photos and bios are fetched live from Wikipedia.",

  seeWhoLabel: "See who's on this path",
  hideFiguresLabel: "Hide this path's figures",
  readFullProfile: "Read the full profile",
  hideFullProfile: "Hide the full profile",

  monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  weekdayShort: ["S", "M", "T", "W", "T", "F", "S"]
};

window.I18N.data.en = {
  1: {
    title: "The Leader",
    symbol: "The Spark",
    meaning: "Independence and leadership. You're driven to forge your own path, take initiative, and pioneer new ideas.",
    strengths: ["Self-starting", "Original thinking", "Decisive under pressure", "Natural authority"],
    challenges: ["Impatience with others' pace", "Can tip into stubbornness", "Struggles to delegate"],
    compatible: [3, 5, 7],
    figures: ["Steve Jobs", "Martin Luther King Jr.", "Walt Disney", "Nikola Tesla", "Lady Gaga", "Louis Armstrong", "Paul Newman", "LeBron James"],
    details: [
      "The Spark doesn't wait for permission. You'll usually be the one who raises a hand first, ships the rough draft first, or walks into the unfamiliar room first — not because you're fearless, but because moving beats standing still while you figure out if you're afraid.",
      "Teams and relationships ask you to slow your pace to someone else's, and that's the part of this path that chafes. You'd rather own a decision outright than negotiate it, which wins you a lot of ground fast but can leave the people around you feeling like passengers instead of co-pilots.",
      "There's no real finish line here — satisfaction from one win tends to evaporate within days, replaced by the next target. That's not dissatisfaction, it's just how the engine is built: always facing forward, rarely idling."
    ]
  },
  2: {
    title: "The Diplomat",
    symbol: "The Bridge",
    meaning: "Partnership and diplomacy. You thrive on cooperation, sensitivity to others, and building harmony.",
    strengths: ["Reads a room instantly", "Patient mediator", "Deeply loyal", "Detail-aware"],
    challenges: ["Conflict-averse", "Over-gives at their own expense", "Indecisive alone"],
    compatible: [4, 6, 8],
    figures: ["Barack Obama", "Kobe Bryant", "Joe Biden", "Madonna", "Jennifer Aniston", "Bill Clinton", "Antonio Banderas", "Demi Moore"],
    details: [
      "The Bridge exists to connect two sides, and that's how you tend to live — measuring almost every choice, from a job to a friendship, by whether it draws people closer or pushes them apart. A partnership that works smoothly matters more to you than one that wins.",
      "The wear shows up quietly. You'll swallow a complaint rather than risk tension, or let a deserved ask go unspoken because pushing for it feels like picking a fight. Over years, that habit can mean you're the last name on the list of people whose needs get met — including your own list.",
      "What balances it out is a radar most people don't have: a way of sensing the mood in a room, or in a person, before anyone says a word. That early-warning system is what lets you defuse a fight before it starts, and it's why people who are close to you often say they feel truly seen."
    ]
  },
  3: {
    title: "The Creative",
    symbol: "The Muse",
    meaning: "Creativity and self-expression. You're drawn to communication, art, and bringing joy to those around you.",
    strengths: ["Magnetic communicator", "Quick wit", "Optimistic outlook", "Artistic instinct"],
    challenges: ["Scatters focus across projects", "Avoids hard emotions with humor", "Prone to mood swings"],
    compatible: [1, 5, 9],
    figures: ["Audrey Hepburn", "David Bowie", "Frida Kahlo", "Jackie Chan", "Ariana Grande", "Chris Rock", "Alicia Keys", "Snoop Dogg"],
    details: [
      "The Muse turns almost anything into material — a bad day becomes a good story, a stray thought becomes a caption worth writing. Words come easily to you, which is why so many people on this path end up on a stage, in front of a camera, or behind a byline without quite planning to.",
      "Pulling people in is the easy part; keeping them close is the harder one. You'd rather keep a conversation fun and moving than sit inside something heavy, and a long commitment can start to feel like it's fencing off every other possibility still out there worth trying.",
      "The unclaimed territory for you is stillness — there's a quieter, more searching layer of experience that a packed, expressive life rarely leaves room for. What carries you through the rough patches instead is a genuine, almost stubborn talent for finding the version of events you can still laugh about."
    ]
  },
  4: {
    title: "The Builder",
    symbol: "The Foundation",
    meaning: "Stability and discipline. You value hard work, order, and building things that last.",
    strengths: ["Relentless work ethic", "Reliable under pressure", "Methodical planner", "Loyal to commitments"],
    challenges: ["Rigid about process", "Resistant to sudden change", "Can overwork to exhaustion"],
    compatible: [2, 6, 8],
    figures: ["Oprah Winfrey", "Leonardo da Vinci", "Marie Curie", "Bill Gates", "Barbra Streisand", "Clint Eastwood", "Katy Perry", "Jay-Z"],
    details: [
      "The Foundation holds weight without needing to announce it. You're rarely the loudest presence in a room, but you're often the one thing everyone else is quietly relying on, because you process a setback methodically instead of dramatically and then just keep going.",
      "That trust in method, built up over years, is also where the ceiling sits. Once you've decided how something is supposed to be done, a better way can have a hard time getting past the door — the discipline that makes you reliable can just as easily make you hard to update.",
      "You show up for people the way you show up for everything: honestly, on schedule, and for the long run. It's rarely the most dramatic kind of love, but it's the kind that's still standing a decade later, which for you is the entire point."
    ]
  },
  5: {
    title: "The Free Spirit",
    symbol: "The Wind",
    meaning: "Freedom and change. You seek variety, adventure, and adaptability in life.",
    strengths: ["Adapts on the fly", "Magnetic curiosity", "Fearless with change", "Broad skill range"],
    challenges: ["Commitment feels confining", "Restless, easily bored", "Impulsive decisions"],
    compatible: [1, 3, 7],
    figures: ["Beyoncé", "J.K. Rowling", "Abraham Lincoln", "Mark Zuckerberg", "Angelina Jolie", "Vin Diesel", "David Beckham", "Eminem"],
    details: [
      "The Wind doesn't settle in one direction for long. You learn by doing rather than by planning it out first, and the second something stops teaching you anything new, some part of you is already scanning for the next thing worth chasing.",
      "That same restlessness makes new people easy to meet and hard to keep. You're generous and exciting in the early stretch of a friendship or a romance, but the pull to move on can hit right as things are about to get deep — and staying past that point takes real, deliberate effort for you.",
      "One thing this path won't give you is boredom. You may rarely know exactly where you're headed next, but the not-knowing is closer to the appeal than the obstacle."
    ]
  },
  6: {
    title: "The Nurturer",
    symbol: "The Hearth",
    meaning: "Nurturing and responsibility. You're oriented toward caretaking, community, and harmony in relationships.",
    strengths: ["Natural caretaker", "Strong sense of justice", "Builds community", "Dependable anchor"],
    challenges: ["Takes on too much responsibility", "Can be controlling 'for their own good'", "Neglects own needs"],
    compatible: [2, 4, 9],
    figures: ["Albert Einstein", "John Lennon", "Thomas Edison", "Warren Buffett", "Hillary Clinton", "Stevie Wonder", "John Travolta", "Prince"],
    details: [
      "The Hearth warms a room just by being in it. Whoever's in front of you — a stranger, a close friend, someone you'd normally have nothing in common with — tends to get the same treatment from you: patience, respect, and a real offer of help, which is why counseling, teaching, and mentoring so often find people on this path rather than the other way around.",
      "That instinct extends past your own circle. Showing up for a cause, backing someone who's being overlooked, or simply being the one who notices when a person needs help feels less like generosity to you and more like the obvious thing to do.",
      "Where it costs you is in forgetting your own name is on the list too. A partner will find your devotion almost startling if they're used to less, but you'll happily run yourself dry pouring into everyone around you before it occurs to you to pour any back into yourself."
    ]
  },
  7: {
    title: "The Seeker",
    symbol: "The Lantern",
    meaning: "Introspection and analysis. You're drawn to inner wisdom, research, and understanding deeper truths.",
    strengths: ["Sharp analytical mind", "Comfortable alone", "Deep, focused study", "Trusts intuition"],
    challenges: ["Withdraws from others", "Overthinks decisions", "Guards emotions closely"],
    compatible: [1, 5, 11],
    figures: ["Elon Musk", "Stephen Hawking", "Taylor Swift", "John F. Kennedy", "Princess Diana", "Julia Roberts", "Leonardo DiCaprio", "Jim Carrey"],
    details: [
      "The Lantern is for seeing by, not for crowds — you tend to spend more time turning a question over in private than talking it through out loud. What makes that habit useful rather than just introverted is pairing hard analysis with a gut sense that's usually right, so you rarely settle for the first explanation that comes along.",
      "You'll happily go deep into a subject on your own terms, but a rulebook that can't bend when new evidence shows up loses you fast — that goes for organized religion as much as office policy. Time alone isn't a deficit for you; it's the only condition under which your thinking actually gets clear.",
      "That same self-sufficiency reads as distance to people trying to get close. You're genuinely good at the early curiosity of getting to know someone — the questions, the noticing — but the emotional follow-through afterward doesn't come as naturally. Hand you a real problem and quiet room to work in, though, and you'll outlast almost anyone else still in it."
    ]
  },
  8: {
    title: "The Achiever",
    symbol: "The Scale",
    meaning: "Ambition and material success. You have a natural drive for achievement, authority, and abundance.",
    strengths: ["Strategic ambition", "Sound judgment with resources", "Natural executive presence", "Resilient under setbacks"],
    challenges: ["Ties self-worth to results", "Can prioritize work over people", "Power struggles"],
    compatible: [2, 4, 22],
    figures: ["Nelson Mandela", "Pablo Picasso", "Robin Williams", "Bob Dylan", "Sandra Bullock", "Matt Damon", "Martin Scorsese", "Kim Kardashian"],
    details: [
      "The Scale weighs effort against result, and you tend to grade your own life the same way — the bigger the target, the more it means to actually hit it. Money and status aren't really the goal for you so much as the receipt proving the work happened.",
      "Being told what to do by someone you don't respect is close to intolerable. You lead as naturally as you breathe, so pushing back on authority is almost automatic for you, even when going along would clearly cost less. The slower lesson is that every relationship, a boss included, still runs on give-and-take, not just your read being right.",
      "Left unmanaged, that drive turns into a stress load that eventually slows the very climb it's fueling. And in love, you show up the way you show up everywhere: dependable, steady, providing — closer to a well-run partnership than a swept-off-their-feet romance, but no less loyal for it."
    ]
  },
  9: {
    title: "The Humanitarian",
    symbol: "The Horizon",
    meaning: "Humanitarianism and completion. You're guided by compassion, idealism, and a wish to give back.",
    strengths: ["Deep empathy", "Big-picture idealism", "Generous with time and resources", "Wise perspective"],
    challenges: ["Struggles to let go", "Martyr tendencies", "Disappointed by others' self-interest"],
    compatible: [3, 6, 33],
    figures: ["Mahatma Gandhi", "Serena Williams", "Malala Yousafzai", "Elvis Presley", "Jim Morrison", "Bruce Lee", "Whitney Houston", "Bruno Mars"],
    details: [
      "The Horizon is earned by walking toward it, and so is your particular kind of wisdom — less borrowed philosophy, more the residue of having actually been through something and come out the other side. People end up leaning on you for exactly that reason, and you tend to let them, because what you know genuinely helps.",
      "A pull toward something larger than yourself — spiritual, religious, or just a strong gut sense — often runs underneath the surface here, less as a habit than as ballast. When logic runs out mid-crisis, that's usually what steadies you.",
      "You'll show up for anyone who's been made to feel small, without being asked twice. What's harder is admitting when that's you — years of carrying your own weight quietly means you rarely let people see the struggle, and accepting help back is the harder half of a cycle you're otherwise generous with."
    ]
  },
  11: {
    title: "The Master Intuitive",
    symbol: "The Mirror",
    meaning: "Master Number — intuition and illumination. An intensified 2: spiritual insight paired with the potential to inspire others.",
    strengths: ["Heightened intuition", "Inspires through presence", "Sees patterns others miss", "Visionary empathy"],
    challenges: ["Nervous energy, anxiety-prone", "Sets impossibly high standards", "Feels others' emotions too intensely"],
    compatible: [2, 7, 22],
    figures: ["Michael Jordan", "Wolfgang Amadeus Mozart", "Rosa Parks", "Michelle Obama", "Aretha Franklin", "Novak Djokovic", "Jennifer Lopez", "Julius Caesar"],
    details: [
      "The Mirror reflects what's usually invisible, and that's close to what your instincts do — a read on people and situations that runs well past ordinary hunches, closer to what others might call a sixth sense. The point of that gift was never just to have it; it's meant to be used for someone besides yourself.",
      "Carrying a Master Number is a heavier load than it looks, and 11 is no exception — self-doubt and a wired, anxious energy tend to shadow this path, making it genuinely hard to trust what you're picking up on rather than second-guess it. Most of the work here is that trust, not the sensitivity itself, which was never really in question.",
      "You probably believe in something bigger than the everyday, even if organized religion was never quite the shape of it for you — it's more about reaching real understanding than following a script. In close relationships you'll often sense what someone needs before they've said it, which is exactly why people find themselves drawn to you without quite knowing why."
    ]
  },
  22: {
    title: "The Master Builder",
    symbol: "The Blueprint",
    meaning: "Master Number — the master builder. An intensified 4: the discipline to turn big visions into lasting reality.",
    strengths: ["Turns vision into structure", "Operates at massive scale", "Disciplined execution", "Practical idealism"],
    challenges: ["Crushing self-imposed pressure", "Fear of not living up to potential", "Overextends on scope"],
    compatible: [4, 8, 11],
    figures: ["Paul McCartney", "Will Smith", "Dalai Lama", "Denzel Washington", "Bruce Springsteen", "Richard Branson", "Tony Robbins", "Dwayne Johnson"],
    details: [
      "The Blueprint is only worth anything once it's built, and that's the standard you tend to hold yourself to — the number most capable of turning a fuzzy dream into something you can actually stand inside. There's real weight to it too: it can feel like you've been handed a gift you now owe the world something built with, even if it takes years to figure out what.",
      "What separates you from other hard workers isn't effort, it's scope — you're rarely climbing a ladder just to climb it, you're building toward something that outlasts you. That same sense of obligation can curdle into a sharp fear of falling short, and learning to burn that fear as fuel instead of freezing under it is most of the job.",
      "You lead well, both yourself and other people, even if you lean on logic hard enough to look all-business from the outside. What actually lands for you is concrete: the thing existing, finished, in the world. Nobody holds you to a higher bar than you already hold yourself."
    ]
  },
  33: {
    title: "The Master Teacher",
    symbol: "The Flame",
    meaning: "Master Number — the master teacher. An intensified 6: nurturing raised to a selfless, healing calling.",
    strengths: ["Selfless devotion to others", "Healing, uplifting presence", "Rare emotional wisdom", "Leads by example"],
    challenges: ["Extreme self-sacrifice", "Rarely asks for help", "Burnout from carrying others"],
    compatible: [6, 9, 11],
    figures: ["Meryl Streep", "Mother Teresa", "Fred Rogers", "Florence Nightingale"],
    details: [
      "The Flame is the rarest mark on the whole dial — it takes an unusual alignment of birth-date numbers to land here at all, and the people who do get called Master Teachers: healers who show others the way back to their own heart, mostly by example.",
      "Selflessness runs through nearly everything you do. You listen without waiting for your turn to talk, and you offer a kind of emotional support that's genuinely hard to find elsewhere — which is exactly why the people close to you count themselves lucky. The flip side is that the same instinct to give first can leave your own needs sitting unattended for years at a stretch.",
      "Holding this path is as much weight as it is gift: real spiritual depth and empathy, paired with a run of hard tests along the way. The biggest one is learning to heal yourself before you can do anyone else's healing any real good — a lesson that can take most of a lifetime, but the self-understanding it leaves you with is worth every mile of the road."
    ]
  }
};
