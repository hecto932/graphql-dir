'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Mi titulo',
    teacher: 'mi profesor',
    description: 'descripcion del curso',
    topic: 'Programacion'
  },
  {
    _id: 'anyid',
    title: 'Mi titulo 2',
    teacher: 'mi profesor',
    description: 'descripcion del curso',
    topic: 'Programacion'
  },
  {
    _id: 'anyid',
    title: 'Mi titulo 3',
    teacher: 'mi profesor',
    description: 'descripcion del curso',
    topic: 'Programacion'
  }
];

module.exports = {
  getCourses: () => {
    return courses
  }
}