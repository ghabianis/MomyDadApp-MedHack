
import { addAppConfigSeedData } from "./data/AppConfig/AppConfig-ts"
import { addUserSeedData } from "./data/User/User-ts"

export const pushSeed = async() => {
    await addAppConfigSeedData()
	await addUserSeedData()

}
pushSeed()
        