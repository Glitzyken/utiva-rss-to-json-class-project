import { useState } from 'react'

import Header from './components/Header'
import InputField from './components/InputField'

function App() {
  const [urlFromUseState, setUrl] = useState('filled');
  const getUrl = (event) => {
  return setUrl(event.target.value)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <Header me="charles" />
        </div>

        <div className="row">
          <div className="col-xl-12">
            <form className="form">
              <div className="form-group"><InputField url={urlFromUseState} getUrl={getUrl} /></div>
              <div className="form-group">{/* <SubmitBtn /> */}</div>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-12">
          <h1>Articles</h1>
          {urlFromUseState}
          {/* <Article /> */}
        </div>
      </div>
    </div>
  )
}

export default App
