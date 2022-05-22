export default interface Character {
    [key: string]: any,
    name: string,
    player: string,
    job: string,
    birth: string,
    age: string,
    gender: string,
    city: string,
    birthcity: string,
    attributes: {
        [key: string]: string,
        strength: string,
        dexterity: string,
        constitution: string,
        intelligence: string,
        education: string,
        charisma: string,
        height: string,
        appearance: string,
        mana: string
    },
    lifepoints: string,
    manapoints: string,
    luck: string,
    stabilitypoints: string
}