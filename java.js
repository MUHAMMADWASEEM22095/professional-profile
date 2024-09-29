const Dataobj = {
    Skills:[
        "C++ Professional",
        "Python Professional",
        "3D Artist and Animator",
        "Blender Expert"
    ],
    Academics:[
        {
            level:"Matric",
            Institution:"DHA Senior School For Boys",
            Marks:"993/1100"
        },
        {
            level:"Intermediate",
            Institution:"Punjab Group Of College",
            Marks:"930/1100"
        }
    ],
    Projects:[
        "Chess in C++",
        "Shugi in C++",
        "Excel in C++",
        "Ludo in C++",
        "Paint Brush in Python",
        "Number of animations in Blender 3D Software"
    ],
    Video:{
        title:"VEDEO CONTENT",
        Discription:"The animation was made in software Blender 3D from scratch. The model was made using subd modeling workflow, which is best for product rendering, and the animation is showing the laptop from different angles.",
        src:"./WhatsApp Video 2024-09-15 at 10.31.11 PM.mp4"
    }
}

//Popullating the General info 

const Infodiv=document.getElementById("info");



//Skills

let sillsection=document.getElementById('skills-sec');
let skills=`<ul><h3>SKILLS</h3><ul>`;
Dataobj.Skills.forEach(skill=>{
    skills+=`<li>${skill}<li>`
});

sillsection.innerHTML=skills;

//Academics

const academicssection=document.getElementById('academics-sec');
let academic='';
Dataobj.Academics.forEach(acad=>{
    academic+=`
    <h1>${acad.level}</h1>
    <ul>${acad.Institution}</ul>
    <li>Result: ${acad.Marks}</li>`
});

academicssection.innerHTML=academic;

//project

let Projectssection=document.getElementById('projects-section');
let project=`<ul><h3>PROJECTS</h3><ul>`;
Dataobj.Projects.forEach(proj=>{
    project+=`<li>${proj}<li>`
});

Projectssection.innerHTML=project;

//Vedeo
document.getElementById('ved').textContent = Dataobj.Video.title;
document.getElementById('cont').textContent = Dataobj.Video.Discription;
document.getElementById('vid').src = Dataobj.Video.src;


//urdu
document.getElementById("urdu").onmouseover=change();
function change(){
    document.getElementById("urdu").innerHTML=`
    <p>&copy; 2024 Muhammad Waseem All rights reserved.</p>
    `;
}
