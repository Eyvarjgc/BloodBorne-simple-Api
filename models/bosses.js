import {getJson} from '../modules/utils.js'
const bosses = getJson('../data/data.json')

export class BossesModel{
	static async getAll(location,drops){
		if(location){
			const locationFound =  bosses.filter((data)=> {
					const locationUpper = data.location.toLocaleLowerCase() == location.toLocaleLowerCase()

					return locationUpper

			})
			return locationFound
		}

		if(drops){
			const findDrop =  bosses.filter((data)=> {
				const dropsData = data.drops
				const lowerCase = dropsData.map(e => {
					return e.toLowerCase()
				})
				const filterDrops = lowerCase.includes(drops.toLocaleLowerCase())

				return filterDrops
			})
			return findDrop
		}


		return bosses || location || drops 
	}

	static async getById(id){
        const findIndex = bosses.find((data) => data.id == Number(id))
        
        if(!id) return false

        return findIndex

	}


}