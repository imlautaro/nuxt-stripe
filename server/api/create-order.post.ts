export default defineEventHandler(async event => {
	const runtimeConfig = useRuntimeConfig()
	const body = await readBody(event)

	switch (body.paymentPlatform) {
		case 'stripe':
			try {
				const session = await stripe.checkout.sessions.create({
					success_url: `${runtimeConfig.public.baseURL}/thank-you`,
					line_items: [
						{
							price_data: {
								currency: 'usd',
								product_data: {
									name: 'Nuxt Course',
								},
								unit_amount: 50 * 100,
							},
							quantity: 1,
						},
					],
					mode: 'payment',
				})

				return { url: session.url }
			} catch (error) {
				setResponseStatus(event, 500)
				return { error: 'Something went wrong' }
			}
		default:
			setResponseStatus(event, 400)
			return { error: 'Invalid payment platform' }
	}
})
