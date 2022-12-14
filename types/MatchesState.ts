export interface IMatches {
    matches: IMatch[]
}

export interface IMatch {
    match_id: number,
    duration: number,
    start_time: number,
    radiant_team_id: number,
    radiant_name: string,
    dire_team_id: number,
    dire_name: string,
    leagueid: number,
    league_name: string,
    series_id: number,
    series_type: number,
    radiant_score: number,
    dire_score: number,
    radiant_win: boolean,
    radiant: boolean
}
