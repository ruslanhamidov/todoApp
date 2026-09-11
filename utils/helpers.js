import IdGenerator from './idGenerator.js'

export const generateId = () => {
  const newId = new IdGenerator()
  return newId.id
}