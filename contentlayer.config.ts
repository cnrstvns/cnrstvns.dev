/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { theme } from './src/constants/theme';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    path: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    createdAt: {
      type: 'number',
      resolve: (post) => new Date(post.date).getTime(),
    },
    readingTime: {
      type: 'string',
      resolve: (post) => readingTime(post.body.raw).text,
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/posts',
  documentTypes: [Post],
  mdx: {
    // Github markdown plugin
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // Rehype slug plugin
      rehypeSlug,
      // Rehype syntax highlighting plugin
      [
        rehypePrettyCode,
        {
          theme,
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      // Transformation to pass raw value to each code block
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties)) {
              return;
            }

            for (const child of node.children) {
              if (child.tagName === 'pre') {
                child.properties.raw = node.raw;
              }
            }
          }
        });
      },
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
