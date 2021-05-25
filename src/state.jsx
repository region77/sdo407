const user = {
   name: "Иван",
   lastname: "Иванов",
   id: "1",
   about: "Рассказ о себе",
   avatar: "https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14046.jpg",
};

const users = {
   0: { name: "Дарина", lastname: "Иванова" },
   1: { name: "Мария", lastname: "Осипова" },
   2: { name: "Ольга", lastname: "Петрова" },
   3: { name: "Арсений", lastname: "Калмыков" },
   4: { name: "Илья", lastname: "Щербаков" },
   5: { name: "Серафима", lastname: "Васильева" },
   6: { name: "Софья", lastname: "Петрова" },
   7: { name: "Дмитрий", lastname: "Смирнов" },
   8: { name: "Елизавета", lastname: "Романова" },
   9: { name: "Елизавета", lastname: "Захарова" },
};


export function getUser() {
   return user;
}

export function getUsers() {
   return users;
}