export default defineNuxtConfig({
	devtools: { enabled: true },
	runtimeConfig: {
		storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
		apiVersion: process.env.SHOPIFY_API_VERSION,
		privateAccessToken: process.env.SHOPIFY_PRIVATE_ACCESS_TOKEN,
	},
	modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@pinia/nuxt']
});
