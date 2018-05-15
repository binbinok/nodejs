<template>
    <h1>hello <span>{{name}}</span></h1>
</template>

<script>
export default {
    data() {
        return {
            name: 'Vue'
        }
    }
}
</script>

<style>
h1{text-align: center;color: #333}
h1 span{color: blueviolet}
</style>
