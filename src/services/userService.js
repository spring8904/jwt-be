import bcryptjs from 'bcryptjs'
import mysql from 'mysql2/promise'
import bluebird from 'bluebird'

const db = {
  host: '192.168.1.4',
  user: 'root',
  database: 'jwt',
  Promise: bluebird,
}

export const getUsers = async () => {
  try {
    const connection = await mysql.createConnection(db)
    const [rows] = await connection.execute('SELECT * FROM users')
    return rows
  } catch (error) {
    console.log(error)
  }
}

const hash = (string) => {
  const salt = bcryptjs.genSaltSync(10)
  return bcryptjs.hashSync(string, salt)
}

export const createUser = async (username, email, password) => {
  const hashPassword = hash(password)

  try {
    const connection = await mysql.createConnection(db)
    await connection.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashPassword],
    )
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (id) => {
  try {
    const connection = await mysql.createConnection(db)
    await connection.execute('DELETE FROM users WHERE `users`.`id` = ?', [id])
  } catch (error) {
    console.log(error)
  }
}

export const getUserById = async (id) => {
  try {
    const connection = await mysql.createConnection(db)
    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE `users`.`id` = ?',
      [id],
    )
    if (rows.length === 0) {
      throw new Error('User not found.')
    } else {
      return rows[0]
    }
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = async (id, username, email) => {
  try {
    const connection = await mysql.createConnection(db)
    await connection.execute(
      'UPDATE `users` SET `username` = ?, `email` = ? WHERE `users`.`id` = ?',
      [username, email, id],
    )
  } catch (error) {
    console.log(error)
  }
}
