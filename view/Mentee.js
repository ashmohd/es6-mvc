import View from '../view/View.js'
import Mentee from '../class/Mentee.js'

class MenteeView extends View {
    constructor(){
       super();
       this.list = this.document.querySelector('#mentee-list');
       this.form = this.document.querySelector('#mentee-form');

       this.name = this.document.querySelector('#mentee-name');
       this.age = this.document.querySelector('#mentee-age');
       this.mentor = this.document.querySelector('#mentor-info');
    }
    bindOnLoad(mentees){
        this.document.addEventListener('DOMContentLoaded',this.displayMentees(mentees))
    }
    bindAddMentee(handler){
        this.form.addEventListener('submit', (e) =>{
            e.preventDefault();
            const mentee_init = new Mentee(this.name.value, this.age.value, this.mentor.value);
            this.addMentee(mentee_init);
            handler(mentee_init, this.mentor.value);   // controller
            this.resetForm(this.form);
        });
    }

    displayMentees(mentees) {
        mentees.forEach(mentee => this.addMentee(mentee));
     }

     addMentee(mentee){ 
        let row = document.createElement('tr');
        row.innerHTML = `
           <td>${mentee.name}</td>
        `;
        this.list.appendChild(row);
    }
    

}

export default MenteeView;
