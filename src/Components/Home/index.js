import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import {
  HomePageContainer,
  HomePageData,
  HomePageQuote,
  BankCardDetails,
} from './styledComponents'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <HomePageContainer>
      <Header />
      <HomePageData>
        <HomePageQuote>Your Flexibility, Our Excellence</HomePageQuote>
        <BankCardDetails
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
          alt="digital card"
        />
      </HomePageData>
    </HomePageContainer>
  )
}

export default Home
