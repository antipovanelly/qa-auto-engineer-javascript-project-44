import readlineSync from 'readline-sync';


const greetingUser = () => {
    console.log("Welcome to the Brain Games!");
    console.log("May I have your name?")
    const name = readlineSync.question('Your answer: ').toString();
    console.log(`Hello, ${name}!`)
    return name;
}

export default greetingUser;

