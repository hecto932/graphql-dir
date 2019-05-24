'use strict'

const connectDb = require('./db')
const { ObjectId } = require('mongodb');

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    }
    const newCourse = Object.assign(defaults, input)
    let db
    let course

    try {
      db = await connectDb()
      course = await db.collection('courses').insertOne(newCourse)
      newCourse._id = course.insertedId
    } catch (err) {
      console.error(err);
    }

    return newCourse
  },
  createStudent: async (root, { input }) => {
    let db
    let student

    try {
      db = await connectDb()
      student = await db.collection('students').insertOne(input)
      input._id = student.insertedId
    } catch (err) {
      console.error(err);
    }

    return input
  },
  editCourse: async (root, { _id, input }) => {
    let db
    let course
    try {
      db = await connectDb();
      await db.collection('courses').updateOne({ _id: ObjectId(_id)}, { $set: input })
      course = await db.collection('courses').findOne({ _id: ObjectId(_id) })
    } catch (err) {
      console.error(err)
    }

    return course
  },
  editStudent: async (root, { _id, input }) => {
    let db
    let student
    try {
      db = await connectDb();
      await db.collection('students').updateOne({ _id: ObjectId(_id)}, { $set: input })
      student = await db.collection('students').findOne({ _id: ObjectId(_id) })
    } catch (err) {
      console.error(err)
    }

    return student
  },
  addPeople: async (root, { courseId, personId }) => {
    let db
    let person
    let course

    try {
      db = await connectDb()
      course = await db.collection('courses').findOne({ _id: ObjectId(courseId) })
      person = await db.collection('students').findOne({ _id: ObjectId(personId) })

      if (!course || !person) {
        throw new Error(`The person or course does not exist...`);
      }

      await db.collection('courses').updateOne(
        { _id: ObjectId(courseId) },
        { $addToSet: { people: ObjectId(personId) } }
      )
    } catch(err) {
      console.error(err)
    }

    return course
  }
}