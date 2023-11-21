import { readdir } from 'fs/promises';
import { basename, dirname } from 'path';
import { Sequelize, DataTypes, Model } from 'sequelize';
import { fileURLToPath } from 'url';
import config from '../../config/database.js';

async function initializeDatabase() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const developmentConfig = (
    config.development
  );
  
  const db = {};
  const sequelize = new Sequelize(developmentConfig);
  const dir = await readdir(__dirname);
  const files = dir.filter((file) => {
    const isFile = file.indexOf('.') !== 0;
    const isJsFile = file.slice(-3) === '.js';
    const isNotThisFile = file !== basename(__filename);

    return isFile && isNotThisFile && isJsFile;
  });

  for (const file of files) {
    const model = await import(`./${file}`);
    const namedModel = model.default(sequelize, DataTypes);
    db[namedModel.name] = namedModel;
  }

  const modelNames = Object.keys(db);

  for (const modelName of modelNames)
    if (db[modelName].associate) db[modelName].associate(db);

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;
}

export const { sequelize, User } = await initializeDatabase();