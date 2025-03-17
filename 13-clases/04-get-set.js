class Restaurans {
  #timetable;
  constructor(name) {
    this.name = name;
  }

  get timetable() {
    //con get  obtener un valore
    return this.#timetable;
  }

  set timetable(value) {
    // y con set asiganr un valor y siempre le pasamos un valor
    let date = new Date(value);
    let time = date.getTime();
    if (Number.isNaN(time)) {
      throw new Error("fehca invalida");
    }
    this.#timetable = date;
  }
}
const r = new Restaurans("BBQ");

r.timetable = "1 Dec 1999";
