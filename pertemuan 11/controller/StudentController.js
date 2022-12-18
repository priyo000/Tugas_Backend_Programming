const Students = require("../model/Students");

class StudentController {
    index(req, res) {
      const data = {
        message: "Menampilkan semua students",
        data: Students,
      };
      res.json(data);
    }
  
    store(req, res) {
      const { nama } = req.body;
      const studen = Students.push({nama})
      const data = {
        message: `Menambahkan data student: ${nama}`,
        data: studen,
      };
      res.json(data);
    }
  
    update(req, res) {
      const { id } = req.params;
      const { nama } = req.body;
      const studen = Students[{id}]={nama}
      const data = {
        message: `Mengedit data student ${id}, nama ${nama}`,
        data: studen,
      };
      res.json(data);
    }
  
    destroy(req, res) {
      const { id } = req.params;
      const studen = Students.splice(index, {id})
      const data = {
        message: `Menghapus data student ${id}`,
        data: studen,
      };
      res.json(data);
    }
  }
  
  // membuat object StudenController
  const object = new StudentController();
  
  // export object StudentController
  module.exports = object;