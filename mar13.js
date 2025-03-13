
const works = {

    "task1" : {"title" : "Project 1", "url" : "file:///C:/Users/akire/OneDrive/Desktop/sai%20frontend/task_json_iframe/works/task1/index.html"},

    "task2" : {"title" : "Project 2", "url" : "file:///C:/Users/akire/OneDrive/Desktop/sai%20frontend/task_json_iframe/works/task2/index.html"},

    "task3" : {"title" : "Project 3", "url" : "file:///C:/Users/akire/OneDrive/Desktop/sai%20frontend/task_json_iframe/works/task3/index.html"},

};


const navDiv = document.getElementById("nav_div");

const contentFrame = document.getElementById("content_frame");

 

for (let key in works) {

    let projectLink = document.createElement("div");

    projectLink.innerText = works[key].title;

    projectLink.className = "nav_item";

 

    projectLink.onclick = function () {

        contentFrame.src = works[key].url;

    };
    navDiv.appendChild(projectLink);
}

 
