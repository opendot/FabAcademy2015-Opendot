var tasks = {
	"data":[
        {id:1, text:"Project #2", start_date:"10-05-2015", duration:18, 
    progress:0.4, open: true, workers: "Daniele", description: "Add here a long description"},
        {id:2, text:"Task #1",    start_date:"15-05-2015", duration:8, 
    progress:0.6, parent:1, workers: "Simone", description: "Add here a long description"},
        {id:3, text:"Task #2",    start_date:"21-05-2015", duration:8, 
    progress:0.6, parent:1, workers: "Enrico", description: "Add here a long description"}
    ],
    links:[
        { id:1, source:1, target:2, type:"1"},
        { id:2, source:2, target:3, type:"0"},
        { id:3, source:3, target:4, type:"0"},
        { id:4, source:2, target:5, type:"2"},
  ]
}