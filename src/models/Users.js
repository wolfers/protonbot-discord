module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    twitchId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    discordId: {
      type: DataTypes.STRING,
      allownull: true,
    },
    protonBalance: {
      type: DataTypes.INTEGER,
      defaultValue: 200,
      allowNull: false,
    },
    viewTime: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    twitchChatTotal: {
      type: DataTypes.INTEGER,
      defualtValue: 0,
      allowNull: false,
    },
    discordChatTotal: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  }, {
    timestamps: true,
  });
};