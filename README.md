# subminter
unstoppable domains subdomain minter<br />

```
subminter/
├── components/
│   └── WalletConnect.js
├── pages/
│   ├── _app.js
│   ├── index.js
├── utils/
│   ├── mintSubdomain.js
│   ├── abi.js
├── public/
│   └── style.css
├── package.json
└── next.config.js
```

```bash
npx create-next-app@latest subminter
cd subminter
npm install next @rainbow-me/rainbowkit wagmi ethers @web3auth/web3auth
npm run dev
```



----
troubleshoot / update
```bash
node -v
npm -v
npx -v
npm install -g npm
npm cache clean -f
npm fund
npm audit
```
