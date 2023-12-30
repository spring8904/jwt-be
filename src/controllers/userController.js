import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from '../services/userService'

export const renderUserPage = async (req, res) => {
  const users = await getUsers()
  res.render('user.ejs', { users })
}

export const handleCreateUser = async (req, res) => {
  const { username, email, password } = req.body
  await createUser(username, email, password)
  res.redirect('/user')
}

export const handleDeleteUser = async (req, res) => {
  await deleteUser(req.params.id)
  res.redirect('/user')
}

export const renderUserUpdatePage = async (req, res) => {
  const user = await getUserById(req.params.id)
  res.render('user-update.ejs', { user })
}

export const handleUpdateUser = async (req, res) => {
  const { username, email } = req.body
  await updateUser(req.params.id, username, email)
  res.redirect('/user')
}
