
const notes = require('./notes.js')

const yargs = require('yargs')
const chalk = require('chalk')

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder : {
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'About body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addnotes(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'RemoveNote',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removenote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe:'List of notes',
    handler(){
        notes.ListNote()
    }
})
yargs.command({
    command:'read',
    describe:'Read the notes',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string"
        }

    },
    handler(argv){
        notes.readNote(argv.title)
    }
    
})

yargs.parse()

