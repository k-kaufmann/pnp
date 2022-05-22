export default interface Character {
    name: string,
    player: string,
    job: string,
    birth: string,
    age: string,
    gender: string,
    city: string,
    birthcity: string,
    attributes: {
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