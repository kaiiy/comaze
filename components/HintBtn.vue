<template>
    <div>
        <v-btn class="mx-2 back-btn-sm" fab color="white" app prop depressed @click="showDialog = true">
            <v-icon dark>mdi-lightbulb-on-outline</v-icon>
        </v-btn>

        <v-dialog v-model="showDialog" persistent max-width="900">
            <v-card class="pt-3">
                <v-card-title>ヒント</v-card-title>

                <v-card-text class="px-0 mt-3">
                    <v-expand-transition>
                        <v-expansion-panels :class="[$vuetify.breakpoint.xs ? 'px-2' : 'px-4']">
                            <HintPanel>
                                <template #header>1-1</template>
                                <template #content>
                                    <p>
                                        まずは迷路の中を探索して、「行き止まりの部屋」を探しましょう。行き止まりの部屋は「
                                        <span class="rune">f</span>」のマークが書かれていて、他の部屋につながる黒い扉が1つもなく、ナゾの置かれている部屋です。
                                    </p>
                                </template>
                            </HintPanel>
                            <HintPanel>
                                <template #header>1-2</template>
                                <template #content>
                                    <p>3つの扉を「真ん中」「左」「右」「右」の順に選ぶとたどり着きます。</p>
                                </template>
                            </HintPanel>
                            <HintPanel class="mt-4">
                                <template #header>2-1</template>
                                <template #content>
                                    <p>行き止まりの部屋に置かれているナゾを解きましょう。対応している怪異は「覚」です。</p>
                                </template>
                            </HintPanel>
                            <HintPanel>
                                <template #header>2-2</template>
                                <template #content>
                                    <p>行き止まりの部屋にある「覚る（さとる）」「覚える（おぼえる）」をローマ字にして、白丸の部分を矢印の順に読むと「Uroboros（うろぼろす）」という答えが出てきます。この答えを入力欄に入れましょう。
                                    </p>
                                </template>
                            </HintPanel>
                            <HintPanel class="mt-4">
                                <template #header>3-1</template>
                                <template #content>
                                    <p>ここから先の謎を解くために、まずはこの迷路の構造を調査しましょう。迷路は、入り口と24個の部屋からなります。「うろぼろすの間」以外の各部屋にはそれぞれ3つの扉があり、それぞれ「HINTA」「HINTB」「HINTC」と書かれています。まずはどの扉がどの部屋に対応しているかを全て調べましょう。また、HINTA,B,Cをよく見るとそれぞれ、小文字や太字が混ざっています。これらの表記も同時にまとめましょう。（全てまとめたものはヒント3-2に掲載）
                                    </p>
                                </template>
                            </HintPanel>
                            <HintPanel>
                                <template #header>3-2</template>
                                <template #content>
                                    <p>各部屋の扉と繋がっている部屋の対応は以下のようになります。この表を見比べながら解くことでこの迷路を解き明かしていきます。</p>
                                    <div class="overflow-y-auto" style="width: 100%;">
                                        <v-simple-table fixed-header dense height="500px" style="min-width: 750px;">
                                            <template v-slot:default>
                                                <thead>
                                                    <tr>
                                                        <th>ルーン文字</th>
                                                        <th>HINTA表記</th>
                                                        <th>Ａのリンク先</th>
                                                        <th>HINTB表記</th>
                                                        <th>Bのリンク先</th>
                                                        <th>HINTC表記</th>
                                                        <th>Cのリンク先</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="rune">f</td>
                                                        <td></td>
                                                        <td>なし</td>
                                                        <td></td>
                                                        <td>なし</td>
                                                        <td></td>
                                                        <td>なし</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">u</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">H</span>
                                                                <span class="strong">i</span>
                                                                <span class="normal">NtA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">h</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="strong">h</span>
                                                                <span class="normal">INTb</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">l</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HInTC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">h</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">x</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hIN</span>
                                                                <span class="strong">t</span>
                                                                <span class="normal">A</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">u</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hINTB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">z</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">h</span>
                                                                <span class="strong">i</span>
                                                                <span class="normal">NTC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">l</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">a</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HInTA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">q</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HiNT</span>
                                                                <span class="strong">b</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">p</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINt</span>
                                                                <span class="strong">c</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">n</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">r</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="strong">h</span>
                                                                <span class="normal">iNTA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">b</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINTb</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">t</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hI</span>
                                                                <span class="strong">n</span>
                                                                <span class="normal">TC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">e</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">k</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINTa</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">y</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINt</span>
                                                                <span class="strong">b</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">f</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="strong">h</span>
                                                                <span class="normal">InTC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">f</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">g</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HInTA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">s</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HInT</span>
                                                                <span class="strong">b</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">d</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">h</span>
                                                                <span class="strong">i</span>
                                                                <span class="normal">NTC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">z</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">w</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HInT</span>
                                                                <span class="strong">a</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">s</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">h</span>
                                                                <span class="strong">i</span>
                                                                <span class="normal">NTB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">q</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINtC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">p</td>
                                                    </tr>
                                                    <!-- ここまで8つ  -->
                                                    <tr>
                                                        <td class="rune">h</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">h</span>
                                                                <span class="strong">i</span>
                                                                <span class="normal">NTA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">n</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="strong">h</span>
                                                                <span class="normal">INTb</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">x</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINtC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">d</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">n</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">h</span>
                                                                <span class="strong">i</span>
                                                                <span class="normal">NTA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">h</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">Hi</span>
                                                                <span class="strong">n</span>
                                                                <span class="normal">TB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">l</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINtC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">k</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">i</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hIN</span>
                                                                <span class="strong">t</span>
                                                                <span class="normal">A</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">n</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">H</span>
                                                                <span class="strong">i</span>
                                                                <span class="normal">NtB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">e</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINTc</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">h</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">j</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINTa</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">z</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">Hi</span>
                                                                <span class="strong">n</span>
                                                                <span class="normal">TB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">e</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HiNT</span>
                                                                <span class="strong">c</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">k</td>
                                                    </tr>
                                                    <!-- ここまで12こ  -->
                                                    <tr>
                                                        <td class="rune">y</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">Hi</span>
                                                                <span class="strong">n</span>
                                                                <span class="normal">TA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">o</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HIn</span>
                                                                <span class="strong">t</span>
                                                                <span class="normal">B</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">j</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HiNTC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">h</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">p</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HiNTA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">g</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">H</span>
                                                                <span class="strong">i</span>
                                                                <span class="normal">NTb</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">b</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HiN</span>
                                                                <span class="strong">t</span>
                                                                <span class="normal">C</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">m</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">z</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINtA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">g</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="strong">h</span>
                                                                <span class="normal">iNTB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">m</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="strong">h</span>
                                                                <span class="normal">INTc</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">y</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">s</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hINTA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">t</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="strong">h</span>
                                                                <span class="normal">INtB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">w</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HInT</span>
                                                                <span class="strong">c</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">m</td>
                                                    </tr>
                                                    <!-- ここまで16こ  -->
                                                    <tr>
                                                        <td class="rune">t</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HIN</span>
                                                                <span class="strong">t</span>
                                                                <span class="normal">a</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">t</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hINTB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">u</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="strong">h</span>
                                                                <span class="normal">iNTC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">t</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">b</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hIN</span>
                                                                <span class="strong">t</span>
                                                                <span class="normal">A</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">e</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hINTB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">o</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HI</span>
                                                                <span class="strong">n</span>
                                                                <span class="normal">tC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">s</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">e</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hINT</span>
                                                                <span class="strong">a</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">m</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="strong">h</span>
                                                                <span class="normal">INTb</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">r</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINtC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">a</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">m</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HInTA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">r</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HI</span>
                                                                <span class="strong">n</span>
                                                                <span class="normal">Tb</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">w</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hINT</span>
                                                                <span class="strong">c</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">d</td>
                                                    </tr>
                                                    <!-- ここまで20こ  -->
                                                    <tr>
                                                        <td class="rune">l</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HiNT</span>
                                                                <span class="strong">a</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">x</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HiN</span>
                                                                <span class="strong">t</span>
                                                                <span class="normal">B</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">z</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINTc</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">f</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">q</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">H</span>
                                                                <span class="strong">i</span>
                                                                <span class="normal">NtA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">s</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hI</span>
                                                                <span class="strong">n</span>
                                                                <span class="normal">TB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">a</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HInTC</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">l</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">o</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HInTA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">h</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">h</span>
                                                                <span class="strong">i</span>
                                                                <span class="normal">NTB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">j</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">hINT</span>
                                                                <span class="strong">c</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">q</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="rune">d</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HINtA</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">q</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">H</span>
                                                                <span class="strong">i</span>
                                                                <span class="normal">nTB</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">g</td>
                                                        <td>
                                                            <span class="hint-wrap">
                                                                <span class="normal">HIN</span>
                                                                <span class="strong">t</span>
                                                                <span class="normal">c</span>
                                                            </span>
                                                        </td>
                                                        <td class="rune">i</td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </div>
                                </template>
                            </HintPanel>
                            <HintPanel class="mt-4">
                                <template #header>4-1</template>
                                <template #content>
                                    <p>
                                        それでは迷路に隠された謎を解き明かしましょう。まずは解き明かすために必要な情報を整理します。まず、「
                                        <span
                                            class="rune">f</span>」と書かれた部屋の答えは「うろぼろす」です。次に、各部屋の扉の上にあるHINTA,B,Cは、どの部屋も各扉それぞれ小文字が1個ずつ、太字は2つの扉に1つずつあります。そして、各部屋には「？？？？？の間」と書かれています。
                                    </p>
                                </template>
                            </HintPanel>
                            <HintPanel>
                                <template #header>4-2</template>
                                <template #content>
                                    <p>
                                        「？？？？？の間」という文の「？」の数5つです。「
                                        <span
                                            class="rune">f</span>」と書かれた部屋の答えが「うろぼろす」であるように、各部屋には5文字の単語が設定されているようです。そしてHINTA、HINTB、HINTCは、その部屋に設定された5文字の単語を特定するための手がかりです。"HINTA"はアルファベットだと5文字であり、各部屋の小文字と太字のアルファベットは、それぞれ5つずつあります。
                                    </p>
                                </template>
                            </HintPanel>
                            <HintPanel>
                                <template #header>4-3</template>
                                <template #content>
                                    <p>
                                        各部屋のHINTA,B,Cは、「HINTA(B,C)」をリンク先に設定された5文字の単語としたときに、小文字を1文字目、太文字を2文字目として文字を拾い、それをA,B,Cの順に読むとその部屋に設定された5文字の単語になるように定められています。
                                        例えば、「
                                        <span class="rune">k</span>」はHINTAが「
                                        <span class="rune">y</span>」の部屋、HINTB,HINTCが「
                                        <span
                                            class="rune">f</span>」の『うろぼろす』の間に繋がっています。そして、HINTAは5文字目が小文字、HINTBは4文字目が小文字で5文字目が太字、HINTCは3文字目が小文字で1文字目が太字です。つまり『
                                        <span class="rune">y</span>の5文字目、
                                        <span class="rune">f</span>の4文字目、
                                        <span class="rune">f</span>の5文字目、
                                        <span class="rune">f</span>の3文字目、
                                        <span class="rune">f</span>の1文字目』を拾うとこの部屋の単語になります。「
                                        <span class="rune">f</span>」は『うろぼろす』だったので、対応する文字を拾うと「(
                                        <span class="rune">y</span>-5)ろすぼう」と拾えます。実際、「
                                        <span class="rune">k</span>」の部屋に対応する単語は「くろすぼう」であり、「
                                        <span
                                            class="rune">y</span>」の部屋に対応する単語の5文字目は「く」になっています。このようにして各部屋に対応する5文字の単語を全て求めましょう。
                                    </p>
                                </template>
                            </HintPanel>
                            <HintPanel class="mt-4">
                                <template #header>5-1</template>
                                <template #content>
                                    <p>
                                        全ての部屋に対応する単語を求めましょう。一応全ての部屋と単語の対応はヒント5-2に掲載しますが、ヒント5-1では求めるためのコツを紹介します。まずは各部屋の単語について、どの部屋の何文字目とどの部屋の何文字目が同じなのかを洗い出しましょう。例えば、ヒント3-2の表を眺めながら「
                                        <span class="rune">u</span>の部屋の1文字目は
                                        <span class="rune">h</span>の部屋の4文字目と同じ」「
                                        <span class="rune">h</span>の部屋の4文字目は
                                        <span class="rune">x</span>の部屋の1文字目と同じ」と分かれば、
                                        <span class="rune">u</span>の1文字目、
                                        <span class="rune">h</span>の4文字目、
                                        <span
                                            class="rune">x</span>の1文字目は"すべて"同じ文字になっていると分かるはずです。このようにしてどの部屋の土の文字が同じ文字なのかを探りましょう。そうしていくうちに「ある部屋に対応した単語の2,3,4文字目がすべて同じになっているはず」と気づくことでしょう。するとそこには2,3,4文字目が同じ5文字の単語「かたたたき」が入ります。これらを駆使しながら各部屋に対応する単語を明らかにしましょう。
                                    </p>
                                </template>
                            </HintPanel>
                            <HintPanel>
                                <template #header>5-2</template>
                                <template #content>
                                    <p>各部屋と対応する5文字の単語は以下のようになります。（各部屋に書かれたルーン文字はWikipediaに掲載されているルーン文字の順に単語が辞書順に並ぶように設定されていました）
                                    </p>
                                    <v-simple-table fixed-header height="400px">
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th>ルーン文字</th>
                                                    <th>対応する単語</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="rune">f</td>
                                                    <td>うろぼろす</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">u</td>
                                                    <td>えくすとら</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">x</td>
                                                    <td>えとせとら</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">a</td>
                                                    <td>おこりんぼ</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">r</td>
                                                    <td>かたたたき</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">k</td>
                                                    <td>くろすぼう</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">g</td>
                                                    <td>こじんせん</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">w</td>
                                                    <td>こんばいん</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">h</td>
                                                    <td>さくらえび</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">n</td>
                                                    <td>さくらんぼ</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">i</td>
                                                    <td>さんかんび</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">j</td>
                                                    <td>しんきろう</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">y</td>
                                                    <td>しんきろく</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">p</td>
                                                    <td>じこかんり</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">z</td>
                                                    <td>せんたくし</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">s</td>
                                                    <td>たいこばん</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">t</td>
                                                    <td>たうえうた</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">b</td>
                                                    <td>たからばこ</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">e</td>
                                                    <td>たんきかん</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">m</td>
                                                    <td>たんばりん</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">l</td>
                                                    <td>とらんくす</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">q</td>
                                                    <td>ばいおりん</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">o</td>
                                                    <td>らしんばん</td>
                                                </tr>
                                                <tr>
                                                    <td class="rune">d</td>
                                                    <td>りんじびん</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </template>
                            </HintPanel>
                            <HintPanel class="mt-4">
                                <template #header>6-1</template>
                                <template #content>
                                    <p>全ての部屋と単語の対応が分かったら、正しい扉を通って「うろぼろすの間」に向かいましょう。正しい扉は「ひとつだけ」あるようです。この「ひとつだけ」は3つの扉の内1つが正しいという意味だけでなく、別の意味も込められています。
                                    </p>
                                </template>
                            </HintPanel>
                            <HintPanel>
                                <template #header>6-2</template>
                                <template #content>
                                    <p>
                                        それぞれの部屋にある3つの扉のうち、ひとつだけが「繋がっている部屋から『ひとつだけ』文字を拾っている」はずです。例えば、入り口からすぐの部屋（
                                        <span
                                            class="rune">g</span>のかかれた部屋）は「こじんせん」が対応していますが、HINTAは「こ」HINTBは「じん」HINTCは「せん」を表しています。この中で「文字をひとつだけ拾っている」のはHINTAなので、最初の正しい扉は「HINTAの扉」になるようです。そして、HINTAの扉は「こ」を拾っています。正しい扉を選び続けると、うろぼろすの間に来るまでに全ての部屋でひらがなを1文字ずつ拾っていくはずです。
                                    </p>
                                </template>
                            </HintPanel>
                            <HintPanel>
                                <template #header>6-3</template>
                                <template #content>
                                    <p>最終的にはA→A→B→C→C→A→C→Cの順に扉を選び「こ」「た」「え」「ら」「び」「り」「ん」「す」と拾っていきます。つまり答えは「らびりんす」となり、うろぼろすの間で「らびりんす」と入力するとクリアとなります。
                                    </p>
                                </template>
                            </HintPanel>
                        </v-expansion-panels>
                    </v-expand-transition>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black" text @click="showDialog = false">閉じる</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"

import HintPanel from "./HintPanel.vue"

export default defineComponent({
    components: {
        HintPanel
    },
    setup() {
        // ======== ダイアログ ========
        const showDialog = ref(false)
        return {
            showDialog,
        }
    }
})

</script>


<style scoped>
.back-btn-sm {
    position: fixed;
    right: 6px;
    top: 10px;
    touch-action: manipulation;
}

.rune {
    font-family: "GL-Runen" !important;
    line-height: 200% !important;
    font-size: 200% !important;
}

.strong {
    font-weight: 800;
    line-height: 200% !important;
    font-size: 150% !important;
}

.normal {
    font-weight: 400;
    line-height: 200% !important;
    font-size: 150% !important;
}

.hint-wrap {
    display: table;
}
</style>