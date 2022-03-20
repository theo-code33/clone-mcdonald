<template>
    <div class="container-modal">
        <button class="close-modal">
            <svg role="img" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18" xml:space="preserve" class="">
                <path d="M17.6,1.5L17,0.9c-0.4-0.4-1-0.4-1.3,0L9,7.5L1.9,0.4c-0.1-0.1-0.2-0.1-0.3,0L0.9,1c-0.4,0.4-0.4,1,0,1.3L7.5,9l-7.1,7.1
	            c-0.1,0.1-0.1,0.2,0,0.3L1,17c0.4,0.4,1,0.4,1.3,0L9,10.4l7.1,7.1c0.1,0.1,0.2,0.1,0.3,0l0.6-0.6c0.4-0.4,0.4-1,0-1.3L10.5,9
	            l7.1-7.1C17.7,1.8,17.7,1.6,17.6,1.5z" fill="currentColor"></path>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ModalBurger',
    props: {
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        img: {
            type: Object,
        }
    }
}
</script>

<style lang="scss">
.container-modal{
    width: 580px;
}
</style>