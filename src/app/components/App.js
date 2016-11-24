import React from 'react';

export default ({children}) => (
  <div>
    <header>
      <div className="container">
        <h1>Todo</h1>
        <h2>simple todo list</h2>
        <section id="downloads">
          <a href="https://github.com/user-space/todo/zipball/master" className="btn">Download as .zip</a>
          <a href="https://github.com/user-space/todo/tarball/master" className="btn">Download as .tar.gz</a>
          <a href="https://github.com/user-space/todo" className="btn btn-github"><span className="icon"></span>View on GitHub</a>
        </section>
      </div>
    </header>
    {children}
  </div>
)
