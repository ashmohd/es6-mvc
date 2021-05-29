import Model from '../model/Model.js'
class MenteeModel extends Model {
    constructor() {
      super();
    }
    static getMentees() {
        let mentees;
        if (localStorage.getItem('mentees') === null) {
            mentees = [];
        } else {
            mentees = JSON.parse(localStorage.getItem('mentees'));
        }

        return mentees;
    }
    static addMentee(mentee) {
        const mentees = MenteeModel.getMentees();
        mentees.push(mentee)
        console.log(JSON.stringify(mentees),'here')
        localStorage.setItem('mentees', JSON.stringify(mentees));
    }
}

export default MenteeModel;