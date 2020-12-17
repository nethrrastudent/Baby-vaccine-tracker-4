class Signin {

    constructor() {

        this.childname = createInput('Child Name');
        this.dob = createInput('DOB in mm/dd/yyyy');
        this.greeting = createElement('h2');
        this.submitbutton=createButton('SUBMIT');
        this.title1 = createElement('h2');
        this.title2=createElement('h3');
        this.greeting2=createElement('h2');
    }


    hide(){
        this.greeting.hide();
        this.submitbutton.hide();
        this.childname.hide();
        this.dob.hide();
        this.title1.hide();
        this.title2.hide();

      }
    display() {


        this.title1.html("BABY VACCINE TRACKER");
        this.title1.position(150,50);
    
        this.title2.html("Enter the details");
        this.title2.position(220,130);

        this.childname.position(220,200);
        this.dob.position(220,250);
        this.submitbutton.position(250,300);


        
    }

    async computeDue(){
        var present_date = new Date();
        
        var htmlContent = "Hello Parent !! </br></br>";
 
        
        this.greeting.html(htmlContent);
        this.greeting.position(300,200);

      
    }
}



