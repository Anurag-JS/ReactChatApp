import user from '../reducers/user';
 
export const data = {
  profile: {
    id: 1,
    name: "Anurag Verma",
    image: user.image,
    contacts: [
      {
        id: 2,
        name: "Ajay",
        image: "https://img.freepik.com/free-photo/close-up-smiling-man-field-sunset_1140-222.jpg?w=740&t=st=1723398413~exp=1723399013~hmac=f10fefdb5b2ab3ffb57c9d26af575fa7fd92462efd51e7462134fb2aa60e39e9",
        chatlog: [
          {
            text: "Hey, did you check out that new movie?",
            timestamp: "11:21 AM",
            sender: "user",
            message_id: 1,
          },
          {
            text: "Not yet, is it good?",
            timestamp: "11:22 AM",
            sender: "me",
            message_id: 2,
          },
          {
            text: "Yeah, it's pretty awesome. You should watch it!",
            timestamp: "10:03 AM",
            sender: "user",
            message_id: 3,
          },
          {
            text: "Cool, I'll watch it this weekend.",
            timestamp: "10:04 AM",
            sender: "me",
            message_id: 4,
          },
          {
            text: "Let me know what you think!",
            timestamp: "10:05 AM",
            sender: "user",
            message_id: 5,
          },
        ],
      },
      {
        id: 3,
        name: "Akshay",
        image: "https://images.playground.com/63495677d53f48fe8e5649cb2a6f8480.jpeg",
        chatlog: [
          {
            text: "Hi Akshay!",
            timestamp: "10:01 AM",
            sender: "user",
            message_id: 1,
          },
          {
            text: "Hey there! How's your project going?",
            timestamp: "10:02 AM",
            sender: "me",
            message_id: 2,
          },
          {
            text: "It's going well, just a few more tweaks to go.",
            timestamp: "10:03 AM",
            sender: "user",
            message_id: 3,
          },
          {
            text: "Nice, keep it up!",
            timestamp: "10:04 AM",
            sender: "me",
            message_id: 4,
          },
          {
            text: "Thanks, appreciate it!",
            timestamp: "10:05 AM",
            sender: "user",
            message_id: 5,
          },
        ],
      },
      {
        id: 4,
        name: "Priya",
        image: "https://img.freepik.com/free-photo/young-people-eating-berries-street_23-2150163530.jpg?w=360&t=st=1723398794~exp=1723399394~hmac=6a2bc68b653162ce7e494b36a210f65b7cabe36c689d9e9fc09a149887e20a3a",
        chatlog: [
          {
            text: "Hey, Priya! What's up?",
            timestamp: "10:01 AM",
            sender: "me",
            message_id: 1,
          },
          {
            text: "Just finished a book, it was amazing!",
            timestamp: "10:02 AM",
            sender: "user",
            message_id: 2,
          },
          {
            text: "Which one?",
            timestamp: "10:03 AM",
            sender: "me",
            message_id: 3,
          },
          {
            text: "The Alchemist, highly recommend it!",
            timestamp: "10:04 AM",
            sender: "user",
            message_id: 4,
          },
          {
            text: "I've heard good things about it. I'll check it out.",
            timestamp: "10:05 AM",
            sender: "me",
            message_id: 5,
          },
        ],
      },
      {
        id: 5,
        name: "Ayush",
        image: "https://img.freepik.com/free-photo/headshot-attractive-man-smiling-pleased-looking-intrigued-standing-blue-background_1258-65733.jpg?t=st=1723398780~exp=1723402380~hmac=aca5410823431e938454239276c8f8308c378512821630e6b9b81e19128ea5a2&w=900",
        chatlog: [],
      },
      {
        id: 6,
        name: "Nitin",
        image: "https://img.freepik.com/premium-photo/light-bulb-head-young-man-concept-having-idea_919294-10089.jpg?w=360",
        chatlog: [
          {
            text: "Yo, did you get the notes for today's lecture?",
            timestamp: "10:01 AM",
            sender: "user",
            message_id: 1,
          },
          {
            text: "Yeah, I did. Do you need them?",
            timestamp: "10:02 AM",
            sender: "me",
            message_id: 2,
          },
          {
            text: "Yes, please send them over.",
            timestamp: "10:03 AM",
            sender: "user",
            message_id: 3,
          },
          {
            text: "I'll email them to you right away.",
            timestamp: "10:04 AM",
            sender: "me",
            message_id: 4,
          },
          {
            text: "Thanks a lot!",
            timestamp: "10:05 AM",
            sender: "user",
            message_id: 5,
          },
        ],
      },
      {
        id: 7,
        name: "Jatin",
        image: "https://img.freepik.com/premium-photo/stock-photo-wallpaper_1037184-18228.jpg?w=740",
        chatlog: [
          {
            text: "Where are you, man?",
            timestamp: "10:06 AM",
            sender: "me",
            message_id: 1,
          },
          {
            text: "Just reached home.",
            timestamp: "10:06 AM",
            sender: "user",
            message_id: 2,
          },
          {
            text: "Let's catch up later?",
            timestamp: "10:07 AM",
            sender: "me",
            message_id: 3,
          },
          {
            text: "Sure, let's plan something.",
            timestamp: "10:08 AM",
            sender: "user",
            message_id: 4,
          },
          {
            text: "Great! See you soon.",
            timestamp: "10:09 AM",
            sender: "me",
            message_id: 5,
          },
          {
            text: "See you!",
            timestamp: "10:09 AM",
            sender: "user",
            message_id: 6,
          },
        ],
      },
      {
        id: 8,
        name: "Preeti",
        image: "https://st4.depositphotos.com/20363444/28853/i/600/depositphotos_288537332-stock-photo-focused-young-girl-casual-clothes.jpg",
        chatlog: [],
      },
      {
        id: 9,
        name: "Shubham",
        image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1723398952~exp=1723399552~hmac=c5f24e02fa486832d14db22e2a6976d8f9df9b3a595a8d7e9c08a178fe07cda3",
        chatlog: [],
      },
    ],
  },
};
