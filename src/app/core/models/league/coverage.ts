import { Fixture } from "./fixture";

interface ICoverage {
    standings: boolean;
    fixtures: Fixture;
    players: boolean;
    topScorers: string;
    predictions: string;
    odds: number;
}

export class Coverage implements ICoverage {
    standings: boolean;
    fixtures: Fixture;
    players: boolean;
    topScorers: string;
    predictions: string;
    odds: number;
}