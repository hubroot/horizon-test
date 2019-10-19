<template>
  <div>
    <p>This is the editor page</p>
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
