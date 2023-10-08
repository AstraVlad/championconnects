export const checkIfSportsIsActive = (sport: string, sportsParam: string | null) => {
    if (!sportsParam) {
        return false;
    }
    const sportsArray = sportsParam.split('|');
    return sportsArray.includes(sport);
};
