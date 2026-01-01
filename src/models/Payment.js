module.exports = (sequelize, DataTypes) => { const Payment = sequelize.define('Payment', { txn_id: { type: DataTypes.STRING, primaryKey: true }, amount: DataTypes.DECIMAL(10, 2), status: { type: DataTypes.ENUM('PENDING', 'PROCESSING', 'SUCCESS', 'FAILED'), defaultValue: 'PENDING' }, account_id: DataTypes.STRING, signature: DataTypes.STRING });

return Payment; };