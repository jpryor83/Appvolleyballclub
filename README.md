# App Volleyball Club website

A fast, static website for appvolleyballclub.com. No build step and no server. It is plain HTML, CSS and JavaScript, so it can be hosted free on GitHub Pages.

## Put it online (GitHub Pages)

1. Upload everything in this folder to the root of the `jpryor83/Appvolleyballclub` repo (drag and drop works on github.com, or use `git push`).
2. In the repo, open **Settings > Pages**. Under "Build and deployment" choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Under "Custom domain" enter `appvolleyballclub.com` (the `CNAME` file already contains it). Tick **Enforce HTTPS** once it is available.
4. At your domain registrar, add these DNS records:
   - Four **A** records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One **CNAME** record for `www` pointing to `jpryor83.github.io`

   DNS can take from a few minutes to a day to update. GitHub's current instructions: docs.github.com/pages (search "custom domain").

## Add the logo and photos

| File | What it is |
| --- | --- |
| `assets/logo.png` | The club logo (square or wide, transparent background works best) |
| `assets/kim-pryor.jpg` | Photo of Kim for the coaches section |
| `assets/photos/team-1.jpg` to `team-6.jpg` | Gallery photos (or rename and edit the list in `js/data.js`) |
| `assets/alumni/` | Headshots of players now playing in college |

Anything missing is skipped automatically. The gallery section stays hidden until at least one photo loads, and players without photos show their initials.

Use photos the club owns or has permission to use, and get parent or player permission before posting photos of minors by name.

## Everything you will edit is in `js/data.js`

- **Alumni ("Next level")**: add one entry per player. The page counts them, sorts by class year and builds division filters automatically. Delete the three sample entries.
- **Events**: add dates as `"YYYY-MM-DD"`. Past events hide themselves.
- **Payments**: paste a payment link into each `url`.
- **Programs, coaches, contact info**: all in the same file.

Colors are at the top of `css/styles.css`. Change the values under `:root` to match the logo.

## Turn on payments

The site does not handle card numbers itself. Each "Pay now" button opens a hosted checkout page, which is the safest and simplest setup.

1. Create a free Stripe account (stripe.com). Square and PayPal also offer payment links.
2. In Stripe, create a **Payment Link** for each item (tryout fee, dues, camp, tournament). Turn on "let customers adjust quantity" for camps if useful.
3. Paste each link into `payments` in `js/data.js`.

Also check with an accountant about taxes and whether the club should be set up as a business or nonprofit before collecting money.

## Turn on the sign-up form

1. Create a free form at formspree.io and copy its URL (it looks like `https://formspree.io/f/abcdwxyz`).
2. Paste it into `formEndpoint` in `js/data.js`.

Responses then arrive by email. Until you do this, the form opens an email addressed to the club instead.

## Review all copy

The wording was drafted from public information about the club and Kim's coaching background. Kim should read every line and confirm ages, programs, locations, pricing and bio details before launch.

## Ideas for later

- A real roster and schedule page for each team
- A sponsor section for local businesses
- Online waivers and medical forms
- A newsletter sign-up
