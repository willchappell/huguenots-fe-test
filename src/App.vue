<template>
    <div>
        <header>
            <div class="container py-4">
                <a href="/">
                    <img src="/img/JOH_logo.svg" alt="">
                </a>
            </div>
        </header>
        <section class="hero py-5">
            <div class="container">
                <ul class="nav">
                    <li class="breadcrumb-text colour-white me-1">
                        <a href="/">Home</a> /
                    </li>
                    <li class="breadcrumb-text colour-white">
                        Funds
                    </li>
                </ul>
                <h1 class="heading-1 colour-white mt-5 mb-0 py-2">Our Funds</h1>
            </div>
        </section>
        <main class="pt-5">
            <Managers v-if="managersActive" 
                @hide-managers="managersActive = false"
                @selected-managers="selectedManagers = $event"/>
            <div class="container">
                <div class="row gx-0">
                    <div class="col-lg-5">
                        <Filters 
                            :has-filters="hasFilters"
                            :managers-active="managersActive"
                            @filter-regions="filterRegions = $event"
                            @filter-domicile="filterDomicile = $event"
                            @show-managers="managersActive = true"/>
                    </div>
                    <div class="col-lg-1 offset-lg-1">
                        <div class="border-element"></div>
                    </div>
                    <div class="col-lg-17">
                        <Navigation 
                            :active-view="activeView"
                            @update-view="activeView = $event"
                            @search="filterSearch = $event.toLowerCase()" />
                        <div class="py-4"></div>
                        <ListView v-if="activeView === 'list-view'" :funds="filteredFunds" />
                        <GridView v-if="activeView === 'grid-view'" :funds="filteredFunds" />
                        <p class="text-end data colour-copy-grey mb-0">All data as at 29 February 2024</p>
                    </div>
                </div>
            </div>
            <div class="bottom-spacer"></div>
        </main>
        <footer>
            <div class="container py-5">
                <a href="/">
                    <img src="/img/JOH_logo.svg" alt="">
                </a>
            </div>
        </footer>
    </div>
</template>

<script>
import Filters from './components/Filters.vue'
import Navigation from './components/Navigation.vue'
import ListView from './components/ListView.vue'
import GridView from './components/GridView.vue'
import Managers from './components/Managers.vue'

import importData from './data.json'

export default {
    components: {
        Filters, Navigation, ListView, GridView, Managers
    },
    data() {
        return {
            activeView: 'list-view',
            funds: importData.funds,
            filterRegions: [],
            filterDomicile: [],
            filterSearch: '',
            managersActive: false,
            selectedManagers: []
        }
    },
    computed: {
        filteredFunds() {
            /// region
            let filteredFunds = this.funds.filter(fund => {
                if (this.filterRegions.length === 0) {
                    return true
                }
                return this.filterRegions.includes(fund.region)
            })

            // domicile
            filteredFunds = filteredFunds.filter(fund => {
                if (this.filterDomicile.length === 0) {
                    return true
                }
                return this.filterDomicile.includes(fund.domicile)
            })

            // search
            filteredFunds = filteredFunds.filter(fund => {
                return fund.fund_name.toLowerCase().includes(this.filterSearch) | fund.benchmark.toLowerCase().includes(this.filterSearch) | fund.manager.toLowerCase().includes(this.filterSearch)
            })

            // managers
            filteredFunds = filteredFunds.filter(fund => {
                if (this.selectedManagersNames.length === 0) {
                    return true
                }
                return this.selectedManagersNames.includes(fund.manager)
            })

            return filteredFunds
        },
        hasFilters() {
            return this.filterRegions.length > 0 | this.filterDomicile.length > 0
        },
        selectedManagersNames() {
            let selectedManagersNames = []
            this.selectedManagers.forEach(selectedManager => selectedManagersNames.push(selectedManager.name))
            return selectedManagersNames
        }
    },
    methods: {
        resetFunds() {
            this.funds = importData.funds
        },
    }
}
</script>