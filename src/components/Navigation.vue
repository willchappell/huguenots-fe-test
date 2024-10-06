<template>
    <nav class="fund-navigation">
        <div class="search-wrapper">
            <svg class="me-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E2E50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input v-model="search" @input="$emit('search', search)" placeholder="Search by fund name, ISIN, benchmark, manager" />
        </div>
        <div class="view-toggles ms-4">
            <button class="grid-view" :class="{ 'is-active': activeView === 'grid-view' }"
            @click="$emit('updateView', 'grid-view')">
                <div class="icon me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </div>
                Grid view
            </button>
            <button class="list-view" :class="{ 'is-active': activeView === 'list-view' }"
                @click="$emit('updateView', 'list-view')">
                List view
                <div class="icon ms-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        activeView: String
    },
    data() {
        return {
            search: ''
        }
    }
}
</script>