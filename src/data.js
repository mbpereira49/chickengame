const places2 = [
    {
      id: 0,
      title: "Place 1",
      password: "password1",
      description: "Description for place 1",
      unlocks: [2, 3]
    },
    {
      id: 1,
      title: "Place 2",
      password: "password2",
      description: "Description for place 2",
      unlocks: [4, 5]
    },
    {
      id: 2,
      title: "Place 3",
      password: "password3",
      unlocks: [3]
    },
    {
      id: 3,
      title: "Place 4",
      password: "password4",
      description: "Description for place 4",
      unlocks: [3]
    },
    {
      id: 4,
      title: "Place 5",
      password: "password5",
      description: "Description for place 5",
      unlocks: [3]
    },
    {
      id: 5,
      title: "Place 6",
      password: "password6",
      description: "Description for place 6",
      unlocks: [3]
    }
  ];

  const places = [
    {
      id: 'bandits',
      Bar: 'Bandits',
      Challenge: 'Collectively do 100 squats (in the bar)'
    },
    {
      id: 'sheets',
      Bar: '3 sheets',
      Challenge: 'buy something with $1'
    },
    {
      id: 'peculiar',
      Bar: 'Peculiar pub',
      Challenge: 'Make a friend (no speaking allowed)'
    },
    {
      id: 'blind',
      Bar: 'Blind tiger',
      Challenge: 'outside: Pretend to be a street photographer named Johnny Pace (show IG profile) and take a photo of a stranger but it’s really bad'
    },
    {
      id: 'trionas',
      Bar: 'Triona’s on Sullivan',
      Challenge: 'Turn to someone and express how you can\'t believe you ran into each other (conversation 34 seconds minimum)'
    },
    {
      id: 'treehouse',
      Bar: 'Greenwich Treehouse',
      Challenge: 'Convince a group of people that you’re all british',
      prompt: 'Fill in the missing word: <a href="https://drive.google.com/file/d/1DG7lfl5UYFPzQxwil1iqeWEW-YgrVaKh/view?usp=share_link">image</a> (all lowercase)',
      password: 'yoda',
      unlocks: ['hatch', 'villagetavern', 'halfpint', 'sheets']
    },
    {
      id: 'hatch',
      Bar: 'Down the hatch',
      Challenge: 'go up to a group and be like “down the hatch!!!” And chug your drink (bonus points if you get them to copy you)'
    },
    {
      id: 'wagon',
      Bar: 'Off the wagon',
      Challenge: 'Go up to someone at the bar and say IM FUTURE YOU YOU NEED to learn about the 9 waYS TO FUCK UP YOUR OATMEAL and hand them that article',
      prompt: 'There is a map on the second story of this bar. If you were to walk from Myrtle-Wickoff Aves. to Woodside 61st, you would pass through 3 cemeteries, but only one is depicted on the map. Which one is it? (all lower case, omit the word cemetery)',
      password: 'mt zion',
      unlocks: ['peculiar', 'trionas', 'bandits', 'blind']
    },
    {
      id: 'villagetavern',
      Bar: 'The village tavern',
      Challenge: 'pass off the idol from 5 below'
    },
    {
      id: 'halfpint',
      Bar: 'The Half Pint / Ernie’s bar',
      Challenge: 'find someone who you necklaces astrology sign and give it to them'
    }
  ];  
  
  export default places;
  
