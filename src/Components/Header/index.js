import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {HomePageHeader, BankLogo, LogOutButton} from './styledComponents'

const Header = props => {
  const onLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <HomePageHeader>
      <BankLogo
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
      />
      <LogOutButton onClick={onLogOut}>Logout</LogOutButton>
    </HomePageHeader>
  )
}

export default withRouter(Header)
