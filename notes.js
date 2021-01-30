const { default: chalk } = require('chalk')
const fs= require('fs')

const { title } = require('process')
const getNotes  = () => {
    return "Your notes.........."
}


const loadnotes  = () => {
    try{
        const databuffer  = fs.readFileSync('notes.json')
        const data = databuffer.toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}

const addnotes = (title,body) => {
    const notes = loadnotes()

    const duplicatenote = notes.filter((note) => note.title === title )

    debugger
        


    if(duplicatenote.length ===0){
        notes.push({
            title:title,
            body:body
    
        })

        console.log(chalk.green.inverse("new note added"))

    }
    else{
        console.log(chalk.red.inverse("Name already taken !"))
    }

    

    savenotes(notes)
}

const removenote = (title) => {
    const notes = loadnotes()

    const removenoted = notes.filter((note) =>  note.title !== title)
       


    if(notes.length > removenoted.length){
        console.log(chalk.green.inverse('Removed'))
        savenotes(removenoted)
    }
    else{
        console.log(chalk.red.inverse('Not removed'))
    }

    

}

const savenotes = (notes) => {
    const datajson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',datajson)
}

const ListNote = () => {
    const notes = loadnotes()

    console.log(chalk.inverse("Notes are given below "))

    notes.forEach((note) => {
        console.log(note.title)


    })
}

const readNote = (title) => {
    const notes=loadnotes()

    const note = notes.find((note) => note.title ===title)

    if(note){
        console.log(chalk.green.inverse(note.title))
        console.log(chalk.inverse(note.body))
    }
    else{
        console.log(chalk.red.inverse("Note not found"))
    }

}

module.exports  ={
    getNotes:getNotes,
    addnotes:addnotes,
    removenote:removenote,
    ListNote:ListNote,
    readNote:readNote
}