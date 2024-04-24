import './index.css'

import ThemeContext from '../../context/ThemeContext'

import {Link} from 'react-router-dom'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const webLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const btnImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navCss = isDarkTheme && 'bc-black'

      const textWhite = isDarkTheme && 'text-white'

      const onClickToChangeTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={`nav-container d-flex ${navCss}`}>
          <img className="image" src={webLogo} alt="website logo" />
          <ul className="d-flex ul">
            <li>
              <Link className={`link ${textWhite}`} to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link className={`link ${textWhite}`} to="/about">
                <p>About</p>
              </Link>
            </li>
          </ul>
          <button data-testid="theme" onClick={onClickToChangeTheme}>
            <img className="image" src={btnImage} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
