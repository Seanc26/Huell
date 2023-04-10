const Discord = require('discord.js');
const config = require('../config.json');

module.exports = async (client) => {

  await client.user.setPresence({
    activities: [
      {
        name: `Hank and Marie sex noises`,
        type: Discord.ActivityType.Listening
      }
    ],
    status: 'online'
  });

  console.log(`${client.user.tag} is ready to break bad`);

};