import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'aq5ay34m',
  dataset: 'production',
  apiVersion: '2023-03-23',
  useCdn: true
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
