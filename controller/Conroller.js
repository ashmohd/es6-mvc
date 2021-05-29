import Mentor from '../class/Mentor.js';
import MenteeModel from '../model/Mentee.js';
import MentorModel from '../model/Mentor.js';
import MenteeView from '../view/Mentee.js';
import MentorView from '../view/Mentor.js';
class Controller {

    constructor(){
       this.MenteeView  = new MenteeView;
       this.MentorView  = new MentorView;
    }

    init(){
        this.MentorView.bindOnLoad(MentorModel.getMentors()); /// onload
        this.MentorView.bindAddMentor(MentorModel.addMentor)

        this.MenteeView.bindOnLoad(MenteeModel.getMentees()); /// onload
        this.MenteeView.bindAddMentee(this.addMentee.bind(this))       
    }

    addMentee(mentee, mentor_name){
        console.log(this,"acccess");
        let prop = 'mentee_count'

        MenteeModel.addMentee(mentee);

        const mentor = MentorModel.findMentorByName(mentor_name);
        mentor[0].mentee_count = mentor[0].mentee_count -1;
        MentorModel.updateByName(mentor_name, prop, mentor[0].mentee_count);
        this.MentorView.displayMentorsToForm(MentorModel.getMentors());

        
    }

}

export default Controller