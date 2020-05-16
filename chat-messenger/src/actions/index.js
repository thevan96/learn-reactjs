export const switchUser = userId => ({
  type: 'SWITCH_USER',
  userId
})

export const sendMessage = text => ({
  type: 'SEND_MESSAGE',
  text
})

export const deleteMessage = id => ({
  type: 'DELETE_MESSAGE',
  id
})

export const DEFAULT_USER = {
  id: 1
}
