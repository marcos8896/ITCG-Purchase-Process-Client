const fs = require('fs');
const argv = require('yargs').argv

require('dotenv').config();

const environment = argv.environment;
const isProd = environment === 'prod';


const targetPath = `./src/environments/environment.${environment}.ts`;

const envConfigFile = `
  export const environment = {
    production: ${isProd},
    BASE_URL: '${process.env.BASE_URL}',
    users: {
      planningdepartment: '${process.env.USERTYPE_PLANNING_DEPARMENT}',
      viceprincipal: '${process.env.USERTYPE_VICEPRINCIPAL}',
      bossdepartment: '${process.env.USERTYPE_BOSSDEPARTMENT}'
    }
  };
`;

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Configuration setup correctly! Building now...`);
});