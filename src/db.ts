import { Database, Entity } from "fakebase"
import * as path from 'path';
export interface ICompany extends Entity {
  id: string
  name: string
  description: string
}

export interface IJob extends Entity {
  id: string
  companyId: string
  title: string
  description: string
}
const db = new Database(path.join(__dirname, '../data'))
export const DB_Company = db.table<ICompany>("companies")
export const DB_Job = db.table<IJob>("jobs")