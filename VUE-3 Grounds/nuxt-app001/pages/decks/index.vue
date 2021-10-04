<template>
  <div>
    <h1>Your Decks, please enter number of deck to show:</h1>
    <input type="text" v-model="deckID" placeholder="enter Deck ID">
    <button @click="showDeck">showDeck</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deckID: 1
    }
  },
  methods: {
    showDeck() {
      this.$router.push(`/decks/${this.deckID}`)
    }
  }
}
</script>