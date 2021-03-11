const fullName = "Gabriel Austin";

function displayPosition(job_title, company_name, description) {
    console.log("* " + job_title + " at " + company_name + " - " + description);
}

function displaySkill(skill_name, cool_or_not) {
    if (cool_or_not == true) {
        console.log("* BAM: " + skill_name);
    } else {
        console.log("* " + skill_name);
    }
}

console.log("Name: " + fullName.toUpperCase());
console.log("Career: I.T. Professional");
console.log("Description: I am originally from Birmingham, AL. I am an introverted extrovert if that makes any sense.");

console.log(" ");

console.log("My Interests:");
console.log("* Reading");
console.log("* Bike Riding");
console.log("* Relaxing / Chilling - Me Time");

console.log(" ");

console.log("My Previous Experience:");
displayPosition("Computer Science Teacher", "Uncommon Schools in Brooklyn, NY", "Developed curriculum plan for the school year; Taught students how to write and debug code");
displayPosition("Office Manager", "Uncommon Schools in Brooklyn, NY", "Built and maintained positive relationships with students, families, and colleagues");
displayPosition("Operations Associate", "NYC Teaching Fellows in Brooklyn, NY", "Supported at training events while providing excellent customer service");
displayPosition("Coding Instructor", "NY Code + Design Academy in New York, NY", "Taught middle school students (grades 5-8) HTML, CSS and JavaScript");
displayPosition("Web Developer", "AgSmarts in Memphis, TN", "Developed secure web application and back end databases to automate data processes; Maintained website using Ruby on Rails, HTML, CSS, JavaScript, and jQuery");
displayPosition("Jr. Web Developer", "ProctorU in Birmingham, AL", "Developed internal and external applications written in Ruby on Rails; Created Web page to inform customers of the company’s privacy policy - used HTML, CSS, and Bootstrap");

console.log(" ");

console.log("My Skills:");
displaySkill("HTML", false);
displaySkill("CSS", true);
displaySkill("JavaScript", true);
displaySkill("Teaching", false);
displaySkill("Bike Riding", true);
displaySkill("Double Dutching", true);
