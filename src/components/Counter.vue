<template>
<div class="container">
    <div class="textSyle">
        <CounterParent />
    </div>
</div>

</template>

<script>
import CounterParent from './CounterParent';

export default {
    name: 'Counter',
    components: {
    CounterParent
    }
}

</script>

<style>
.textSyle{
    font-size: 72;
    font-family:sans-serif;
    color:#333;
    font-weight: bold;
}
</style>


