import readlineSync from 'readline-sync';
import greetingUser from "../src/cli.js";

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}

const brainEvenGame = () => {
    const greetingUserResult = greetingUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswersCount = 0;

    while (correctAnswersCount < 3) {

        const number = getRandomNumber();
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question("Your answer: ").toString();

        let correctAnswer;
        if (number % 2 === 0) {
            correctAnswer = 'yes';
        } else {
            correctAnswer = 'no';
        }

        if (userAnswer !== 'yes' && userAnswer !== 'no') {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${greetingUserResult}!`);
            return;
        }

        if (userAnswer === correctAnswer) {
            console.log("Correct!");
            correctAnswersCount += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${greetingUserResult}!`);
            return;
        }
    }
    console.log(`Congratulations, ${greetingUserResult}!`);
}

export default brainEvenGame;

