<template>
    <div class="container">
        <table class="table table-bordered">
            <tbody>
                <tr v-for="list in lists" :key="list.id">
                <td>{{ list.id }}</td>
                <td>{{ list.title }}</td>
                <td>{{ list.description }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ListsTest',
}
</script>