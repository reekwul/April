<template>
    <div class="wrapper">
        <div class="content">
            <h1 class="content__head-name">
                Список команд
            </h1>
            <div class="content__manager">
                <CheckboxUI @change="Change"/>
                <SearchUI class="search-box_right" @searching="search"/>
            </div>
            <CommandTable
                v-if="flag"
            >
                <nuxt-link
                    style="text-decoration: none; color: inherit;"
                    v-for="(command,index) in filteredItems.arr"
                    :to="`/team/${command['team_id']}`"
                    :key="command['team_id']"
                >
                    <CommandItem
                        :item="command"
                        :flag="index%2===0"
                        :maxParams="{
                            rating:maxRating,
                            wins:maxWins,
                            losses:maxLosses
                        }"
                        :index="index"
                    />
                </nuxt-link>
            </CommandTable>
            <div class="tile-table"
                 v-else>
                <nuxt-link
                    style="display: inline-block; text-decoration: none; color: inherit;"
                    v-for="(command,index) in filteredItems.arr"
                    :to="`/team/${command['team_id']}`"
                    :key="command['team_id']"
                >
                    <CommandTile
                        :item="command"
                        :maxParams="{
                            rating:maxRating,
                            wins:maxWins,
                            losses:maxLosses
                        }"
                        :index="index"
                    />
                </nuxt-link>
            </div>
            <div class="content__btn">
                <UIBtn
                    v-if="BtnVisibility"
                    @click="addPage"> Загрузить еще
                </UIBtn>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UIProgressbar from "@/components/UI/UIProgressbar";
import UIBtn from "@/components/UI/UIBtn";
import {ITeam} from "~/types/CommandState";
import SearchUI from "~/components/UI/SearchUI.vue";
import CheckboxUI from "~/components/UI/CheckboxUI.vue";

interface IStore {
    arrayCommand: ITeam[],
    maxRating: number,
    maxWins: number,
    maxLosses: number
}

interface IDate extends IStore {
    pageItem: number,
    regExp: string,
    flag: boolean
}

interface IFilter {
    arr: ITeam[],
    maxLength: number
}

export default Vue.extend({
    name: 'IndexPage',
    components: {CheckboxUI, SearchUI, UIBtn, UIProgressbar},
    async asyncData({store}: any): Promise<IStore> {
        await store.dispatch('Commands/addCommandsOfAPI')
        const arrayCommand = store.getters["Commands/getArrayCommands"]
        const maxRating = store.getters["Commands/getRaring"]
        const maxWins = store.getters["Commands/getWins"]
        const maxLosses = store.getters["Commands/getLosses"]

        return {arrayCommand, maxRating, maxWins, maxLosses}
    },
    methods: {
        Change(value: boolean): void {
            this.flag = value
        },
        addPage(): void {
            this.pageItem += 9
        },
        search: function (test: string): void {
            this.regExp = test.toLowerCase()
        },
    },
    data(): IDate {
        return {
            arrayCommand: [],
            pageItem: 9,

            maxRating: 100,
            maxWins: 100,
            maxLosses: 100,
            regExp: '',
            flag: false
        }
    },
    computed: {
        filteredItems(): IFilter {
            let rez = this.arrayCommand
            if (this.regExp !== '') {
                rez = rez.filter((el: ITeam) => {
                    if (el.name.toLowerCase().search(this.regExp) !== -1) return el
                })
            }
            return {
                arr: rez.slice(0, this.pageItem),
                maxLength: rez.length
            }
        },
        BtnVisibility(): boolean {
            return this.pageItem < this.filteredItems.maxLength
        }
    }
})
</script>
<style scoped>

</style>
