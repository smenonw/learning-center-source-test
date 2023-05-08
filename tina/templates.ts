import type { TinaField } from "tinacms";
export function defaultFields() {
  return [
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
      templates: [
        {
          name: 'note',
          label: 'note',
          match: {
            start: '{{<',
            end: '>}}',
          },
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'string',
              required: true,
              ui: {
                component: 'textfield',
              },
            },
            {
              name: 'children',
              label: 'Content',
              type: 'rich-text',
              required: true
            },
          ],
        },
      ],
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "type",
      label: "Type",
    },
    {
      type: "string",
      name: "weight",
      label: "Weight",
      required: true,
    },
  ] as TinaField[];
}
