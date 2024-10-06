<template>
    <section class="managers pb-4 mb-5">
        <div class="container">
            <nav class="managers">
                <p class="stand colour-blue mb-0 me-5">Filter by manager</p>
                <div class="filters">
                    <button class="manager-filter is-active">All</button>
                    <button v-for="letter in filterLetters" :key="letter.index" class="manager-filter">{{ letter }}</button>
                </div>
                <div class="flex-grow-1"></div>
                <button class="close-managers" @click="hideMangers">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E2E50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </nav>
            <div class="manager-cards mt-4">
                <div v-for="manager in managers" :key="manager.index"
                    class="manager-card"
                    :class="[{
                        'is-active': manager.isActive
                    }, 'region-' + manager.region.toLowerCase()]"
                    @click="addManager(manager)">
                    <img :src="manager.image" alt="">
                    <p class="stand colour-blue mb-1 mt-3">{{ manager.name }}</p>
                    <p class="small colour-copy-grey mb-0">{{ manager.region }}</p>
                </div>
            </div>
            <div class="selected-managers mt-4 pt-3" v-if="selectedManagers.length > 0">
                <p class="colour-copy-grey mb-0 me-4">Selected manager(s):</p>
                <div class="managers-buttons ms-auto">
                    <button class="clear-filters alternate me-3"
                        v-for="manager in selectedManagers" :key="manager.index"
                        @click="removeManager(manager.name)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009E99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        <span>{{ manager.name }}</span>
                    </button>
                    <button class="clear-filters" @click="clearManagers">
                        <svg xmlns="http://www.w3.org/2000/svg" class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        <span>Clear Managers</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            managers: [
                {
                    name: 'Clive Beagles',
                    region: 'UK Equities',
                    image: '/huguenots-fe-test/img/profile-image.png',
                    isActive: false
                },
                {
                    name: 'Vishal Bhatia',
                    region: 'UK Equities',
                    image: '/huguenots-fe-test/img/profile-image-1.png',
                    isActive: false
                },
                {
                    name: 'Emery Brewer',
                    region: 'Emerging Markets Equities',
                    image: '/huguenots-fe-test/img/profile-image-2.png',
                    isActive: false
                },
                {
                    name: 'Ada Chan',
                    region: 'Asian Equities',
                    image: '/huguenots-fe-test/img/profile-image-3.png',
                    isActive: false
                },
                {
                    name: 'Mark Costar',
                    region: 'UK Equities',
                    image: '/huguenots-fe-test/img/profile-image-4.png',
                    isActive: false
                },
                {
                    name: 'Luis Fananas',
                    region: 'European Equities',
                    image: '/huguenots-fe-test/img/profile-image-5.png',
                    isActive: false
                },
                {
                    name: 'Cho-Yu Kooi',
                    region: 'Asian Equities',
                    image: '/huguenots-fe-test/img/profile-image-6.png',
                    isActive: false
                }
            ]
        }
    },
    computed: {
        filterLetters() {
            let filterLetters = []
            for (let i = 0; i < 21; i++) {
                filterLetters.push(String.fromCharCode(97 + i))
            }
            return filterLetters
        },
        selectedManagers() {
            return this.managers.filter(manager => manager.isActive)
        }
    },
    methods: {
        addManager(manager) {
            manager.isActive = !manager.isActive
            this.$emit('selectedManagers', this.selectedManagers)
        },
        removeManager(manager) {
            this.managers.find(item => item.name === manager).isActive = false
            this.$emit('selectedManagers', this.selectedManagers)
        },
        clearManagers() {
            this.managers.forEach(manager => manager.isActive = false)
            this.$emit('selectedManagers', this.selectedManagers)
        },
        hideMangers() {
            this.clearManagers()
            this.$emit('hideManagers')
        }
    }
}
</script>