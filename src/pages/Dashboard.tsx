import { useState, useEffect } from 'react'

const Dashboard = (): JSX.Element => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const getData = async (): Promise<void> => {
      const url = 'https://statsapi.web.nhl.com/api/v1/teams'
      const x = await fetch(url)
      const y = await x.json()
      console.log(y.teams)
      setTeams(y.teams)
    }
    getData()
  }, [])

  return (
    <div>
      <h4>Dash</h4>
      {
        teams?.map(team => <p key={team}>{ team.name }</p>)
      }
    </div>
  )
}

export default Dashboard
