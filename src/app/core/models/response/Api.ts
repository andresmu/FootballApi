import { Results } from "./Results";

export class Api<T> {
    api: any;
    results: Results;
    response: T[];
}