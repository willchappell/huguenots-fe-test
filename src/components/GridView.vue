<template>
    <section class="grid-view">
        <div class="row gx-5">
            <div class="col-md-12 col-xxl-8 mb-5" v-for="fund in funds" :key="fund.index">
                <div class="fund-card">
                    <div class="title-wrapper">
                        <h3 class="heading-3 colour-white">{{ fund.fund_name }}</h3>
                        <p class="breadcrumb-text colour-white text-uppercase mb-0">{{ fund.domicile_full }}</p>
                    </div>
                    <div class="fund-body" :class="'region-' + fund.region.toLowerCase()">
                        <div class="details row">
                            <div class="col-md-8">
                                <p class="heading mb-1">Fund Size</p>
                                <p class="detail mb-0">{{ fund.fund_size }}</p>
                            </div>
                            <div class="col-md-8">
                                <p class="heading mb-1">Holdings</p>
                                <p class="detail mb-0">{{ fund.holdings }}</p>
                            </div>
                            <div class="col-md-8 text-center">
                                <p class="heading mb-1">Launch<br> Date</p>
                                <p class="detail mb-0">{{ fund.launch_date }}</p>
                            </div>
                        </div>
                        <div class="links pt-3">
                            <a href="/" target="_blank">
                                <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E2E50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                Monthly portfolio fact sheet
                            </a>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009E99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        funds: Array
    }
}
</script>