<template>
    <div class="job">
        <div v-if="job.content.thumbnail && job.content.thumbnail.filename" class="job-image">
            <img :src="job.content.thumbnail.filename" alt="">
           <iframe width="560" height="315" :src="job.content.video" title="job.content.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </div>

        <div class="content">
            <h2>{{ job.content.title }}</h2>
            <h3>{{ job.content.type }}</h3>
            <h4>{{ job.content.agency }} 
                | {{ job.content.client }} 
                | {{ job.content.year }}
            </h4>
            <p>{{ job.content.body }}</p>
            <ul class="taglist">
                <li class="tag" v-for="tag in job.tag_list"
                    @click="$emit('filterByTag', tag)">{{ tag }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        job: Object,
    },
}
</script>

<style lang="scss">
.job {
    padding: 2rem;
    border-bottom: 1px solid var(--primary);
    background-color: var(--background);

    display: flex;

    h2 {
        margin-top: 0;
    }

    h3 {
        font-weight: 700;
        font-size: 3em;
        color: rgba(255, 255, 255, 0.3);
        margin-top: -0.75em;
        margin-left: 1em;
    }

    h4 {
        font-weight: 400;
        color: var(--secondary);
    }

    p {
        color: var(--primary);
    }

    img {
        transition: transform 0.3s ease-out;
        width: 100%;
        transform: rotate(-2deg) 
                   scale(0.9);
    }
    .job-image {
        flex: 1;
    }

    .content {
        flex: 2;
        width: 66vw;
    }

    .taglist {
        margin-top: 1em;
        padding: 0;

        .tag {
            font-size: 0.7em;
            display: inline-block;
            cursor: pointer;
            text-decoration: none;
            margin: 0 0.5rem 0.5rem 0;
            padding: 0.5rem;
            background-color: var(--tag-bg);
            color: var(--tag-col);
            border-radius: 0.1rem;
            box-shadow: 3px 3px 2px 0 rgba(0,0,0,0.4);
            &:hover {
                box-shadow: none;
            }
            &::before {
                display: inline-block;
                font-style: normal;
                font-variant: normal;
                text-rendering: auto;
                -webkit-font-smoothing: antialiased;
                font-family: "Font Awesome 5 Free";
                font-weight: 900;
                content: "\f02b";
                margin-right: 0.25rem;
            }
        }
    }
}
</style>
