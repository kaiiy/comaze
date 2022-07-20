<template>
    <v-expansion-panel>
        <v-expansion-panel-header>
            ヒント
            <slot name="header"></slot>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
            <slot name="content"></slot>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
    setup() {
    }
})

</script>