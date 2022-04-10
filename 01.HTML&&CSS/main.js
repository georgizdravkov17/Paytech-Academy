const firstRobot = {
    name: "Bard",
    color: "white",
    type: "male",
    recievedMessages: []
};

const secondRobot = {
    name: "Bob",
    color: "white",
    type: "male",
    recievedMessages: []
};

const phrase = `Hello, ${secondRobot.name}`;

alert(phrase);

secondRobot.recievedMessages.push(phrase);