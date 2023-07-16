<template>
    <div class="container mx-auto p-6">
        <div class="bg-white">
            <div v-if="project">
                <div class="px-5 lg:px-10">
                    <h1 class="text-2xl font-bold py-8 text-slate-500"><span class="italic">Title</span> :
                        {{ project.attributes.title }}</h1>

                    <h2 class="text-lg py-2"><span class="italic font-bold">Summery</span> :
                        {{ project.attributes.summery }}</h2>

                    <a :href="`${project.attributes.link}`" target="_blank"><span
                            class="italic text-lg font-bold">link</span> : <span
                            class="decoration-pink-500 underline">Checkout project</span></a>

                    <h2 class="text-lg py-2"><span class="italic font-bold">Description</span> :
                        {{ project.attributes.description }}</h2>

                    <h1 class="text-xl font-bold pt-4">Project screenshots: </h1>

                </div>

                <div class="grid grid-cols-1 gap-4 p-10 lg:grid-cols-3">
                    <div>
                        <p hidden>
                            {{ imgUrl = `${apiUrl}${project.attributes.sample.data[0].attributes.url}` }}
                        </p>
                        <img :src=imgUrl alt="tool logo" class="">
                    </div>

                    <div>
                        <p hidden>
                            {{ imgUrl = `${apiUrl}${project.attributes.sample.data[1].attributes.url}` }}
                        </p>
                        <img :src=imgUrl alt="tool logo" class="">
                    </div>

                    <div>
                        <p hidden>
                            {{ imgUrl = `${apiUrl}${project.attributes.sample.data[2].attributes.url}` }}
                        </p>
                        <img :src=imgUrl alt="tool logo" class="">
                    </div>
                </div>


            </div>
            <div v-else>
                <p>No projects</p>
            </div>
        </div>
    </div>
</template>

<script>
    const apiUrl = "http://localhost:1337"
    export default {
        props: ['id'],
        data() {
            return {
                project: null,
                apiUrl: apiUrl
            };
        },
        methods: {
            async fetchProjectData() {
                try {
                    const res = await fetch(`${apiUrl}/api/projects/${this.id}/?populate=logo&populate=sample`);
                    let x = await res.json();
                    this.project = x.data;
                } catch (error) {
                    console.log(error);
                }
            }
        },
        mounted() {
            this.fetchProjectData()
        }
    };
</script>