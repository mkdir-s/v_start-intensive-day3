const person = {
    name: 'Валера',
    age: 25,
    profession: 'Frontend-developer',
    getInfo() {
        console.log(`Меня зовут ${this.name}. Мне ${this.age} лет. Я - ${this.profession}.`); 
    },
  };
  
  person.getInfo(); // Меня зовут Валера. Мне 25 лет. Я - Frontend-developer.