
//  sec004a_es6-classes-1.js

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_003_Hello_React\react-course-proj-01\Indecision-app-01\zzz_playground\sec004a_es6-classes-1.js

//  nodemon sec004a_es6-classes-1.js

class cls_Person
{
    constructor (P_name = "Anonymous", P_age = 0)
    {
        this.V_name = P_name;
        this.V_age = P_age;
    }
    get_greeting ()
    {
        //return "HI";
        //return "Hi! I am " + this.V_name + "!";
        return `Hi! I am ${this.V_name}!`;
    }
    get_description ()
    {
        return `${this.V_name} is ${this.V_age} year(s) old.`;
    }
}

class cls_Student extends cls_Person
{
    constructor (P_name = "Anonymous", P_age = 0, P_major)
    {
        super (P_name, P_age);
        this.V_major = P_major;
    }
    UM_has_major ()
    {
        return !!this.V_major;
    }

    get_description ()
    {
        let L_description = super.get_description();

        if (this.UM_has_major())
        {
            L_description += ` Their major is ${this.V_major}.`;
        }

        return L_description;
    }
}

class cls_Traveler extends cls_Person
{
    constructor (P_name = "Anonymous", P_age = 0, P_home_location)
    {
        super (P_name, P_age);
        this.V_home_location = P_home_location;
    }

    get_greeting ()
    {
        let L_greeting = super.get_greeting ();

        if (this.V_home_location)
        {
            L_greeting += ` I'm visiting from ${this.V_home_location}.`;
        }

        return L_greeting;
    }
}

//  const VC_me = new cls_Person ("Your Name", 22);
//  const VC_me2 = new cls_Person ("Your Name 2", 33);
//  const VC_me3 = new cls_Person ();

//  console.log (VC_me.get_greeting ());
//  console.log (VC_me2.get_greeting ());
//  console.log (VC_me3.get_greeting ());
//  console.log (VC_me.get_description ());
//  console.log (VC_me2.get_description ());
//  console.log (VC_me3.get_description ());


//  const VC_me = new cls_Student ("Your Name", 22, "Computer Science");
//  console.log (VC_me);
//  console.log (VC_me.UM_has_major());
//  console.log (VC_me.get_description ());

const VC_me = new cls_Traveler ("Your Name", 22, "Boston");
const VC_me2 = new cls_Traveler ("Your Name 02", 33);

console.log (VC_me.get_greeting ());
console.log (VC_me2.get_greeting ());

