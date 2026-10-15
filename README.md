# Appalachian Volleyball Club website

A fast, static website. No build step and no server. It is plain HTML, CSS and JavaScript, hosted free on GitHub Pages.

All files live at the top level of the repo (no folders), so uploading is simple.

| File | What it does |
| --- | --- |
| `index.html` | The page structure and wording |
| `styles.css` | Colors and layout (black, gold and white, from the logo) |
| `data.js` | Programs, payment links, alumni, events, coaches, contact info |
| `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`, `icon-192.png` | The small "APP" icon for browser tabs, bookmarks and phone home screens |
| `main.js` | Makes the page work (form, menu, filters). You should not need to edit this |
| `logo.png`, `logo-header.png` | The club logos: sun-and-mountain logo (hero and footer) and striped wordmark (header) |

## Updating the site on GitHub

To replace a file: open the repo, click **Add file > Upload files**, drag in a file with the same name, and click **Commit changes**. The site updates in a minute or two. Hard refresh with Ctrl+Shift+R (Cmd+Shift+R on a Mac) to see changes.

## Add photos

Upload photo files to the repo (same place as `index.html`), then list their file names in `data.js`.

- Coach photo: `kim-pryor.jpg`
- Gallery: `team-1.jpg` to `team-6.jpg` (or change the names in `data.js`)
- College players: upload a headshot and put its file name in that player's `photo` line

Missing photos are skipped, so nothing looks broken. Get permission before posting photos of minors by name.

## Everything you will edit is in `data.js`

- **Alumni ("Next level")**: one entry per player who went on to college volleyball. The page counts them, sorts by class year and builds division filters. Delete the three sample entries.
- **Events**: dates as `"YYYY-MM-DD"`. Past events hide themselves.
- **Payments**: paste a payment link into each `url`.
- **Programs, coaches, contact info**: same file.

## Turn on payments

The site never handles card numbers. Each "Pay now" button opens a hosted checkout page.

1. Create a Stripe account (stripe.com). Square and PayPal also offer payment links.
2. Create a Payment Link for each item (tryout fee, dues, camp, tournament).
3. Paste each link into `payments` in `data.js`.

## Turn on the sign-up form

1. Create a free form at formspree.io and copy its URL.
2. Paste it into `formEndpoint` in `data.js`.

Until then, the form opens an email to the club address instead.

## Connect appvolleyballclub.com (when ready to launch)

1. In the repo go to **Settings > Pages**, enter `appvolleyballclub.com` under **Custom domain**, and save. GitHub creates the `CNAME` file for you.
2. At the domain registrar, add four **A** records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a **CNAME** record for `www` pointing to `jpryor83.github.io`.
3. Once GitHub's DNS check passes, tick **Enforce HTTPS**.

## Review all copy

The wording was drafted from public information. Kim should confirm ages, programs, locations, pricing and her bio before launch.
