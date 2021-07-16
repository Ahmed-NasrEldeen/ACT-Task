
### Get Started

- Install NodeJS **LTS** version from <a href="https://nodejs.org/en/?ref=creativetim">NodeJs Official Page</a>
- Download the product on this page
- Unzip the downloaded file to a folder in your computer
- Open Terminal
- Go to your file project (where you’ve unzipped the product)
- (If you are on a linux based terminal) Simply run `npm run install:clean`
- (If not) Run in terminal `npm install`
- (If not) Run in terminal `npm run build:tailwind` (each time you add a new class, a class that does not exist in `src/assets/styles/tailwind.css`, you will need to run this command)
- (If not) Run in terminal `npm start`
- Navigate to https://localhost:4200
- Check more about [Tailwind CSS](https://tailwindcss.com/?ref=creativetim)

### Pages

If you want to get inspiration or just show something directly to your clients,
you can jump start your development with our pre-built example pages. You will be able
to quickly set up the basic structure for your web project.

Here are all the page from the project:
- [Presentation](https://demos.creative-tim.com/notus-angular/?ref=na-github-readme)
- Admin Samples
 
  - [Tables](https://demos.creative-tim.com/notus-angular/admin/tables?ref=na-github-readme)
- Authentication Samples
  - [Login](https://demos.creative-tim.com/notus-angular/auth/login?ref=na-github-readme)
  - [Register](https://demos.creative-tim.com/notus-angular/auth/register?ref=na-github-readme)
- Presentation Samples
  - [Landing](https://demos.creative-tim.com/notus-angular/landing?ref=na-github-readme)
  - [Profile](https://demos.creative-tim.com/notus-angular/profile?ref=na-github-readme)




### Angular Components

We also feature the following 18 dynamic components:
- [Alerts](https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=na-github-readme)
- [Popper for Menus](https://www.creative-tim.com/learning-lab/tailwind/angular/dropdowns/notus?ref=na-github-readme)
- [Menus](https://www.creative-tim.com/learning-lab/tailwind/angular/menus/notus?ref=na-github-readme)
- [Modals](https://www.creative-tim.com/learning-lab/tailwind/angular/modals/notus?ref=na-github-readme)
- [Navbars](https://www.creative-tim.com/learning-lab/tailwind/angular/navbar/notus?ref=na-github-readme)
- [Popper for popover content](https://www.creative-tim.com/learning-lab/tailwind/angular/popovers/notus?ref=na-github-readme)
- [Tabs](https://www.creative-tim.com/learning-lab/tailwind/angular/tabs/notus?ref=na-github-readme)
- [Popper for tooltips content](https://www.creative-tim.com/learning-lab/tailwind/angular/tooltips/notus?ref=na-github-readme)






## Quick start

- <a href="https://www.creative-tim.com/product/notus-angular?ref=na-github-readme" target="_blank">Download from Creative Tim</a>.
- <a href="https://github.com/creativetimofficial/notus-angular" target="_blank">Check it on Github</a>.

## Files and Folder

This is the project structure that you will get upon the download:
```
notus-angular
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── browserslist
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.json
├── karma.conf.js
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components
│   │   │   ├── cards
│   │   │   │   ├── card-bar-chart
│   │   │   │   │   ├── card-bar-chart.component.html
│   │   │   │   │   └── card-bar-chart.component.ts
│   │   │   │   ├── card-line-chart
│   │   │   │   │   ├── card-line-chart.component.html
│   │   │   │   │   └── card-line-chart.component.ts
│   │   │   │   ├── card-page-visits
│   │   │   │   │   ├── card-page-visits.component.html
│   │   │   │   │   └── card-page-visits.component.ts
│   │   │   │   ├── card-profile
│   │   │   │   │   ├── card-profile.component.html
│   │   │   │   │   └── card-profile.component.ts
│   │   │   │   ├── card-settings
│   │   │   │   │   ├── card-settings.component.html
│   │   │   │   │   └── card-settings.component.ts
│   │   │   │   ├── card-social-traffic
│   │   │   │   │   ├── card-social-traffic.component.html
│   │   │   │   │   └── card-social-traffic.component.ts
│   │   │   │   ├── card-stats
│   │   │   │   │   ├── card-stats.component.html
│   │   │   │   │   └── card-stats.component.ts
│   │   │   │   └── card-table
│   │   │   │       ├── card-table.component.html
│   │   │   │       └── card-table.component.ts
│   │   │   ├── dropdowns
│   │   │   │   ├── index-dropdown
│   │   │   │   │   ├── index-dropdown.component.html
│   │   │   │   │   └── index-dropdown.component.ts
│   │   │   │   ├── notification-dropdown
│   │   │   │   │   ├── notification-dropdown.component.html
│   │   │   │   │   └── notification-dropdown.component.ts
│   │   │   │   ├── pages-dropdown
│   │   │   │   │   ├── pages-dropdown.component.html
│   │   │   │   │   └── pages-dropdown.component.ts
│   │   │   │   ├── table-dropdown
│   │   │   │   │   ├── table-dropdown.component.html
│   │   │   │   │   └── table-dropdown.component.ts
│   │   │   │   └── user-dropdown
│   │   │   │       ├── user-dropdown.component.html
│   │   │   │       └── user-dropdown.component.ts
│   │   │   ├── footers
│   │   │   │   ├── footer
│   │   │   │   │   ├── footer.component.html
│   │   │   │   │   └── footer.component.ts
│   │   │   │   ├── footer-admin
│   │   │   │   │   ├── footer-admin.component.html
│   │   │   │   │   └── footer-admin.component.ts
│   │   │   │   └── footer-small
│   │   │   │       ├── footer-small.component.html
│   │   │   │       └── footer-small.component.ts
│   │   │   ├── headers
│   │   │   │   └── header-stats
│   │   │   │       ├── header-stats.component.html
│   │   │   │       └── header-stats.component.ts
│   │   │   ├── maps
│   │   │   │   └── map-example
│   │   │   │       ├── map-example.component.html
│   │   │   │       └── map-example.component.ts
│   │   │   ├── navbars
│   │   │   │   ├── admin-navbar
│   │   │   │   │   ├── admin-navbar.component.html
│   │   │   │   │   └── admin-navbar.component.ts
│   │   │   │   ├── auth-navbar
│   │   │   │   │   ├── auth-navbar.component.html
│   │   │   │   │   └── auth-navbar.component.ts
│   │   │   │   └── index-navbar
│   │   │   │       ├── index-navbar.component.html
│   │   │   │       └── index-navbar.component.ts
│   │   │   └── sidebar
│   │   │       ├── sidebar.component.html
│   │   │       └── sidebar.component.ts
│   │   ├── layouts
│   │   │   ├── admin
│   │   │   │   ├── admin.component.html
│   │   │   │   └── admin.component.ts
│   │   │   └── auth
│   │   │       ├── auth.component.html
│   │   │       └── auth.component.ts
│   │   └── views
│   │       ├── admin
│   │       │   ├── dashboard
│   │       │   │   ├── dashboard.component.html
│   │       │   │   └── dashboard.component.ts
│   │       │   ├── maps
│   │       │   │   ├── maps.component.html
│   │       │   │   └── maps.component.ts
│   │       │   ├── settings
│   │       │   │   ├── settings.component.html
│   │       │   │   └── settings.component.ts
│   │       │   └── tables
│   │       │       ├── tables.component.html
│   │       │       └── tables.component.ts
│   │       ├── auth
│   │       │   ├── login
│   │       │   │   ├── login.component.html
│   │       │   │   └── login.component.ts
│   │       │   └── register
│   │       │       ├── register.component.html
│   │       │       └── register.component.ts
│   │       ├── index
│   │       │   ├── index.component.html
│   │       │   └── index.component.ts
│   │       ├── landing
│   │       │   ├── landing.component.html
│   │       │   └── landing.component.ts
│   │       └── profile
│   │           ├── profile.component.html
│   │           └── profile.component.ts
│   ├── assets
│   │   ├── img
│   │   │   ├── github.svg
│   │   │   └── google.svg
│   │   └── styles
│   │       ├── index.css
│   │       └── tailwind.css
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

| Chrome | Firefox | Edge | Safari | Opera |
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64"> |

## To deploy 
1-Steps to build application using command :ng build –prod
2-Folder named “dist” will be created in your working directory which contains a folder with your application name and build files i.e minified js

That’s it, your code is ready to be deployed on a muleserver.

How to deploy Angular build on the Mule server.
Create New Mule applicationin Anypoint Studio: File->New->Mule Project
Open folder : ../src/main/resources

Copy folder created under ‘dist’
Create a flow to load your landing page of the application.
usualy it is index.html
Load it using “Load Static Resource” connector operation of “HTTP” connector

That’s all you need, just two simple flows and your application will be up, deploy project and open it on browser








