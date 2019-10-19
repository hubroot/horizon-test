<template>
  <textarea v-model="data" @input="closeTags"></textarea>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'CodeEditor',

  props: {
    value: String
  },

  data() {
    return {
      data: this.value
    }
  },

  watch: {
    data(content) {
      this.$emit('input', content)
    }
  },

  methods: {
    closeTags() {
      let el = this.$el
      const content = this.data,
        contentLength = content.length
      const cursor = el.selectionStart
      if (!cursor || content[cursor - 1] !== '>') return

      const contentLeftFragment = content.substring(0, cursor)
      const tagPos = contentLeftFragment.lastIndexOf('<')
      if (tagPos === -1) return

      const tag = content.substring(tagPos + 1, cursor - 1)

      if (tag) {
        const contentRightFragment = content.substring(cursor, contentLength)
        this.data = `${contentLeftFragment}</${tag}>${contentRightFragment}`

        setTimeout(() => {
          el.selectionStart = cursor
          el.selectionEnd = cursor
        }, 1)
      }
    }
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  min-height: 10rem;
}
</style>
