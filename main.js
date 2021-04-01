const { Point } = require('./point');
const { Human } = require('./classInfo');


// Point

const p1 = new Point(1, 2);
const p2 = new Point(10, 11);

console.log(p1.distance(p2));
// la fonction distance est commutative
console.log(p2.distance(p1));


// Human

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
