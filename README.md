# murime.com

Mel's Muri / Corporate Confidant site. Next.js, hosted on Vercel, code on GitHub.

## Changing the words on the site

Almost everything lives in **`content/site.ts`**. Open it on GitHub, click the pencil icon, change the text between the quotes, and click **Commit changes**. Vercel publishes it in about a minute.

- Booking link, phone, email, and social links are at the top of that file.
- The menu is the `nav` list.
- Case Studies, The Daily Live, Toolkit, and Travel are under `starterPages`. When one has real content, change its `ready: false` to `ready: true` so Google starts indexing it.

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

`next.config.ts` redirects the old Wix pages (`/items`, `/news`, `/services`) to their new homes so existing links and Google results keep working.
