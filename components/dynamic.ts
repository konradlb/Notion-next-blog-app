import dynamic from 'next/dynamic'
import Link from '@components/Link'

const components = {
  // default tags
  ol: 'ol',
  ul: 'ul',
  li: 'li',
  p: 'p',
  blockquote: 'blockquote',
  a: Link,

  Code: dynamic(() => import('@components/Code')),
  // Counter: dynamic(() => import('./counter')),
  // Equation: dynamic(() => import('./equation')),
}

export default components
