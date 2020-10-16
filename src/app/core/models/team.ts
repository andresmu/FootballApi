interface ITeam {
    team_id: number;
    name: string;
    code: string;
    logo: string;
    country: string;
    is_national: boolean;
    founded: number;
    venue_name: string;
    venue_surface: string;
    venue_address: string;
    venue_city: string;
    venue_capacity: number;
    season?: number;
}

export class Team implements ITeam {
    team_id: number;
    name: string;
    code: string;
    logo: string;
    country: string;
    is_national: boolean;
    founded: number;
    venue_name: string;
    venue_surface: string;
    venue_address: string;
    venue_city: string;
    venue_capacity: number;
    season?: number;
}