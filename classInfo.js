class Human {
    constructor(firstName, lastName, age, language) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.language = language;
    }

    printInfo() {
	for (let prop of Object.values(this))
	    console.log(prop);
	console.log('');
    }

    canVote() {
	if (this.age >= 18)
	    return true
	else
	    return false
    }

    mostSkilledDev(person) {
	const nbLangP1 = this.language.length;
	const nbLangP2 = person.language.length;
	if (nbLangP1 > nbLangP2)
	    return this.firstName
	else if (nbLangP1 < nbLangP2)
	    return person.firstName
	else
	    return 'draw'
    }
}

const alice = new Human('Alice', 'Liddell', 28, ['APL', 'J', 'Shakti K', 'R', 'python', 'Julia', 'haskell', 'OCaml', 'erlang', 'Common Lisp', 'Scheme', 'microKanren', 'Shen', 'Prolog', 'Raku', 'Eiffel', 'SmallTalk', 'Pharo', 'coq', 'Emacs Lisp', 'Elm', 'PureScript', 'Factor']);
const bob = new Human('Bob', 'Lemon', 30, ['rust', 'assembleur', 'C', 'C++', 'Java', 'Brainfuck', 'Befunge', 'Malbolge', 'ArnoldC', 'Cobol', 'Pascal', 'VimScript', 'ruby', 'clojure', 'VHDL', 'Verilog', 'Zig', 'SuperCollider', 'Vlang']);
const charlie = new Human('Charlie', 'Charlot', 8, ['Scratch', 'thunkable', 'python', 'JavaScool', 'Haxe', 'Lua', 'Neko', 'Tiger', 'Fjölnir', 'LOLCODE', 'PHP', 'Whitespace']);

alice.printInfo();
bob.printInfo();
charlie.printInfo();

console.log(alice.canVote());
console.log(bob.canVote());
console.log(charlie.canVote());

console.log(alice.mostSkilledDev(bob));
console.log(alice.mostSkilledDev(charlie));
console.log(bob.mostSkilledDev(charlie));
console.log(bob.mostSkilledDev(bob));
