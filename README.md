![SupaNext SaaS](public/images/supanuxt_logo_200.png)

# SupaNext SaaS

## Demo Sites

None Yet

## Sister Project using Vue.js + Nuxt 3
Sick of React/Next, why not try Vue.js/Nuxt3 sister project [SupaNuxt SaaS](https://github.com/JavascriptMick/supanuxt-saas)

## Community

Discord [here](https://discord.gg/3hWPDTA4kD)

## Tech Stack

- Next 13
- Supabase (auth including OAuth + Postgresql instance)
- Prisma (schema management + Strongly typed client)
- TRPC (server/client communication with Strong types, SSR compatible)
- Zustand (state Store)
- Stripe (payments including webhook integration)
- Tailwind + daisyUI (styling and components)
- OpenAI (text completions with AI)

## Features

### User Management

- [ ] Social Signon (e.g. google) via Supabase, Full list of available [providers](https://supabase.com/docs/guides/auth#providers)
- [x] Email/Password Signon via Supabase
- [ ] Password recovery
- [ ] User roles and permissions (admin, regular user, etc. roles defined in the [Prisma Schema](/prisma/schema.prisma))
- [ ] User Email captured on initial login
- [ ] Initial plan and plan period controled via config to allow either a trial plan or a 'No Plan' for initial users
- [ ] Edit Account Name from Account Page

### Schema and DB Management

- [ ] Prisma based Schema Management
- [ ] Supabase integration for DB
- [ ] DB Seed Script to setup plan information including Plan and Stripe Product information

### Config Management and Env integration

- [ ] [Config](/nuxt.config.ts) for Stripe Keys
- [ ] [Env](/.env_example) keys for Supabase and Stripe
- [ ] Config Switches for free trial - If you want a 'free trial period' set initialPlanName to an appropriate plan name in the DB and initialPlanActiveMonths to a positive value. If you don't want a free trial, set initialPlanName to an appropriate 'No Plan' plan in the DB and set the initialPlanActiveMonths to -1.

### Multi-Modal State Management

- [ ] SPA type pages (e.g. [Dashboard](/app/dashboard/page.tsx)) - postgresql(supabase) -> Prisma -> Service Layer for Business Logic -> TRPC -> Zustand -> UI
- [ ] SSR type pages (e.g. [Note](/app/notes/[note_id]/page.tsx)) - postgresql(supabase) -> Prisma -> Service Layer for Business Logic -> TRPC -> UI

### Multi User Accounts (Teams)

- [ ] Allow users to upgrade their accounts fron individual accounts to multi-user accounts (Teams).
- [ ] Allow users to switch between Teams and view/edit data from the selected Team.
- [ ] All features, billing and limits is controlled at the Account (Team) level (not the user level)
- [ ] Gen/Regen an invite link to allow users to join a team
- [ ] Team administrators and owners can accept pending invites
- [ ] Team administrators and owners can administer the permissions (roles) of other team members on the Accounts page
- [ ] Team owners can remove users from team

### Plans and Pricing

- [ ] Manage multiple Plans each with specific Feature flags and Plan limits
- [ ] Plan features copied to Accounts upon successfull subscription
- [ ] Loose coupling between Plan and Account Features to allow ad-hoc account tweaks without creating custom plans
- [ ] Pricing page appropriately reacts to users with/without account and current plan.
- [ ] User Access level available at the router layer as procedures allowing restriction of access based on user access
- [ ] Account features available at the router layer as utility procedures allowing restriction of access based on account features

### Stripe (Payments) Integration

- [ ] Each plan is configured with Stripe Product ID so that multiple Stripe Prices can be created for each plan but subscriptions (via Webhook) will still activate the correct plan.
- [ ] Support basic (customer.subscription) flows for Subscription payments via Webhook
- [ ] Support additional Stripe flows for things like failed payments, imminent subscription expiry (send email?) etc.....

### Support

- [ ] Help desk support (ticketing system, live chat, etc.)
- [ ] Knowledge base with FAQs and tutorials

### Look and Feel, Design System and Customisation

- [ ] Default UI isn't too crap
- [ ] Integrated Design system including theming (Tailwind + daisyUI)
- [x] Toasts for things like reset email sent
- [ ] Modals, just because people like modals

### GDPR

- [ ] Cookie Consent

### Demo Software (Notes)

- [ ] Simple Text based Notes functionality
- [ ] Read only Notes Dashboard
- [ ] SSR Rendered (SEO Optimised) [Note](/app/notes/[note_id]/page.tsx) Display
- [ ] Max Notes limit property on Plan
- [ ] Max Notes enforced
- [ ] Add, Delete notes on Dashboard
- [ ] AI Note generation with OpenAI
- [ ] Per Account, Per Month Useage Limits on AI Access

### Testing

- [ ] Manual test scenario for auth and sub workflows passing
- [ ] Unit tests for server functions
- [ ] Integration tests for auth and sub workflows

## Special Mention

This https://blog.checklyhq.com/building-a-multi-tenant-saas-data-model/ Article by https://twitter.com/tim_nolet was my inspiration for the user/account/subscription schema. Tim was also generous with his time and answered some of my stoopid questions on the https://www.reddit.com/r/SaaS/ Subreddit.

## Externals Setup

Things you gotta do that aren't code (and are therefore not very interesting)

### Env

Copy the [.env_example](/.env_example) file to create [.env](/.env)
Note) This file is for development convenience, is .gitignored by default and should _not_ be added to source control

### Supabase

This solution uses Supabase for Auth and to provide a DB. In addition to Magic Link and email/password login via Supabase, it also supports Google OAuth via Supabase.

1. Go to [Supabase](https://supabase.com/) and 'Start your Project'
2. Setup your org and project (Free tier is fine to start)
3. Update the project's email template (Supabase -> Authentication -> Email Templates)
   Note that the default Supabase email templates are very generic and for some reason this can lead to your emails being sent to spam folders. e.g. I to get my password reset emails to go to inbox, I needed to change the subject to "Password Reset for ..." and also the email body text.
4. Choose an OAuth provider. I have chosen Google using these [Instructions](https://supabase.com/docs/guides/auth/social-login/auth-google) for the purposes of demonstration but they all should work.
5. Go to Project Settings -> API and copy Project URL and Project API Key to SUPABASE_URL and SUPABASE_KEY settings respectively in your [.env](/.env) file
6. Go to Project Settings -> Database -> Connection String -> URI and copy the uri value into the DATABASE_URL setting in your [.env](/.env) file, remembering to replace `[YOUR-PASSWORD]` with the password you provided when you setup the project.

### Stripe

This solution uses Stripe for Subscription payments.

1. Go to [Stripe](https://stripe.com) and setup your business (Free Tier is fine to start)
2. Create 2 products ('Team Plan' and 'Individual Plan') each with a single price and note the Product ID's and Price ID's
3. Edit the [seed.ts](/prisma/seed.ts) file and replace the stripe_product_id values with the Product ID's from 2)

```typescript
    create: {
      name: 'Team Plan',
      .....
      stripe_product_id: '[Your Product ID from Stripe]'
    },
```

4. Edit the Pricing [pricing](/app/pricing/page.tsx) page and put your Price ID's from 2) into the appropriate hidden `price_id` form fields...

```html
<input type="hidden" name="price_id" value="[Your Price ID from Stripe]" />
```

5. go to the [API Keys](https://dashboard.stripe.com/test/apikeys) page find 'Secret Key' -> reveal test key. click to copy and then replace the STRIPE_SECRET_KEY value in your .env

6. install the stripe cli used to forward webhooks (macos)

```
brew install stripe/stripe-cli/stripe
```

7. log the CLI into your stripe account.

```
stripe login -i
```

provide the api key found in step 5) above

### Setup Database (Prisma)

This solution uses Prisma to both manage changes and connect to the Postgresql database provided by Supabase. Your Supabase DB will be empty by default so you need to hydrate the schema and re-generate the local prisma client.

```
npx prisma db push
npx prisma generate
npm install @prisma/client --save-dev
npx prisma db seed
```

...you should now have a a Plan table with 3 rows and a bunch of empty tables in your Supabase DB

## Developement Setup

### Dependencies

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

### Webhook Forwarding

This makes sure that you can debug subscription workflows locally

```bash
stripe listen --forward-to localhost:3000/webhook
```

If you haven't already done so look at the stripe cli output for this text

```
Your webhook signing secret is whsec_xxxxxxxxxxxxx (^C to quit)
```

take ths signing secret and update the STRIPE_ENDPOINT_SECRET value in .env

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Netlify deployments and environment variables

Netlify is a bit rubbish at updating environment variables so you may need to manually re-deploy your site in certain situations e.g.

- If on initial load of the site you get a message along the lines of 'SUPABASE_URL is required'.. but you have set that environment variable correctly... try a manual deployment.
- Changing the default domain e.g. setting to a custom domain - If you notice you are redirected to the wrong version of the site after signup to a stripe subscription, this means the URL env variable has not been reset by Netlify. a manual deployment may fix it.

To manually redeploy to to your Netlify dashboard and navigate to Deploys -> Trigger Deploy -> Deploy site

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3002](http://localhost:3002) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


