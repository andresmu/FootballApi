import { Coverage } from "./coverage";
interface ILeague {
    league_id: number;
    name: string;
    type: string;
    country: string;
    country_code: string;
    season: number;
    season_start: string;
    season_end: string;
    logo: string;
    flag: string;
    standings: string;
    is_current: number;
    coverage: Coverage;
}

export class League implements ILeague {
    league_id: number;
    name: string;
    type: string;
    country: string;
    country_code: string;
    season: number;
    season_start: string;
    season_end: string;
    logo: string;
    flag: string;
    standings: string;
    is_current: number;
    coverage: Coverage;
}