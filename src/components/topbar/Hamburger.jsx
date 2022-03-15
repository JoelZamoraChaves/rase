

export default function Hamburger(props){
    return(
        <div className="right">
          <div className="hamburger" onClick={()=>props.setMenuOpen(!props.menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
    );
}