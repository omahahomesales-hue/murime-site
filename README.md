# murime.com

Mel's Muri / Corporate Confidant site. Next.js, hosted on Vercel, code on GitHub.

## Changing the words on the site

Almost everything lives in **`content/site.ts`**. Open it on GitHub, click the pencil icon, change the text between the quotes, and click **Commit changes**. Vercel publishes it in about a minute.

- Booking link, phone, email, and social links are at the top of that file.
- The menu is the `nav` list.
- The home page is under `home`. The Corporate Confidant page (`/corporate-confidant`) is under `corporateConfidant`.
- **Start a Conversation** buttons use `introCallUrl`. Paste the Acuity link for the free 30-minute intro call there. Until then, the buttons open an email to Mel.
- Case Studies, The Daily Live, Toolkit, and Travel are hidden until they're ready. Mel's copy is already in place (`caseStudies`, `live`, `toolkit`, `travel`). Fill in the missing details, then flip that page to `true` in `pagesReady`. It then appears in the menu and in Google.

Colors are at the top of **`app/globals.css`** (`--navy`, `--gold`, `--green`, `--cream`).

Images are listed in **`content/images.ts`** and saved in `public/images/`.

## Images and Wix

The site's photos were originally hosted on Wix. The **Localize images** GitHub Action copies them into `public/images/` and commits them, so the site stops depending on Wix. Check that `public/images/` has files before canceling the Wix plan. To run it by hand: GitHub → Actions → Localize images → Run workflow.

## Running locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Old Wix URLs

`next.config.ts` redirects the old Wix pages so existing links keep working. `/founder-sessions` now goes to Corporate Confidant. While Toolkit and Travel are hidden, `/items` and `/news` go to the home page; point them at `/toolkit` and `/travel` once those pages are ready.
