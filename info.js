const alice = {
    firstName: 'Alice',
    lastName : 'Liddell',
    age: 28,
    language: ['APL', 'J', 'Shakti K', 'R', 'python', 'Julia', 'haskell', 'OCaml', 'erlang', 'Common Lisp', 'Scheme', 'microKanren', 'Shen', 'Prolog', 'Raku', 'Eiffel', 'SmallTalk', 'Pharo', 'coq', 'Emacs Lisp', 'Elm', 'PureScript', 'Factor']
}

const bob = {    
    firstName: 'Bob',
    lastName: 'Lemon',
    age: 30,
    language: ['rust', 'assembleur', 'C', 'C++', 'Java', 'Brainfuck', 'Befunge', 'Malbolge', 'ArnoldC', 'Cobol', 'Pascal', 'VimScript', 'ruby', 'clojure', 'VHDL', 'Verilog', 'Zig', 'SuperCollider', 'Vlang']
}

const charlie = {
    firstName: 'Charlie',
    lastName: 'Charlot',
    age: 8,
    language: ['Scratch', 'thunkable', 'python', 'JavaScool', 'Haxe', 'Lua', 'Neko', 'Tiger', 'Fjölnir', 'LOLCODE', 'PHP', 'Whitespace']
}

const printInfo = (person) => {
    for (let prop of Object.values(person))
	console.log(prop);
    console.log('');
}

printInfo(alice);
printInfo(bob);
printInfo(charlie);

const canVote = (person) => {
    if (person.age >= 18)
	return true
    else
	return false
}

console.log(canVote(alice));
console.log(canVote(bob));
console.log(canVote(charlie));
console.log();

const mostSkilledDev = (person1, person2) => {
    const nbLangP1 = person1.language.length;
    const nbLangP2 = person2.language.length;
    if (nbLangP1 > nbLangP2)
	return person1.firstName
    else if (nbLangP1 < nbLangP2)
	return person2.firstName
    else
	return 'draw'
}

console.log(mostSkilledDev(alice, bob));
console.log(mostSkilledDev(alice, charlie));
console.log(mostSkilledDev(bob, charlie));
console.log(mostSkilledDev(bob, bob));

