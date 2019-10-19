<template>
  <div>
    <h1 class="my-4">Editor</h1>
    <code-editor />  
  </div>
</template>

<script>
import CodeEditor from '@/components/CodeEditor.vue'

export default {
  name: 'Editor',

  components: {
    CodeEditor
  }
}
</script>
