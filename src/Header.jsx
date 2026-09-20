import { Link } from "react-router-dom";
import './Header.css'; 
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>React Homework</h1>
        
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/Jsxintro">JSX Intro</Link></li>
            <li><Link to="/ReturningNested">Returning Nested</Link></li>
            <li><Link to="/ReturningDown">Returning Down</Link></li>
            <li><Link to="/ReturningSeveral">Returning Several</Link></li>
            <li><Link to="/ReturningUnclosed">Returning Unclosed</Link></li>
            <li><Link to="/ReturningEmpty">Returning Empty</Link></li>
            <li><Link to="/VariablesInserting">Variables Inserting</Link></li>
            <li><Link to="/VariablesNuances">Variables Nuances</Link></li>
            <li><Link to="/VariablesArrays">Variables Arrays</Link></li>
            <li><Link to="/VariablesObjects">Variables Objects</Link></li>
            <li><Link to="/VariablesAttributes">Variables Attributes</Link></li>
            <li><Link to="/TagsSeveral">Tags Several</Link></li>
            <li><Link to="/TagsMultiLine">Tags MultiLine</Link></li>
            <li><Link to="/TagsClosing">Tags Closing</Link></li>
            <li><Link to="/TagsCorrectness">Tags Correctness</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;