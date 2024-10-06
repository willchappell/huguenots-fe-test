<template>
    <tr class="fund">
        <td :class="'region-' + fund.region.toLowerCase()">
            {{ fund.fund_name }}<br>
            <span>{{ fund.benchmark }}</span>
        </td>
        <td>{{ fund.domicile }}</td>
        <td>{{ fund.region }}</td>
        <td>{{ fund.holdings }}</td>
        <td class="no-wrap">{{ fund.fund_size }}</td>
        <td>{{ fund.launch_date }}</td>
        <td>
            <button class="view-fund">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#009E99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
        </td>
    </tr>
    <tr class="spacer"></tr>
</template>

<script>
export default {
    props: {
        fund: Object
    }
}
</script>