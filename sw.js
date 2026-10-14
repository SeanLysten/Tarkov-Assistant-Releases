/*
 * Service worker de la version mobile (application web installable).
 * - Coque de l'application (HTML, scripts, styles, polices, icônes) mise en cache à l'installation : l'app s'ouvre hors-ligne.
 * - Page : réseau d'abord (nouvelle version dès qu'elle est en ligne), cache sinon.
 * - Fichiers versionnés (assets/…) : cache d'abord.
 * Les données du jeu (tarkov.dev, wiki) sont gardées par l'application elle-même (cache « ta-data »), pas ici.
 * VERSION et ASSETS sont remplis à la construction (voir vite.config.ts).
 */
const VERSION = '1.1.32-mv86n6lt';
const ASSETS = ["./assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","./assets/geist-latin-wght-normal-BgDaEnEv.woff2","./assets/geist-mono-symbols2-wght-normal-CO5SzqOn.woff2","./assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","./assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","./assets/rajdhani-devanagari-500-normal-B_DH_jja.woff2","./assets/rajdhani-latin-ext-500-normal-DiyUS11w.woff2","./assets/rajdhani-latin-500-normal-ByNUCHrt.woff2","./assets/rajdhani-devanagari-600-normal-DhS7ScYx.woff2","./assets/rajdhani-latin-ext-600-normal-C9ZjJQAt.woff2","./assets/rajdhani-latin-600-normal-CXCVEoA9.woff2","./assets/rajdhani-devanagari-700-normal-BQQOj9BB.woff2","./assets/rajdhani-latin-ext-700-normal-S6aYESQK.woff2","./assets/rajdhani-latin-700-normal-BPDUZo87.woff2","./assets/index-BnyAEv3j.css","./assets/QuestTree-BnuhLJ6X.css","./assets/index-e7AC3F3k.js","./assets/Dashboard-L2qO9igF.js","./assets/Quests-CvY1SdC3.js","./assets/QuestDetail-BkUH1HPr.js","./assets/QuestTree-Djdc6525.js","./assets/star-Co6jT2HL.js","./assets/questActions-BJTSAesK.js","./assets/Profit-BOPALC9-.js","./assets/Trends-KDJTdXwe.js","./assets/trending-down-t2EnZfsh.js","./assets/RaidPlanner-BI6eYGU5.js","./assets/RaidStats-C-rCWmku.js","./assets/Kappa-D_rs2WH6.js","./assets/Squad-DTJtrvUQ.js","./assets/squad-sWbcLpJ2.js","./assets/Alerts-BiA5qpH6.js","./assets/Items-BqigRtk0.js","./assets/ItemDetail-BOyZFP58.js","./assets/Maps-CAT3id-7.js","./assets/MapView-BD6xX82u.js","./assets/WikiQuests-BY_LgGMG.js","./assets/blackDivision-C_Rqj1ER.js","./assets/log-out-6nwDjlKj.js","./assets/key-round-By0ZCyji.js","./assets/Traders-C2SoskTZ.js","./assets/TraderDetail-CYBYcw_k.js","./assets/Hideout-Dboda7YB.js","./assets/hammer-C4pg3WQD.js","./assets/Weapons-CsfftCtf.js","./assets/WeaponDetail-Br6y_9eT.js","./assets/meta-BV9KsLVc.js","./assets/Ammo-Cusv5kUV.js","./assets/Bosses-DYldYa4T.js","./assets/BossDetail-CucIZqGL.js","./assets/chevron-left-BVwuPzhX.js","./assets/shield-YaQA-0Yh.js","./assets/WeaponAmmo-D9UUime3.js","./assets/check-check-BLiIuRAX.js","./assets/ItemPicker-DjcOPxWo.js","./assets/minus-BQ-Nx6Oy.js","./assets/Cultist-JEPRMlH0.js","./assets/clock-DsuHWJhA.js","./assets/sparkles-Dbwz0y9e.js","./assets/plus-DFEnfx_O.js","./assets/Patches-BIV88JoT.js","./assets/Roadmap-DvPnKfcE.js","./assets/roadmap-BMQ3jUqB.js","./assets/calendar-clock-C4QuCbvv.js","./assets/Wiki-BhCKVdz4.js","./assets/TranslationBar-D-ic3jUZ.js","./assets/WikiContent-QyPnBcgO.js","./assets/Settings-D2yAsm02.js","./assets/eye-kg6pFx9f.js","./assets/rotate-ccw-DoIf9iQd.js","./assets/trash-p7RAH0cX.js","./assets/loader-circle-CkilNKnm.js","./assets/languages-CJoI0mi5.js","./assets/Needed-BN2Nzbdt.js","./assets/list-checks-DKTKvv9Z.js","./assets/Flea-B4hQ4yhw.js","./assets/PriceChart-CCpmcA2T.js","./assets/chevron-right-BvYqrlL9.js","./assets/arrow-up-DI2QChL0.js","./assets/Transfer-Ds1W0xai.js","./assets/transfer-BSAhCjrM.js"];
const SHELL = `ta-shell-${VERSION}`;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL).then((cache) => cache.addAll(['./', './index.html', './manifest.webmanifest', ...ASSETS])),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k.startsWith('ta-shell-') && k !== SHELL).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'skip-waiting') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(SHELL).then((cache) => cache.put('./index.html', copy));
          return response;
        })
        .catch(async () => (await caches.match('./index.html')) || (await caches.match('./')) || Response.error()),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(
      (hit) =>
        hit ||
        fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(SHELL).then((cache) => cache.put(request, copy));
          }
          return response;
        }),
    ),
  );
});
