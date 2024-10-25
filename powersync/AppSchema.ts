import { column, Schema, Table } from '@powersync/web'

const lists = new Table(
  {
    // id column (text) is automatically included
    _id: column.text,
    name: column.text,
  },
  { indexes: {} }
)

export const AppSchema = new Schema({
  lists,
})

export type Database = (typeof AppSchema)['types']
