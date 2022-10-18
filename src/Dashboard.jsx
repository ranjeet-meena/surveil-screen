import React from 'react'
import Login from './components/pages/login'

function Dashboard({classnames, setClassnames}) {
  return (
    <main className='dashboard'>
        <Login classnames={classnames} setClassnames={setClassnames} />
    </main>
  )
}

export default Dashboard