import { DB_Company, DB_Job } from "./db"
import { Company, Resolvers } from "./__generated__/resolvers-types"

// if you set the type of resolvers as `Resolvers`, then it comes the type error.
export const resolvers: Resolvers = {
  Query: {
    company: (_root, { id }) => DB_Company.findById(id),
  },

  Company: {
    jobs: (company: Company) =>
      DB_Job.findAll((job) => job.companyId === company.id),
  },

  Job: {
    company: (job) => {
      return DB_Company.findById(job.companyId)
    },
  },
}


// if you set the type of `resolvers` as any, then everything works fine.
// export const resolvers: any = {
//   Query: {
//     company: (_root: any, { id }: any) => DB_Company.findById(id),
//   },

//   Company: {
//     jobs: (company: Company) =>
//       DB_Job.findAll((job) => job.companyId === company.id),
//   },

//   Job: {
//     company: (job: any) => {
//       return DB_Company.findById(job.companyId)
//     },
//   },
// }

