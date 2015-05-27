 
var tasks = {
	"data":[
	
	
	
		{"id":1, "text":"To fly", "start_date":"19-05-2015", "duration":"13", "progress": 0, "open": true,color: "#366184"},
		
		{"id":2, "text":"Physical", "start_date":"19-05-2015", "duration":"8", "parent":"1", "progress":0, "open": true},
		{"id":21, "text":"Frame", "start_date":"19-05-2015", "duration":"5", "parent":"2", "progress":0, "open": true, color: "#FACD11", textColor:"black"},
		{"id":22, "text":"Supports", "start_date":"23-05-2015", "duration":"4", "parent":"2", "progress":0, "open": true, color: "#e85151", textColor:"black"},
		
		{"id":3, "text":"Electronics", "start_date":"19-05-2015", "duration":"8", "parent":"1", "progress":0, "open": true},
		{"id":31, "text":"Flight controller", "start_date":"19-05-2015", "duration":"6", "parent":"3", "progress":0, "open": true,color:"#e85151", textColor:"black"},
		{"id":32, "text":"Distribution board", "start_date":"23-05-2015", "duration":"4", "parent":"3", "progress":0, "open": true,color:"#FACD11", textColor:"black"},
		
		
		{"id":4, "text":"Configuration", "start_date":"23-05-2015", "duration":"9", "parent":"1", "progress":0, "open": true},
		{"id":41, "text":"Assembly", "start_date":"23-05-2015", "duration":"3", "parent":"4", "progress":0, "open": true, color:"#FACD11", textColor:"black"},
		{"id":42, "text":"ECSs configuration", "start_date":"25-05-2015", "duration":"3", "parent":"4", "progress":0, "open": true, color:"#FACD11", textColor:"black"},
		{"id":43, "text":"MultiWii Configuration", "start_date":"26-05-2015", "duration":"6", "parent":"4", "progress":0, "open": true, color:"#e85151", textColor:"black"},
		
		{"id":5, "text":"Fly tests", "start_date":"25-05-2015", "duration":"7", "parent":"1", "progress":0, "open": true},
		
		
		
		{"id":6, "text":"Obstacle avoidance", "start_date":"31-05-2015", "duration":"11", "progress": 0,color: "#366184", "open": true},
		
		{"id":7, "text":"Physical", "start_date":"31-05-2015", "duration":"6", "parent":"6", "progress":0, "open": true},
		{"id":71, "text":"Frame adjustments", "start_date":"31-05-2015", "duration":"6", "parent":"7", "progress":0, "open": true},
		{"id":72, "text":"Sensors supports", "start_date":"31-05-2015", "duration":"4", "parent":"7", "progress":0, "open": true, color:"#FACD11", textColor:"black"},
		{"id":73, "text":"Smartphone embedding", "start_date":"2-06-2015", "duration":"4", "parent":"7", "progress":0, "open": true, color:"#e85151", textColor:"black"},
		
		
		{"id":8, "text":"Electronics", "start_date":"31-05-2015", "duration":"6", "parent":"6", "progress":0, "open": true},
		{"id":81, "text":"Sensors & Actuators Board", "start_date":"31-05-2015", "duration":"4", "parent":"8", "progress":0 , "open": true, color:"#FACD11", textColor:"black"},
		{"id":82, "text":"Connections", "start_date":"2-06-2015", "duration":"4", "parent":"8", "progress":0, "open": true, color:"#e85151", textColor:"black"},
		{"id":83, "text":"Distribution board adjuments", "start_date":"02-06-2015", "duration":"4", "parent":"8", "progress":0, "open": true, color:"#e85151", textColor:"black"},
		
		
		
		{"id":9, "text":"Configuration", "start_date":"05-06-2015", "duration":"6", "parent":"6", "progress":0, "open": true},
		{"id":91, "text":"Sensors test & configuration", "start_date":"05-06-2015", "duration":"6", "parent":"9", "progress":0, "open": true, color:"#e85151", textColor:"black"},
		{"id":92, "text":"MultiWii configuration", "start_date":"05-06-2015", "duration":"6", "parent":"9", "progress":0, "open": true, color:"#FACD11", textColor:"black"},
		
		{"id":10, "text":"Software", "start_date":"6-06-2015", "duration":"5", "parent":"6", "progress":0, "open": true},
		{"id":101, "text":"Programming S.&A. board", "start_date":"6-06-2015", "duration":"3", "parent":"10", "progress":0, "open": true, color:"#FACD11", textColor:"black"},
		{"id":102, "text":"Obstacle avoidance", "start_date":"8-06-2015", "duration":"3", "parent":"10", "progress":0, "open": true, color:"#e85151", textColor:"black"},
		{"id":103, "text":"API and data Storage", "start_date":"6-06-2015", "duration":"3", "parent":"10", "progress":0, "open": true, color:"#e85151", textColor:"black"},
		{"id":104, "text":"Data visualization", "start_date":"8-06-2015", "duration":"3", "parent":"10", "progress":0, "open": true, color:"#FACD11", textColor:"black"},
		
		
		{"id":11, "text":"Avoidance tests", "start_date":"6-06-2015", "duration":"5", "parent":"6", "progress":0, "open": true},
		
		
		
		{"id":12, "text":"Cooperation", "start_date":"10-06-2015", "duration":"15", "progress":0, "open": true, color: "#366184"},
		
		{"id":13, "text":"Physical", "start_date":"10-06-2015", "duration":"8", "parent":"12", "progress":0, "open": true},
		{"id":131, "text":"Cooperation frame", "start_date":"10-06-2015", "duration":"8", "parent":"13", "progress":0, "open": true, color:"#FACD11", textColor:"black"},
		{"id":132, "text":"Cooperation supports", "start_date":"10-06-2015", "duration":"8", "parent":"13", "progress":0, "open": true, color:"#e85151", textColor:"black"},
		
		
		{"id":14, "text":"Electronics", "start_date":"10-06-2015", "duration":"8", "parent":"12", "progress":0, "open": true},
		
		{"id":15, "text":"Configuration", "start_date":"15-06-2015", "duration":"10", "parent":"12", "progress":0, "open": true},
		{"id":151, "text":"Sensors test and configuration", "start_date":"15-06-2015", "duration":"6", "parent":"15", "progress":0, "open": true, color:"#FACD11", textColor:"black"},
		{"id":152, "text":"MultiWii configuration", "start_date":"19-06-2015", "duration":"6", "parent":"15", "progress":0, "open": true, color:"#e85151", textColor:"black"},
		
		{"id":16, "text":"Software", "start_date":"16-06-2015", "duration":"9", "parent":"12", "progress":0, "open": true},
		{"id":161, "text":"Programming S.&A. board", "start_date":"16-06-2015", "duration":"5", "parent":"16", "progress":0, "open": true, color:"#FACD11", textColor:"black"},
		{"id":162, "text":"Cooperation", "start_date":"20-06-2015", "duration":"5", "parent":"16", "progress":0, "open": true, color:"#e85151", textColor:"black"},
		
		
		{"id":17, "text":"Cooperation tests", "start_date":"16-06-2015", "duration":"9", "parent":"12", "progress":0, "open": true},
		
		//#e85151
//		{"id":1, "text":"Project #2", "start_date":"01-04-2013", "duration":"18", "progress": 0.4, "open": true},
//		{"id":2, "text":"Task #1", "start_date":"02-04-2013", "duration":"8", "parent":"1", "progress":0.5, "open": true},
//		{"id":3, "text":"Task #2", "start_date":"11-04-2013", "duration":"8", "parent":"1", "progress": 0.6, "open": true},
//		{"id":4, "text":"Task #3", "start_date":"13-04-2013", "duration":"6", "parent":"1", "progress": 0.5, "open": true},
//		{"id":5, "text":"Task #1.1", "start_date":"02-04-2013", "duration":"7", "parent":"2", "progress": 0.6, "open": true},
//		{"id":6, "text":"Task #1.2", "start_date":"03-04-2013", "duration":"7", "parent":"2", "progress": 0.6, "open": true},
//		{"id":7, "text":"Task #2.1", "start_date":"11-04-2013", "duration":"8", "parent":"3", "progress": 0.6, "open": true},
//		{"id":8, "text":"Task #3.1", "start_date":"14-04-2013", "duration":"5", "parent":"4", "progress": 0.5, "open": true},
//		{"id":9, "text":"Task #3.2", "start_date":"14-04-2013", "duration":"4", "parent":"4", "progress": 0.5, "open": true},
//		{"id":10, "text":"Task #3.3", "start_date":"14-04-2013", "duration":"3", "parent":"4", "progress": 0.5, "open": true},
//		

	],
	"links":[
		{"id":"1","source":"1","target":"2","type":"1"},
		{"id":"2","source":"1","target":"3","type":"1"},
		{"id":"3","source":"1","target":"4","type":"1"},
		{"id":"4","source":"1","target":"5","type":"1"},
		{"id":"5","source":"1","target":"6","type":"0"},
		
		{"id":"6","source":"6","target":"7","type":"1"},
		{"id":"7","source":"6","target":"8","type":"1"},
		{"id":"8","source":"6","target":"9","type":"1"},
		{"id":"9","source":"6","target":"10","type":"1"},,
		{"id":"11","source":"6","target":"11","type":"1"},
		{"id":"12","source":"6","target":"12","type":"0"},
		
		{"id":"13","source":"12","target":"13","type":"1"},
		{"id":"14","source":"12","target":"14","type":"1"},
		{"id":"15","source":"12","target":"15","type":"1"},
		{"id":"16","source":"12","target":"16","type":"1"},
		{"id":"17","source":"12","target":"17","type":"1"},
		
		
	//	{"id":"12","source":"11","target":"13","type":"1"},
	//	{"id":"13","source":"11","target":"14","type":"1"},
	//	{"id":"14","source":"11","target":"15","type":"1"},
		
		
//		{"id":"5","source":"2","target":"6","type":"2"},
//		{"id":"6","source":"3","target":"7","type":"2"},
//		{"id":"7","source":"4","target":"8","type":"2"},
//		{"id":"8","source":"4","target":"9","type":"2"},
//		{"id":"9","source":"4","target":"10","type":"2"},
	]
};