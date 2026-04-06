import { create } from "zustand"


const useStudentStore= create((set)=>(
    {
          students: [],//this is what we want to save as state in our store
           //action method to add a student to the store
          addStudent: (student)=> set( (state)=>(
            {
                students: [...state.students, {...student,id: Date.now()}]
            }
          )),

          deleteStudent:(id)=>set((state)=>({
            students: state.students.filter((student)=> student.id !== id)
          }))

    }
))
export default useStudentStore