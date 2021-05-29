import Model from '../model/Model.js'

class MentorModel extends Model {
    constructor(){
       super();
    }
    static getMentors() {
        let mentors;
        if(localStorage.getItem('mentors')===null){
            mentors  = [];
        } else {
            mentors = JSON.parse(localStorage.getItem('mentors'));
        }

        return mentors;
    }

    static addMentor(mentor){
       const mentors = MentorModel.getMentors();
       console.log('i amhere', mentors)
       mentors.push(mentor)
       console.log('i amhere', mentors)
       localStorage.setItem('mentors', JSON.stringify(mentors));
    }

    static findMentorByName(name){
       const mentors = MentorModel.getMentors();
       return mentors.filter(function (mentor) {
              if(name===mentor.name){
                  return mentor;
              }
              return false;
       })

    }

    static updateByName(name, prop, value){
        let mentors = MentorModel.getMentors();
        mentors.map(function (mentor) {
                if(mentor['name']===name){
                    console.log(mentor[prop],value)
                    mentor[prop]=value;
                }
                return mentor;
        })
        console.log(JSON.stringify(mentors),'inser')
        localStorage.setItem('mentors', JSON.stringify(mentors));
    }
    
}

export default MentorModel;