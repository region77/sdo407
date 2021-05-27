const user = {
   name: "Иван",
   lastname: "Иванов",
   id: "1",
   about: "Рассказ о себе",
   avatar: "https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14046.jpg",
};

const users = {
   0: { name: "Дарина", lastname: "Иванова", id:4 },
   1: { name: "Мария", lastname: "Осипова", id:6 },
   2: { name: "Ольга", lastname: "Петрова", id: 9 },
   3: { name: "Арсений", lastname: "Калмыков", id:7 },
   4: { name: "Илья", lastname: "Щербаков",id:12 },
   5: { name: "Серафима", lastname: "Васильева", id:11 },
   6: { name: "Софья", lastname: "Петрова",id:2 },
   7: { name: "Дмитрий", lastname: "Смирнов",id:18 },
   8: { name: "Елизавета", lastname: "Романова",id:3 },
   9: { name: "Елизавета", lastname: "Захарова", id:14 },
};


export function getUser(userId) {
   for (let i = 0; i < Object.keys(users).length; i++) if (users[i].id == userId) return users[i];
   return user;
}

export function getUsers() {
   return users;
}