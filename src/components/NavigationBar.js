import { Link } from 'react-router-dom';
import preval from 'preval.macro';

const NavigationBar = () => {
  const routeFiles = preval`
    const fs = require('fs');
    const files = fs.readdirSync('src/routes');
    module.exports = files;
  `;

  const extractRoutes = (routeFile) => {
    const routeName = routeFile.slice(routeFile.indexOf('-') + 1, -3);
    const path = (routeName === 'Home' ? '' : routeName.toLowerCase());
    return [routeName, path];
  };

  let index = 0;

  return (
    <nav>
      {routeFiles.map((routeFile) => {
        const [routeName, path] = extractRoutes(routeFile);
        index += 1;

        return (
          <Link
            to={`/${path}`}
            key={index}
          >
            {routeName}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationBar;
