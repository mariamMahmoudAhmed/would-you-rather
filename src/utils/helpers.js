export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, author, authedUser) {
  const { id, optionOne,optionTwo } = question
  const { name, avatarURL } = author

  return {
    name,
    id,
    avatar: avatarURL,
    optionOne,
    optionTwo

  }
}
export const styles = {
  primary: {
    color: 'green',
    bgColor: 'honeydew'
  },
  secondary: {
    color: 'grey',
    bgColor: '#f4f4f4'
  }
};