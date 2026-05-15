import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { visit } from "unist-util-visit"
import { findAndReplace } from "mdast-util-find-and-replace"

export const SitelenPona: QuartzTransformerPlugin = () => {
  return {
    name: "SitelenPona",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root) => {
            findAndReplace(tree, [
              /#sp.+#/s,
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
