<script>
  import Header from "./components/Header.svelte";
  import ReviewPane from "./components/ReviewPane.svelte";
  import Detail from "./components/Detail.svelte";

  let places = [];
  let curIdx = 0;
  let success = false;
  let revealDetail = false;

  const like = () => {
    revealDetail = true;
  };
  const nextPlace = () => {
    const len = places.length;
    curIdx = (curIdx + 1) % (len === 0 ? 1 : len);
  };

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
/**
 *
 * @description suffle array
 * @param {Array} array
 * @returns {Array}
 */
export const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // 配列の二つの数字を交換
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

  const loadPlaces = async () => {
    /*
    const res = await fetch("api/places");
    const data = await res.json();
    success = data.success;
    places = data.data;
    */
    places = await (await fetch("places.json")).json();
    shuffle(places);
    console.log(places);
    success = true;
  };
</script>

<div class="grid grid-rows-8 h-screen">
  <Header
    on:click={() => {
      if (revealDetail) {
        nextPlace();
        revealDetail = false;
      }
    }}
  />
  <main
    id="place"
    class="row-span-6 {revealDetail
      ? 'flex flex-col'
      : 'grid grid-rows-5 gap-y-3'} p-3 md:w-2/5 md:mx-auto overflow-y-scroll scroll-bar-none"
  >
    {#await loadPlaces()}
      <div class="row-span-5 text-center">Loading...</div>
    {:then}
      {#if success}
        {#if revealDetail}
          <Detail
            place={places[curIdx]}
            places={places}
            on:restore-reviews={() => {
              revealDetail = false;
              nextPlace();
            }}
          />
        {:else}
          <ReviewPane
            place={places[curIdx]}
            on:next={nextPlace}
            on:like={like}
          />
        {/if}
      {:else}
        <div class="row-span-5 text-center">
          Internal server error occurred.
        </div>
      {/if}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </main>
  <footer class="bg-gray-200 z-10" />
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .scroll-bar-none {
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }
  .scroll-bar-none::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
</style>
