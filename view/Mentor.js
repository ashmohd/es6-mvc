import Mentor from '../class/Mentor.js';
import View from '../view/View.js'

class MentorView extends View {
    constructor(){
        super();
        this.mentee_count = 4;
        this.list = document.querySelector('#mentor-list');
        this.form = this.document.querySelector('#mentor-form');

        this.name = this.document.querySelector('#mentor-name');
        this.age = this.document.querySelector('#mentor-age');
        this.mentor_info = document.querySelector('#mentor-info');

    }
    
    bindOnLoad(mentors){
        this.document.addEventListener('DOMContentLoaded',this.displayMentors(mentors))
        this.document.addEventListener('DOMContentLoaded',this.displayMentorsToForm(mentors))
    }
    
    bindAddMentor(handler){
        this.form.addEventListener('submit', (e) =>{
            e.preventDefault();
            const mentor_init = new Mentor(this.name.value, this.age.value, this.mentee_count);
            this.addMentor(mentor_init);
            this.addMentorToForm(mentor_init);
            handler(mentor_init);
            this.resetForm(this.form);
        });
    }
    
    bindOnChangeTable(mentors){
        //this.list.
        //this.list.addEventListener('DOMSubtreeModified',this.displayMentorsToForm(mentors))
    }

    displayMentors(mentors) {
        mentors.forEach(mentor => 
            {
               this.addMentor(mentor);
           }
           );
     }

     displayMentorsToForm(mentors) {
        mentors.forEach(mentor => 
            {

               this.addMentorToForm(mentor);
           }
           );
     }

     addMentor(mentor){
        let row = document.createElement('tr');
        row.innerHTML = `
           <td>${mentor.name}</td>
        `;
        this.list.appendChild(row);
    }
    
    addMentorToForm(mentor){
        const option = document.createElement("option");
        option.text = `${mentor.name} (${mentor.mentee_count})`;
        option.value = mentor.name;
        if(mentor.mentee_count===0)
            option.disabled = true;

        this.mentor_info.add(option);
    }
}

export default MentorView;