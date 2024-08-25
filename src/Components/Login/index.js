import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    userId: '',
    pin: '',
    isSubmitError: false,
    errorMsg: '',
  }
  successView = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }
  failureView = errorMsg => {
    console.log(errorMsg)
    this.setState({
      isSubmitError: true,
      errorMsg,
    })
  }

  onBankLogin = async event => {
    event.preventDefault()

    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.successView(data.jwt_token)
    } else {
      this.failureView(data.error_msg)
    }
  }

  onChangeInput = event => {
    this.setState({
      userId: event.target.value,
    })
  }
  onChangepassword = event => {
    this.setState({
      pin: event.target.value,
    })
  }
  render() {
    const {userId, pin, isSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="main-container">
        <div className="login-form-container">
          <div className="bank-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="website-login-image"
            />
          </div>

          <form onSubmit={this.onBankLogin} className="form-page-container">
            <h1 className="form-page-title">Welcome Back!</h1>
            <div className="user-input-container">
              <label className="label-badge" htmlFor="userId">
                User ID
              </label>
              <input
                type="text"
                id="userId"
                placeholder="Enter User ID"
                value={userId}
                onChange={this.onChangeInput}
                className="user-input"
              />
            </div>
            <div className="user-input-container">
              <label className="label-badge" htmlFor="userPin">
                PIN
              </label>
              <input
                id="userPin"
                type="password"
                placeholder="Enter PIN"
                value={pin}
                onChange={this.onChangepassword}
                className="user-input"
              />
            </div>
            <button className="form-button" type="submit">
              Login
            </button>
            {isSubmitError && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
