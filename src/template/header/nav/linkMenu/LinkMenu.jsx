
import { Link } from "react-scroll";

const LinkMenu = (props) => {
  return (
    <Link
        to={props.target}
        smooth={true}
        duration={500}
        spy={true} 
        activeClass="active" 
        className={props.className}>
        {props.children}
        {props.title}
    </Link>
  )
}

export default LinkMenu