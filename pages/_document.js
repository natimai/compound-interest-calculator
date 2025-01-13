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
          type="text/javascript"
          defer
          data-plerdy_code='1'
          dangerouslySetInnerHTML={{
            __html: `
              var _protocol = "https:" == document.location.protocol ? "https://" : "http://";
              window.site_hash_code = "2cb1a4b76981b924810fde6be5d7549b";
              window._suid = 57915;
              var plerdyScript = document.createElement("script");
              plerdyScript.setAttribute("defer", "");
              plerdyScript.dataset.plerdymainscript = "plerdymainscript";
              plerdyScript.src = "https://d.plerdy.com/public/js/click/main.js?v=" + Math.random();
              var plerdymainscript = document.querySelector("[data-plerdymainscript='plerdymainscript']");
              if (plerdymainscript) {
                plerdymainscript.parentNode.removeChild(plerdymainscript);
              }
              try {
                document.head.appendChild(plerdyScript);
              } catch(t) {
                console.log(t, "unable add script tag");
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