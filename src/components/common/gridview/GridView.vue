<template>
	<div class="grid-view">
		<slot></slot>
	</div>
</template>


<script>
	export default {
		name:''
	}
</script>

<style scoped>
	.grid-view{
		display: flex;
		flex-wrap: wrap;
	}
</style>
