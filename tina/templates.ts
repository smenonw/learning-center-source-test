import type { TinaField } from "tinacms";
export function defaultFields() {
  return [
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
