'use strict'

const errorHandler = require('./errorHandler')
const connectDb = require('./db')
const { ObjectId } = require('mongodb')

module.exports = {
  Course: {
    people: async ({ people }) => {
      let db
      let peopleData 
      let ids
      try {
        db = await connectDb()
        ids = people ? people.map(id => ObjectId(id)) : []
        peopleData = ids.length > 0 ?
          await db.collection(`students`).find(
            { _id: { $in: ids } }
          ).toArray()
          : []
        
      } catch (err) {
        errorHandler(err)
      }
      return peopleData
    }
  },
  Person: {
    __resolveType: async (person, context, info) => {
      if (person.phone) {
        return 'Monitor'
      }

      return 'Student'
    }
  },
  GlobalSearch: {
    __resolveType: async (item, context, info) => {
      if (item.title) {
        return 'Course'
      }
      
      if (item.phone) {
        return 'Monitor'
      }

      return 'Student'
    }
  }
}