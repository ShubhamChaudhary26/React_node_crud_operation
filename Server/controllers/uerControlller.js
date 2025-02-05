import User from '../models/userModel.js'

export const create = async (req, res) => {

    try {
        const userData = new User(req.body)
        console.log(userData);

        if (!userData) {
            return res.status(404).json({ error: 'USer Not Found' })
        }

        const savedData = userData.save()
        console.log(savedData);
        
        res.status(200).json({msg:"Save Kar Diya MC Ko "})
        
    } catch (error) {
        res.status(500).json({ error: 'Internal error ' })
    }
}

export const getAll = async (req, res) => {

    try {
        const userData = await User.find()
        if (!userData) {
            return res.status(404).json({ massage: "user data not Found" })
        }
        res.status(200).json(userData)
    }
    catch (error) {
        res.status(500).json({ error: 'Internal error ' })
    }

}

export const getone = async (req, res) => {

    try {
        const id = req.params.id
        const userExists = await User.findById(id)
        if (!userExists) {
            return res.status(404).json({ msg: 'id Not Found' })
        }
        res.status(200).json(userExists)
    } catch (error) {
        res.status(500).json({ error: 'Internal error ' })

    }
}

export const update = async(req, res) => {

    try {
        const id = req.params.id
        const userexits = await User.findById(id)
        if(!userexits){
            return res.status(401).json({msg: 'user Not Found'})
        }
        
        const Updatedata = await User.findByIdAndUpdate(id, req.body , {new:true})
        res.status(200).json({msg:"Update Kar Diya Lode Tera Data"})

    } catch (error) {
        res.status(500).json({ error: 'Internal error ' })
    }

} 

export const deletedata = async(req,res)=>{

    try{
        const id = req.params.id
        const userexits = await User.findById(id) 

        if(!userexits){
            return res.status(404).json({error:"user ID not Found"})
        }

        const userdelete = await User.findByIdAndDelete(id)
        res.status(200).json({masg:'Delete Kar Diya Mc Ko'})


    }catch(error){
        res.status(500).json({ error: 'Internal error ' })

    }

} 