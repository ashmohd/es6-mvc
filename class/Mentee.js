import Person from '../class/Person.js'
class Mentee extends Person {
    constructor(name, age, mentor) {
        super(name, age) 
        this.mentor = mentor;
    }
}

export default Mentee;