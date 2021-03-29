/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

import Page from './components/Page/Page.vue'
import Text from './components/Text/Text.vue'
import { MapTo, withComponentMappingContext } from '@mavice/aem-vue-editable-components'

MapTo('${appId}/components/page')(withComponentMappingContext(Page))
MapTo('${appId}/components/text')(Text, {
    emptyLabel: 'Text',
    isEmpty: function (props) {
        return !props || !props.text || props.text.trim().length < 1
    },
    resourceType: '${appId}/components/text'
})
