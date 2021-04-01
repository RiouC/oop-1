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

exports.Human = Human;

