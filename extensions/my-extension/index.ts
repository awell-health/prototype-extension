import {
  AuthorType,
  Category,
  FieldType,
  type Extension,
  type Settings,
  type Action,
  type Fields,
  type DataPointDefinition,
} from '@awell-health/extensions-core'

const settings = {
  api_key: {
    label: 'api key',
    key: 'api_key',
    obfuscated: true,
    description: 'my special api key',
  },
} satisfies Settings

const fields = {
  name: {
    id: 'name',
    label: 'Name',
    type: FieldType.STRING,
    required: true,
  },
} satisfies Fields

const dataPoints = {
  response: {
    key: 'response',
    valueType: 'string',
  },
} satisfies Record<string, DataPointDefinition>

const myAction: Action<
  typeof fields,
  typeof settings,
  keyof typeof dataPoints
> = {
  key: 'my-action',
  title: 'My Action',
  description: 'An example of a prototype action',
  fields,
  previewable: true,
  category: Category.DATA,
  dataPoints,
  async onActivityCreated(payload, onComplete, onError) {
    const { name } = payload.fields
    const { api_key } = payload.settings
    await onComplete({
      data_points: {
        response: `Hello ${name ?? 'no-name'}! Your api key is ${
          api_key ?? 'no-api-key'
        }`,
      },
    })
  },
}

export const MyExtension: Extension = {
  key: 'my-extension',
  title: 'My Extension',
  description: 'An example of a prototype extension',
  icon_url:
    'https://res.cloudinary.com/da7x4rzl4/image/upload/v1678870116/Awell%20Extensions/Awell_Logo.png',
  category: Category.EHR_INTEGRATIONS,
  author: {
    authorType: AuthorType.EXTERNAL,
    authorName: 'Me!',
  },
  settings,
  actions: { myAction },
  // webhooks,
}
