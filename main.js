/*
    Author - Martin Yip
             martinyiptt@gmail.com

    Date   - Oct 31, 2017
    Verson 1.1  - Fix the issue where the video window is closed but still plays in background


    Date   - Aug 28, 2017
    Version 1.0
*/




var Project = function (year, projectId, projectName, members, detail, imgSrc, posterSrc, videoSrc){
    
    this.year = year;
    this.projectId = projectId;
    this.projectName = projectName;
    this.members = members;
    this.detail = detail;
    this.imgSrc = imgSrc;
    this.posterSrc = posterSrc;
    this.videoSrc = videoSrc;
}

Project.prototype.update = function() {
    
    document.getElementById("project"+ this.projectId + "-name").innerHTML = "Project:" + this.projectName;
    document.getElementById("project"+ this.projectId + "-member").innerHTML = "Members:" + this.members;
    

};

var currerntYear = 2017;

//  var project201xy = new Project("201x","y"," projectName", members","detail","imgSrc","posterSrc", "videoSrc");
//       x = year;
//       y = project number, from 0 - 9

/* project201xy = new Project("201x","y",
                    "projectName"
                    "members",
                    "detail",
                    "imgSrc",
                    "posterSrc", 
                    "videoSrc"); // Youtube link (embed link)
*/
var project20170 = new Project(2017,0,
                    "JiaJia 加加",
                    "CHOI, Wai Yu (HKUST), LI, Ruochen (HKUST), CHEN, Wei (CAA), WANG, Xiaoya (CAA)",
                    "Our product is JiaJia which means “Homie” in Chinese. JiaJia is a bowl that can be used. Fingerprints of each family member are engraved on the surface of the bowl. Light will be emitted through the fingerprint on the bowl to identify the person using the bowl.  Our product connects family members in different places in an unconscious way. By doing so, we remind users the presence and importance of family."
                    ,"pic/jiajia.JPG",
                    "poster/jiajia.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20171 = new Project(2017,1,
                    "Re-light",
                    "XU, Jiayi (HKUST), YUE, Xuanwu (HKUST), DOU, Hao (CAA), MA, Le (CAA),  WU, Xiaoyuan", 
                    "The inspiration of Re-light came from light refraction. We recreate a new product based on the lampshade which could re›fract light when rotating in different angles. We chose colored film instead of a lens to limit the size of Re-light, ensuring its weight and size are within acceptable llimits. Meanwhile, we noticed the problem of light pollution a hard nut to crack so we would like to provide the general public with another solution. As an auto-controlling light windows or screen, Re-light could help relieve light pollution by changing the form of light pollution instead of trying hard to resolve the problem by tracking the source of light pollution which is comparatively more difficult to do.",
                    "pic/relight.JPG",
                    "poster/relight.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20172 = new Project(2017,2,
                    "FLOWUID",
                    "LO, Kar Lam (HKUST), ZHANG, Rong (HKUST), GONG, Qiaolin (CAA), LUCK, Flavia Rosa (CAA), ZHANG, Limin (CAA)",
                     "Flowuid is a device thought to help people improve their health during their work routine. Its concept is based on POMODORO`s time management technique that recommends a 20-8-2 minutes work session in order to avoid body and mind stress. The time consists of 20 minutes work, 8 minutes doing another task, and 2 minutes of rest.Flowuid, unlike other devices in the market, is unintrusive with an interesting yet functional design that adapts to the office work enviroment.",
                     "pic/flowuid.JPG",
                     "poster/flowuid.pdf",
                     "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20173 = new Project(2017,3,
                    "Holocup 智能杯子",
                    "CHAN, Hiu Nam (HKUST), WANG, Yalin (HKUST), LI, Yana (CAA), ZHAN, Jie (CAA)", 
                    "People, especially office workers and children, don’t have a regular drinking water habit for sufficient water intake, and our product aims to attract people to drink more water, making the drinking process more interesting, and hence helping people develop a good water drinking habit. In order to make the drinking process interesting, an illusion is integrated into our cup. We utilize the reflection of light, to simulate a 3D holographic image, and the animation of the various marine animal pets collected will appear in the cup. Also, we design to connect the cup with a nurturing game by using Bluetooth, making it available on every phone. The cup, equipped with a weight sensor, will automatically sense and calculate the amount of water that you drunk. The more water you drink, the more complete the pet library.",
                    "pic/holocup.JPG",
                    "poster/holocup.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20174 = new Project(2017,4,
                    "Cupido 丘比特",
                    "KO, Ching Yuen (HKUST), YANG, Mingyuan (HKUST), NIU, Yifan (CAA), WANG, Hongdou (CAA)","Waiting love is a pair of bracelets made for long-distance lovers. It sends a message about missing each other implicitly.",
                    "pic/cupido.JPG",
                    "poster/cupido.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20175 = new Project(2017,5,
                    "Wolo",
                    "TSANG, Ka Lai (HKUST), YAU, Shuk Kwan (HKUST), LIN, Rong (CAA), WEN, Simei (CAA)",
                    "The product – WOLO consists of a pair of rings, a health detecting band, and a mobile app. The health detecting band is wearable on children while the rings are for parents. The mobile app enables parents to monitor their children’s health status remotely.",
                    "pic/wolo.JPG",
                    "poster/wolo.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20176 = new Project(2017,6,
                    "ARGUS",
                    "CAO, Shaozu (HKUST), PANG, Sui (HKUST), PENG, Bihua (CAA), ZHU, Mengyang (CAA)",
                    "We believe that people should be free from the worry of watching and navigation. We observe an increasing number of people focused on their phones when walking, and they need some warning beforehand to prevent any harm from objects on their path. Instead of advocating them not to use the phone, we take it as a fact and want to figure out the solution. That is how we end up designing a device to detect the environment, and notify the user before potential threats.",
                    "pic/argus.JPG",
                    "poster/argus.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20177 = new Project(2017,7,
                    "Weather Box",
                    "LEE, Geun Hyang (HKUST),FAN, Ka Yi (HKUST), QIAN, Hongxiang (CAA), SHAO, Minghui (CAA), WANG, Xiangli (CAA)",
                    "Weather is important in our daily lives. It affects both our physical well-being and mental health. Research has shown that adverse and unusual weather, climate changes annoy and depress people, and may lead to Seasonal Affective Disorder(SAD). The ‘Weather Box’ fetches and visualizes weather information in real-time to an entertaining LED light show to improve working efficiency.",
                    "pic/weatherbox.JPG",
                    "poster/weatherbox.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".
var project20178 = new Project(2017,8,
                    "SLight",
                    "LEE, Jae Hyung (HKUST), XU, Jiale (HKUST), WENG, Wuyue (CAA), XIANG, Qingqing (CAA)",
                    "SLight is a spine-like wall lamp that changes its shape according to user’s sitting posture to inform users whether they are sitting in good or bad posture. As SLight is a product that intends to remind people about their posture visually, it is designed as a human spine. Its dimension is 6 cm x 24 cm x 60 cm and it is divided into 26 layers of acrylic, similar to the number of presacral vertebrae, that can move right or left in order to simulate the spinal shape of a person sitting. Additionally, each layer contains 0.6mm thickness of cross-shaped half-transparent acrylic which has a square hole together with LED strip in the middle, 0.2mm thin black rectangular acrylic, and servo motors are placed behind and connected to some layers to generate horizontal movement. By having these structures in the design, SLight can emit light with LEDs on each layer and change the background shape through horizontal movements of the black rectangular acrylic.",
                    "pic/slight.JPG",
                    "poster/slight.pdf",
                    "https://www.youtube.com/embed/NGUZeEfARj4"); // Replace Youtube embed link here inside " ".



/*
    Add projects to an array. Each array represents a year.

    projects201x = [project201x0,project201x1,project201x2,project201x3,project201x4,project201x5,project201x6,project201x7,project201x8];
*/
var projects2017 = [project20170,project20171,project20172,project20173,project20174,project20175,project20176,project20177,project20178];
var projects2016 = [];
var projects2015 = [];
var projects2014 = [];
var projects2013 = [];




/*
    When users clicks the Year in page2
*/
function displayProject(evt){
    
    //evt.target.id = summer201x
    var yearId = evt.target.id;

    //get last char of 201x
    var year = yearId.slice(-4,-1) + yearId.slice(-1);
    
    var projectYear = toProjectsYear(year);
    document.getElementById("project-year").innerHTML = "Summer " + year +  " HKUST VIDEO";
    document.getElementById("video-year").innerHTML = "Summer " + year;
    changeYearColor(year);
    
     for(var i = 0; i < projectYear.length; i++){
         projectYear[i].update();
     }
}

/*
    When users clicks the project name in page 2
*/
function displayDetail(evt){

    //Get project ID 
    var projectEvtId = evt.target.id;
    var projectId  = projectEvtId.slice(7,8);
   
    //Get the specfic project as an object
    var project = toProject(currerntYear, projectId);

    //Change the selected project's color
    changeProjectColor(projectId);

    //Change the detail container's info to the selected project's detail

    //Change the project name for the detail container and the video container.
    document.getElementById("project-detail-name").innerHTML = project.projectName;
    //Change detail's text
    document.getElementById("project-detail-text").innerHTML = project.detail;
    //Change image
    document.getElementById("project-detail-img").src = project.imgSrc;
     //Change poster's link
    document.getElementById("a-poster-href").href = project.posterSrc;

    //Change the project name for the video container.
    document.getElementById("project-video-name").innerHTML = project.projectName;
     //Change the project members for the video container.
    document.getElementById("project-video-members").innerHTML = project.members;
     //Change the project video youtube link for the video container.
    document.getElementById("iframe-project-video").src = project.videoSrc;
}

/*
    Show the container that containes (id = "container-project-video" ) the selected project's video
*/
function showProjectVideo(evt){

    document.getElementById("container-project-video").style.visibility = 'visible';
}

/*
    Close the video container (id = "container-project-video" ) when the uses clicks the close button or 'projects →'

    Version 1.1
        -Also delete the video link, so it will stop playing in the background

*/
function closeProjectVideo(evt){

    document.getElementById("container-project-video").style.visibility = 'hidden';
    document.getElementById('iframe-project-video').src='';
}
   

//change text color
function changeYearColor(year){
    
    /*
        Change the color of that year when the specfic year is choosen
    */
   
    //set all year to the original color
    document.getElementById("summer2017").style.color = "#655500";
    document.getElementById("summer2016").style.color = "#655500";
    document.getElementById("summer2015").style.color = "#655500";
    document.getElementById("summer2014").style.color = "#655500";
    document.getElementById("summer2013").style.color = "#655500";

    //set the selected year to white
    document.getElementById("summer" + year).style.color = "white";
    
}

/*
    Change the color of that project when the specfic project is choosen
*/
function changeProjectColor(projectId){

    //set all project color to original color
    document.getElementById("project0-name").style.color = "#f7931e";
    document.getElementById("project1-name").style.color = "#f7931e";
    document.getElementById("project2-name").style.color = "#f7931e";
    document.getElementById("project3-name").style.color = "#f7931e";
    document.getElementById("project4-name").style.color = "#f7931e";
    document.getElementById("project5-name").style.color = "#f7931e";
    document.getElementById("project6-name").style.color = "#f7931e";
    document.getElementById("project7-name").style.color = "#f7931e";
    document.getElementById("project8-name").style.color = "#f7931e";
    
    
    //set the seleted project to purple
    document.getElementById("project"+ projectId + "-name").style.color = "#662d91";

}


/*
    Get the string year, int project id (such as 2017,1 )
    to indentify each individual project.
    Return object project in year array
*/
function toProject(year,projectId){
 
    switch (year) {
        case 2017:
            return projects2017[projectId];
        case 2016:
            return projects2016[projectId];
        case 2015:  
            return projects2015[projectId];
        case 2014:
            return projects2014[projectId];
        case 2013:
            return projects2013[projectId];
        default:
            return projects2017[projectId];
    }
}

/*
    Get the string year
    Return the year array
*/
function toProjectsYear(year){
    
    switch (year) {
        case '2017':
            currerntYear = 2017;
            return projects2017;
        case '2016':
            currerntYear = 2016;
            return projects2016;
        case '2015':
            currerntYear = 2015;
            return projects2015;
        case '2014':
            currerntYear = 2014;
            return projects2014;
        case '2013':
            currerntYear = 2013;
            return projects2013;
        default:
            return projects2017;
    }
}


//display 2017 projects first
function onCreate(){
    
    changeYearColor(2017);
    for(var i = 0; i < projects2017.length; i++){
        projects2017[i].update();
     }

    changeProjectColor(0);
    document.getElementById("project-detail-name").innerHTML = project20170.projectName;
    document.getElementById("project-detail-text").innerHTML = project20170.detail;
    document.getElementById("project-detail-img").src = project20170.imgSrc;
    document.getElementById("a-poster-href").href = project20170.posterSrc;
    document.getElementById("project-video-name").innerHTML = project20170.projectName;
    document.getElementById("project-video-members").innerHTML = project20170.members;
    document.getElementById("iframe-project-video").href = project20170.videoSrc;

    
}

document.addEventListener('DOMContentLoaded', init, false);


function init(){
    
onCreate();

//Set event listener the courses for each year.
var el = document.getElementById("summer2017").addEventListener("click", displayProject,true);
var el = document.getElementById("summer2016").addEventListener("click", displayProject,true);
var el = document.getElementById("summer2015").addEventListener("click", displayProject,true);
var el = document.getElementById("summer2014").addEventListener("click", displayProject,true);
var el = document.getElementById("summer2013").addEventListener("click", displayProject,true);

//Set event listener for each courses on the selected year by project ID ( 0 - 9 ).
var el = document.getElementById("project0-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project1-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project2-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project3-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project4-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project5-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project6-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project7-name").addEventListener("click", displayDetail,true);
var el = document.getElementById("project8-name").addEventListener("click", displayDetail,true);



//Set event listener on the video link under project detail. Which will be used for showing "container-project-video".
var el = document.getElementById("project-video-link").addEventListener("click", showProjectVideo,true);

//Set event listener on the close button and "back to projects" under project-video container.
var el = document.getElementById("projects-link").addEventListener("click", closeProjectVideo,true);
var el = document.getElementById("close-button").addEventListener("click", closeProjectVideo,true);
    
}
