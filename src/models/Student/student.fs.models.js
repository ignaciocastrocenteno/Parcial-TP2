import fs from "fs";

export default class StudentModelsFs {
  #students;
  constructor() {
    this.#students = "src/models/Student/students.json";
  }

  getGrades = async () => {
    const data = await fs.promises.readFile(this.#students, "utf-8");
    // Parse the Buffer data as UTF-8 text
    const jsonData = JSON.parse(data.toString("utf-8"));
    console.log("DATA: \n", jsonData);
    return jsonData;
  };

  createGrade = async (student) => {
    const studentsArr = JSON.parse(
      await fs.promises.readFile(this.#students, "utf-8")
    );

    /*
    [SOLVED] Small Fix: The students' IDs were unique only if the server is never reset. Otherwise, IDs will repeat
    since the 'idCounter' private property from the 'StudentModelsFs' class, was always reset every time the server
    went on/off.
    */
    const STUDENTS_COUNTER = ++studentsArr[0]["systemInformation"]["idCounter"];
    student["id"] = STUDENTS_COUNTER;

    studentsArr.push(student);

    const usersJSON = JSON.stringify(studentsArr);
    await fs.promises.writeFile(this.#students, usersJSON);

    return student;
  };

  getGradeByID = async (id) => {
    const vanillaObj = JSON.parse(
      await fs.promises.readFile(this.#students, "utf-8")
    );
    console.log(vanillaObj);
    // No usamos la comparación estricta, ya que el ID recibido viaja como 'String'
    const userFound = await vanillaObj.find((user) => user.id == id);
    console.log(userFound);
    // const usersJSON = JSON.stringify(vanillaObj);
    // console.log(usersJSON);

    // Igual que con el método 'getUsers()', al no realizar operaciones de escritura, no es obligatorio la serialización
    return userFound;
  };
}
