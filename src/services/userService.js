import bcryptjs from 'bcryptjs'
import { User } from '../models'

export const getUsers = async () => {
  try {
    return await User.findAll()
  } catch (error) {
    console.log(error)
  }
}

const hash = (string) => {
  const salt = bcryptjs.genSaltSync(10)
  return bcryptjs.hashSync(string, salt)
}

export const createUser = async (username, email, password) => {
  try {
    await User.create({
      username,
      email,
      password: hash(password),
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (id) => {
  try {
    await User.destroy({
      where: {
        id,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const getUserById = async (id) => {
  try {
    return await User.findOne({
      where: {
        id,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (id, username, email) => {
  try {
    await User.update(
      {
        username,
        email,
      },
      {
        where: {
          id,
        },
      },
    )
  } catch (error) {
    console.log(error)
  }
}
