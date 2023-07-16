<template>
    <div class="container mx-auto p-3 lg:p-5">
        <nav class="bg-gray-800 sticky top-0">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <img class="block h-10 w-auto lg:hidden"
                                src="../assets/images/reindeer.png"
                                alt="Your Company">
                            <img class="hidden h-10 w-auto lg:block"
                                src="../assets/images/reindeer.png"
                                alt="Your Company">
                        </div>

                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <a href="#home" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    aria-current="page">Home</a>

                                <a href="#edu"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Education</a>

                                <a href="#work"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Work</a>

                                <a href="#con"
                                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden">
                <div class="space-y-1 px-2 pt-2 pb-3">
                    <a href="#home" class="bg-gray-900 text-white inline px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page">Home</a>

                    <a href="#edu"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white inline px-3 py-2 rounded-md text-base font-medium">Education</a>

                    <a href="#work"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white inline px-3 py-2 rounded-md text-base font-medium">Work</a>

                    <a href="#con"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white inline px-3 py-2 rounded-md text-base font-medium">Contact</a>
                </div>
            </div>
        </nav>
        <!-- About me, Photo, CV section -->
        <div class="bg-white py-8 lg:pt-15" id="home">
            <div class="mx-auto max-w-7xl px-10 flex-col-reverse flex sm:px-6 lg:px-20 lg:flex-row lg:gap-x-40">
                <div class="basis-1/2">
                    <h1 class="text-2xl font-bold pt-4 text-center lg:text-start">Hi, Welcome to my website</h1>
                    <h2 class="text-xl text-center font-bold text-indigo-600 pt-8 pb-3 lg:text-start">About me</h2>
                    <div v-for="about in abouts" :id="about.id">
                        <h4 class="text-lg font-medium text-justify">
                        {{ about.attributes.about }}
                    </h4>

                    </div>
                    <div v-for="cv in cvs" :id="cv.id" class="text-center pt-4">
                        <button class="bg-indigo-500 rounded-full px-3 py-1">
                            <i class="fa-solid fa-circle-down"></i>
                            <a target="_blank" :href="`${apiUrl}${cv.attributes.document.data.attributes.url}`"
                                class="pl-2 text-white">My CV</a>
                        </button>
                    </div>

                </div>
                <div class="basis-auto">
                    <img src="../assets/images/profile.jpg" alt="Deepjyoti Chetia photo"
                        class="rounded-sm lg:rounded-l-full w-80">
                </div>
            </div>
        </div>
        <!-- Academics section -->
        <div class="bg-white py-4">
            <div class="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
                <div class="lg:text-center">
                    <h2 class="text-lg text-2xl text-center font-bold text-indigo-600 lg:text-4xl" id="edu">Education</h2>
                </div>

                <div class="mx-5 pt-5 grid lg:grid-cols-2 lg:mx-auto lg:px-16 lg:mt-16 lg:gap-5">
                    <!-- MSC -->
                    <div class="">
                        <h1 class="text-md text-xl font-bold">MSc Computer Science</h1>
                        <h2 class="text-md text-lg italic pt-2 text-indigo-700">Gauhati University</h2>
                        <h2 class="text-md text-lg">2020-2022</h2>

                        <h2 class="text-md text-lg pt-2">Took courses like <span class="italic">Image
                                processing</span>, <br> <span class="italic">Applied Graph Theory and Algorithms</span>
                        </h2>
                        <h2 class="text-md text-lg pt-2 tracking-wide"><span class="font-bold">Project:</span> Potato plant disease
                            classification using <br> convolution neural network and deep learning.</h2>

                        <h2 class="text-md text-lg pt-3"><span class="font-bold">Internship:</span> (1/02/2022 -
                            01/07/2022) <br> <span class="font-bold">Back end web developer, XopunTech Pvt. Ltd</span>
                        </h2>
                        <h3>Responsibilities:</h3>
                        <ul class="list-disc pl-8 leading-loose tracking-wide">
                            <li>Built REST APIs using for different features of the web applications.</li>
                            <li>Integrated third party APIs to web applications (eg.Payment gateway).</li>
                            <li>Collaborated with the front end developers to fulfill their requirements.</li>
                            <li>Used Java technology such as spring boot for building APIs.</li>
                        </ul>
                    </div>
                    <!-- BSC -->
                    <div>
                        <h1 class="text-md text-xl font-bold">BSc Computer Science</h1>
                        <h2 class="text-md text-lg italic pt-2 text-indigo-700">Lalit Chandra Bharali College, Maligaon,
                            Guwahati</h2>
                        <h2 class="text-md text-lg">2016-2019</h2>

                        <h2 class="text-md text-lg pt-2">Primarily focused on <span class="italic">Web
                                development</span> and <br> <span class="italic">GNU/Linux system administration</span>
                        </h2>
                        <h2 class="text-md text-lg pt-2"><span class="font-bold">Project:</span> Web portal for
                            reporting problems and <br> issues of an area faced by citizens.</h2>

                    </div>
                    <!-- HS -->
                    <div>
                        <h1 class="text-md text-xl font-bold pt-5">Higher Secondary Science</h1>
                        <h2 class="text-md text-lg italic pt-2 text-indigo-700">Assam Jatiya Bidyalay, Noonmati,
                            Guwahati</h2>
                        <h2 class="text-md text-lg">2014-2016</h2>

                    </div>
                    <!-- HSLC -->
                    <div>
                        <h1 class="text-md text-xl font-bold pt-5">High School</h1>
                        <h2 class="text-md text-lg italic pt-2 text-indigo-700">Sankardev Sishu Niketan, Narengi,
                            Guwahati</h2>
                        <h2 class="text-md text-lg">2002-2014</h2>

                        <h2 class="text-md text-lg pt-2">Perticipated and won in Quiz competitions,<br> Diploma holder
                            in fine arts</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- Work Experience section -->

        <!-- Skill section -->
        <div class="bg-white py-7" id="work">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="lg:text-center">
                    <h2 class="text-lg text-center text-2xl font-bold text-indigo-600 lg:text-4xl">Skills</h2>
                </div>

                <div class="mt-5 pt-3">
                    <dl class="space-y-10 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        <Skill v-for="skill in skills" :skill="skill" :key="skill.id" />
                    </dl>
                </div>
            </div>
        </div>

        <!-- Tools section -->
        <div class="bg-white py-6">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="lg:text-center">
                    <div class="lg:text-center">
                        <h2 class="text-lg text-2xl text-center font-bold text-indigo-600 pb-3 lg:text-4xl">Tools</h2>
                    </div>
                    <div class="mt-10 flex flex-wrap gap-y-3 items-center justify-center">
                        <div v-for="tool in tools" :id="tool.id" class="basis-32">
                            <div class="flex">
                                <div class="basis-1/4">
                                    <p hidden>{{ imgUrl = `${apiUrl}${tool.attributes.logo.data[0].attributes.url}` }}
                                    </p>
                                    <img :src=imgUrl alt="tool logo" class="rounded-full w-7 h-7">
                                </div>
                                <p class="pl-2">{{ tool.attributes.name }}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Projects section -->
        <div class="bg-white py-8">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="lg:text-center">
                    <h2 class="text-lg text-2xl text-center font-bold text-indigo-600 pb-5 lg:text-4xl">Projects</h2>
                </div>

                <div class="mt-10 px-9">
                    <dl class="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        <Project v-for="project in projects" :project="project" :key="project.id"></Project>
                    </dl>
                </div>
            </div>
        </div>
        <!-- Contact section -->
        <div class="bg-white py-8">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="lg:text-center">
                    <h2 class="text-lg text-2xl text-center font-bold text-indigo-600 pb-5 lg:text-4xl" id="con">Contact</h2>
                </div>

                <div class="mt-2 px-10 font-medium">
                    <ul class="list-none pb-5 leading-loose">
                        <li><i class="fa-brands fa-github"></i><a href="www.google.com"
                                class="text-purple-600 pl-3">Github</a></li>
                        <li><i class="fa-brands fa-linkedin"></i><a href="www.google.com"
                                class="text-purple-600 pl-3">Linkedin</a></li>
                        <li><i class="fa-solid fa-envelope"></i> <span
                                class="text-purple-600 pl-2">deepjchetia007@gmail.com</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bg-gray-800">
                        <p class="text-center p-5 text-white">© 2022 Deepjyoti Chetia</p>
                    </div>
    </div>
</template>

<script>
    import Project from '../components/Project.vue';
    import Skill from '../components/Skill.vue';

    const apiUrl = "http://localhost:1337"
    export default {
        data() {
            return {
                skills: [],
                tools: [],
                projects: [],
                cvs: [],
                abouts: [],
                apiUrl: apiUrl
            };
        },
        methods: {
            async fetchSkillsData() {
                try {
                    const res = await fetch(`${apiUrl}/api/skills?populate=icon`);
                    let x = await res.json();
                    this.skills = x.data;
                } catch (error) {
                    console.log(error);
                }
            },
            async fetchToolsData() {
                try {
                    const res = await fetch(`${apiUrl}/api/tools?populate=logo`);
                    let x = await res.json();
                    this.tools = x.data;
                } catch (error) {
                    console.log(error);
                }
            },
            async fetchProjectData() {
                try {
                    const res = await fetch(`${apiUrl}/api/projects?populate=logo&populate=sample`);
                    let x = await res.json();
                    this.projects = x.data;
                } catch (error) {
                    console.log(error);
                }
            },
            async fetchCV() {
                try {
                    const res = await fetch(`${apiUrl}/api/cvs?populate=document`);
                    let x = await res.json();
                    this.cvs = x.data;
                } catch (error) {
                    console.log(error);
                }
            },
            async fetchAboutMeData() {
                try {
                    const res = await fetch(`${apiUrl}/api/about-mes`);
                    let x = await res.json();
                    this.abouts = x.data;
                } catch (error) {
                    console.log(error);
                }
            }
        },
        mounted() {
            this.fetchSkillsData();
            this.fetchToolsData();
            this.fetchProjectData();
            this.fetchCV();
            this.fetchAboutMeData();
        },
        components: {
            Project,
            Skill
        }
    }
</script>