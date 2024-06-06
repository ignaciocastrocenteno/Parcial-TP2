import StudentModelsMemory from "../Student/student.memory.models.js";
import StudentModelsFs from "../Student/student.fs.models.js";

export default class ModelFactory {
  constructor() {}

  static get(type) {
    switch (type) {
      case "MEM":
        console.log("Persisting on server memory");
        return new StudentModelsMemory();
      case "FS":
        console.log("Persistiendo sobre FileSystem (FS)");
        return new StudentModelsFs();
      default:
        console.log("[DEFAULT PERSISTENCE] - Server Memory Storage ");
        return new StudentModelsMemory();
    }
  }
}
