const riddleSnippets = [
  {riddle: "You have two ropes. Each rope takes one hour to burn. These ropes are not identical, nor are they uniform; i.e. it does not necessarily take half an hour for half the rope to burn (if you have trouble visualizing this, imagine a rope of varying thickness across its length). With only these two ropes and a way to light them, how do you measure out 45 minutes?",
  answer: "Light one rope on both ends. At the same time, light the other rope on one end. When the first rope is burned up, 30 minutes have passed, and the second rope has 30 minutes of burn left. At this point, like the other end of the second rope. It's 30 minutes of burn will burn up in 15 minutes, and when it's done you will be at 45 minutes.",
  url: "https://www.reddit.com/r/riddles/comments/15zo61/you_have_two_ropes/"},
  {riddle: "16 sodium particles walk into a bar, what/who comes next?",
  answer: "Batman",
  url: "https://www.reddit.com/r/riddles/comments/8b6s9s/16_sodium_particles_walk_into_a_bar_whatwho_comes/"},
  {riddle: "If you throw me out the window, I\'ll leave a grieving wife. Bring me back, but through the door, you\'ll see someone giving life. What am I??",
  answer: "the letter 'n'",
  url: "https://www.reddit.com/r/riddles/comments/17erre/what_am_i/"},
  {riddle: "Two sisters are we, one is dark and one is fair. In twin towers dwelling we're quite the pair. One from land and one from sea. Tell us truly, who are we?",
  answer: "salt and pepper",
  url: "https://www.reddit.com/r/riddles/comments/2zq4jd/two_sisters/"},
  {riddle: "There are three chests, each containing 100 coins. Chest1 has 100 gold coins, Chest2 has 100 silver coins, and Chest3 has half & half. The catch: the chests are all labeled incorrectly. You may pull out just one coin from any of the chests, then you must identify which chest contains all gold coins. How do you do it?",
  answer: "Chest3 either has 100 gold or 100 silver coins. Pull one coin from there, and if gold, that is the chest with 100 gold. Else, Chest2 is the correct one.",
  url: "https://puzzling.stackexchange.com/questions/22771/the-lucky-chest"},
  {riddle: "As a stone inside a tree, I'll help your words outlive thee. But if you push me as I stand, the more I move the less I am. What am I?",
  answer: "a pencil",
  url: "https://www.reddit.com/r/riddles/comments/5d25vh/as_a_stone_inside_a_tree_ill_help_your_words/"},
  {riddle: "Walk on the living, they don't even mumble. Walk on the dead, they mutter and grumble. What are they?",
  answer: "leaves",
  url: "https://www.reddit.com/r/AskReddit/comments/1zcf9x/what_is_the_best_riddle_you_know/"},
  {riddle: "What is has no weight, but becomes harder to keep the longer you hold it?",
  answer: "a secret",
  url: "https://www.reddit.com/r/AskReddit/comments/1zcf9x/what_is_the_best_riddle_you_know/"},
  {riddle: "1, 11, 21, 1211, 111221, 312211, 13112221. What comes next?",
  answer: "1113213211. Explanation: the first number is just 'ONE.' So if you say there's ONE '1' (say it aloud) the next number would be an 11. Then there are TWO '1's, creating 21. Then ONE '2' and ONE '1' which creates 1211. Then ONE '1', ONE '2', and TWO '1's' creating 111,221...and so on.",
  url: "https://www.reddit.com/r/AskReddit/comments/1zcf9x/what_is_the_best_riddle_you_know/"},
  {riddle: "The last man on earth sits alone in a room. The telephone rings, who is it?",
  answer: "a woman",
  url: "https://www.reddit.com/r/AskReddit/comments/1zcf9x/what_is_the_best_riddle_you_know/"},
  {riddle: "Say my name, and I am no more. What am I?",
  answer: "silence",
  url: "https://www.reddit.com/r/AskReddit/comments/1zcf9x/what_is_the_best_riddle_you_know/"},
  {riddle: "Forwards it's heavy, backwards it's not.",
  answer: "the word 'ton'",
  url: "https://www.reddit.com/r/AskReddit/comments/1zcf9x/what_is_the_best_riddle_you_know/"},
  {riddle: "Why is a raven like a writing desk?",
  answer: "Inky quills and flat notes. Poe wrote on both.",
  url: "https://www.reddit.com/r/AskReddit/comments/1zcf9x/what_is_the_best_riddle_you_know/"},
  {riddle: "Some walks into a bar and asks for a glass of water, the bartender immediately pulls a gun out from behind the bar and aims it at her. Why?",
  answer: "She had the hiccups.",
  url: "https://www.reddit.com/r/AskReddit/comments/1zcf9x/what_is_the_best_riddle_you_know/"},
  {riddle: "It starts with a bang. He runs, and takes three left turns to see a man in a mask. Why?",
  answer: "It was a home run in baseball.",
  url: "https://www.reddit.com/r/AskReddit/comments/1zcf9x/what_is_the_best_riddle_you_know/"},
  {riddle: "What word starts with E and ends with E but only has one letter in it.",
  answer: "an envelope",
  url: "https://www.reddit.com/r/AskReddit/comments/5z86aw/reddit_what_are_some_of_your_trickiest_riddles/"},
  {riddle: "What happens once in a minute, twice in a moment, but never in a thousand years?",
  answer: "the letter 'm'",
  url: "https://www.reddit.com/r/AskReddit/comments/5z86aw/reddit_what_are_some_of_your_trickiest_riddles/"},
  {riddle: "You can see me in water, but I never get wet. What am I?",
  answer: "a reflection",
  url: "https://www.reddit.com/r/AskReddit/comments/5z86aw/reddit_what_are_some_of_your_trickiest_riddles/"},
  {riddle: "Who makes it has no need for it. Who buys it has no use for it. Who uses it can neither see it or feel it. What is it?",
  answer: "a coffin",
  url: "https://www.reddit.com/r/AskReddit/comments/5z86aw/reddit_what_are_some_of_your_trickiest_riddles/"},
  {riddle: "Young I am tall, old I am short. Breathe is my foe.",
  answer: "a candle",
  url: "https://www.reddit.com/r/AskReddit/comments/5z86aw/reddit_what_are_some_of_your_trickiest_riddles/"},
  {riddle: "A man jumped. As he fell, he heard a phone ring, and immediately regretted his decision. Why did he regret it?",
  answer: "He was jumping into a pool.",
  url: "https://www.reddit.com/r/AskReddit/comments/5z86aw/reddit_what_are_some_of_your_trickiest_riddles/"},
  {riddle: "What is the longest word in the English language with only one vowel?",
  answer: "strength",
  url: "https://www.reddit.com/r/AskReddit/comments/5z86aw/reddit_what_are_some_of_your_trickiest_riddles/"},
  {riddle: "What is it that you must give before you can keep it?",
  answer: "your word",
  url: "https://www.reddit.com/r/AskReddit/comments/3fi83z/reddit_whats_your_favorite_riddle/"},
  {riddle: "What is something that is yours, yet everyone uses it more than you.",
  answer: "your name",
  url: "https://www.reddit.com/r/AskReddit/comments/3fi83z/reddit_whats_your_favorite_riddle/"},
  {riddle: "I'm light as a feather, but even a troll can't hold me for long.",
  answer: "breathe",
  url: "https://www.reddit.com/r/AskReddit/comments/3fi83z/reddit_whats_your_favorite_riddle/"},
  {riddle: "What's always the last thing to mend, the middle of middle and end of the end?",
  answer: "the letter 'd'",
  url: "https://www.reddit.com/r/AskReddit/comments/3fi83z/reddit_whats_your_favorite_riddle/"},
  {riddle: "First think of the person who lives in disguise, Who deals in secrets and tells naught but lies. Next, tell me what's always the last thing to mend, The middle of middle and end of the end? And finally give me the sound often heard, During the search for a hard-to-find word. Now string them together and answer me this, Which creature would you be unwilling to kiss?",
  answer: "a spider",
  url: "https://www.reddit.com/r/AskReddit/comments/3fi83z/reddit_whats_your_favorite_riddle/"},
  {riddle: "I dig out tiny caves, and store gold and silver in them. I also build bridges of silver and make crowns of gold. Who am I?",
  answer: "a dentist",
  url: "https://www.reddit.com/r/AskReddit/comments/3fi83z/reddit_whats_your_favorite_riddle/"},
  {riddle: "I am the first in earth, the second in heaven, I appear two times in a week. You can only see me once in a year, although I am the middle of the sea.",
  answer: "the letter 'e'",
  url: "https://www.reddit.com/r/AskReddit/comments/3fi83z/reddit_whats_your_favorite_riddle/"},
  {riddle: "What gets bigger the more you take away from it?",
  answer: "a hole",
  url: "https://www.reddit.com/r/AskReddit/comments/3fi83z/reddit_whats_your_favorite_riddle/"},
  {riddle: "16, 06, 68, 88, ?, 98. What is the '?'",
  answer: "87. Turn upside down.",
  url: "https://twentytwowords.com/can-you-solve-these-riddles-without-looking-at-the-answers/"},
  {riddle: "Given 100 coins, 10 are heads up. You cannot feel or see which are heads up. How can you create two piles so each has equal numbers of coins that are heads up?",
  answer: "Create two piles of 50 coins, and flip over 10 coins in one pile.",
  url: "https://www.glassdoor.com/Interview/You-have-a-100-coins-laying-flat-on-a-table-each-with-a-head-side-and-a-tail-side-10-of-them-are-heads-up-90-are-tails-QTN_290837.htm"},
  {riddle: "Why is an island like the letter T?",
  answer: "They are both in the middle of water.",
  url: "https://www.englishclub.com/esl-jokes/1-lettert-q.htm"},
  {riddle: "I have a neck, but no head, and I wear a cap. What am I?",
  answer: "A bottle",
  url: "https://www.rd.com/joke/capping-it-off/"},
  {riddle: "I have holes in the bottom, left, right, top and bottom, but I still hold water. What am I?",
  answer: "A sponge",
  url: "https://diply.com/article/crazy-tricky-riddles/3?config=25"},
  {riddle: "What is higher without a head than with a head?",
  answer: "A pillow",
  url: "https://www.brainzilla.com/brain-teasers/riddles/oOzeA0ya/what-is-higher-without-the-head-than-with-it/"},
  {riddle: "I fly without wings, I cry without eyes. What am I?",
  answer: "A cloud",
  url: "https://www.doriddles.com/riddle-722#show"},
  {riddle: "What can you hear but not touch or see and yet control?",
  answer: "Your voice",
  url: "https://www.doriddles.com/riddle-766#show"},
  {riddle: "The more you take, the more you leave behind. What am I?",
  answer: "Footsteps",
  url: "https://www.doriddles.com/riddle-38#show"},
  {riddle: "Feed me and I live, yet give me a drink and I die",
  answer: "Fire",
  url: "https://www.doriddles.com/riddle-935#show"},
  {riddle: "A man was driving a black car. His lights were off. The moon shown no light. A cat was in the middle of the road. How did he know to stop?",
  answer: "It was a very bright and sunny day.",
  url: "https://www.doriddles.com/riddle-533#show"},
  {riddle: "A sundial is the type of timepiece that has the fewest moving parts. What type of timepiece has the most moving parts?",
  answer: "An hourglass.",
  url: "https://www.doriddles.com/riddle-847#show"},
  {riddle: "When I take five and add six, I get eleven, but when I take six and add seven, I get one. What am I?",
  answer: "A clock",
  url: "https://www.doriddles.com/riddle-843#show"},
  {riddle: "What can be seen in the middle of March and April that cannot be seen at the beginning or end of either month?",
  answer: "The letter 'r'",
  url: "https://www.doriddles.com/riddle-865#show"},
  {riddle: "I always follow my brother, although very different we are. You can see him, but not me. You can hear me, but not him. What am I?",
  answer: "Thunder and lightning",
  url: "https://www.doriddles.com/riddle-858#show"},
  {riddle: "What has cities, but no houses; forests, but no trees; and water, but no fish?",
  answer: "A map",
  url: "https://www.doriddles.com/riddle-644#show"},
  {riddle: "You will always find me in the past. I can be created in the present, But the future can never taint me. What am I?",
  answer: "History",
  url: "https://www.doriddles.com/riddle-115#show"},
  {riddle: "Two fathers and their two sons go fishing together. They each catch one fish to take home with them. They do not lose any fish, and yet when they arrive at home they only have three fish. How can this be?",
  answer: "There are just three people. A grandfather, his son, and his grandson.",
  url: "https://www.doriddles.com/riddle-78#show"},
  {riddle: "What is black when you buy it, red when you use it, and gray when you throw it away?",
  answer: "Charcoal",
  url: "https://www.doriddles.com/riddle-279#show"},
  {riddle: "I pass before the sun, yet make no shadow. What am I?",
  answer: "The wind",
  url: "https://www.doriddles.com/riddle-592#show"},
  {riddle: "A hundred feet in the air, but it's back is on the ground. What is it?",
  answer: "A centipede flipped over.",
  url: "https://www.doriddles.com/riddle-702#show"},
  {riddle: "I see without seeing; to me, darkness is as clear as daylight. What am I?",
  answer: "A bat",
  url: "https://www.doriddles.com/riddle-842#show"},
  {riddle: "A sphere has three, a circle has two, and a point has zero what?",
  answer: "Dimensions",
  url: "https://www.doriddles.com/riddle-726#show"},
  {riddle: "What has 13 hearts, but no other organs?",
  answer: "A deck of playing cards.",
  url: "https://www.rd.com/jokes/riddles/"},
  {riddle: "What kind of coat is always wet when you put it on?",
  answer: "A coat of paint.",
  url: "https://www.rd.com/jokes/riddles/"},
  {riddle: "Can you name three consecutive days without saying Wednesday, Friday, or Sunday?",
  answer: "Yesterday, today, and tomorrow.",
  url: "https://www.rd.com/jokes/riddles/"},
  {riddle: "A girl fell off of a 30-foot ladder, but she didn’t get hurt at all. How is this possible?",
  answer: "She fell off the bottom step.",
  url: "https://www.rd.com/jokes/riddles/"},
  {riddle: "What do you break before you use it?",
  answer: "An egg.",
  url: "https://www.rd.com/jokes/riddles/"},
  {riddle: "I exist in life but not in death. You can’t have fun without me. What am I?",
  answer: "The letter 'f'",
  url: "https://riddles.fyi/page/6/"},
  {riddle: "I shave everyday but my beard always stays the same. Who am I?",
  answer: "A barber",
  url: "https://riddles.fyi/page/6/"},
  {riddle: "A son and engineer go fishing. The boy was the engineer’s son but the engineer wasn’t the boy’s dad. How was this possible?",
  answer: "The engineer was the boy’s mom.",
  url: "https://riddles.fyi/page/6/"},
  {riddle: "What do you throw out when you need it but put away when you don’t?",
  answer: "An anchor",
  url: "https://riddles.fyi/page/6/"},
  {riddle: "When do you start when it’s red but stop when it’s green?",
  answer: "When you are eating a watermelon.",
  url: "https://riddles.fyi/page/6/"},
  {riddle: "It's shorter than the rest, but when you're happy, you raise it up like it's the best. What is it?",
  answer: "A thumb",
  url: "https://www.brainzilla.com/brain-teasers/riddles/"},
  {riddle: "I am not alive but seem so, because I dance and breathe with no legs or lungs of my own. What am I?",
  answer: "A flame",
  url: "https://www.brainzilla.com/brain-teasers/riddles/"},
  {riddle: "I am rarely touched but often held, and if you are smart you'll use me well. What am I?",
  answer: "A tongue",
  url: "https://www.brainzilla.com/brain-teasers/riddles/"},
  {riddle: "Lives without a body, hears without ears, speaks without a mouth, to which the air alone gives birth. What is it?",
  answer: "An echo",
  url: "https://www.brainzilla.com/brain-teasers/riddles/"},
  {riddle: "They are two brothers. However much they run, they do not reach each other.",
  answer: "Wheels",
  url: "https://www.brainzilla.com/brain-teasers/riddles/"},
  {riddle: "What is harder to catch the faster you run?",
  answer: "Your breath",
  url: "https://www.brainzilla.com/brain-teasers/riddles/"},
  {riddle: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
  answer: "A map",
  url: "https://www.rd.com/funny-stuff/challenging-riddles/"},
  {riddle: "I have keys and space, but no locks or rooms. You can enter, but you can't go outside. What am I?",
  answer: "A keyboard",
  url: "https://www.rd.com/funny-stuff/challenging-riddles/"},
  {riddle: "Sometimes I shine, sometimes I’m dull, sometimes I am big, and sometimes I am small. I can be pointy, I can be curved, and don’t ask me questions because even though I’m sharp, I’m not smart enough to answer you. What am I?",
  answer: "A knife",
  url: "https://www.getriddles.com/hard-riddles/"}
];

function displayRiddleSnippet(riddle) {
  const riddleQ = document.getElementById("riddle-q");
  const riddleA = document.getElementById("riddle-a");
  const riddleSrc = document.getElementById("riddle-src");
  riddleQ.innerHTML = `Q: ${riddle.riddle}`;
  riddleA.innerHTML = `A: ${riddle.answer}`;
  riddleSrc.href = riddle.url;
}

function riddleSnippet() {
   let riddle = riddleSnippets[Math.floor( Math.random() * riddleSnippets.length )];
   displayRiddleSnippet(riddle);
   return riddle;
}

riddleSnippet();

const riddleBox = document.getElementsByClassName("riddle-flipper-container")[0];
const riddleFront = document.getElementsByClassName("riddle-front")[0];
const riddleBack = document.getElementsByClassName("riddle-back")[0];
const riddleFlipper = document.getElementsByClassName('riddle-flipper')[0];

riddleBox.addEventListener('click', (event) => {
  riddleBox.classList.toggle('flip');

  riddleFront.classList.toggle('hide');
  riddleBack.classList.toggle('hide');

  riddleFlipper.classList.toggle('background');

  setTimeout(() => {
    riddleFlipper.classList.toggle('background');
  }, 200);

});
