/* eslint-disable */
import { Link } from 'react-router-dom';
import preval from 'preval.macro';

const NavigationBar = () => {

  const routeFiles = preval`
    const fs = require('fs');
    const files = fs.readdirSync('src/routes');
    module.exports = files;
  `
  
  const extractRoutes = (routeFile) => {
    const routeName = routeFile.slice(routeFile.indexOf('-') + 1,-3);
    const path = (routeName === 'Home' ? '' : routeName.toLowerCase());
    return [routeName, path];
  }

  return (
    <div>
      {routeFiles.map((routeFile, index) => {

        const [routeName, path] = extractRoutes(routeFile);
        
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
