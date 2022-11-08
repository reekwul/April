import axios from "axios";

import {ICommands,ITeam} from "~/types/CommandState";

export default {
  state:():ICommands=>({
    commands: [] ,
    maxRating:0,
    maxWins:0,
    maxLosses:0,
  }),
  getters:{
    getArrayCommands(state:ICommands):ITeam[] {
      return state.commands
    },
    getRaring(state:ICommands):number{
      return state.maxRating
    },
    getWins(state:ICommands):number{
      return state.maxWins
    },
    getLosses(state:ICommands):number{
      return state.maxLosses
    },
  },
  mutations:{
    addCommandsOfAPI(state:ICommands,res:ITeam[]):void{
      state.commands = res
    },
    addRating(state:ICommands,value:number):void{
      state.maxRating = value
    },
    addWins(state:ICommands,value:number):void{
      state.maxWins  = value
    },
    addLosses(state:ICommands,value:number):void{
      state.maxLosses = value
    },
  },
  actions:{
    async addCommandsOfAPI({commit}:any){
      try {
        const arrayCommand = (await axios.get("https://api.opendota.com/api/teams")).data
        const maxRating = Math.max(...arrayCommand.map(
          (el:ITeam)=>el.rating)
        )
        const maxWins =Math.max(...arrayCommand.map(
          (el:ITeam)=>el.wins)
        )
        const maxLosses =Math.max(...arrayCommand.map(
          (el:ITeam)=>el.losses)
        )

        commit('addRating',maxRating)
        commit('addWins',maxWins)
        commit('addLosses',maxLosses)

        commit('addCommandsOfAPI',arrayCommand)
      }catch (e){
        console.log(e)
      }
    }
  }
}
