import ModelsFactory from "../models/DAO/AbstractFactory.js";
import config from "../../config.js";

export default class StudentServices {
  #models;
  constructor() {
    this.#models = ModelsFactory.get(config.PERSISTENCE_TYPE);
  }

  getGrades = async () => {
    const users = await this.#models.getGrades();

    return users;
  };

  createGrade = async (gradeToAdd) => {
    const result = await this.#models.createGrade(gradeToAdd);

    return result;
  };

  getGradeByID = async (id) => {
    const user = await this.#models.getGradeByID(id);
    return user;
  };
}
