import express from 'express'
import { renderHomePage } from '../controllers/homeController'
import {
  handleCreateUser,
  handleDeleteUser,
  handleUpdateUser,
  renderUserPage,
  renderUserUpdatePage,
} from '../controllers/userController'

const router = express.Router()

const initWebRoutes = (app) => {
  router.get('/', renderHomePage)
  router.get('/user', renderUserPage)
  router.post('/user/create', handleCreateUser)
  router.get('/user/delete/:id', handleDeleteUser)
  router.get('/user/update/:id', renderUserUpdatePage)
  router.post('/user/update/:id', handleUpdateUser)

  return app.use('/', router)
}

export default initWebRoutes
