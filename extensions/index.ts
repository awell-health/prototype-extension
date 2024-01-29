// import { AvaAi } from './avaAi'
import * as json from './markdown.json'
import { MyExtension } from './my-extension'

export type Markdown = Record<string, { readme: string; changelog: string }>
export const markdown: Markdown = json

export const extensions = [MyExtension]
