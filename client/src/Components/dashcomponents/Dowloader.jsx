import React from 'react'


const downloadFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType })
  const a = document.createElement('a')
  a.download = fileName
  a.href = window.URL.createObjectURL(blob)
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  a.dispatchEvent(clickEvt)
  a.remove()
}
const exportToJson = e => {
  e.preventDefault()
  downloadFile({
    data: JSON.stringify(usersData.users),
    fileName: 'users.json',
    fileType: 'text/json',
  })
}
const exportToCsv = e => {
  e.preventDefault()
  // Headers for each column
  let headers = ['Id,Name,Surname,Age']
  // Convert users data to a csv
  let usersCsv = usersData.users.reduce((acc, user) => {
    const { id, name, surname, age } = user
    acc.push([id, name, surname, age].join(','))
    return acc
  }, [])
  downloadFile({
    data: [...headers, ...usersCsv].join('\n'),
    fileName: 'users.csv',
    fileType: 'text/csv',
  })
}
function Dowloader() {
  return (
    <div className='App'>
      <h1>How to download CSV and JSON files in React</h1>
      <table className='usersTable'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {usersData.users.map(user => {
            const { id, name, surname, age } = user
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='actionBtns'>
        <button type='button' onClick={exportToJson}>
          Export to JSON
        </button>
        <button type='button' onClick={exportToCsv}>
          Export to CSV
        </button>
      </div>
    </div>
  )
}
export default Dowloader
