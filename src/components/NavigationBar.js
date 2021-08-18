/* eslint-disable */
import preval from 'preval.macro';

const NavigationBar = () => {

  const routeFiles = preval`
    const fs = require('fs');
    const files = fs.readdirSync('src/routes');
    module.exports = files;
  `

  return (
    <div>
      {routeFiles.map(routeFile => (<span>{routeFile.slice(0, -3)}</span>))}
    </div>
  );
};

export default NavigationBar;
