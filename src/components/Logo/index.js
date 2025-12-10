import logo from '../../imgs/logo.svg'
import '../../components/Logo/styles.css'

function Logo() {
  return (
    <div className="logo">
      <img className='logo-img' src={logo} alt="logo"/>
      <p><strong>Alura</strong> Books</p>
    </div>
  )
}

export default Logo;