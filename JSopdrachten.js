const { parse } = require("path");
const rl = require("readline-sync");
const { isMainThread } = require("worker_threads");

/**_____________1.1_Informatie______________________________________________ */

// const programmer1 = {name : "Birhan", age : 33, email : "birhan@email.com", opleding : "FullStackk Developer"};
// console.log(programmer1);

/**_____________1.2_BMI______________________________________________ */

// function BMI(weight, height){
//     this.weight;
//     this.height;

//     return weight/(height^2);
// }
// console.log(Math.round(BMI(80, 1.8)));
/**_____________1.3_BMI for 2 person______________________________________________ */

// function BMI(name, weight, height){
//     this.name=name;
//     this.weight;
//     this.height;
//         bmis = Math.round(weight/(height^2));
// return `${this.name} heeft een bmi van ${this.bmis}`
// }
// console.log(BMI("Birhan", 80, 1.8));
// console.log(BMI("David", 75, 1.7));

/**_____________1.4_Interest______________________________________________ */

// function Interest(money,perc,years){
//     this.money=money;
//     this.perc=perc;
//     this.years=years;

//     sum = (money*perc*years)+money;
//     return `Op een periode van ${this.years} jaar stijgt je bezit van ${this.money}€ naar ${this.sum}€ bij een rentevoet van ${this.perc}`;

//     };

//     const interest1 = Interest(100,0.02,2);
//     console.log(interest1);

/**_____________1.5_Time Set_____(ÇALIŞMIYOR)_______________________________________________ */

// function Hour(curr,later){
//     this.curr=curr;
//     this.later=later;
//     this.hour;

//     let hour = (curr+later);
//     if(hour>=24){
//         return hour = curr + (hour%24);
//     }else{
//         return hour;
//     };

//      return `Het is nu ${this.curr} uur.
//     Over ${this.later} uur is het ${this.hour} uur.`;
// }

// console.log(Hour(24,15));

/**_____________1.6_Wisselgeld________________________________________ */

// function Wisselgeld(bedrag){
//     this.bedrag=bedrag;
//     this.cFiftys;
//     this.wissel;

//     cFiftys = Math.ceil(bedrag/50);
//     wissel = (cFiftys*50)-bedrag;
//     return `Te betalen bedrag ${this.bedrag} Je hebt ${this.cFiftys} briefjes van 50 nodig Je wisselgeld is dan ${this.wissel} euro`;
// }
// console.log(Wisselgeld(453));

/**__________2.1_Loto_____(ÇALIŞMIYOR)___________________________________________ */

// let lotonumbs = [5,9,11,16,28,43];
// function Loto(lotonumbs){

//     if(lotonumbs < 10){
//         return "0"+lotonumbs;
//     };
//     return Loto;
// };

// console.log(lotonumbs);

/**__________2.2_Name at e-mail________________________________________________ */

// function Email(email){
//     this.email = email;
//     this.email_part = email.slice(0,email.indexOf("@"));
//     this.name = email_part.toUpperCase().replace("."," ");
//         return `De eigenaar van ${this.email} heet ${this.name}`;
// }

// console.log(Email("birhan.yorukoglu@gmail.com"));

/**__________2.3_Short Name________________________________________________ */

// function Shortname(fname, lname){
//     this.fname=fname;
//     this.lname=lname;
//     this.sname= fname.charAt().toUpperCase()+". ";
//     this.clname= lname.charAt().toUpperCase()+lname.substring(1, lname.length);

//         return `de naam "${this.fname} ${this.lname}" zal worden afgekort als "${this.sname}${this.clname}"`
// }

//     console.log(Shortname("birhan","yorukoglu"));

/**__________2.4_Color Blind________________________________________________ */

// const colorBlindText = "roses are blue, violets are red, grass is yellow, don't be so mean.";
// const correctedText= colorBlindText.replace("blue","red").replace("yellow","green");

// console.log(correctedText);

/**__________2.5_Text-box___Ters Slash çalışmadı için yapılamadı_____________________________________________ */

// const text = ["Hello World"];
// const box = "\";

// console.log(box);

/**__________2.6_Color Blind Extra________________________________________________ */

// const colorBlindText =
//   "roses are blue, violets are red, strawberries are blue and we always define variables with let.";
// const newString = colorBlindText.split(",");
// let newColorBlindText = "";
// for (let i = 0; i <= newString.length - 1; i++) {
//   if (i == 1) {
//     newColorBlindText += newString[i].replace(/red/g, "blue,");
//   } else {
//     if (i == 2) {
//       newColorBlindText += newString[i].replace(/blue/g, "red");
//     } else {
//       newColorBlindText += newString[i].replace(/blue/g, "red,");
//     }
//   }
// }
// console.log(colorBlindText);
// console.log(newColorBlindText);

/**__________2.7_Sezar Rotation_________yapılmadı_______________________________________ */

/**__________3.1__Print Name and Age_______________________________________________ */

// function Person(fname,lname,age){
// this.fname = rl.question("What is your name? ")
// this.lname = rl.question("what is your last name? ")
// this.age = rl.question("how old are you? ")
// this.cfname = fname.charAt().toUpperCase()+fname.substring(1, fname.length);
// this.clname = lname.charAt().toUpperCase()+lname.substring(1, lname.length);
//     return `U bent ${this.cfname} ${this.clname} en u bent ${this.age} jaar oud`
// }
// console.log(Person("birhan","yorukoglu",33));

/**__________3.2__Print Name and Age Checked_______________________________________________ */

// function Checkednames(){
//     this.fname = rl.question("What is your name? ")
//     this.lname = rl.question("what is your last name? ")
//     this.age = rl.question("how old are you? ")
//     this.cfname = fname.charAt().toUpperCase()+fname.substring(1, fname.length);
//     this.clname = lname.charAt().toUpperCase()+lname.substring(1, lname.length);

//     if(fname.length === 0){
//         return `Name didnt typed`;
//     }else if(lname.length === 0){
//         return `Surname didnt typed`;
//     }else if(age<18 || age>60){
//         return `You do not belong to the desired age group!`
//     }else{
//         return `You are ${this.cfname} ${this.clname} and you are ${this.age} years old!`
//     }
// }
// console.log(Checkednames("","",));

/**__________3.3__Leap year_______________________________________________ */

// function LeapYear(){
//     this.curryear = rl.question("what is the year? ");

//     if(this.curryear%4==0){
//         if(this.curryear%100!=0){
//             if(this.curryear%400==0){
//                 return `${this.curryear} is a leap year`;
//             }else{
//                 return `${this.curryear} is not leap year`;
//             }
//         }else{
//             return `${this.curryear} is a leap year`;
//         }
//     }else{
//         return `${this.curryear} is not leap year`;
//     }
// }

// function LeapYear() {
//     this.curryear = rl.question("what is the year? ");

//     if ((0 == this.curryear % 4) && (0 != this.curryear % 100) || (0 == this.curryear % 400)) {
//         console.log(this.curryear + ' is a leap year');
//     } else {
//         console.log(this.curryear + ' is not a leap year');
//     }
// }

// console.log(LeapYear());

/**__________3.4__Simple Calculator_______________________________________________ */

// function Result() {
//   this.number = rl.question("Please type a number : ");
//   this.sign = rl.question("Please choose the sign! : ");
//   this.number2 = rl.question("Please type second number : ");
//   this.result = "";

//   if (this.sign == "+") {
//     this.result = this.number + this.number2;
//   } else if (this.sign == "-") {
//     this.result = this.number - this.number2;
//   } else if (this.sign == "/") {
//     this.result = this.number / this.number2;
//   } else if (this.sign == "*") {
//     if (this.number == 0 || this.number2 == 0) {
//       this.result = "Delen door 0 is niet toegestaan.";
//     } else {
//       this.result = this.number * this.number2;
//     }
//   } else {
//     this.result = "error";
//   }
//   return this.result;
// }

// console.log(Result());

/**__________3.5__Day Hour Second_______________________________________________ */

// function DHS() {
//   this.cuurhour = parseInt(rl.question("Geef het current hour: "));
//   this.currminute = parseInt(rl.question("Geef de current minutes: "));
//   this.addhour = parseInt(rl.question("Geef het added hour: "));
//   this.addminute = parseInt(rl.question("Geef het added minute: "));

//   this.exthour = cuurhour + addhour;
//   this.extraday = exthour / 24;
//   this.newhour = parseInt(cuurhour + (exthour % 24));

//   if (exthour >= 24) {
//     return `Over ${this.addhour} uur en ${this.addminute} minuten is het ${this.newhour} uur en 30 minuten.
//         Let Op: Dat is het uur over ${this.extraday} dag!`;
//   } else {
//     return `Over ${this.addhour} uur en ${this.addminute} minuten is het ${this.exthour} uur en 30 minuten.
//         Let Op: Dat is nog dezelfde dag `;
//   }
// }
// console.log(DHS());

/**__________4.1__Çarpım Tablosu Jeneratörü_______________________________________________ */

// function Maaltafel() {
//   this.number = parseInt(rl.question("Welkw maaltafel je te genereren? "));
//   this.keer = parseInt(
//     rl.question("Hoeveel iteraries wens je weer te geven? ")
//   );
//   this.result = Array();
//   for (let i = 1; i <= keer; i++) {
//     this.result.push(i * this.number);
//   }
//   return this.result;
// }
// console.log(Maaltafel());

/**__________4.2_Raster generator________________________________________________ */

// function Raster(){
//   this.coloum = parseInt(rl.question("how many coloum do you need? : "));
//   this.lijn = parseInt(rl.question("how many line do you need? : "));
//   this.result = {};
//     for (let i=1; i<=this.coloum.length; i++ ){
//      this.result.push(i * this.coloum * "x");
//     }
//     return this.result.push();
// }

// console.log(Raster());

/**__________4.3_________________________________________________ */




/**__________4.4_________________________________________________ */



/**__________4.5_Guess the number_______________çalışmıyor_________________________________ */

// function Guessing(){

//   this.autoNumber = Math.floor(Math.random()*30);
//   this.guessNumber = rl.question("Geef een getal tussen 0 en 30 aub? ");

//   while(this.guessNumber < this.autoNumber){
//     const tip1 = "Tip: Hoger!";
//     const answer =[tip1 , rl.question("Geef een getal tussen 0 en 30 aub? ")];
//     return answer;
//   }
//   while(this.guessNumber > this.autoNumber){
//     return "Tip: Lager!";
//   }
//   while(this.guessNumber == this.autoNumber){
//     return `Perfect! Het te raden getal was inderdaad ${this.guessNumber} :-)`;
//   }
// }

// console.log(Guessing());

/**__________5.1_Reduce Som________________________________________________ */

// const array = [1,2,3,4,5,6,7]
// const sum = 0;
// const newarray = "de som is " + array.reduce((sum,num) => sum + num , 0) + " !";
// console.log(newarray);

// function Summary(){
//   this.array = [1,2,3,4,5,6];
//   let sum = 0;
//   return "de som is " + array.reduce((sum,num) => sum + num , 0) + " !";
// }
// console.log(Summary());

/**__________5.2_Names________________________________________________ */

// function FullNamelist(){
//     this.fNames = rl.question("Please give the names: ");
//     this.ffNames = fNames.split(" ");
//     // this.cffNames = ffNames.charAt().toUpperCase()+ffNames.substring(1, ffNames.length);
//     // this.cllNames = llNames.charAt().toUpperCase()+llNames.substring(1, llNames.length);    
//     this.lNames = rl.question("Please give the lastnames: ");
//     this.llNames = lNames.split(" ");
//     this.fullNames = Array();
 
//     if(this.ffNames.length == this.llNames.length){ 
//       for(let i=0; i<ffNames.length; i++){
//        this.fullNames.push((ffNames[i].charAt(0).toUpperCase() + ffNames[i] .slice(1).toLowerCase() + " " + llNames[i].charAt(0).toUpperCase() + llNames[i] .slice(1).toLowerCase() + " "));
//       //  return this.fullNames[i].charAt(0).toUpperCase() + ffNames[i] .slice(1).toLowerCase();
//       }           
//     }else{
//       return "One of the names is missing! "
//     }
//     for(let i=0; i<fullNames.length; i++){
//       return this.fullNames.toString()
//     }
    
// }
// console.log(FullNamelist());

/**__________5.3_Arkadaşlar______Çalışmadı__________________________________________ */

function Friends(){
  this.personnum = parseInt(rl.question("How many frieands invited? : "));
  this.arrpernum = Array();
  this.name = rl.question(`what is the name of friend ${this.arrpernum}? : `);
  this.names = Array();
  for (let i = 0; i <= this.personnum; i++) {
     this.arrpernum.push(i + 1);
     return this.name;
  }
  return this.names.push(this.name[i]);
}
console.log(Friends());
// console.log(Friends());

// function Maaltafel() {
//   this.number = parseInt(rl.question("Welkw maaltafel je te genereren? "));
//   this.keer = parseInt(
//     rl.question("Hoeveel iteraries wens je weer te geven? ")
//   );
//   this.result = Array();
//   for (let i = 1; i <= keer; i++) {
//     this.result.push(i * this.number);
//   }
//   return this.result;
// }
// console.log(Maaltafel());

/**__________5.2_Names________________________________________________ */

// const grades = [16,12,16,7,17,14,9,8,18,12];