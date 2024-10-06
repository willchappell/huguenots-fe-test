<template>
    <div>
        <table class="table list-view">
            <thead>
                <tr>
                    <th>Fund name / Benchmark</th>
                    <th>Domicile</th>
                    <th>Region</th>
                    <th>Holdings</th>
                    <th>Fund size</th>
                    <th class="no-wrap">Launch date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr class="spacer"></tr>
                <FundRow v-for="fund in funds" :key="fund.index" :fund="fund"/>
            </tbody>
        </table>
    </div>
</template>

<script>
import FundRow from './FundRow.vue'

export default {
    components: {
        FundRow
    },
    props: {
        funds: Array
    }
}
</script>