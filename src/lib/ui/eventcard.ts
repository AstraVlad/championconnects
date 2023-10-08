export type EventCardProps = {
    sport: string;
    name: string;
    about: string;
    place: string | null;
    date: Date | null;
    oranizer: string | null;
};

export function makeProps(sport: string, name: string, about: string, place = null, date = null, oranizer = null, other = {}) {
    return {
        sport, name, about, place, date, oranizer, ...other
    }
}
