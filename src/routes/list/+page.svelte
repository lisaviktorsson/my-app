<script>
	let list = [
		{ id: 1, value: "red" },
		{ id: 2, value: "green" },
		{ id: 3, value: "blue" },
		{ id: 4, value: "cyan" },
	];

	let draggingItem = null;
	let draggingItemIndex = null;

	function handleDragStart(event, item, index) {
		draggingItem = item;
		draggingItemIndex = index;
		event.dataTransfer.effectAllowed = "move";
	}

	function handleDragOver(event, index) {
		event.preventDefault(); // ← essential
		if (draggingItemIndex === index) return;

		const updatedList = [...list];
		const [movedItem] = updatedList.splice(draggingItemIndex, 1);
		updatedList.splice(index, 0, movedItem);

		list = updatedList;
		draggingItemIndex = index;
	}

	function handleDragEnd() {
		draggingItem = null;
		draggingItemIndex = null;
	}
</script>

<div class="container">
	{#each list as item, index (item.id)}
		<div
			class="item {draggingItem?.id === item.id ? 'dragging' : ''}"
			draggable="true"
			on:dragstart={(e) => handleDragStart(e, item, index)}
			on:dragover={(e) => handleDragOver(e, index)}
			on:dragend={handleDragEnd}
			style="background: {item.value};"
		>
			{item.value}
		</div>
	{/each}
</div>

<style>
	.container {
		background: #fff6c2;
		padding: 10px;
		max-width: 320px;
		margin: 2em auto;
	}

	.item {
		width: 100%;
		background: #eee;
		padding: 12px;
		margin-bottom: 8px;
		cursor: grab;
		border-radius: 4px;
		transition: transform 0.2s ease;
	}

	.item.dragging {
		opacity: 0.5;
	}
</style>
