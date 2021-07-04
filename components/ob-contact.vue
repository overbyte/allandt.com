<template>
<div class="contact">
    <h2>Contact me</h2>
    <p>Email me at <a :href="`mailto:${data.email}`">{{ data.email }}</a> or grab my CV from <a :href="data.cirriculumvitae.filename">here</a></p>
    <ul>
        <li class="social" v-for="social in data.social">
            <a :href="social.url" target="_blank">
                <i class="fab" :class="`fa-${social.label.toLowerCase()}`" ></i>
            </a>
        </li>
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
.contact {
    padding: 2rem;
    background-color: var(--background);
    ul {
        text-align: center;
        .social {
            display: inline-block;
            margin: 2rem;
            font-size: 3em;
            a {
                padding: 1rem;
            }
        }
    }
}

</style>
