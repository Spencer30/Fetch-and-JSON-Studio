window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
            console.log(json)
            const div = document.getElementById('container');
            json.sort((a,b) => b.hoursInSpace - a.hoursInSpace);
            for (let i=0; i<json.length; i++){
            div.innerHTML += `<div class="astronaut">
            <div class="bio">
               <h3>${json[i].firstName + " " + json[i].lastName}</h3>
               <ul>
                  <li>Hours in space: ${json[i].hoursInSpace}</li>
                  <li id="active${json[i].id}">Active: ${json[i].active}</li>
                  <li>Skills: ${json[i].skills}</li>
               </ul>
            </div>
            <img class="avatar" src=${json[i].picture}>
         </div>
         `
         if (json[i].active === true) {
             document.getElementById(`active${json[i].id}`).style.color = 'green';
         }
         
          }
          document.getElementById('count').innerHTML = `Astronaut Count: ${json.length}`;
        })
    })



})