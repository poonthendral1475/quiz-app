import logo from '../assets/quiz-logo.png'
function Header()
{
    return(
        <header>
        <img src={logo} alt="Quiz logo" />
        <h1>
            reactQuiz
        </h1>
        </header>
    )
}
export default Header;