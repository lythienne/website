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
              /<@sp([\s\S]+)>/g,
              function ($0, $1) {
                return [{type: "html", value: "<strong>"},
                        {type: "text", value: $1},
                        {type: "html", value: "</strong>"}]
              }              
            ])
          }
        } 
      ]
    },
  }
}
