import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'cc4a5miy',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-01-01',
})
