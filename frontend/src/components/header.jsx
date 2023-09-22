import React from 'react'

function Header() {
  return (
    <div className="">
        <a className='' href=""><img className='' src="" alt="" />fgfhfgh</a>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
            </Switch>
    </div>
  )
}

export default Header