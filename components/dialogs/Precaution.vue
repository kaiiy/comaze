<template>
    <!-- ラビリンスダイアログ  -->
    <v-dialog v-model="showDialog" persistent max-width="900">
        <v-card class="pt-8">
            <v-img :src="require('@/assets/img/header.png')"></v-img>

            <v-row no-gutters>
                <v-col cols="12" class="pt-2">
                    <v-card-title class="my-0 py-1 d-flex">
                        <span>怪異名/ 覚</span>
                        <v-spacer></v-spacer>
                        <span>制作/ komei</span>
                    </v-card-title>
                </v-col>
                <v-divider color="black"></v-divider>
            </v-row>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="black" text @click="showDialog = false">START</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api"

import ClearSvg from "./ClearSvg.vue"

export default defineComponent({
    components: {
        ClearSvg
    },
    props: {
        value: {
            type: Boolean,
            required: true,
        },
    },
    setup(props, { emit }) {
        // ダイアログ表示 
        const showDialog = computed({
            get: () => props.value,
            set: (newValue: boolean) => emit("input", newValue)
        })

        return {
            showDialog
        }
    }
})
</script>
