export default {
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'version',
      title: 'Version number',
      type: 'string'
    },
    {
      name: 'fixed',
      title: 'Fixed',
      type: 'lightBlockContent'
    },
    {
      name: 'new',
      title: 'New',
      type: 'lightBlockContent'
    },
    {
      name: 'breaking',
      title: 'Breaking',
      type: 'lightBlockContent'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
    // prepare(selection) {
    //   const {author} = selection
    //   return Object.assign({}, selection, {
    //     subtitle: author && `by ${author}`
    //   })
    // }
  }
};
