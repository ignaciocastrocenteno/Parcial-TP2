import express from "express";
import StudentControllers from "../controllers/student.controllers.js";

export default class StudentRouter {
  #router;
  #controllers;

  constructor() {
    this.#router = express.Router();
    this.#controllers = new StudentControllers();
  }

  start() {
    // Inserción de notas
    this.#router.post("/grades", this.#controllers.createGrade);
    // Obtener todos los estudiantes con sus notas
    this.#router.get("/grades", this.#controllers.getGrades);
    // Obtener un estudiante por ID
    this.#router.get("/grades/:id", this.#controllers.getGradeByID);

    return this.#router;
  }
}
