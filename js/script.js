// Import the html's element

const rowElement = document.querySelector('.row');


// Create array of objects (Milestone 0)
const teamDatas = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', pic: 'wayne-barnett-founder-ceo.jpg' },
    { name: 'Angela Caroll', role: 'Chief Editor', pic: 'angela-caroll-chief-editor.jpg' },
    { name: 'Walter Gordon', role: 'Office Manager', pic: 'walter-gordon-office-manager.jpg' },
    { name: 'Angela Lopez', role: 'Social Media Manager', pic: 'angela-lopez-social-media-manager.jpg' },
    { name: 'Scott Estrada', role: 'Developer', pic: 'scott-estrada-developer.jpg' },
    { name: 'Barbara Ramos', role: 'Graphic Designer', pic: 'barbara-ramos-graphic-designer.jpg' },
];

// Print the datas in console (Milestone 1)
// for (let team of teamDatas) {
//     console.log(team.name)
//     for (let key in team) {
//         console.log(`${key}: ${team[key]} `);
//     }
// }

let teamRow = '<div>';

for (let team of teamDatas) {
    teamRow += '<p>'
    for (let key in team) {
        console.log(`${key}: ${team[key]} `);
        teamRow += `${key}: ${team[key]} `
    }
    teamRow += '</p>'
}

teamRow += '</div>';

rowElement.innerHTML = teamRow;