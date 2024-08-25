import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundSubTitle,
  NotFoundImage,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png "
      alt="not found"
    />
    <NotFoundTitle>Page Not Found</NotFoundTitle>
    <NotFoundSubTitle>
      We are sorry, the page you requested could not be found
    </NotFoundSubTitle>
  </NotFoundContainer>
)

export default NotFound
