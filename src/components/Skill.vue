<script>
    const apiUrl = "http://localhost:1337"
    export default {
        props: {
            skill: Object
        },
        data() {
            return {
                apiUrl: apiUrl
            };
        }
    }
</script>

<template>
    <div class="relative">
        <dt>
            <div class="px-5 lg:px-14">
                <div class="absolute flex items-center justify-center text-white px-2 lg:px-5">
                    <p hidden>{{ imgUrl = `${apiUrl}${skill.attributes.icon.data.attributes.url}` }}</p>
                    <img :src=imgUrl alt="skill logo" class="w-12 h-12">
                </div>
                <div class="ml-12 px-4 lg:px-10">
                    <h1 class="ml-2 text-xl font-bold antialiased lg:text-2xl">{{ skill.attributes.name }}</h1>
                    <p hidden>{{ skillDesc = skill.attributes.description.split(',') }}</p>
                    <ul v-for="desc in skillDesc" class="px-2 text-lg lg:text-lg">
                        <li class="py-2 subpixel-antialiased">{{desc}}.</li>
                    </ul>
                </div>
            </div>
        </dt>
    </div>
</template>