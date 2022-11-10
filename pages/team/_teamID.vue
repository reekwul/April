<template>
    <div class="wrapper">
        <div class="content">
            <h1 class="content__head-name">
                Матчи команды {{ team.name }}
            </h1>
            <MatchesTable>
                <NuxtLink style="text-decoration: none; color: inherit;"
                          to="#"
                          v-for="(match,index) in  filteredItems"
                          :key="match['match_id']"
                >
                    <MatchesItem
                        v-if="match.radiant"
                        :index="index"
                        :flags="{
                            flag2N:index%2===0,
                            lastItem:index===pageItem
                        }"
                        :teams="[
                            {
                                ...team
                            },
                            {
                                team_id:match['opposing_team_id'],
                                name:match['opposing_team_name'],
                                logo_url:match['opposing_team_logo']
                            }
                        ]"
                        :duration="match.duration"
                        :match-id="match['match_id']"
                    />
                    <MatchesItem
                        v-else
                        :index="index"
                        :flags="{
                            flag2N:index%2===0,
                            lastItem:index===pageItem
                        }"
                        :teams="[
                            {
                                team_id:match['opposing_team_id'],
                                name:match['opposing_team_name'],
                                logo_url:match['opposing_team_logo']
                            },
                            {
                                ...team
                            }
                        ]"
                        :duration="match.duration"
                        :match-id="match['match_id']"
                    />
                </NuxtLink>
            </MatchesTable>
            <div class="content__btn">
                <UIBtn @click="addPage"
                       v-if="BtnVisibility"
                > Загрузить еще
                </UIBtn>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import UIBtn from "@/components/UI/UIBtn";
import {IMatch} from '~/types/MatchesState'
import {ITeam} from "~/types/CommandState";

interface IStore {
    arrayMatches: IMatch[],
    team: ITeam
}

interface IData extends IStore {
    pageItem: number,
}

export default Vue.extend({
    name: "_teamID",
    components: {UIBtn},
    async asyncData({params, store}: any): Promise<IStore> {
        await store.dispatch('Matches/addMatchesOfAPI', params['teamID'])
        const arrayMatches = store.getters['Matches/getArrayMatches']
        const team = (await axios.get('https://api.opendota.com/api/teams/' + params['teamID'])).data

        return {arrayMatches, team}
    },
    data(): IData {
        return {
            arrayMatches: [],
            pageItem: 10,
            team: {
                team_id: 0,
                rating: 0,
                wins: 0,
                losses: 0,
                last_match_time: 0,
                name: '',
                tag: ''
            },
        }
    },
    methods: {
        addPage() {
            this.pageItem += 10
        },
    },
    computed: {
        filteredItems(): IMatch[] {
            return this.arrayMatches.slice(0, this.pageItem)
        },
        BtnVisibility(): boolean {
            return this.pageItem < this.arrayMatches.length
        }
    },
})
</script>

<style scoped>
</style>
