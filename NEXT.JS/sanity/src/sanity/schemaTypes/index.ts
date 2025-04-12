import { type SchemaTypeDefinition } from 'sanity'
import watch from '../watch'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [watch],
}
