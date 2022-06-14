'use strict'
const mongoose=require('mongoose')
const { updateMany, findByIdAndUpdate } = require('../model/cursos')
const course=require("../model/cursos")

module.exports = {
    Query: {
      getCourses: () => {
        return course.find({})
      },

      getCourse: (root, args) => {
        const {id}=args
        return course.findById(id);
      },

      deleteCourse: (root, args) => {
        return course.findByIdAndRemove(args.id);
      } 
    },
    Mutation:{
      createCourse:(root,args)=>{
        const curso=new course({...args})
        return curso.save()
      },
      updateCourse: (root,args)=>{
        return course.findByIdAndUpdate(args.id,{...args})
      }
    },
    
  }


