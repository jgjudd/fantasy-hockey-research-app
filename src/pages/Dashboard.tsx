import { useState, useEffect } from 'react'

const Dashboard = (): JSX.Element => {
  const [teams] = useState([])

  useEffect(() => {
    fetch('http:localhost:3000/teams')
      .then(data => {
        const x = data.body?.getReader().read()
        console.log(x)
      })
      // .then(res => { setTeams(res) })
      .catch(e => { console.log(e) })
  }, [])

  return (
    <div>
      <h4>Dash</h4>
      {
        teams?.map(team => { console.log(team); return <p key={team}>{ team }</p> })
      }
    </div>
  )
}

export default Dashboard
