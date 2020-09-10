// ************** notifications **************************************
const bell = document.getElementById('bell');
const notifications = document.querySelector('.notification-box');
const gridContainer = document.querySelector('.grid-container');

bell.addEventListener('click', (e) =>{
    if(e.target == bell){
        notifications.style.opacity = "1";
    } 
});

gridContainer.addEventListener('click', (e) =>{
    if(e.target != bell){
        notifications.style.opacity = "0";
    } 
});

// ********************** alert *****************************************
const alertBanner = document.getElementById('alert');

alertBanner.innerHTML= `<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>4</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener('click', (e) => {
    const close= e.target;
    if(close.classList.contains('alert-banner-close')){
        alertBanner.style.opacity = "0";
    }
});

// ************Traffic chart************************
const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };

        let trafficOptions = {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 2.5,
            animation: {
            duration: 0
            },
            scales: {
            yAxes: [{
            ticks: {
            beginAtZero:true
            }
            }]
            },
            legend : {
            display: false,
            }
            };

            let trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficData,
                options: trafficOptions
                })

    function updateChart() {
        trafficChart.data.datasets[0].data = [50, 80, 130, 100, 150, 200, 200, 225, 156, 225, 250, 225, 170]
        trafficChart.update();
    };

    function updateChart1() {
        trafficChart.data.datasets[0].data = [100, 100, 80, 150, 250, 220, 320, 350, 380, 320, 200, 200, 140]
        trafficChart.update();
    };

    function updateChart2() {
        trafficChart.data.datasets[0].data = [100, 900, 1350, 1200, 1600, 2000, 2700, 2500, 2250, 1800, 2500, 1550, 1750]
        trafficChart.update();
    };

    function updateChart3() {
        trafficChart.data.datasets[0].data = [800, 1500, 2000, 1555, 2000, 2300, 1800, 2250, 1500, 1550, 1750, 1250, 1750]
        trafficChart.update();
    };
    
// ********* Daily ********************* 
const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    
    const dailyOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero:true
        }
        }]
        },
        legend : {
        display: false
        }
        }
        
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });

// **************** Mobile *****************
const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };

const mobileOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
    }

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });

// *****************AutoComplete Search********************
const searchBar = document.getElementById("userField");
const suggestionsPanel = document.querySelector('.suggestions')
let members = [
    {name: 'Victoria Chambers'},
    {name: "Tom Pope"},
    {name: "Sienna Zuniga"},
    {name: "Jeremiah Avila"}
];

searchBar.addEventListener('keyup', (e) => {
    const searchMember = e.target.value;
    suggestionsPanel.innerHTML = '';
    const filteredMembers = members.filter( members => {
        return (
            members.name.toLowerCase().includes(searchMember)
        );
    });
    filteredMembers.forEach (function(suggested){
        const div = document.createElement('div');
        div.innerHTML = suggested.name;
        suggestionsPanel.appendChild(div);
    });
if(searchMember === '') {
    suggestionsPanel.innerHTML = "";
}
});

// ***********Message section***************************
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const saveButton = document.getElementById("save");
const cancelButton = document.getElementById("cancel");
send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });


// **********************localStorage******************************
const timezone = document.getElementById("timezone");
const profile = document.getElementById("myonoffswitch");
const email = document.getElementById("myonoffswitch1");
const savingsMessage = document.getElementById("savings-message");

function loadStored() {
    if (localStorage.length !== 0) {
    let emailSettings = localStorage.getItem('email');
    let profileSettings = localStorage.getItem('profile');
    let timeZoneSettings = localStorage.getItem('timezone');
    
    email.checked = JSON.parse(emailSettings);
    profile.checked = JSON.parse(profileSettings);
    timezone.value = timeZoneSettings;
 } else {
    email.checked = JSON.parse(false);
    profile.checked = JSON.parse(false);
    timezone.value = 'Select Timezone';
 }
}

save.addEventListener("click", () => {
    localStorage.setItem("email", email.checked);
    localStorage.setItem("profile", profile.checked);
    localStorage.setItem('timezone', timezone.value);
    savingsMessage.innerHTML = "Your settings have been saved!";
});

cancel.addEventListener("click", () => {
  localStorage.clear();
  timezone.value = "";
  email.checked = false;
  profile.checked = false;
  savingsMessage.innerHTML= "Your settings have been canceled!";
})

 function loadStored() {
    if (localStorage) {
    let emailSettings = localStorage.getItem('email');
    let profileSettings = localStorage.getItem('profile');
    let timeZoneSettings = localStorage.getItem('timezone');
    
    email.checked = JSON.parse(emailSettings);
    profile.checked = JSON.parse(profileSettings);
    timezone.value = timeZoneSettings;
 } else {
    email.checked = JSON.parse(false);
    profile.checked = JSON.parse(false);
    timezone.value = 'Select Timezone';
 }
}