/* eslint-disable */
import { Link } from 'react-router-dom';
import preval from 'preval.macro';

const NavigationBar = () => {

  const routeFiles = preval`
    const fs = require('fs');
    const files = fs.readdirSync('src/routes');
    module.exports = files;
  `

  return (
    <div>
      {routeFiles.map((routeFile, index) => {
        
        const routeName = routeFile.slice(0,-3);
        const path = (routeName === 'Home' ? '' : routeName.toLowerCase());
        
        return (
          <Link
            to={`/${path}`}
            key={index}
          >
            {routeName}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationBar;
