if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),r={module:{uri:o},exports:c,require:d};i[o]=Promise.all(s.map((e=>r[e]||d(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"f28602fc78699d50c70dca8baee21628"},{url:"/_next/static/QMqL5S64wCf596hdgEfiM/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/QMqL5S64wCf596hdgEfiM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/23-ac32bf721129c538.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/53c13509-3ced84693175bb5b.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/781-aab8d11ec6329e79.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/795d4814-5e153ecad40705fc.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/app/_not-found/page-39088de30abdfc68.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/app/layout-1f741e625402508f.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/app/page-8332a56bce645d35.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/e37a0b60-b74be3d42787b18d.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/fd9d1056-59c73b288b416d5c.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/main-1eee0f93ddeff5cc.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/main-app-da1dae3a00d710e1.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-664d23e0ec3e9204.js",revision:"QMqL5S64wCf596hdgEfiM"},{url:"/_next/static/css/4a74cd1d9c3e274f.css",revision:"4a74cd1d9c3e274f"},{url:"/_next/static/css/611456c741a5a86d.css",revision:"611456c741a5a86d"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/2bec382a97569ef7-s.woff2",revision:"6663ff5d488f66e2298a3d54ccdd0e27"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/a6f6e20aa665b79b-s.woff2",revision:"d0a9189939c8ae0d274911d5064e0941"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/cfddda48c2bdb328-s.woff2",revision:"cbf5209fc34af8baac9950a329bb496e"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/d86cb100f71d6b8d-s.p.woff2",revision:"66a5c387aa1887aaf43e69d3cb70625b"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icons/android/android-launchericon-144-144.png",revision:"c0f017d684d31c7e6c094d39a47753b4"},{url:"/icons/android/android-launchericon-192-192.png",revision:"f49993323aa2438153e5fd61a6824c02"},{url:"/icons/android/android-launchericon-48-48.png",revision:"ec227100a351e342b30469d50cdd9a60"},{url:"/icons/android/android-launchericon-512-512.png",revision:"fa63f06a9a14b0558bedf04738a5e6aa"},{url:"/icons/android/android-launchericon-72-72.png",revision:"a381e237dc8efb319eda780d2621292d"},{url:"/icons/android/android-launchericon-96-96.png",revision:"4a93db18f89694c60436a3f1086a8a48"},{url:"/icons/ios/100.png",revision:"0d229537e75c811e121efff7511892e7"},{url:"/icons/ios/1024.png",revision:"79fe825dd616ea0d6d7470312f2bf780"},{url:"/icons/ios/114.png",revision:"9c2d857978548b869efecd191aa718bd"},{url:"/icons/ios/120.png",revision:"681290e8f416cde94fb8d945da213732"},{url:"/icons/ios/128.png",revision:"968852c8dfc8860ef0da822cbf532411"},{url:"/icons/ios/144.png",revision:"c0f017d684d31c7e6c094d39a47753b4"},{url:"/icons/ios/152.png",revision:"9fd540063d0ef2048a3971e1c079164e"},{url:"/icons/ios/16.png",revision:"4f8c20c1d50b3181ce8596c0f20cfd63"},{url:"/icons/ios/167.png",revision:"213557d4959b5a4cdfdb32c34eb15dd6"},{url:"/icons/ios/180.png",revision:"926ba50614225316ec8711fa0d11d37e"},{url:"/icons/ios/192.png",revision:"f49993323aa2438153e5fd61a6824c02"},{url:"/icons/ios/20.png",revision:"f0904f82fb675010c9cb83bc6d127bc7"},{url:"/icons/ios/256.png",revision:"afb17b5f2e619e50680e299dc7eba7d1"},{url:"/icons/ios/29.png",revision:"f49c2397c89a050157d95db5588633d8"},{url:"/icons/ios/32.png",revision:"db62d19318b00580d1bdba0184c15fe4"},{url:"/icons/ios/40.png",revision:"9492aeda74a84f78fa5f2acd44a00a78"},{url:"/icons/ios/50.png",revision:"2c6322b98b9916b3a953ec03e6b786be"},{url:"/icons/ios/512.png",revision:"fa63f06a9a14b0558bedf04738a5e6aa"},{url:"/icons/ios/57.png",revision:"077885bb71cb97b12e2fd5e5a7563f6f"},{url:"/icons/ios/58.png",revision:"49d6a6422174b4ac0ff1eecf5aa1e84d"},{url:"/icons/ios/60.png",revision:"6d6f762aa3494e879c5c2ea0be113914"},{url:"/icons/ios/64.png",revision:"878d1acebf962f085d483c1b422b362a"},{url:"/icons/ios/72.png",revision:"a381e237dc8efb319eda780d2621292d"},{url:"/icons/ios/76.png",revision:"7476bc3336ee431db2dcaaed8577d9b0"},{url:"/icons/ios/80.png",revision:"02a40bfd3a81d5182857ce4ea62be5d1"},{url:"/icons/ios/87.png",revision:"4fbeed3b139c9be71c22f01a7f26d745"},{url:"/icons/windows11/LargeTile.scale-100.png",revision:"287ea01805b30f4f0a9f7bae7b366cc6"},{url:"/icons/windows11/LargeTile.scale-125.png",revision:"14e29b660f36da4eca0c47973527a93d"},{url:"/icons/windows11/LargeTile.scale-150.png",revision:"20a7bdf7dbc1287fc1c7b3bc39f4311f"},{url:"/icons/windows11/LargeTile.scale-200.png",revision:"111895b0bd41330ac19f391c147431a5"},{url:"/icons/windows11/LargeTile.scale-400.png",revision:"d6b370decfde2c34c0ac4c2a8c66d278"},{url:"/icons/windows11/SmallTile.scale-100.png",revision:"03e3d2096d0a5167e29e2ad958baa8d8"},{url:"/icons/windows11/SmallTile.scale-125.png",revision:"b2e58b75f706eb555b58c275ebc97db2"},{url:"/icons/windows11/SmallTile.scale-150.png",revision:"362e547d19907eb776248ef4331c2e3e"},{url:"/icons/windows11/SmallTile.scale-200.png",revision:"24ee247d4ae3dde3460524d7ba916155"},{url:"/icons/windows11/SmallTile.scale-400.png",revision:"f41312b5a83db1fff5d348664aa992d4"},{url:"/icons/windows11/SplashScreen.scale-100.png",revision:"fdd1fbbe9d997b638a7fefa3278fb43a"},{url:"/icons/windows11/SplashScreen.scale-125.png",revision:"9bb90f2eae856ba31a2f707450d4cf99"},{url:"/icons/windows11/SplashScreen.scale-150.png",revision:"aa8f5aa652041bd07bb8783c0f3227c6"},{url:"/icons/windows11/SplashScreen.scale-200.png",revision:"66e1f32115882c98776f3c8d44ecef00"},{url:"/icons/windows11/SplashScreen.scale-400.png",revision:"f834504fb6475f0def304d6889158f6e"},{url:"/icons/windows11/Square150x150Logo.scale-100.png",revision:"bfdd6fecfefbd651cbdd084e870fc49b"},{url:"/icons/windows11/Square150x150Logo.scale-125.png",revision:"7d8193af6749a934df8f14dbafabb191"},{url:"/icons/windows11/Square150x150Logo.scale-150.png",revision:"c611c5e69f4ffbcfdeccdfe9b26a611f"},{url:"/icons/windows11/Square150x150Logo.scale-200.png",revision:"1ec33fafb23b7cdd44454cf2f4fb8136"},{url:"/icons/windows11/Square150x150Logo.scale-400.png",revision:"84d37eb68ca21da282fbcce3ec9ceb2d"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"7aea7d4b192875dfd773d8de31836d83"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"c9f6d988e47b6494004cad4bde126334"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"387ced8e794158be45cc4cb1aab12387"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"ab7e6aeae055a2ed91a044aebf098342"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"015728b1761d89ed3ea6a8607887bb97"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"cce32dd9ee3176800194598ad431d8ec"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"d4ac410bf87aba94b645e5b71778ae2e"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"c11ac0c03436dcd413b9761d56dd8d04"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"90c29647ee01ca9159fa52391e9ea630"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"7a922a8340ba41a41c31a37201492229"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"efdcc4fd9f7c4560f28b6c4f59e4846d"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"300d4de7705ae395d9c448d4b064cbc4"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"9a8c2760d6772da4e267569db7a0272c"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"266256fd335c83ac36c9eb8021737531"},{url:"/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"ebab8842c27ab05d9cc90db36501144b"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"7aea7d4b192875dfd773d8de31836d83"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"c9f6d988e47b6494004cad4bde126334"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"387ced8e794158be45cc4cb1aab12387"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"ab7e6aeae055a2ed91a044aebf098342"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"015728b1761d89ed3ea6a8607887bb97"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"cce32dd9ee3176800194598ad431d8ec"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"d4ac410bf87aba94b645e5b71778ae2e"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"c11ac0c03436dcd413b9761d56dd8d04"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"90c29647ee01ca9159fa52391e9ea630"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"7a922a8340ba41a41c31a37201492229"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"efdcc4fd9f7c4560f28b6c4f59e4846d"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"300d4de7705ae395d9c448d4b064cbc4"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"9a8c2760d6772da4e267569db7a0272c"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"266256fd335c83ac36c9eb8021737531"},{url:"/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"ebab8842c27ab05d9cc90db36501144b"},{url:"/icons/windows11/Square44x44Logo.scale-100.png",revision:"90c29647ee01ca9159fa52391e9ea630"},{url:"/icons/windows11/Square44x44Logo.scale-125.png",revision:"bcfa1ee581f805269334117550315af7"},{url:"/icons/windows11/Square44x44Logo.scale-150.png",revision:"54e96d6cfedfc63ba4af03d185276cc0"},{url:"/icons/windows11/Square44x44Logo.scale-200.png",revision:"cb87c2a93df7bde5926bf05881cdebf3"},{url:"/icons/windows11/Square44x44Logo.scale-400.png",revision:"b01bbed2e84cebdeac01f38051f59da1"},{url:"/icons/windows11/Square44x44Logo.targetsize-16.png",revision:"7aea7d4b192875dfd773d8de31836d83"},{url:"/icons/windows11/Square44x44Logo.targetsize-20.png",revision:"c9f6d988e47b6494004cad4bde126334"},{url:"/icons/windows11/Square44x44Logo.targetsize-24.png",revision:"387ced8e794158be45cc4cb1aab12387"},{url:"/icons/windows11/Square44x44Logo.targetsize-256.png",revision:"ab7e6aeae055a2ed91a044aebf098342"},{url:"/icons/windows11/Square44x44Logo.targetsize-30.png",revision:"015728b1761d89ed3ea6a8607887bb97"},{url:"/icons/windows11/Square44x44Logo.targetsize-32.png",revision:"cce32dd9ee3176800194598ad431d8ec"},{url:"/icons/windows11/Square44x44Logo.targetsize-36.png",revision:"d4ac410bf87aba94b645e5b71778ae2e"},{url:"/icons/windows11/Square44x44Logo.targetsize-40.png",revision:"c11ac0c03436dcd413b9761d56dd8d04"},{url:"/icons/windows11/Square44x44Logo.targetsize-44.png",revision:"90c29647ee01ca9159fa52391e9ea630"},{url:"/icons/windows11/Square44x44Logo.targetsize-48.png",revision:"7a922a8340ba41a41c31a37201492229"},{url:"/icons/windows11/Square44x44Logo.targetsize-60.png",revision:"efdcc4fd9f7c4560f28b6c4f59e4846d"},{url:"/icons/windows11/Square44x44Logo.targetsize-64.png",revision:"300d4de7705ae395d9c448d4b064cbc4"},{url:"/icons/windows11/Square44x44Logo.targetsize-72.png",revision:"9a8c2760d6772da4e267569db7a0272c"},{url:"/icons/windows11/Square44x44Logo.targetsize-80.png",revision:"266256fd335c83ac36c9eb8021737531"},{url:"/icons/windows11/Square44x44Logo.targetsize-96.png",revision:"ebab8842c27ab05d9cc90db36501144b"},{url:"/icons/windows11/StoreLogo.scale-100.png",revision:"2c6322b98b9916b3a953ec03e6b786be"},{url:"/icons/windows11/StoreLogo.scale-125.png",revision:"7ec6eccb42da707f24e491d05b9bbc95"},{url:"/icons/windows11/StoreLogo.scale-150.png",revision:"1e7cd1930c16387ff275de3b956afe64"},{url:"/icons/windows11/StoreLogo.scale-200.png",revision:"0d229537e75c811e121efff7511892e7"},{url:"/icons/windows11/StoreLogo.scale-400.png",revision:"06e2acd89f661fa080b134473891607e"},{url:"/icons/windows11/Wide310x150Logo.scale-100.png",revision:"39eb012b19714b8ae8017e8cb57a28ca"},{url:"/icons/windows11/Wide310x150Logo.scale-125.png",revision:"58e7f4ddd573cb4e46f8646b3c831b09"},{url:"/icons/windows11/Wide310x150Logo.scale-150.png",revision:"5ef29cb8ef7c0e92fde7c5bf9bc5dce5"},{url:"/icons/windows11/Wide310x150Logo.scale-200.png",revision:"fdd1fbbe9d997b638a7fefa3278fb43a"},{url:"/icons/windows11/Wide310x150Logo.scale-400.png",revision:"66e1f32115882c98776f3c8d44ecef00"},{url:"/manifest.json",revision:"c707928841ac735cb8bce70fded2704f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:n,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
