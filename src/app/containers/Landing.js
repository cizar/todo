import React from 'react'
import connect from '../lib/connect'
import { login } from '../event/user'

const Landing = ({actions}) => (
  <section className="main-content">
    <div className="login-box" style={{ textAlign: 'center' }}>
      <h2><a onClick={actions.login}>Sign In</a></h2>
    </div>
  </section>
)

export default connect(undefined, { login })(Landing)
