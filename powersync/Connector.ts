// import { UpdateType } from '@powersync/web'

export class Connector {
  constructor() {
    // Setup a connection to your server for uploads
    // this.serverConnectionClient = TODO;
  }

  async fetchCredentials() {
    // Implement fetchCredentials to obtain a JWT from your authentication service.
    // See https://docs.powersync.com/usage/installation/authentication-setup
    // If you're using Supabase or Firebase, you can re-use the JWT from those clients, see
    // - https://docs.powersync.com/usage/installation/authentication-setup/supabase-auth
    // - https://docs.powersync.com/usage/installation/authentication-setup/firebase-auth

    console.log('SALDIRIYORUM')
    console.log(import.meta.env.VITE_POWERSYNC_URL)
    console.log(import.meta.env.VITE_POWERSYNC_APIKEY)

    // Use a development token (see Authentication Setup https://docs.powersync.com/usage/installation/authentication-setup/development-tokens) to get up and running quickly
    return {
      endpoint: import.meta.env.VITE_POWERSYNC_URL,
      token: import.meta.env.VITE_POWERSYNC_APIKEY,
    }
  }

  async uploadData(database: any) {
    // Implement uploadData to send local changes to your backend service.
    // You can omit this method if you only want to sync data from the database to the client
    // See example implementation here: https://docs.powersync.com/client-sdk-references/js-web#id-3.-integrate-with-your-backend
  }
}
