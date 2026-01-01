DC Bank Payment Protocol Integration
Overview

This server implementation handles the secure "Check-Pay-Status" workflow required for DC Bank's Provider Payment Protocol. It is designed for high-concurrency iOS client integration.

Key Features

MD5 Security: All requests are signed and verified using the Bank's MD5 protocol requirements.

Transactional Integrity: Uses Sequelize transactions to ensure no payment status is lost during network failures.

Provider Status Polling: Specialized endpoint to query bank-side status of a pending transaction.

Setup

npm install

Configure .env with Bank Secret and Database URL.

npx sequelize-cli db:migrate

npm start