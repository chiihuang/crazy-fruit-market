var chosenFruit = 0;
var pickedFruit = -1; // final chosen fruit, -1 stands for not picking any yet
var chosenQ = 0;
var taskNumber = 0;
var playMode = 0; // 0: easy, 1: normal, 2: hard


var questions = [
  "How do you do?",
  "Are you healthy?",
  "Do you want to become our dinner tonight?"
];

var apples = [
	{
		vocab: 'nonchalant',
		nodeName: 'nonchalantApple',
		replies: [
			"oh?",
			"oh.",
			"ok.",
		],
	},
	{
		vocab: 'restive',
		nodeName: 'restiveApple',
		replies: [
			"I ... I’m fine.",
			"Yeah... no... no, I’m not healthy.\n",
			"No! Don’t touch me!\n Noooooooo! (screaming)",
		],
	},
	{
		vocab: 'mendacious',
		nodeName: 'mendaciousApple',
		replies: [
			"I am a tasty fruit!\n And I'm healthy!",
			"Oh! I am rotten!\n You don't want to take me home. I promise.",
			"I'd love to!\n But I'm not tasty at all.",
		],
	},
	{
		vocab: 'pugnacious',
		nodeName: 'pugnaciousApple',
		replies: [
			"Leave me alone!",
			"Ok? Didn't hear what I just said?\n Stop talking to me!",
			"You want to fight with me, don't you?\n Take me home before you beat me first!!!",
		],
	},
	{
		vocab: 'jocular',
		nodeName: 'jocularApple',
		replies: [
			"Fine! I'm a fine apple!\nNot a pine apple. Ha ha ...",
			"Juicy~",
			"Asking me for dinner? You make me blush!",
		],
	},
	{
		vocab: 'slavish',
		nodeName: 'slavishApple',
		replies: [
			"It’s going well. What can I get for you?",
			"Very tasty, sir. I hope you like it.",
			"I will do whatever you say.\nNever disobey, I promise!",
		],
	},
	{
		vocab: 'altruistic',
		nodeName: 'altruisticApple',
		replies: [
			"Very well, thanks.",
			"I'm healthful.",
			"I'd love to. Sacrifice is a bliss.\nPlease take me and let me benefit you!",
		],
	},
	{
		vocab: 'leery',
		nodeName: 'leeryApple',
		replies: [
			"Fine.",
			"Wait, why you ask so? What's your intention?",
			"I won't go with stranger like you.",
		],
	},
];

var blackColor = new cc.Color(6, 8, 17);

var assignTaskNumber = function() {
	taskNumber = Math.floor(Math.random() * 8);
	return taskNumber;
};

var getTaskQuestion = function(){
	return '"Please buy ' + vocabList[taskNumber] + ' apples back home!"';
};

var getDefinition = function() {
	definitionList = [
		'casually calm and relaxed',
		'refusing to move, especially in a forward direction.',
		'lying, untruthful or dishonest',
		'maturally aggressive or hostile; combative; belligerent.',
	];
	return 'I means the apple which is ' + definitionList[taskNumber];
};

var getResult = function() {
	if (taskNumber === chosenFruit)
		return 'Correct! Thanks for your help!';
	else
		return 'Wrong! Sorry you lose!';
};