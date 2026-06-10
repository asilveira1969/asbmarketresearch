# ASB Market Research

Professional multilingual website scaffold for `ASB Market Research`, built with Next.js App Router, TypeScript, and Tailwind CSS.

Live site: https://www.asbmarketresearch.com

## Local development

```bash
npm install
npm run dev
```

Localized routes:

- `http://localhost:3000/es`
- `http://localhost:3000/en`
- `http://localhost:3000/pt`

## Main project areas

- `app/[locale]`: localized routes and pages
- `components`: reusable UI, layout, cards, forms, and SEO helpers
- `content`: multilingual homepage, services, reports, and insights content
- `data`: company and founder profile data
- `config`: locales, navigation, forms, and site defaults
- `public/media`: photos and visual assets
- `public/pdfs`: downloadable reports, brochures, and credentials

## Homepage editing

Edit homepage text in [content/site.ts](/f:/WORK/ASB%20Market%20Research/content/site.ts).

## Founder profile editing

Edit founder data in [data/company.ts](/f:/WORK/ASB%20Market%20Research/data/company.ts).

That file controls:

- founder name
- role
- biography
- profile image path
- resume PDF path

## PDFs and downloadable files

Place real PDFs in:

- [public/pdfs/company](/f:/WORK/ASB%20Market%20Research/public/pdfs/company)
- [public/pdfs/services](/f:/WORK/ASB%20Market%20Research/public/pdfs/services)
- [public/pdfs/reports](/f:/WORK/ASB%20Market%20Research/public/pdfs/reports)
- [public/pdfs/insights](/f:/WORK/ASB%20Market%20Research/public/pdfs/insights)

Reference guide:

- [public/pdfs/README.md](/f:/WORK/ASB%20Market%20Research/public/pdfs/README.md)

## Media assets

Place the real founder photo and future media files in:

- [public/media](/f:/WORK/ASB%20Market%20Research/public/media)

Reference guide:

- [public/media/README.md](/f:/WORK/ASB%20Market%20Research/public/media/README.md)

## Environment variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `FORM_WEBHOOK_URL`
- `FORM_NOTIFICATION_EMAIL`

## Form delivery

Form submissions are forwarded through `POST /api/forms` to the webhook in `FORM_WEBHOOK_URL`.

For newsletter and contact delivery, the repo includes a Google Apps Script sample in [integrations/google-apps-script-newsletter.gs](/f:/WORK/ASB%20Market%20Research/integrations/google-apps-script-newsletter.gs). Set `FORM_NOTIFICATION_EMAIL` to the inbox that should receive the notification, deploy the script as a web app, and paste the deployment URL into `FORM_WEBHOOK_URL`.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```
