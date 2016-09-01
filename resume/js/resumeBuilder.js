var bio = {
    "name" : "Chad H. Glaser",
    "role"   : "Full Stack Engineering",
    "contact" : { 
        "mobile"    :  "4259316050",
        "email"     :  "Chad.H.Glaser@Gmail.com",
        "github"    :  "https://www.github/chadg1980",
        "twitter"   :  "@CodingWithChad",
        "blog"      : "http://codingwithchad.blogspot.com/", 
        "location"  :  "Seattle, WA" 
    },
    "welcomeMessage" : "Be humbe. Be hungry. Be the hardest worker in the room<br> -The Rock",
    "skills" :["Frond end development",  "Javascript", "HTML5/CSS3", "MySQL", "Photoshop", "JQuery", "jUnit", "C/C++"],
    "biopic" : "images/suit2.jpg"
};

var education ={
    "schools": [{
        "name"      : "Oregon State University",
        "location"  : "Corvallis, OR",
        "degree"    : "Bachelor of Science",
        "major"     : "Computer Science",
        "dates"     : 2015,
        "url"       : "http://eecs.oregonstate.edu/"
    }, {
        "name"      : "Central Washington University",
        "location"  : "Ellensburg, WA",
        "degree"    : "Bachelor of Arts",
        "major"     : "Film Studies",
        "dates"     :  2004,
        "url"       : "http://www.cwu.edu/film-video/" 
    }],

    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Free Code Camp",
        "year": "2016",
        "url": "https://www.freecodecamp.com"
    }, {
        "title": "Javascript Basics",
        "school": "Udacity",
        "year": "2016",
        "url": "https://www.Udacity.com"
    }]
}
var work = {
    "jobs": [{
        "employer"    : "K2",
        "title"       : "Software Associate",
        "location"    : "Bellevue, WA",
        "dates"       : "2015 - 2016",
        "description" : "Designed, built, and deployed business applications that benefited internal teams and evolved internal systems. Troubleshot multiple scenarios on the latest K2 products and across multiple systems and integration points. Interacted and communicated with many diverse levels of IT specialists across a vast range of products and platforms."

    }, {
        "employer"     : "Army National Guard",
        "title"        : "Team Leader",
        "location"     : "Snohomish, WA",
        "dates"        : "2009 - 2016",
        "description"  : "Sergeant Washington State Army National GuardTeam Leader of 3rd Platoon 2nd Squad, leading 5 junior enlisted. US Army Corps of Engineers 21K Plumbing Utilities Course  Distinguish Graduate (best in class)  US Army Engineering Association."
    }]
};


var projects = {
    "project": [{
        "title"         : "Inspirational Random Quote Machine",
        "dates"         : 2016,
        "description"   : "Random inspirational are printed for when someone needs a quick pick-me-up.  There is a button that the user can click to tweet their quote. <br>Built as a single page application with HTML5 CSS3 and Javascript.",
        "urlPic"        : "images/quote.jpg"
    }, {
        "title"         : "Plenty of Dogs",
        "dates"         : 2014,
        "description"   : "Plenty of Dogs is a website that shelter owners can put a dog up for adoption, adding characteristics to the dog. The website uses logic to match the dogs from shelters to people who are looking for certain traits in a dog. <br>This database driven application uses HTML5, CSS, Javascript, and JQuery on the front end and MySQL and PHP in the back.",        
        "urlPic"        : "images/pod.jpg"
    }]
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", "Chad H. Glaser");
    var role = "Full Stack Developer";
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    
    var formattedBiopic =  HTMLbioPic.replace("%data%", bio.biopic)
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcomeMsg );
    $("#header").append(HTMLskillsStart);

    if(bio.skills.length >0){
        var formattedSkill; 
        $("#skills").append(formattedSkill);
        for (var x in bio.skills){
            formattedSkill = HTMLskills.replace("%data%", bio.skills[x]);
            $("#skills").append(formattedSkill);
        }
    }
        /*"mobile"    :  "4259316050",
        "email"     :  "Chad.H.Glaser@Gmail.com",
        "github"    :  "https://www.github/chadg1980",
        "twitter"   :  "@CodingWithChad",
        "blog"      : "http://codingwithchad.blogspot.com/", 
        "location"  :  "Seattle, WA" */
        
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

        $("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));
        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));
        
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));
        $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

        $("#topContacts").append(HTMLblog.replace("%data%", bio.contact.blog));
        $("#footerContacts").append(HTMLblog.replace("%data%", bio.contact.blog));

        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
}
bio.display();

function displayEducation(){
    
    var formattedSchoolName;
    var formattedSchoolDegree
    var formattedSchoolDates;
    var formattedSchoolLocation;
    var formattedSchoolMajor;
    var formattedNameDegree;
    
    $("#education").append(HTMLschoolStart);
    for (var x in education.schools){
        
        formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[x].name);
        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree);
        formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
        formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[x].dates);
        formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[x].major);
        
        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
}
displayEducation();

function displayWork(){
    var formattedEmployer;
    var formattedTitle;
    var formattedDates;
    var formattedLocation;
    var formattedDescription;
    var formattedEmployerTitle
    for (x in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);

        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
        formattedDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
        formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
        formattedEmployerTitle = formattedEmployer + formattedTitle;
        
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();

projects.display = function(){

    for( var p in projects.project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle .replace("%data%", projects.project[p].title);
        var formattedDates = HTMLprojectDates .replace("%data%", projects.project[p].dates); 
        var formattedDescription = HTMLprojectDescription .replace("%data%", projects.project[p].description);
        var formattedImage = HTMLprojectImage .replace("%data%", projects.project[p].urlPic);

        $(".project-entry").css({'color' : 'white'});
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedImage);
    }
}
projects.display();

$("#mapDiv").append(googleMap);


