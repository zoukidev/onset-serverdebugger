import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { IConfig } from '../interfaces/config';

export class Config {
    static load(configPath: string): IConfig {
        return yaml.safeLoad(fs.readFileSync(configPath, 'utf8'));
    }
}