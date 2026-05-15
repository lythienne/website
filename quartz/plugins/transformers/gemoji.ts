import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { visit } from "unist-util-visit"
import { findAndReplace } from "mdast-util-find-and-replace"
import { nameToEmoji } from 'gemoji'

export const Gemoji: QuartzTransformerPlugin = () => {
  return {
    name: "Gemoji",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root) => {
            findAndReplace(tree, [/:(\+1|[-\w]+):/g,
              function (_, $1) {
                return Object.hasOwn(nameToEmoji, $1) ? nameToEmoji[$1] : false
              }              
            ])
          }
        } 
      ]
    },
  }
}
