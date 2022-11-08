import axios from "axios";

import {IMatches,IMatch} from "~/types/MatchesState";

export default {
  state:():IMatches=>({
    matches: [],
  }),
  getters:{
    getArrayMatches(state:IMatches) {
      return state.matches
    },
  },
  actions:{
    async addMatchesOfAPI({commit}:any, teamID:number){
      try {
        const arrayCommand =( await axios.get(`https://api.opendota.com/api/teams/${teamID}/matches`)).data
        commit('addMatchesOfAPI',arrayCommand)
      }catch (e){
        console.log(e)
      }
    }
  },
  mutations:{
    addMatchesOfAPI(state:IMatches,res:IMatch[]){
      state.matches = res
    },
  }
}
