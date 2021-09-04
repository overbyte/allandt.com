<template>
    <div class="header" :class="{ sticky: isSticky }">
        <a href="#home" class="logo">
            Allandt Bik-Elliott
        </a>

        <nav class="mobile-hidden">
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSticky: false,
        };
    },
    mounted () {
        window.onscroll = e => {
            this.isSticky = (window.pageYOffset > 1);
        };
    },
}
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    position: fixed;
    width: 100%;
    background-color: rgba(128, 128, 128, 0);
    font-weight: 600;
    transition: padding 0.5s,
                background-color 0.5s;
    z-index: 1;

    &.sticky {
        padding: 0.1em 1em;
        background-color: rgba(128, 128, 128, 0.4);
    }

    .logo {
        padding: 1em;
    }

    nav {
        a {
            display: inline-block;
            padding: 1em;
        }
    }
}
</style>
