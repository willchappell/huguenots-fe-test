<template>
    <div class="position-relative filters-wrapper">
        <h2 class="heading-2 colour-blue mb-4">Filter</h2>
        <p class="stand colour-blue">Regions</p>

        <label for="uk_equities" class="filter-label body-copy colour-blue mt-0">
            <input type="checkbox" id="uk_equities" value="UK" v-model="regions" @change="$emit('filter-regions', regions)" />
            UK equities
        </label>
        <br>
        <label for="global_equities" class="filter-label body-copy colour-blue">
            <input type="checkbox" id="global_equities" value="Global" v-model="regions" @change="$emit('filter-regions', regions)" />
            Global Equities
        </label>
        <br>
        <label for="euro_equities" class="filter-label body-copy colour-blue">
            <input type="checkbox" id="euro_equities" value="Europe" v-model="regions" @change="$emit('filter-regions', regions)" />
            Euro Equities
        </label>
        <br>
        <label for="emerging_equities" class="filter-label body-copy colour-blue">
            <input type="checkbox" id="emerging_equities" value="Emerging Markets" v-model="regions" @change="$emit('filter-regions', regions)" />
            Emerging Equities
        </label>
        <br>
        <label for="asian_equities" class="filter-label body-copy colour-blue">
            <input type="checkbox" id="asian_equities" value="Asia" v-model="regions" @change="$emit('filter-regions', regions)" />
            Asian Equities
        </label>

        <p class="stand colour-blue mt-4">Domicile</p>

        <label for="dublin" class="filter-label body-copy colour-blue mt-0">
            <input type="checkbox" id="dublin" value="Dublin" v-model="domicile" @change="$emit('filter-domicile', domicile)" />
            Dublin (Irish ICAV)
        </label>
        <br>
        <label for="london" class="filter-label body-copy colour-blue">
            <input type="checkbox" id="london" value="London" v-model="domicile" @change="$emit('filter-domicile', domicile)" />
            London (UK OEIC)
        </label>

        <button v-if="hasFilters" class="clear-filters" @click="resetFilters">
            <svg xmlns="http://www.w3.org/2000/svg" class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            <span>Clear all</span>
        </button>

        <button v-if="!managersActive" class="managers colour-blue mt-5" @click="$emit('showManagers')">
            Show Managers
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        hasFilters: Boolean | Number,
        managersActive: Boolean
    },
    data() {
        return {
            regions: [],
            domicile: [],
        }
    },
    methods: {
        resetFilters() {
            this.regions = []
            this.domicile = []

            this.$emit('filter-regions', this.regions)
            this.$emit('filter-domicile', this.domicile)
        }
    }
}
</script>