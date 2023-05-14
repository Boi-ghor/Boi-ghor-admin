import React from 'react'
import updateAuthor from './views/author/updateAuthor'
import updatePublisher from './views/publisher/updatePublisher'
import updateCategory from './views/category/updateCategory'
const AllPublishers =React.lazy(()=> import('./views/publisher/allPublisher'))
const AllAuthor =React.lazy(()=> import('./views/author/allAuthor'))
const AllBooks =React.lazy(()=> import('./views/Book/allBook'))
const AllCategory =React.lazy(()=> import('./views/category/allCategory'))
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
  { path: '/settings', name: 'settings', element:  Settings},
  { path: '/all-user', name: 'All User', element: Users },
  { path: '/teacher', name: 'Add Teacher', element: Teacher },
  { path: '/teacherdetails', name: 'Teacher Details', element: TeacherDetails },
  { path: '/create-category', name: 'addcategory', element:  Category},
  { path: '/create-author', name: 'createauthor', element: CreateAuthor },
  { path: '/create-publisher', name: 'createpublisher', element:  CreatePublisher},
  { path: '/create-Book', name: 'AddBook', element:  AddBook},
  {path:'/all-publishers', name:'All Publishers',element:AllPublishers},
  {path:"/all-publishers/:id",element:updatePublisher},
  {path:"/all-author", name:"All Authors",element:AllAuthor},
  {path:"/all-author/:id",element:updateAuthor},
  {path:"/all-category", name:"All Category",element:AllCategory},
  {path:"/all-category/:id",element:updateCategory},
  {path:"/all-book", name:"All Books",element:AllBooks},
]

export default routes
