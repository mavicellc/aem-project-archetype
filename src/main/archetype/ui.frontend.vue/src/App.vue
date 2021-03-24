<script lang="ts">
import { Page, withModel } from '@mavice/aem-vue-editable-components'
import { Component, Mixins} from 'vue-property-decorator'

@Component
export class App extends Mixins(Page) {
}

export default withModel(App)

</script>