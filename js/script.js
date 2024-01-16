// Import the html's element

const rowElement = document.querySelector('.row');


// Create array of objects (Milestone 0)
const teamMembers = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', pic: 'wayne-barnett-founder-ceo.jpg' },
    { name: 'Angela Caroll', role: 'Chief Editor', pic: 'angela-caroll-chief-editor.jpg' },
    { name: 'Walter Gordon', role: 'Office Manager', pic: 'walter-gordon-office-manager.jpg' },
    { name: 'Angela Lopez', role: 'Social Media Manager', pic: 'angela-lopez-social-media-manager.jpg' },
    { name: 'Scott Estrada', role: 'Developer', pic: 'scott-estrada-developer.jpg' },
    { name: 'Barbara Ramos', role: 'Graphic Designer', pic: 'barbara-ramos-graphic-designer.jpg' },
];

// Print the datas in console (Milestone 1)
// for (let team of teamMembers) {
//     console.log(team.name)
//     for (let key in team) {
//         console.log(`${key}: ${team[key]} `);
//     }
// }


// Fuction for create a member card
const createMemberCard = member => {
    const { pic, role, name } = member; //DESTRUCTURING
    return `
    <div class="card">
        <div class="card-img">
            <img src="img/${pic}" alt="${name}">
        </div>
        <div class="card-text">
            <p class="name">${name}</p>
            <p class="role">${role}</p>
        </div>
    </div> `;
}


// Fuction for render team
const renderTeam = () => {

    let teamRow = '';

    for (let member of teamMembers) {
        teamRow += createMemberCard(member);
    }

    rowElement.innerHTML = teamRow;
};

// Effettuvo svolgimento
renderTeam();