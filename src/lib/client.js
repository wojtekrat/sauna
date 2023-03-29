import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'aq5ay34m',
  dataset: 'production',
  apiVersion: '2023-03-23',
  useCdn: true,
  token: 'skGO8RXLYIgB4BQts6MDJldBORW5rVVbiUh63ag9pncj4ibxhDTtrebrGZgBrml71u7VXoHcfP9Rsik1zRO1vvOMAPiscy8kxiBYG1QeEqOJh9CZxYX3yUqrBds7djSRpFnMCUKjXoi0edXt4BK23hRQXSjzXmEJyg9t3981qvWqlAUwVETi'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
