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
    _id: 'anyid2',
    title: 'Mi titulo 2',
    teacher: 'mi profesor',
    description: 'descripcion del curso',
    topic: 'Programacion'
  },
  {
    _id: 'anyid3',
    title: 'Mi titulo 3',
    teacher: 'mi profesor',
    description: 'descripcion del curso',
    topic: 'Programacion'
  }
];

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.filter(course => course._id === args.id)
      return course.pop()
    } 
  }
}