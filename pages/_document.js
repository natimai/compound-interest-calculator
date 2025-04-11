import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const pageTitle = "דריבית - מחשבונים פיננסיים וקורס שוק ההון חינם";
  const pageDescription = "מחשבונים פיננסיים חינמיים: מחשבון ריבית דריבית, קרן השתלמות, קופת גמל, קרן פנסיה, פיקדון בנקאי ועוד. קורס שוק ההון למתחילים והשוואת מוצרי השקעה בעברית פשוטה. הכל בחינם וללא התחייבות.";
  const siteUrl = "https://www.deribit.co.il";
  const ogImageUrl = `${siteUrl}/og-image.png`;

  return (
    <Html lang="he" dir="rtl">
      <Head>
        {/* Basic Meta Tags - These might be overridden by page-specific Head components */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Default OG Tags - For homepage and as fallback */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="דריבית" />
        <meta property="og:locale" content="he_IL" />

        {/* Default Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* Favicons and PWA stuff from original _document.js */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="application-name" content="דריבית" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="דריבית" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-tap-highlight" content="no" />
        
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
        
        {/* Plerdy Main Code */}
        <script
          type="text/javascript"
          defer
          data-plerdy_code='1'
          dangerouslySetInnerHTML={{
            __html: `
              var _protocol="https:"==document.location.protocol?"https://":"http://";
              _site_hash_code = "2cb1a4b76981b924810fde6be5d7549b",_suid=57915, plerdyScript=document.createElement("script");
              plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",
              plerdyScript.src="https://d.plerdy.com/public/js/click/main.js?v="+Math.random();
              var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
              plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);
              try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}
            `
          }}
        />

        {/* Plerdy A/B Testing Code */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _suid=57915;
            `
          }}
        />
        <script
          async
          type="text/javascript"
          src="https://d.plerdy.com/public/js/click/plerdy_ab-min.js?v=ab19b6a"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}