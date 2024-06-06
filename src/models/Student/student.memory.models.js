export default class StudentModelsMemory {
  #grades;
  #idCounter;
  constructor() {
    this.#idCounter = 1;
    this.#grades = [
      /* {
        nombre: "XXXXX",
        nota: (0 a 10),
      } */
      {
        name: "Fulano Gómez",
        grade: 9,
        id: 1,
      },
    ];
  }

  getGrades = async () => {
    return this.#grades;
  };

  createGrade = async (data) => {
    const grade = data.grade;

    if (grade < 0 || grade > 10) {
      throw new Error(
        "The grade inserted represents an invalid value. Expected grades goes from 0 to 10 range"
      );
    }

    console.log(
      `The following grade is going to be persisted on the database: ${JSON.stringify(
        data
      )}`
    );
    data["id"] = ++this.#idCounter;
    this.#grades.push(data);

    return data;
  };

  getGradeByID = async (id) => {
    const studentFound = this.#grades.find((student) => student.id == id);
    // console.log(studentFound);

    return studentFound;
  };
}
