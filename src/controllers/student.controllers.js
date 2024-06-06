import StudentServices from "../services/student.services.js";

export default class StudentControllers {
  #services;
  constructor() {
    this.#services = new StudentServices();
  }

  checkEmptyObject = (user) => Object.keys(user).length === 0;

  getGrades = async (req, res) => {
    try {
      const students = await this.#services.getGrades();

      const date = new Date();
      const RESULT_OUTPUT = `All users have been loaded from the database available through ${date.toUTCString()}`;
      console.log(RESULT_OUTPUT);
      /*  res
        .status(200)
        .send({statusCode: 200, message: RESULT_OUTPUT, result: students}); */

      res.status(200).send(students);
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(400)
        .send(
          "<!DOCTYPE html><html><title>400 Bad Request</title><body><h1>Page Not Found</h1></body></html>"
        );
    }
  };

  createGrade = async (req, res) => {
    try {
      const gradeToAdd = req.body;

      if (this.checkEmptyObject(gradeToAdd)) {
        throw new Error("An empty grade object cannot be processed");
      }

      const createdGrade = await this.#services.createGrade(gradeToAdd);
      const RESULT_OUTPUT =
        "A new grade has been successfully submited in the database";
      console.log(RESULT_OUTPUT);

      res
        .status(201)
        .send({statusCode: 201, message: RESULT_OUTPUT, result: createdGrade});

      // res.status(201).send(createdGrade);
    } catch (error) {
      console.log("The creation of the new user could not be completed");
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(406)
        .send(
          "<!DOCTYPE html><html><title>406 Not Acceptable</title><body><h1>Page Not Found</h1></body></html>"
        );
    }
  };

  getGradeByID = async (req, res) => {
    try {
      const {id} = req.params;
      // console.log(id);
      const student = await this.#services.getGradeByID(id);

      if (this.checkEmptyObject(student)) {
        throw new Error(
          "The specified student ID is incorrect, missing or has been deleted in the past"
        );
      }

      const RESULT_OUTPUT = `Hi ${student.name}, your grade is ${student.grade}`;
      console.log(RESULT_OUTPUT);

      res
        .status(200)
        .send({statusCode: 200, message: RESULT_OUTPUT, result: student});
    } catch (error) {
      console.log(`   ---> Server Error: [${error}]`);
      res
        .status(404)
        .send(
          "<!DOCTYPE html><html><title>404 Not Found</title><body><h1>Page Not Found</h1></body></html>"
        );
    }
  };
}
