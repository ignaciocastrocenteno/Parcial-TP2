import fs from "fs";

export default class StudentModelsFs {
  #students;
  #idCounter;
  constructor() {
    this.#students = "src/models/Student/students.json";
    this.#idCounter = 0;
  }

  /* getGrades = async () => {
    const data = await fs.promises.readFile(this.students, "utf-8");
    console.log("DATA: \n" + data);

    // Como no realizamos escritura de datos, devolvemos directamente todos los usuarios
    return data;
  }; */

  getGrades = async () => {
    const data = await fs.promises.readFile(this.#students, "utf-8");
    // Parse the Buffer data as UTF-8 text
    const jsonData = JSON.parse(data.toString("utf-8"));
    console.log("DATA: \n", jsonData);
    return jsonData;
  };

  createGrade = async (student) => {
    const usersArr = JSON.parse(
      await fs.promises.readFile(this.#students, "utf-8")
    );
    student["id"] = ++this.#idCounter;

    usersArr.push(student);

    const usersJSON = JSON.stringify(usersArr);
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