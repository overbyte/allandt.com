<template>
<div class="about">
    <h2>{{ data.title }}</h2>
    <p v-html="data.body"></p>
    <ul class="skills">
        <li class="skill" v-for="skill in data.skills" :key="skill._uid">{{ skill.label }}</li>
    </ul>
</div>
</template>

<script>
export default {
    props: {
        data: Object,
    },
}
</script>

<style lang="scss">
.about {
    padding: 2rem;
    background-color: var(--background);

    .skills {
        display: flex;
        flex-wrap: wrap;
        font-weight: 200;
        font-size: 2em;
        width: 100%;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 0;

        .skill {
            display: block;
            width: 33%;
            padding: 2rem;
            text-align: center;

            @media screen and (max-width: 560px) {
                width: 100%;
                padding: 2rem 0;
            }
        }
    }
}
</style>
