export interface ICommands {
    commands: ITeam[],
    maxRating: number,
    maxWins: number,
    maxLosses: number
}

export interface ITeam {
    team_id: number,
    rating: number,
    wins: number,
    losses: number,
    last_match_time: number,
    name: string,
    tag: string
}
