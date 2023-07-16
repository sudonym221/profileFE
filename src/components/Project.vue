<script>
    const apiUrl = "http://localhost:1337"
    export default {
        props: {
            project: Object
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
            <div class="absolute flex h-12 w-10 items-center justify-center text-white">
                <p hidden>{{ imgUrl = `${apiUrl}${project.attributes.logo.data.attributes.url}` }}</p>
                <img :src=imgUrl alt="project logo" class="rounded-full w-10 h-10">
            </div>
            <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                <router-link :to="{name: 'project', params: {id: project.id}}">
                    <p>{{project.attributes.title}}</p>
                </router-link>
            </p>
        </dt>
        <dd class="mt-2 ml-16 text-base text-gray-500">{{ project.attributes.summery }}</dd>
    </div>
</template>