'use strict'

const errorHandler = require('./errorHandler')
const connectDb = require('./db')
const { ObjectId } = require('mongodb');

module.exports = {
  getCourses: async () => {
    let db
    let courses = []

    try {
      db = await connectDb()
      courses = await db.collection('courses').find().toArray()
    } catch (err) {
      errorHandler(err)
    }

    return courses;
  },
  getCourse: async (root, { id }) => {
    let db
    let course

    try {
      db = await connectDb()
      course = await db.collection('courses').findOne({ _id: ObjectId(id) })
    } catch (err) {
      errorHandler(err)
    }

    return course;
  },
  getStudents: async () => {
    let db
    let students = []

    try {
      db = await connectDb()
      students = await db.collection('students').find().toArray()
    } catch (err) {
      errorHandler(err)
    }

    return students;
  },
  getStudent: async (root, { id }) => {
    let db
    let stduent

    try {
      db = await connectDb()
      stduent = await db.collection('students').findOne({ _id: ObjectId(id) })
    } catch (err) {
      errorHandler(err)
    }

    return stduent;
  }
}