# 🏠 Rent Payment DApp

A full-stack decentralized application that enables tenants to pay rent directly to landlords using the Ethereum blockchain. This DApp is built with React, TailwindCSS, and integrates smart contracts, email notifications, PDF invoices, and a rich analytics dashboard.

---

## 📘 Overview

The Rent Payment DApp is a blockchain-based platform that provides a secure, transparent, and automated way for tenants to pay rent and for landlords to track payments. It includes wallet connection, smart contract interaction, rent invoice generation, email notifications, SIWE authentication, and a payment dashboard.

---

## 🚀 Features

- 🧩 **WalletConnect Integration** – MetaMask support using `ethers.js`
- 🏠 **Rent Payment Form** – Submit rent details (address, amount, month)
- 📄 **PDF Invoice Generation** – Automatic rent invoices via `jsPDF`
- 📧 **Email Notification** – Rent confirmation via EmailJS
- 📊 **Dashboard with Charts** – Track rent history with `Recharts`
- 🪪 **SIWE Authentication** – Sign-In With Ethereum using `siwe` + `wagmi`
- 🎨 **Modern UI/UX** – TailwindCSS + Lucide icons + smooth interactions




---

## 🛠️ Installation

Follow the steps below to run this project locally:

### 1. Clone the repository
```bash
git clone https://github.com/shubh-1909/rent-payment-dapp.git
cd rent-payment-dapp Install 
```
## 2. Install dependencies
```bash
npm install
```
## 3. Run the development server
```bash
npm run dev
```
Make sure your MetaMask wallet is unlocked and connected to the correct testnet (e.g., Sepolia).


---


##  Usage Instructions
# Steps:
🔗 Connect Wallet using the MetaMask popup

🏠 Fill Rent Form – enter tenant address, amount, month

💸 Click Pay Rent – rent is sent via smart contract

🧾 Download Invoice – auto-generated PDF using jsPDF

📧 Receive Email – confirmation sent via EmailJS

📊 Analyze Dashboard – view rent analytics with charts

🪪 SIWE Login – Sign-In With Ethereum securely

---

## 📚 Tech Stack

| Layer / Purpose        | Technologies Used                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Frontend Framework** | [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [TailwindCSS](https://tailwindcss.com/)              |
| **Styling & UI**       | TailwindCSS, [Lucide Icons](https://lucide.dev/), [Shadcn/UI](https://ui.shadcn.com/)                            |
| **State/Web3**         | [ethers.js](https://docs.ethers.org/), [wagmi](https://wagmi.sh/), [viem](https://viem.sh/)                      |
| **Smart Contracts**    | Solidity (deployed separately, assumed deployed on testnet like Sepolia)                                         |
| **Authentication**     | [SIWE](https://login.xyz/) (Sign-In With Ethereum)                                                               |
| **Email Service**      | [EmailJS](https://www.emailjs.com/)                                                                              |
| **PDF Generation**     | [jsPDF](https://github.com/parallax/jsPDF), [jspdf-autotable](https://github.com/simonbengtsson/jsPDF-AutoTable) |
| **Charts & Dashboard** | [Recharts](https://recharts.org/en-US)                                                                           |
| **Notifications**      | [Sonner](https://sonner.emilkowal.dev/)                                                                          |
| **Icons**              | [Lucide-react](https://www.npmjs.com/package/lucide-react)                                                       |
| **Environment**        | Node.js, npm, browser (MetaMask)                                                                                 |
| **Version Control**    | Git, GitHub                                                                                                      |

----

## 👨‍💻 Author
👤 Name: Shubhkarandeep Singh Judge
 📧 Email: ssingh_msc2024@thapar.edu
 🔗 GitHub: shubh-1909

 🧑‍🤝‍🧑 Submission Type: Solo

 🏷️ Team Name: DAppRentals
 
 ---

## 📜 License
Licensed under the MIT License.

sql
Copy code
MIT License

Copyright (c) 2025 Shubhkarandeep

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
