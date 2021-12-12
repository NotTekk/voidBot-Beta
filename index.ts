import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The Bot is ready')
})

client.on('messageCreate', (message) => {
if (message.content === 'ping') {
        message.reply({
            content: 'pong'
        })
    }
})

try {
    client.login(process.env.TOKEN)
} catch (error) {
    console.log('Erro')
}