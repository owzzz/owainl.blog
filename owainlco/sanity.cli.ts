import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'owainl',
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
  }
})
