class Restaurants {
  constructor(name) {
    this.name = name;
  }
  getTimeTable() {
    console.log("obtener horario");
  }
  static getRestaurant(id) {
    return new Restaurants("BBQ");
  }
}

const r = Restaurants.getRestaurant(12);
