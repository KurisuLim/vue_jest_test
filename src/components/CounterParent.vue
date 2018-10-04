<template>
<div class="container">
    <div class="display">
        <span>Computed Count: <code>{{addCount}}</code></span><br/>
        <span>counter: <code>{{counter}}</code></span><br/><hr>
        <button class="btn" @click="counter++">+</button>
        <button class="btn" @click="counter--">-</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'CounterParent',
    data: () => ({
        counter:0,
        computedCounter: 10
    }),
    computed:{
        addCount: function(){
            return this.counter + this.computedCounter
        }
    }

}
</script>

<style>
.display{
    padding: 50px;
    background-color: #FFC53A;
    width: 350px;
    height: 200px;
    border-radius: 10px;
    text-align: center;
}
.btn{
    font-size: 1em;
    width: 30%;
    height: 30%;
    font-family: sans-serif;
    color: #333;
    font-weight: bold;
    line-height: 3px;
    margin-left: 5px;
}
</style>

