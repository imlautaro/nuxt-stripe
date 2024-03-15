<script setup lang="ts">
useHead({
	title: 'Nuxt 3 Stripe Example',
})

const pending = ref(false)

const createOrder = async () => {
	pending.value = true

	const response = await $fetch<{ url: string }>('/api/create-order', {
		method: 'POST',
		body: {
			paymentPlatform: 'stripe',
		},
	})

	pending.value = false

	if (response.url) {
		window.location.href = response.url
	} else {
		alert('Something went wrong')
	}
}
</script>

<template>
	<div class="container">
		<button @click="createOrder" class="btn">
			{{ pending ? 'Loading...' : 'Pay with Stripe' }}
		</button>
	</div>
</template>
