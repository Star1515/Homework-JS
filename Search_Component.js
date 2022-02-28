Vue.component('search', {
	props: [ 'showforma'],
	
template: `<div class="forma" v-show="showforma">
<form action="#" class="search-form" @submit.prevent="filter">
    <input type="text" class="search-field" v-model="searchLine" v-on:click="cleanText">
    <button class="btn-search" type="submit" @click="filter">
        <i class="fas">Поиск</i>
    </button>
    <br>
</form>
<h1 class="meaning">Значение строки поиска: {{ searchLine }} </h1>
</div>`,
});







