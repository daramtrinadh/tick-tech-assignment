import Header from '../Header'
import ThemeContext from "../../context/ThemeContext";

import './index.css'

const NotFound=()=>(
    <ThemeContext.Consumer>
    {(value)=>{
        const {isDarkTheme}=value
        const notfoundBg=isDarkTheme?'not-found-dark':'not-found-light';
        return(
            <>
            <Header/>
            <div className={notfoundBg}>
                <h1>Page Not Found </h1>
                <p>Navigate to Home </p>
            </div>
            </>
        )
    }}

    </ThemeContext.Consumer>
)
export default NotFound