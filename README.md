# Front-end Project

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

# Introduction

Welcome to our online shopping platform, the Ecommer T-shirts E-commerce Application! This full-stack project is developed using cutting-edge technologies including React, Redux, and Material UI for the front end, and a robust Strapi back end server integrated with Stripe payment method for secure transactions.

## Technologies Frontend

| **Category**                         | **Libraries and Tools**                                       |
| ------------------------------------ | ------------------------------------------------------------- |
| **Frontend Framework and Libraries** | JavaScript, React, React Router, React Slick, React Hook Form |
| **State Management**                 | Redux Toolkit, React-Redux, Redux-persist                     |
| **User Interface and Styling**       | Material UI, Material Icons                                   |
| **Form Validation**                  | Yup                                                           |

## Technologies Backend

| **Category** | **Libraries and Tools** |
| ------------ | ----------------------- |
| **Strapi**   | JavaScript, Node        |
| **Database** | Postgresql              |
| **Payment**  | Straipe                 |

## Deployment

Live Link : [https://ecommertshirts.netlify.app/](https://ecommertshirts.netlify.app/)

## Folder Structure

```
│   .gitignore
│   README.md
│
├───client
│   │   .env
│   │   .gitignore
│   │   package-lock.json
│   │   package.json
│   │   README.md
│   │
│   │
│   ├───public
│   │       favicon.ico
│   │       index.html
│   │       logo192.png
│   │       logo512.png
│   │       manifest.json
│   │       robots.txt
│   │       _redirects
│   │
│   └───src
│       │   App.js
│       │   index.css
│       │   index.js
│       │   theme.js
│       │
│       ├───components
│       │       Item.jsx
│       │
│       ├───scenes
│       │   ├───checkout
│       │   │       AddressForm.jsx
│       │   │       Checkout.jsx
│       │   │       Confirmation.jsx
│       │   │       Error.jsx
│       │   │       Payment.jsx
│       │   │       Shipping.jsx
│       │   │
│       │   ├───global
│       │   │       CartMenu.jsx
│       │   │       Footer.jsx
│       │   │       Navbar.jsx
│       │   │
│       │   ├───home
│       │   │       Home.jsx
│       │   │       MainCarousel.jsx
│       │   │       ShoppingList.jsx
│       │   │       Subscribe.jsx
│       │   │
│       │   └───itemDetails
│       │           ItemDetails.jsx
│       │
│       └───state
│               index.js
│
└───server
    │   .editorconfig
    │   .env.example
    │   .eslintignore
    │   .eslintrc
    │   .gitignore
    │   .strapi-updater.json
    │   favicon.png
    │   jsconfig.json
    │   package-lock.json
    │   package.json
    │   README.md
    │
    ├───.strapi
    │   └───client
    │           app.js
    │           index.html
    │
    ├───config
    │       admin.js
    │       api.js
    │       database.js
    │       middlewares.js
    │       plugins.js
    │       server.js
    │
    ├───database
    │   └───migrations
    │           .gitkeep
    │
    ├───public
    │   │   robots.txt
    │   │
    │   └───uploads
    │           .gitkeep
    │
    ├───src
    │   │   index.js
    │   │
    │   ├───admin
    │   │       app.example.js
    │   │       webpack.config.example.js
    │   │
    │   ├───api
    │   │   │   .gitkeep
    │   │   │
    │   │   ├───item
    │   │   │   ├───content-types
    │   │   │   │   └───item
    │   │   │   │           schema.json
    │   │   │   │
    │   │   │   ├───controllers
    │   │   │   │       item.js
    │   │   │   │
    │   │   │   ├───routes
    │   │   │   │       item.js
    │   │   │   │
    │   │   │   └───services
    │   │   │           item.js
    │   │   │
    │   │   └───order
    │   │       ├───content-types
    │   │       │   └───order
    │   │       │           schema.json
    │   │       │
    │   │       ├───controllers
    │   │       │       order.js
    │   │       │
    │   │       ├───routes
    │   │       │       order.js
    │   │       │
    │   │       └───services
    │   │               order.js
    │   │
    │   └───extensions
    │           .gitkeep
    │
    └───types
        └───generated
                components.d.ts
                contentTypes.d.ts
```

## Features Done

- [x] User-friendly Interface: Enjoy a sleek and intuitive interface designed with Material UI for a seamless shopping experience.
- [x] Product Catalog: Browse through an extensive collection of trendy t-shirts available for purchase.
- [x] Shopping Cart: Easily add and manage selected items before checkout.
- [x] Secure Payments: Utilizing Stripe's secure payment gateway for safe and convenient transactions.
- [x] Admin Dashboard (Strapi): Manage products, orders, and users efficiently through the Strapi back end.

## Screenshots

![Home](client\assets\readme_assets\home.png)
![Shipping](client\assets\readme_assets\address.png)
![Product](client\assets\readme_assets\product.png)
![cart](client\assets\readme_assets\checkout.png)

## Credits and Acknowledgements

- pIctures: https://www.pexels.com/
