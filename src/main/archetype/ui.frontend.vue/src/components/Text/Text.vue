<template>
 <div>
  <div
          v-if="richText"
          :id="modelId"
          data-rte-editelement
          v-html="getRichTextContent()"
  ></div>
  <div v-else
       :id="modelId"
       data-rte-editelement
       v-html="text">
  </div>
 </div>
</template>

<script>
import DOMPurify from 'dompurify'
import extractModelId from '../utils/extract-model-id'

export default {
 name: 'Text',
 props: {
  cqPath: {
   type: String
  },
  richText: {
   type: Boolean
  },
  text: {
   type: String
  }
 },
 computed: {
  modelId () {
   return extractModelId(this.cqPath)
  }
 },
 methods: {
  getRichTextContent () {
   return DOMPurify.sanitize(this.text)
  }
 }
}
</script>
<style>


    h3 {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.02em;
        padding: 4px 0;
    }

    h5 {
        color: rgba(0, 0, 0, 0.8);
        font-size: 18px;
        text-align: center;
    }

    @media (min-width: 651px) and (max-width: 1200px) {
        h1 {
            font-size: 30px;
        }

        h2 {
            font-size: 30px;
        }

        h3 {
            font-weight: 400;
        }
    }

</style>
