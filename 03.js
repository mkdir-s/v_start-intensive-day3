
const people = [
    {name: 'Иван', profession: 'Backend-developer'},
    {name: 'Анастасия', profession: 'DevOps-engineer'},
    {name: 'Василий', profession: 'Frontend-developer'},
    {name: 'Оксана', profession: 'Project-manager'},
  ];
  
  const frontendDev = people.find(e => e.profession === 'Frontend-developer')
  
  console.log(frontendDev); // {name: 'Василий', profession: 'Frontend-developer'}