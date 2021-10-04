<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/decks">Decks</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings">Settings</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="sass">
header
  background: #000
  height: 60px
  nav
    height: inherit
  ul
    align-items: center
    display: flex
    justify-content: center
    list-style: none
    padding: 0
    margin: 0
    li
      margin: 10px
      a
        color: #fff
        text-transform: uppercase
        text-decoration: none
</style>