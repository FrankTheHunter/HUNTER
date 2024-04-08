<script lang="ts">
    import '../../app.css';
    import type { LatLngExpression } from 'leaflet';
    import Leaflet from '$lib/Leaflet.svelte';
    import Marker from '$lib/Marker.svelte';
    import Popup from '$lib/Popup.svelte';

    const initialView: LatLngExpression = [47.545000, -1.80000];
    const markerLocations: Array<LatLngExpression> = [
        [47.545000, -1.810000]
    ];
</script>

<div class="w-full h-screen">
    <Leaflet view={initialView} zoom={14}>
        {#each markerLocations as latLng}
            <Marker {latLng} width={40} height={40}>
                <svg height="40" width="40">
                    <circle cx="20" cy="20" r="10" stroke="black" stroke-width="3" fill="red" />
                </svg>

                <Popup
                >Vous étes ici !</Popup
                >
            </Marker>
        {/each}
    </Leaflet>
</div>