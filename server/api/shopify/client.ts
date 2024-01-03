import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const config = useRuntimeConfig();
const storeDomain = config.storeDomain;
const apiVersion =  config.apiVersion;
const privateAccessToken = config.privateAccessToken;

export const shopifyClient = createStorefrontApiClient({
	storeDomain,
	apiVersion,
	privateAccessToken,
});

export default shopifyClient;
