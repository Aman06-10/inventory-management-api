import fs from "fs/promises"

export async function getAllItems(req, res) {
    try {
        const data = await fs.readFile('database.json', 'utf-8')
        const parsedData = JSON.parse(data)
        res.status(200).json(parsedData)
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export async function getItemById(req, res) {
    try {
        const data = await fs.readFile('database.json', 'utf-8')
        const parsedData = JSON.parse(data)
        for (const element of parsedData) {
            if (element.id == Number(req.params.id)) {
                return res.status(200).json(element)
            }
        }
        res.status(404).json({ "message": "Item not found" })
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export async function addItem(req, res) {
    try {
        const data = await fs.readFile('database.json', 'utf-8')
        const parsedData = JSON.parse(data)
        let isPresent = 0;
        const GivenData = req.body
        if (GivenData.hasOwnProperty("id") && GivenData.hasOwnProperty("name") && GivenData.hasOwnProperty("quantity") && GivenData.hasOwnProperty("category") && GivenData.hasOwnProperty("price")) {
            isPresent = 1;
        }
        else {
            return res.status(400).json({ "message": "Data incomplete" })

        }
        for (const element of parsedData) {
            if (element.id === GivenData.id) {
                isPresent = 0;
                break;
            }
        }
        if (isPresent === 1) {
            parsedData.push(GivenData)
            const newData = JSON.stringify(parsedData, null, 2);
            await fs.writeFile('database.json', newData)
            res.status(201).json({
                "message": "Item added successfully"
            })
        }
        else {
            res.status(400).json({ "message": "Item with the given id already exists" })
        }

    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export async function updateItem(req, res) {
    try {
        const data = await fs.readFile('database.json', 'utf-8')
        const parsedData = JSON.parse(data)
        let count = 0;
        if(req.params.id != req.body.id){
            return res.status(400).json({"message":"Given endpoint and info id mismatch"})
        }
        for (const element of parsedData) {
            if (element.id == Number(req.params.id) && element.id == req.body.id) {
                parsedData[count] = req.body
                const newData = JSON.stringify(parsedData, null, 2)
                await fs.writeFile('database.json', newData)
                return res.status(200).json({ "message": "Item replaced successfully" })
            }
            count++;
        }
        res.status(404).json({ "message": "Item not found" })
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export async function updatePartialData(req, res) {
    try {
        const data = await fs.readFile('database.json', 'utf-8')
        const parsedData = JSON.parse(data)
        let count = 0;
        for (const element of parsedData) {
            if (element.id == Number(req.params.id)) {
                for (const key in element) {
                    if (key === Object.keys(req.body)[0]) {
                        parsedData[count][key] = req.body[key]
                        const newData = JSON.stringify(parsedData, null, 2)
                        await fs.writeFile('database.json', newData)
                        return res.status(200).json({ "message": "Item info updated successfully" })
                    }
                }
                return res.status(400).json({ "message": "Invalid info Given" })
            }
            count++;
        }
        res.status(404).json({ "message": "Item not found" })
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
export async function deleteItem(req, res) {
    try {
        const data = await fs.readFile('database.json', 'utf-8')
        const parsedData = JSON.parse(data)
        let count = 0;
        for (const element of parsedData) {
            if (element.id === Number(req.params.id)) {
                parsedData.splice(count, 1)
                const newData = JSON.stringify(parsedData, null, 2)
                await fs.writeFile('database.json', newData)
                return res.status(200).json({ "message": "Item deleted" })
            }
            count++;
        }
        res.status(404).json({ "message": "Item not found" })
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}