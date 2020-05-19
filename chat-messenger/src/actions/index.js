export const switchUser = userId => ({
  type: 'SWITCH_USER',
  userId
})

export const sendMessage = (text, idRoom) => ({
  type: 'SEND_MESSAGE',
  text,
  idRoom
})

export const filterInput = filterText => ({
  type: 'FILTER_INPUT',
  filterText
})

export const DEFAULT_USER = {
  id: 1
}
