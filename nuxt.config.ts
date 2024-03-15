// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	runtimeConfig: {
		stripeSecretKey: '',
		stripeWebhookSecret: '',
		public: {
			baseURL: 'http://localhost:3000',
			stripePublicKey: '',
		},
	},
})
