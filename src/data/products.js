const products = [
  {
      "id": 1,
      "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1352202115i/15796908.jpg",
      "title": "Little Women",
      "author": "Louisa May Alcott",
      "numberOfPages": 417,
      "description": "Christmas won't be the same this year for Meg, Jo, Beth, and Amy, as their father is away fighting in the Civil War and the family has fallen on hard times. But though they may be poor, life for the four March sisters is rich with color, as they play games, put on wild theatricals, make new friends, argue, grapple with their vices, learn from their mistakes, nurse each other through sickness and disappointments, and get into all sorts of trouble."
  },
  {
      "id": 2,
      "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg",
      "title": "Frankenstein",
      "author": "Mary Shelley",
      "numberOfPages": 153,
      "description": "Mary Shelley’s Frankenstein is a combination of Gothic novel and science fiction. It unfolds the story of a scientist Victor Frankenstein who creates a hideous monster from pieces of corpses and brings it to life. But the monster eventually becomes the source of his misery and demise. The plot of the novel is epistolary. The story is narrated through the first-person accounts of Captain Walton, Victor Frankenstein, and the monster himself. Moreover, Frankenstein is also a frame story. It means a story framed or surrounded by another story or a series of stories."
  },
  {
      "id": 3,
      "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1569514209i/45047384.jpg",
      "title": "The House in the Cerulean Sea",
      "author": "TJ Klune",
      "numberOfPages": 394,
      "description": "A magical island. A dangerous task. A burning secret. Linus Baker leads a quiet, solitary life. At forty, he lives in a tiny house with a devious cat and his old records. As a Case Worker at the Department in Charge Of Magical Youth, he spends his days overseeing the well-being of children in government-sanctioned orphanages. When Linus is unexpectedly summoned by Extremely Upper Management he's given a curious and highly classified assignment: travel to Marsyas Island Orphanage, where six dangerous children reside: a gnome, a sprite, a wyvern, an unidentifiable green blob, a were-Pomeranian, and the Antichrist. Linus must set aside his fears and determine whether or not they’re likely to bring about the end of days. But the children aren’t the only secret the island keeps. Their caretaker is the charming and enigmatic Arthur Parnassus, who will do anything to keep his wards safe. As Arthur and Linus grow closer, long-held secrets are exposed, and Linus must make a choice: destroy a home or watch the world burn. An enchanting story, masterfully told, The House in the Cerulean Sea is about the profound experience of discovering an unlikely family in an unexpected place—and realizing that family is yours."
  },
  {
      "id": 4,
      "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1652374208i/53205888.jpg",
      "title": "Under the Whispering Door",
      "author": "TJ Klune",
      "numberOfPages": 376,
      "description": "Welcome to Charon's Crossing. The tea is hot, the scones are fresh, and the dead are just passing through. When a reaper comes to collect Wallace from his own funeral, Wallace begins to suspect he might be dead. And when Hugo, the owner of a peculiar tea shop, promises to help him cross over, Wallace decides he’s definitely dead. But even in death he’s not ready to abandon the life he barely lived, so when Wallace is given one week to cross over, he sets about living a lifetime in seven days. Hilarious, haunting, and kind, Under the Whispering Door is an uplifting story about a life spent at the office and a death spent building a home."
  },
  {
      "id": 5,
      "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699617963i/60784549.jpg",
      "title": "In the Lives of Puppets",
      "author": "TJ Klune",
      "numberOfPages": 432,
      "description": "In a strange little home built into the branches of a grove of trees, live three robots—fatherly inventor android Giovanni Lawson, a pleasantly sadistic nurse machine, and a small vacuum desperate for love and attention. Victor Lawson, a human, lives there too. They’re a family, hidden and safe."
  },
  {
      "id": 6,
      "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1427489009i/25055763.jpg",
      "title": "The Road to Little Dribbling",
      "author": "Bill Bryson",
      "numberOfPages": 385,
      "description": "Over twenty years ago, Bill Bryson went on a trip around Britain to celebrate the green and kindly island that had become his home. The hilarious book he wrote about that journey, Notes from a Small Island, became one of the most loved books of recent decades, and was voted in a BBC poll as the book that best represents Britain. Now, for his first travel book in fifteen years, Bryson sets out again, on a long-awaited, brand-new journey around the UK."
  },
  {
      "id": 7,
      "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630502935i/6294.jpg",
      "title": "Howl's Moving Castle (Howl's Moving Castle, #1)",
      "author": "Diana Wynne Jones",
      "numberOfPages": 329,
      "description": "Sophie has the great misfortune of being the eldest of three daughters, destined to fail miserably should she ever leave home to seek her fate. But when she unwittingly attracts the ire of the Witch of the Waste, Sophie finds herself under a horrid spell that transforms her into an old lady. Her only chance at breaking it lies in the ever-moving castle in the hills: the Wizard Howl's castle. To untangle the enchantment, Sophie must handle the heartless Howl, strike a bargain with a fire demon, and meet the Witch of the Waste head-on. Along the way, she discovers that there's far more to Howl—and herself—than first meets the eye."
  },
  {
      "id": 8,
      "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1293848674i/2173611.jpg",
      "title": "House of Many Ways (Howl's Moving Castle, #3)",
      "author": "Diana Wynne Jones",
      "numberOfPages": 404,
      "description": "Charmain Baker is in over her head. Looking after Great-Uncle William's tiny cottage while he's ill should have been easy. But Great-Uncle William is better known as the Royal Wizard Norland, and his house bends space and time. Its single door leads to any number of places—the bedrooms, the kitchen, the caves under the mountains, the past, and the Royal Mansion, to name just a few."
  },
  {
      "id": 9,
      "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398003737i/236093.jpg",
      "title": "The Wonderful Wizard of Oz",
      "author": "L. Frank Baum",
      "numberOfPages": 154,
      "description": "Swept away from her home in Kansas by a tornado, Dorothy and her dog Toto find themselves stranded in the fantastical Land of Oz. As instructed by the Good Witch of the North and the Munchkins, Dorothy sets off on the yellow brick road to try and find her way to the Emerald City and the Wizard of Oz, who can help her get home. With her companions the Scarecrow, the Tin Woodman and the Cowardly Lion, Dorothy experiences an adventure full of friendship, magic and danger. A much-loved children's classic, The Wizard of Oz continues to delight readers young and old with its enchanting tale of witches, flying monkeys and silver shoes."
  },
  {
      "id": 10,
      "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1616788834i/56978100.jpg",
      "title": "The Girl Who Fell Beneath the Sea",
      "author": "Axie Oh",
      "numberOfPages": 325,
      "description": "Deadly storms have ravaged Mina’s homeland for generations. Floods sweep away entire villages, while bloody wars are waged over the few remaining resources. Her people believe the Sea God, once their protector, now curses them with death and despair. In an attempt to appease him, each year a beautiful maiden is thrown into the sea to serve as the Sea God’s bride, in the hopes that one day the 'true bride' will be chosen and end the suffering."
  },
  {
      "id": 11,
      "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672574587i/60531406.jpg",
      "title": "Tress of the Emerald Sea",
      "author": "Brandon Sanderson",
      "numberOfPages": 423,
      "description": "The only life Tress has known on her island home in an emerald-green ocean has been a simple one, with the simple pleasures of collecting cups brought by sailors from faraway lands and listening to stories told by her friend Charlie. But when his father takes him on a voyage to find a bride and disaster strikes, Tress must stow away on a ship and seek the Sorceress of the deadly Midnight Sea. Amid the spore oceans where pirates abound, can Tress leave her simple life behind and make her own place sailing a sea where a single drop of water can mean instant death?"
  },
    {
        "id": 12,
        "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1625926657i/58527403.jpg",
        "title": "	Magnolia Parks (Magnolia Parks Universe, #1)",
        "author": "Jessa Hastings",
        "numberOfPages": 423,
        "description": "She is a beautiful, affluent, self-involved and mildly neurotic London socialite. He is Britain's most photographed bad-boy lothario who broke her heart. But Magnolia Parks and BJ Ballentine are meant to be, and everyone knows it. They're in the stars... just suspended in a strange kind of love that looks like hurting each other a lot of the time: She dates other people to keep him at bay; he sleeps with other girls to get back at her for it. But at the end of their every sad endeavour to get over one another, it's still each other they crawl back to. But their dysfunction is catching up with them, pulling at their seams and fraying the world they've built; a world where neither has to ever let the other go completely. As the cracks start to show and secrets begin to surface, Magnolia and BJ are finally forced to face the formidable question they've been avoiding all their lives: how many loves do you really get in a lifetime?"
    },
    {
        "id": 13,
        "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1637996109i/59708060.jpg",
        "title": "	Daisy Hates (Magnolia Parks Universe, #2)",
        "author": "Jessa Hastings",
        "numberOfPages": 436,
        "description": "All 20 year old Daisy Haites has ever wanted is a normal life, but it’s just not on the cards for her. Raised by her older brother Julian since their parents were murdered in front of them 12 years ago, Daisy hasn’t ever lived beyond the watchful gaze of her gang lord brother. But Julian’s line of work means that Daisy’s life is...complicated. And things don’t become any less complex when she falls hard for Christian Hemmes, the beautiful and emotionally unavailable boy she’s been involved with for the last few months, who also happens to be one of the few men in London who doesn’t answer to Julian. Christian’s life is no walk in the park either, being in love with his best friend’s girlfriend and all… He’s happy enough to use Daisy to throw off the scent of his true affections, that is until she starts to infiltrate those too."
    },
    {
        "id": 14,
        "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657859955i/61447046.jpg",
        "title": "	Magnolia Parks: The Long Way Home (Magnolia Parks Universe, #3)",
        "author": "Jessa Hastings",
        "numberOfPages": 645,
        "description": "It's been nearly a year since everything happened between Magnolia Parks and BJ Ballentine on the steps of the Mandarin Oriental, and it seems like everything since then has changed. Magnolia has a life in New York now, BJ appears to have finally let go and moved on -- but when they both wind up back to London and are thrust together once again, they find themselves asking their age-old question? How many loves do you actually get in a lifetime, and most importantly— are they each others?"
    },
    {
        "id": 15,
        "coverImage": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1670147466i/63922275.jpg",
        "title": "	Daisy Hates: The Great Undoing (Magnolia Parks Universe, #4)",
        "author": "Jessa Hastings",
        "numberOfPages": 366,
        "description": "Daisy Haites thought she’d left everything about her old life in the past: the crime, her family and the man she loves. But when her safety is threatened once again, she finds herself back under the watchful eye of her gang-lord brother Julian and her ex-boyfriend Christian, both desperate to keep her safe."
    }
]

export default products;