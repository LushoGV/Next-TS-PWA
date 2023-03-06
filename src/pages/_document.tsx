import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-secondaryWhite dark:bg-secondaryBlack'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
