<template>
    <div>
        <p>{{ title }}</p>
        <p>{{ copyright }}</p>
        <button @click="clickMethod()">Click</button>
    </div>
</template>

<script>

// vue local variable 
import mixins from '../assets/js/myMixin'

export default {
    name: 'MixinTest',
    mixins: [mixins]
}
</script>