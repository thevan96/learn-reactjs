export const switchUser = userId => ({
  type: 'SWITCH_USER',
  userId
})

export const chat = text => ({
  type: 'CHAT',
  text
})

export const DEFAULT_USER = {
  id: 1
}
