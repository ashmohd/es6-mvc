import Person from '../class/Person.js';
class Mentor extends Person {
    constructor(name, age, mentee_count) {
        super(name, age) 
        this.mentee_count=mentee_count;
    }
}

export default Mentor;