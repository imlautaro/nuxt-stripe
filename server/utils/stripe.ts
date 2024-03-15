import { Stripe } from 'stripe'

const config = useRuntimeConfig()

export const stripe = new Stripe(config.stripeSecretKey)
