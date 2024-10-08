This is a small project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). I'm using MFE framework to clone a [camptraveller.com](https://camptraveler.com/) web, here is [initial src](https://gist.github.com/adrianhajdin/8576813dae0085beaac8291e8a63c32d)!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Context

We have seven next.js applications (click in port to navigate to that repo)

- `This repo` Host - [port 3001](https://github.com/linlapkien/MFE_Next_MicroGridLayout_Host)
- `Hero component` - [port 3002](https://github.com/linlapkien/MFE_Next_MicroGridLayout_Hero_Component)
- `Camp component` - [port 3003](https://github.com/linlapkien/MFE_Next_MicroGridLayout_Camp_Component)
- `Guide component` - [port 3004](https://github.com/linlapkien/MFE_Next_MicroGridLayout_Guide_Component)
- `Feature component` - [port 3005](https://github.com/linlapkien/MFE_Next_MicroGridLayout_Feature_Component)
- `GetApp component` - [port 3006](https://github.com/linlapkien/MFE_Next_MicroGridLayout_GetApp_Component)
- `Hero 2 component` - [port 3007](https://github.com/linlapkien/MFE_Next_MicroGridLayout_Hero2_Component)

The applications utilize omnidirectional routing and pages or components are able to be federated between applications

I am using hooks here to ensure multiple copies of react are not loaded into scope on server or client.

This host app will remote to other components to get the element inside this app, then use it like a react-component.

Next.js has all its internal modules pre-shared via [@module-federation/nextjs-mf](https://github.com/module-federation/module-federation-examples/tree/master/nextjs-ssr) you do need to share react via the plugin.

## Result 

We have to run all the component repo, finally your host will appear like this: 

<img width="1932" alt="Screenshot 2024-08-27 at 14 00 00" src="https://github.com/user-attachments/assets/d235605d-c4bf-49b5-aa58-ddd0b13b951b">

We can customize in settings.js the position of the component and the dimensions of the component.

### Read more

[1. Micro Frontend architecture | Nextjs](https://www.youtube.com/watch?v=wMdt5W8sD54&t=168s)

[2. npm Module Federation For Next.js](https://www.npmjs.com/package/@module-federation/nextjs-mf)

[3. Medium Building a Micro Frontend Application with Next.js 14.2 and Tailwind CSS](https://blog.stackademic.com/building-a-micro-frontend-application-with-next-js-14-2-and-tailwind-css-part-i-82d13cc207da) <-- Most useful for beginners, this blog has 4 parts. Full tutorials !
