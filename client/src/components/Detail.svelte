<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Image from "./Image.svelte";

  export let place;
  export let places;

// from /utils/calc_dist.js
// 参考: https://qiita.com/kawanet/items/a2e111b17b8eb5ac859a
const R = Math.PI / 180;

/**
 *
 * @description calculate most nearest 3 places from the place
 * @param {number} lat1
 * @param {number} lng1
 * @param {Array} array
 * @returns {Array} 3 items
 */
export const calcDistance = (lat1, lng1, array) => {
  lat1 *= R;
  lng1 *= R;
  const after_calc_array = [];

  array.forEach((place) => {
    let lat2 = place.latitude * R;
    let lng2 = place.longitude * R;
    let distance = 6371 *
      Math.acos(
        Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) +
          Math.sin(lat1) * Math.sin(lat2),
      );

    // 自分自身は除外
    if (lat1 == lat2 && lng1 == lng2) {
      return;
    }

    place.distance = distance;
    // console.log(`distance: ${distance}, name: ${place.name} `)
    after_calc_array.push(place);
  });

  after_calc_array.sort((a, b) => {
    if (a.distance < b.distance) {
      return -1;
    } else {
      return 1;
    }
  });
  return after_calc_array.slice(0, 3);
};

//
  let success = false;
  let nearbyPlaces = [];
  $: isNiche = place.likes < 10;

  const loadNearbyPlaces = async () => {
    /*
    const data = await fetch(
      `api/places/?longitude=${place.longitude}&latitude=${place.latitude}`
    );
    const res = await data.json();
    success = res.success;
    nearbyPlaces = res.data;
    */
    success = true;
    console.log(place.latitude, place.longitude, places);
    nearbyPlaces = calcDistance(place.latitude, place.longitude, places);
    console.log(nearbyPlaces);
    for (const p of nearbyPlaces)
      p.distance = (parseFloat(p.distance) * 1000).toFixed() + "m"; // km to m
  };

  let map;

  const setupMap = () => {
    const coord = [parseFloat(place.latitude), parseFloat(place.longitude)];
    map = (map ?? L.map("access-map")).setView(coord, 16);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker(coord).addTo(map);
  };

  const updatePlace = async (chosenPlace) => {
    place = chosenPlace;
    await loadNearbyPlaces(chosenPlace);
    setupMap();
  };

  const dispatch = createEventDispatcher();
  const restoreReviewing = () => dispatch("restore-reviews");

  onMount(setupMap);
</script>

<div class="mx-auto">
  <Image src={place.thumbnail} alt={place.name} />
</div>
<div class="text-xl mx-auto pt-2">
  ニッチ度：<span class="{isNiche ? 'text-yellow-500' : ''} font-bold"
    >{place.likes}</span
  >
</div>
<div class="py-2">
  <h1 class="text-2xl">{place.name}</h1>
  <p class="font-extralight">{place.address}</p>
  <p class="pt-1">{place.description}</p>
</div>
<div id="access-map" class="mx-4 md:mx-8" />
<hr class="my-5" />
{#await loadNearbyPlaces()}
  <div>loading...</div>
{:then}
  <section class="md:w-2/3 mx-auto">
    <h2 class="text-xl">近くの観光地</h2>
    {#if success}
      <div class="grid gap-y-5">
        {#each nearbyPlaces as nearbyPlace (nearbyPlace.id)}
          <div class="grid">
            <div
              on:click={() => updatePlace(nearbyPlace)}
              class="w-1/2 md:w-full mx-auto opacity-1 hover:opacity-75"
            >
              <Image src={nearbyPlace.thumbnail} alt={nearbyPlace.name} />
            </div>
            <div>
              <h3 class="text-lg line-clamp-1 float-left">
                {nearbyPlace.name}
              </h3>
              <p class="float-right">
                ({nearbyPlace.distance})
              </p>
            </div>
            <p class="line-clamp-1">{nearbyPlace.description}</p>
          </div>
        {/each}
      </div>
    {:else}
      <div>Internal server error occurred.</div>
    {/if}
  </section>
{:catch error}
  <p class="text-red-500">{error.message}</p>
{/await}
<button
  on:click={restoreReviewing}
  class="w-1/2 p-2 mt-4 mx-auto rounded-lg bg-blue-400 text-white text-lg font-medium"
  >他の場所を探す</button
>

<style>
  #access-map {
    height: 200px;
    min-height: 200px;
  }
</style>
