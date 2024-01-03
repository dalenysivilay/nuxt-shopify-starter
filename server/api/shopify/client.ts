import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const runtimeConfig = useRuntimeConfig();
const storeDomain = runtimeConfig.storeDomain;
const apiVersion = runtimeConfig.apiVersion;
const privateAccessToken = runtimeConfig.privateAccessToken;

export const shopifyClient = createStorefrontApiClient({
	storeDomain,
	apiVersion,
	privateAccessToken,
});

export default shopifyClient;
