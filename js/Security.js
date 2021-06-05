class Security {

    constructor(){

        // Add code to create the input and button elements
        this.input1 = createInput("").attribute("placeholder", "CODE1");
        this.button1 = createButton('CHECK');
        this.input2 = createInput("").attribute("placeholder", "CODE2");
        this.button2 = createButton('CHECK');
        this.input3 = createInput("").attribute("placeholder", "CODE3");
        this.button3 = createButton('CHECK');
    } 

    hide(){
     this.input1.hide();
    this.button1.hide();
    this.input2.hide();
    this.button2.hide();
    this.input3.hide();
    this.button3.hide();
  }

    display(){

        // Add code to make the buttons function as expected
        this.input1.position(100,100);
        this.button1.position(100,130);
        this.input2.position(700,180);
        this.button2.position(700,210);
        this.input3.position(100,280);
        this.button3.position(100,310);

        this.button1.mousePressed(()=>{
     if(system.authenticate(accessCode1,this.input1.value())){
     this.button1.hide();
     this.input1.hide();
     score++;
     }

     
    
    });

    this.button2.mousePressed(()=>{
        if(system.authenticate(accessCode2,this.input2.value())){
        this.button2.hide();
        this.input2.hide();
        score++;
        }
   
        
       
       });

    this.button3.mousePressed(()=>{
        if(system.authenticate(accessCode3,this.input3.value())){
        this.button3.hide();
        this.input3.hide();
        score++;
        }
   
        
       
       });

    }
}