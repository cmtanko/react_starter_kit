export const schema = {
  title: 'Anonymous chat schema',
  description: 'Database schema for an anoymous chat',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true
    },
    message: {
      type: 'string'
    }
  },
  required: ['message']
};
