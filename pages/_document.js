import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="he" dir="rtl">
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WRNJLJQV12"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WRNJLJQV12');
            `,
          }}
        />
        
        {/* Plerdy Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                window.site_hash_code = "2cb1a4b76981b924810fde6be5d7549b";
                window._suid = 57915;
                s.src = "https://d.plerdy.com/public/js/click/main.js?v=" + Math.random();
                var ss = document.getElementsByTagName('script')[0];
                ss.parentNode.insertBefore(s, ss);
              }
            `
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}