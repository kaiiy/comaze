<template>
    <v-card-actions>
        <v-btn text @click="toggleNav()">
            <div>ヒントを{{ !open ? '開く' : '閉じる' }}</div>
            <v-spacer></v-spacer>
            <v-icon>{{ open ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
    </v-card-actions>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
    props: {
        open: {
            type: Boolean,
            required: true
        },
        toggleNav: {
            type: Function as PropType<() => void>,
            required: true
        }
    },
    setup() {
    }
})
</script>