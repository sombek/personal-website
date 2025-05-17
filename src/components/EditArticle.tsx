'use client'
// InitializedMDXEditor.tsx
import type { ForwardedRef } from 'react'
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  imagePlugin,
  linkPlugin,
  jsxPlugin,
  type JsxComponentDescriptor,
  GenericJsxEditor,
  BoldItalicUnderlineToggles,
  UndoRedo,
  toolbarPlugin,
  ImageNode,
  InsertImage,
  CreateLink
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

// Define your JSX component descriptors
const jsxComponentDescriptors: JsxComponentDescriptor[] = [
  {
    name: 'ArticleLandingImage',
    kind: 'flow',
    source: '@/components/ArticleLandingImage',
    props: [
      { name: 'src', type: 'string' },
      { name: 'alt', type: 'string' },
      { name: 'className', type: 'string' },
      { name: 'priority', type: 'expression' },
      { name: 'quality', type: 'number' }
    ],
    hasChildren: false,
    Editor: GenericJsxEditor
  }
]

// Only import this to the next file
export default function EditArticle({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      plugins={[
        toolbarPlugin({
            toolbarClassName: 'my-classname',
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <InsertImage />
                <CreateLink />
                
              </>
            )
          }),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        imagePlugin({
          imageUploadHandler: async (file: File) => {
            const formData = new FormData()
            formData.append('file', file)
            
            try {
              const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
              })
              
              if (!response.ok) {
                throw new Error('Upload failed')
              }
              
              const data = await response.json()
              return data.url
            } catch (error) {
              console.error('Error uploading image:', error)
              throw new Error('Failed to upload image')
            }
          }
        }),
        linkPlugin(),
        jsxPlugin({ jsxComponentDescriptors })
      ]}
      contentEditableClassName='prose dark:prose-invert '
      trim={false}
      {...props}
      ref={editorRef}
    />
  )
}