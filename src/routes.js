import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Settings = React.lazy(() => import('./views/Settings/Settings'))
const Users = React.lazy(() => import('./views/users/Users'))
const AddBlog = React.lazy(() => import('./views/blog/AddBlog'))
const AllBlog = React.lazy(() => import('./views/blog/AllBlog'))
const Teacher = React.lazy(() => import('./views/teacher'))
const TeacherDetails = React.lazy(() => import('./views/teacher/TeacherDetails'))
const Category=React.lazy(()=> import("./views/category/Category"))
const CreateAuthor=React.lazy(()=> import("./views/author/addAuthor"))
const CreatePublisher=React.lazy(()=> import("./views/publisher/Publisher"))
const AddBook=React.lazy(()=> import("./views/Book/addBook"))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/addblog', name: 'Add Blog', element: AddBlog },
  { path: '/allblog', name: 'All Blog', element: AllBlog },
  { path: '/setting', name: 'settings', element:  Settings},
  { path: '/all-user', name: 'All User', element: Users },
  { path: '/teacher', name: 'Add Teacher', element: Teacher }, 
  { path: '/teacherdetails', name: 'Teacher Details', element: TeacherDetails },
  { path: '/create-category', name: 'addcategory', element:  Category},
  { path: '/create-author', name: 'createauthor', element: CreateAuthor },
  { path: '/create-publisher', name: 'createpublisher', element:  CreatePublisher},
  { path: '/create-Book', name: 'AddBook', element:  AddBook},
]
export default routes
