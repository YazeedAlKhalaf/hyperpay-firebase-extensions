export default {
  hyperpayAuthorization: process.env.HYPERPAY_AUTHORIZATION_TOKEN,
  hyperpayEntityId: process.env.HYPERPAY_ENTITY_ID,
  minPrepareCheckoutInstances:
    Number(process.env.PREPARE_CHECKOUT_MIN_INSTANCES) ?? 0,
};
