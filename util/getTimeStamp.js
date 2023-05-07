const getTimeStamp = () => {
  const today = new Date()
  const date =
    today.getDate() +
    '.' +
    (today.getMonth() + 1) +
    '.' +
    today.getFullYear().toString().slice(-2)
  const time =
    (today.getHours() < 10 ? '0' + today.getHours() : today.getHours()) +
    ':' +
    (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()) +
    ':' +
    (today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds()) 
  const timeDate = time + ' ' + date
  return {time, date, timeDate}
}

export default getTimeStamp
